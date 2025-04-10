import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    if (!data.corteId || !data.operadorId || !data.peso) {
      return NextResponse.json({ error: "Dados incompletos. Todos os campos são obrigatórios." }, { status: 400 })
    }

    if (data.tipoPesagem !== "inicial" && data.tipoPesagem !== "final") {
      return NextResponse.json({ error: "Tipo de pesagem inválido. Use 'inicial' ou 'final'." }, { status: 400 })
    }

    const peso = Number(data.peso)
    if (isNaN(peso) || peso <= 0) {
      return NextResponse.json({ error: "Peso inválido. Deve ser um número positivo." }, { status: 400 })
    }

    const novaPesagem = await prisma.pesagem.create({
      data: {
        tipoPesagem: data.tipoPesagem,
        corteId: data.corteId,
        operadorId: data.operadorId,
        peso: peso
      },
    })

    return NextResponse.json(novaPesagem, { status: 201 })
  } catch (error: any) {
    console.error("Erro ao processar requisição:", error)

    if (error.code) {
      switch (error.code) {
        case "P2002":
          return NextResponse.json({ error: "Registro duplicado encontrado." }, { status: 409 })
        case "P2003":
          return NextResponse.json(
            { error: "Referência inválida. Verifique se o corteId e operadorId existem." },
            { status: 400 },
          )
        case "P2025":
          return NextResponse.json({ error: "Registro não encontrado." }, { status: 404 })
      }
    }

    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}

export async function GET(request: NextRequest) {
  try {
    // Obter parâmetros de consulta
    const url = new URL(request.url)
    const corteId = url.searchParams.get("corteId")
    const operadorId = url.searchParams.get("operadorId")

    // Construir filtro baseado nos parâmetros
    const where: any = {}
    if (corteId) where.corteId = corteId
    if (operadorId) where.operadorId = operadorId

    // Buscar pesagens no banco de dados usando Prisma
    const pesagens = await prisma.pesagem.findMany({
      where,
      orderBy: {
        id: "desc",
      },
      include: {
        corte: {
          select: {
            nome: true,
          },
        },
      },
    })

    // Retornar lista de pesagens
    return NextResponse.json(pesagens)
  } catch (error) {
    console.error("Erro ao buscar pesagens:", error)
    return NextResponse.json({ error: "Erro ao buscar pesagens" }, { status: 500 })
  } finally {
    // Desconectar o cliente Prisma para evitar conexões pendentes
    await prisma.$disconnect()
  }
}

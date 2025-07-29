import { prisma } from "@/lib/prisma"
import { NextResponse, NextRequest } from "next/server"

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)

    const dataInicial = searchParams.get("dataInicial")
    const dataFinal = searchParams.get("dataFinal")
    const corteId = searchParams.get("corteId")

    if (!dataInicial || !dataFinal || !corteId) {
      return NextResponse.json({ error: "Parâmetros obrigatórios faltando" }, { status: 400 })
    }

    const dataInicialDate = new Date(dataInicial + "T00:00:00Z")
    const dataFinalDate = new Date(dataFinal + "T23:59:59Z")

    const pesagens = await prisma.pesagem.groupBy({
      by: ["operadorMatricula"],
      where: {
        createdAt: {
          gte: dataInicialDate,
          lte: dataFinalDate,
        },
        corteId,
      },
      _sum: {
        peso: true,
      },
    })

    if (pesagens.length === 0) return NextResponse.json([])

    const matriculas = pesagens.map(p => p.operadorMatricula)

    const operadores = await prisma.operador.findMany({
      where: {
        matricula: {
          in: matriculas,
        },
      },
    })

    const relatorio = pesagens
      .map(p => {
        const operador = operadores.find(o => o.matricula === p.operadorMatricula)
        if (!operador) return null

        const totalKg = p._sum.peso ?? 0
        const valorTotal = totalKg * operador.valor.toNumber()

        return {
          matricula: operador.matricula,
          nome: operador.nome,
          totalKg,
          valorTotal,
        }
      })
      .filter(Boolean)
      .sort((a, b) => (b!.totalKg - a!.totalKg)) // ✅ Ordena do maior para o menor


    // Teste para ver se o filtro retorna algo
    const pesagensTeste = await prisma.pesagem.findMany({
      where: {
        corteId,
        createdAt: {
          gte: dataInicialDate,
          lte: dataFinalDate,
        },
      },
    })
    console.log("Pesagens encontradas no teste:", pesagensTeste)

    return NextResponse.json(relatorio)
  } catch (error) {
    console.error("Erro ao gerar relatório:", error)
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 })
  }
}

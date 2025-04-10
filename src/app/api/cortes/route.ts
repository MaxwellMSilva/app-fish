import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

// GET - Listar todos os cortes
export async function GET() {
  try {
    const cortes = await prisma.corte.findMany({
      orderBy: {
        id: "asc",
      },
    })

    return NextResponse.json(cortes)
  } catch (error) {
    console.error("Erro ao buscar cortes:", error)
    return NextResponse.json({ error: "Erro ao buscar cortes" }, { status: 500 })
  }
}

// POST - Criar um novo corte
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validação básica
    if (!body.nome) {
      return NextResponse.json({ error: "Nome é obrigatório" }, { status: 400 })
    }

    // Verifica se já existe operador com o mesmo nome
    const existe = await prisma.operador.findFirst({
      where: {
        nome: body.nome,
      },
    })

    if (existe) {
      return NextResponse.json({ error: "Já existe um operador com este nome" }, { status: 409 })
    }

    // Busca último ID e gera o próximo ID no formato "0001"
    const ultimo = await prisma.operador.findFirst({
      orderBy: { id: "desc" },
    })

    let proximoId = "0001"
    if (ultimo) {
      const numero = parseInt(ultimo.id, 10) + 1
      proximoId = numero.toString().padStart(4, "0")
    }

    // Criar o corte com os tipos corretos
    const corte = await prisma.corte.create({
      data: {
        id: proximoId,
        nome: body.nome,
        imagem: body.imagem || null
      },
    })

    return NextResponse.json(corte, { status: 201 })
  } catch (error) {
    console.error("Erro ao criar corte:", error)
    return NextResponse.json({ error: "Erro ao criar corte" }, { status: 500 })
  }
}

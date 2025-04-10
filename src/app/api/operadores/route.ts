import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET() {
  try {
    const operadores = await prisma.operador.findMany({
      orderBy: {
        id: "asc",
      },
    })

    return NextResponse.json(operadores)
  } catch (error) {
    console.error("Erro ao buscar operadores:", error)
    return NextResponse.json({ error: "Erro ao buscar operadores" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    if (!body.nome) {
      return NextResponse.json({ error: "Nome é obrigatório" }, { status: 400 })
    }

    const existe = await prisma.operador.findFirst({
      where: {
        nome: body.nome,
      },
    })

    if (existe) {
      return NextResponse.json({ error: "Já existe um operador com este nome" }, { status: 409 })
    }

    const ultimo = await prisma.operador.findFirst({
      orderBy: { id: "desc" },
    })

    let proximoId = "0001"
    if (ultimo) {
      const numero = parseInt(ultimo.id, 10) + 1
      proximoId = numero.toString().padStart(4, "0")
    }

    const operador = await prisma.operador.create({
      data: {
        id: proximoId,
        nome: body.nome
      },
    })

    return NextResponse.json(operador, { status: 201 })
  } catch (error) {
    console.error("Erro ao criar operador:", error)
    return NextResponse.json({ error: "Erro ao criar operador" }, { status: 500 })
  }
}

import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

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

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    if (!body.nome) {
      return NextResponse.json({ error: "Nome é obrigatório" }, { status: 400 })
    }

    const existe = await prisma.corte.findFirst({
      where: {
        nome: body.nome,
      },
    })

    if (existe) {
      return NextResponse.json({ error: "Já existe um corte com este nome" }, { status: 409 })
    }

    const ultimo = await prisma.corte.findFirst({
      orderBy: { id: "desc" },
    })

    let proximoId = "0001"
    if (ultimo) {
      const numero = parseInt(ultimo.id, 10) + 1
      proximoId = numero.toString().padStart(4, "0")
    }

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

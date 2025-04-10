import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = params.id

    const operador = await prisma.operador.findUnique({
      where: {
        id: id,
      },
    })

    if (!operador) {
      return NextResponse.json({ error: "Operador não encontrado" }, { status: 404 })
    }

    return NextResponse.json(operador)
  } catch (error) {
    console.error("Erro ao buscar operador:", error)
    return NextResponse.json({ error: "Erro ao buscar operador" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = params.id
    const body = await request.json()

    // Verificar se o operador existe
    const operador = await prisma.operador.findUnique({
      where: {
        id: id,
      },
    })

    if (!operador) {
      return NextResponse.json({ error: "Operador não encontrado" }, { status: 404 })
    }

    // Atualizar o operador
    const updatedOperador = await prisma.operador.update({
      where: {
        id: id,
      },
      data: {
        nome: body.nome !== undefined ? body.nome : operador.nome
      },
    })

    return NextResponse.json(updatedOperador)
  } catch (error) {
    console.error("Erro ao atualizar operador:", error)
    return NextResponse.json({ error: "Erro ao atualizar operador" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = params.id

    // Verificar se o operador existe
    const operador = await prisma.operador.findUnique({
      where: {
        id: id,
      },
    })

    if (!operador) {
      return NextResponse.json({ error: "Operador não encontrado" }, { status: 404 })
    }

    // Remover o operador
    await prisma.operador.delete({
      where: {
        id: id,
      },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Erro ao remover operador:", error)
    return NextResponse.json({ error: "Erro ao remover operador" }, { status: 500 })
  }
}

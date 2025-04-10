import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

// GET - Buscar um corte específico
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = params.id

    const corte = await prisma.corte.findUnique({
      where: {
        id: id,
      },
    })

    if (!corte) {
      return NextResponse.json({ error: "Corte não encontrado" }, { status: 404 })
    }

    return NextResponse.json(corte)
  } catch (error) {
    console.error("Erro ao buscar corte:", error)
    return NextResponse.json({ error: "Erro ao buscar corte" }, { status: 500 })
  }
}

// PUT - Atualizar um corte
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = params.id
    const body = await request.json()

    // Verificar se o corte existe
    const corte = await prisma.corte.findUnique({
      where: {
        id: id,
      },
    })

    if (!corte) {
      return NextResponse.json({ error: "Corte não encontrado" }, { status: 404 })
    }

    // Atualizar o corte
    const updatedCorte = await prisma.corte.update({
      where: {
        id: id,
      },
      data: {
        nome: body.nome !== undefined ? body.nome : corte.nome,
        preco: body.preco !== undefined ? body.preco : corte.preco,
        imagem: body.imagem !== undefined ? body.imagem : corte.imagem,
      },
    })

    return NextResponse.json(updatedCorte)
  } catch (error) {
    console.error("Erro ao atualizar corte:", error)
    return NextResponse.json({ error: "Erro ao atualizar corte" }, { status: 500 })
  }
}

// DELETE - Remover um corte
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = params.id

    // Verificar se o corte existe
    const corte = await prisma.corte.findUnique({
      where: {
        id: id,
      },
    })

    if (!corte) {
      return NextResponse.json({ error: "Corte não encontrado" }, { status: 404 })
    }

    // Remover o corte
    await prisma.corte.delete({
      where: {
        id: id,
      },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Erro ao remover corte:", error)
    return NextResponse.json({ error: "Erro ao remover corte" }, { status: 500 })
  }
}

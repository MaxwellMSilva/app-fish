import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

// GET operador por matrícula
export async function GET(
  request: NextRequest,
  context: { params: { matricula: string } }
) {
  try {
    const matricula = parseInt(context.params.matricula, 10)
    if (isNaN(matricula)) {
      return NextResponse.json(
        { error: "Matrícula do operador inválida" },
        { status: 400 }
      )
    }

    const operador = await prisma.operador.findUnique({
      where: { matricula },
    })

    if (!operador) {
      return NextResponse.json(
        { error: "Operador não encontrado", exists: false },
        { status: 404 }
      )
    }

    return NextResponse.json({ exists: true, operador })
  } catch (error) {
    console.error("Erro ao buscar operador:", error)
    return NextResponse.json(
      { error: "Erro ao buscar operador" },
      { status: 500 }
    )
  }
}

// PUT (atualizar operador)
export async function PUT(
  request: NextRequest,
  { params }: { params: { matricula: string } }
) {
  try {
    const matricula = parseInt(params.matricula)
    if (isNaN(matricula)) {
      return NextResponse.json(
        { error: "Matrícula do operador inválida" },
        { status: 400 }
      )
    }

    const body = await request.json()

    const operador = await prisma.operador.findUnique({ where: { matricula } })
    if (!operador) {
      return NextResponse.json({ error: "Operador não encontrado" }, { status: 404 })
    }

    const updatedOperador = await prisma.operador.update({
      where: { matricula },
      data: {
        nome: body.nome !== undefined ? body.nome : operador.nome,
        valor: body.valor !== undefined ? body.valor : operador.valor,
        ativo: body.ativo !== undefined ? body.ativo : operador.ativo,
      },
    })

    return NextResponse.json(updatedOperador)
  } catch (error) {
    console.error("Erro ao atualizar operador:", error)
    return NextResponse.json(
      { error: "Erro ao atualizar operador" },
      { status: 500 }
    )
  }
}

// DELETE operador
export async function DELETE(
  request: NextRequest,
  { params }: { params: { matricula: string } }
) {
  try {
    const matricula = parseInt(params.matricula)
    if (isNaN(matricula)) {
      return NextResponse.json(
        { error: "Matrícula do operador inválida" },
        { status: 400 }
      )
    }

    const operador = await prisma.operador.findUnique({ where: { matricula } })
    if (!operador) {
      return NextResponse.json({ error: "Operador não encontrado" }, { status: 404 })
    }

    await prisma.operador.delete({ where: { matricula } })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Erro ao remover operador:", error)
    return NextResponse.json(
      { error: "Erro ao remover operador" },
      { status: 500 }
    )
  }
}

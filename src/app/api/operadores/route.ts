import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET() {
  try {
    const operadores = await prisma.operador.findMany({
      orderBy: {
        matricula: "asc",
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

    // Validar campos
    if (!body.matricula || !body.nome || body.valor === undefined) {
      return NextResponse.json({ error: "Todos os campos são obrigatórios" }, { status: 400 })
    }

    // Convertendo matricula para Int
    const matricula = parseInt(body.matricula)
    if (isNaN(matricula)) {
      return NextResponse.json({ error: "Matrícula inválida" }, { status: 400 })
    }

    // Convertendo valor para Decimal
    const valor = parseFloat(body.valor)
    if (isNaN(valor)) {
      return NextResponse.json({ error: "Valor inválido" }, { status: 400 })
    }

    // Verificar se já existe operador com a mesma matrícula
    const existe = await prisma.operador.findFirst({
      where: {
        matricula: matricula,
      },
    })

    if (existe) {
      return NextResponse.json({ error: "Já existe um operador com esta matrícula" }, { status: 409 })
    }

    // Criar operador
    const operador = await prisma.operador.create({
      data: {
        matricula,
        nome: body.nome,
        valor: valor.toString(), // Prisma Decimal deve ser string
      },
    })

    return NextResponse.json(operador, { status: 201 })
  } catch (error) {
    console.error("Erro ao criar operador:", error)
    return NextResponse.json({ error: "Erro ao criar operador" }, { status: 500 })
  }
}

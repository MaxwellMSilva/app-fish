import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const { corteId, peso, tipoPesagem, operadorId } = await request.json();

    if (!corteId || !peso || !tipoPesagem || !operadorId) {
      return NextResponse.json({ error: "Todos os campos são obrigatórios" }, { status: 400 });
    }

    // Verificar se o operador existe
    const operador = await prisma.operador.findUnique({
      where: {
        id: operadorId, // Verificando se o operador existe
      },
    });

    if (!operador) {
      return NextResponse.json({ error: "Operador não encontrado" }, { status: 404 });
    }

    // Criar a pesagem
    const pesagem = await prisma.pesagem.create({
      data: {
        peso,
        tipoPesagem,
        operador: {
          connect: { id: operadorId }, // Associando operador à pesagem
        },
        corte: {
          connect: { id: corteId }, // Associando corte à pesagem
        },
      },
    });

    return NextResponse.json({ pesagem });
  } catch (error) {
    console.error("Erro ao cadastrar pesagem:", error);
    return NextResponse.json({ error: "Erro ao cadastrar pesagem" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

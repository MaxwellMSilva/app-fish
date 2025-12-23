import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { Prisma } from "@/lib/generated/prisma"

export const dynamic = "force-dynamic"

/* =====================================================
   GET → BUSCAR MAPA POR ID
   ===================================================== */
export async function GET(
  _: Request,
  { params }: { params: { id: string } }
) {
  const mapa = await prisma.mapaCompra.findUnique({
    where: { id: params.id },
    include: {
      fornecedor: true,
      especie: true,
      faixas: {
        include: {
          faixaPeso: true,
        },
      },
    },
  })

  if (!mapa) {
    return NextResponse.json(
      { error: "Mapa não encontrado" },
      { status: 404 }
    )
  }

  return NextResponse.json(mapa)
}

/* =====================================================
   PUT → ATUALIZAR MAPA
   ===================================================== */
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await req.json()

    const {
      fornecedorId,
      especieId,
      lote,
      dataDespesca,
      prazoDias,
      pesoBruto,
      descontoUmidade,
      faixas,
    } = body

    /* ---------- Validações ---------- */
    if (
      typeof fornecedorId !== "string" ||
      typeof especieId !== "string" ||
      typeof lote !== "number" || lote <= 0 ||
      typeof prazoDias !== "number" || prazoDias <= 0 ||
      typeof pesoBruto !== "number" || pesoBruto <= 0 ||
      !dataDespesca ||
      !Array.isArray(faixas) || faixas.length === 0
    ) {
      return NextResponse.json(
        { error: "Dados inválidos ou ausentes" },
        { status: 422 }
      )
    }

    /* ---------- Cálculos ---------- */
    const pesoBrutoDec = new Prisma.Decimal(pesoBruto)
    const descontoDec = new Prisma.Decimal(descontoUmidade || 0)

    const pesoLiquido = pesoBrutoDec.mul(
      new Prisma.Decimal(1).minus(descontoDec.div(100))
    )

    const dataVencimento = new Date(dataDespesca)
    dataVencimento.setDate(
      dataVencimento.getDate() + Number(prazoDias)
    )

    /* ---------- Remove faixas antigas ---------- */
    await prisma.mapaCompraFaixa.deleteMany({
      where: { mapaCompraId: params.id },
    })

    /* ---------- UPDATE ---------- */
    const mapa = await prisma.mapaCompra.update({
      where: { id: params.id },
      data: {
        fornecedorId,
        especieId,
        lote,
        dataDespesca: new Date(dataDespesca),
        prazoDias,
        dataVencimento,
        pesoBruto: pesoBrutoDec,
        descontoUmidade: descontoDec,
        pesoLiquido,
        faixas: {
          create: faixas.map((f: any) => ({
            faixaPesoId: f.faixaPesoId,
            pesoKg: new Prisma.Decimal(f.pesoKg),
            valorKg: new Prisma.Decimal(f.valorKg),
          })),
        },
      },
      include: {
        fornecedor: true,
        especie: true,
        faixas: {
          include: {
            faixaPeso: true,
          },
        },
      },
    })

    return NextResponse.json(mapa)
  } catch (e) {
    console.error("ERRO AO ATUALIZAR MAPA:", e)
    return NextResponse.json(
      { error: "Erro interno ao atualizar mapa" },
      { status: 500 }
    )
  }
}

/* =====================================================
   DELETE → EXCLUIR MAPA
   ===================================================== */
export async function DELETE(
  _: Request,
  { params }: { params: { id: string } }
) {
  const existe = await prisma.mapaCompra.findUnique({
    where: { id: params.id },
    select: { id: true },
  })

  if (!existe) {
    return NextResponse.json(
      { error: "Mapa não encontrado" },
      { status: 404 }
    )
  }

  await prisma.mapaCompraFaixa.deleteMany({
    where: { mapaCompraId: params.id },
  })

  await prisma.mapaCompra.delete({
    where: { id: params.id },
  })

  return NextResponse.json({ success: true })
}

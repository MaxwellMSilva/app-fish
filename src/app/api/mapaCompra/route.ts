import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(
  _req: Request,
  { params }: { params: { lote: string } }
) {
  const lote = Number(params.lote)

  if (isNaN(lote)) {
    return NextResponse.json(
      { error: "Lote inválido" },
      { status: 400 }
    )
  }

  const mapa = await prisma.mapaCompra.findFirst({
    where: { lote },
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
    return NextResponse.json(null)
  }

  return NextResponse.json(mapa)
}

import { Prisma } from "@/lib/generated/prisma"

export async function POST(req: Request) {
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

    /* ================= VALIDAÇÕES BÁSICAS ================= */
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
        { error: "Dados obrigatórios inválidos ou ausentes" },
        { status: 422 }
      )
    }

    /* ================= CÁLCULOS ================= */
    const pesoBrutoDec = new Prisma.Decimal(pesoBruto)
    const descontoDec = new Prisma.Decimal(descontoUmidade || 0)

    const pesoLiquido = pesoBrutoDec.mul(
      new Prisma.Decimal(1).minus(descontoDec.div(100))
    )

    const somaPesosFaixas = faixas.reduce(
      (acc: Prisma.Decimal, f: any) =>
        acc.add(new Prisma.Decimal(f.pesoKg || 0)),
      new Prisma.Decimal(0)
    )

    if (somaPesosFaixas.gt(pesoLiquido)) {
      return NextResponse.json(
        {
          error:
            "A soma dos pesos das faixas não pode ser maior que o peso líquido",
        },
        { status: 422 }
      )
    }

    const dataVencimento = new Date(dataDespesca)
    dataVencimento.setDate(
      dataVencimento.getDate() + Number(prazoDias)
    )

    /* ================= CREATE ================= */
    const mapa = await prisma.mapaCompra.create({
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
        faixas: {
          include: {
            faixaPeso: true,
          },
        },
      },
    })

    return NextResponse.json(mapa, { status: 201 })
  } catch (error) {
    console.error("ERRO AO CRIAR MAPA:", error)

    return NextResponse.json(
      { error: "Erro interno ao criar mapa de compra" },
      { status: 500 }
    )
  }
}

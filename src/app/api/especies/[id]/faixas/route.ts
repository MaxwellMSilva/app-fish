import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export const dynamic = "force-dynamic"

export async function GET(
  _: Request,
  { params }: { params: { id: string } }
) {
  const faixas = await prisma.especieFaixaPeso.findMany({
    where: { especieId: params.id },
    orderBy: { pesoMin: "asc" },
  })

  return NextResponse.json(
    faixas.map((f) => ({
      id: f.id,
      label: `${f.pesoMin} – ${f.pesoMax} kg`,
      pesoMin: f.pesoMin,
      pesoMax: f.pesoMax,
    }))
  )
}

import { Prisma } from "@/lib/generated/prisma"

export async function POST(req: Request) {
  const body = await req.json()

  const pesoBruto = new Prisma.Decimal(body.pesoBruto)
  const descontoUmidade = new Prisma.Decimal(body.descontoUmidade)

  const pesoLiquido = pesoBruto.mul(
    new Prisma.Decimal(1).minus(descontoUmidade.div(100))
  )

  const dataVencimento = new Date(body.dataDespesca)
  dataVencimento.setDate(dataVencimento.getDate() + body.prazoDias)

  const mapa = await prisma.mapaCompra.create({
    data: {
      fornecedorId: body.fornecedorId,
      especieId: body.especieId,
      lote: body.lote,
      dataDespesca: new Date(body.dataDespesca),
      prazoDias: body.prazoDias,
      dataVencimento,
      pesoBruto,
      descontoUmidade,
      pesoLiquido,

      faixas: {
        create: body.faixas.map((f: any) => ({
          faixaPesoId: f.faixaPesoId,
          valorKg: new Prisma.Decimal(f.valorKg),
        })),
      },
    },
    include: {
      faixas: true,
    },
  })

  return NextResponse.json(mapa, { status: 201 })
}

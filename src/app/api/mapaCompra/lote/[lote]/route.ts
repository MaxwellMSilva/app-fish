import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export const dynamic = "force-dynamic"

export async function GET(
  _: Request,
  { params }: { params: { lote: string } }
) {
  const lote = Number(params.lote)

  if (isNaN(lote)) {
    return NextResponse.json(
      { found: false, error: "Lote inválido" },
      { status: 200 }
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
    return NextResponse.json(
      { found: false },
      { status: 200 }
    )
  }

  return NextResponse.json(
    { found: true, mapa },
    { status: 200 }
  )
}

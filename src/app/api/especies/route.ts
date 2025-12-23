import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export const dynamic = "force-dynamic"

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const q = (searchParams.get("q") || "").toLowerCase()

  const especies = await prisma.especie.findMany({
    take: 20,
  })

  const filtradas = especies.filter((e) =>
    e.nome.toLowerCase().includes(q)
  )

  return NextResponse.json(
    filtradas.map((e) => ({
      id: e.id,
      label: e.nome,
    }))
  )
}

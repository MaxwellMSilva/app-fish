import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const q = (searchParams.get("q") || "").toLowerCase()

  const fornecedores = await prisma.fornecedor.findMany({
    take: 20,
  })

  const filtrados = fornecedores.filter(
    (f) =>
      f.nome.toLowerCase().includes(q) ||
      f.fazenda.toLowerCase().includes(q)
  )

  return NextResponse.json(
    filtrados.map((f) => ({
      id: f.id,
      label: `${f.nome} - ${f.fazenda}`,
    }))
  )
}

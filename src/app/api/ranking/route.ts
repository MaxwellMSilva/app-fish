import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const dataInicialParam = searchParams.get("dataInicial")
    const dataFinalParam = searchParams.get("dataFinal")
    const corteId = searchParams.get("corteId")

    if (!dataInicialParam || !dataFinalParam) {
      return NextResponse.json([])
    }

    const dataInicial = new Date(`${dataInicialParam}T00:00:00`)
    const dataFinal = new Date(`${dataFinalParam}T23:59:59`)

    const operadores = await prisma.operador.findMany({
      include: {
        pesagens: {
          where: {
            tipoPesagem: corteId === "0001" ? "final" : { in: ["inicial", "final"] },
            createdAt: {
              gte: dataInicial,
              lte: dataFinal,
            },
            ...(corteId && corteId !== "todos" && { corteId }),
          },
          orderBy: {
            createdAt: "asc",
          },
        },
      },
    })

    const operadoresProcessados = operadores.map((operador) => {
      if (corteId === "0001") {
        // Só pesagens finais
        const pesagensFinais = operador.pesagens.filter((p) => p.tipoPesagem === "final")
        const totalPesoFinal = pesagensFinais.reduce((sum, p) => sum + p.peso, 0)

        return {
          matricula: operador.matricula,
          nome: operador.nome,
          pesagens: operador.pesagens,
          mediaPerdaKg: "0.00",
          mediaRendimento: "100.00",
          mediaPorcentagem: "0.00",
          totalPesoProcessado: parseFloat(totalPesoFinal.toFixed(2)),
        }
      } else {
        // Comparação inicial x final
        const gruposPorCorte = new Map<string, { iniciais: number[]; finais: number[] }>()

        operador.pesagens.forEach((pesagem) => {
          if (!gruposPorCorte.has(pesagem.corteId)) {
            gruposPorCorte.set(pesagem.corteId, { iniciais: [], finais: [] })
          }
          const grupo = gruposPorCorte.get(pesagem.corteId)!
          if (pesagem.tipoPesagem === "inicial") {
            grupo.iniciais.push(pesagem.peso)
          } else if (pesagem.tipoPesagem === "final") {
            grupo.finais.push(pesagem.peso)
          }
        })

        let totalPerdaKg = 0
        let totalPesoInicial = 0
        let totalPesoFinal = 0

        gruposPorCorte.forEach((grupo) => {
          const pares = Math.min(grupo.iniciais.length, grupo.finais.length)

          for (let i = 0; i < pares; i++) {
            const pesoInicial = grupo.iniciais[i]
            const pesoFinal = grupo.finais[i]

            if (pesoInicial && pesoFinal) {
              const perdaKg = pesoInicial - pesoFinal
              totalPerdaKg += perdaKg
              totalPesoInicial += pesoInicial
              totalPesoFinal += pesoFinal
            }
          }
        })

        const mediaPerdaKg = totalPerdaKg.toFixed(2)
        const mediaRendimento = totalPesoInicial > 0 ? ((totalPesoFinal / totalPesoInicial) * 100).toFixed(2) : "0.00"
        const mediaPorcentagem = totalPesoInicial > 0 ? ((totalPerdaKg / totalPesoInicial) * 100).toFixed(2) : "0.00"

        return {
          matricula: operador.matricula,
          nome: operador.nome,
          pesagens: operador.pesagens,
          mediaPerdaKg,
          mediaRendimento,
          mediaPorcentagem,
          totalPesoProcessado: parseFloat(totalPesoInicial.toFixed(2)),
        }
      }
    })

    const operadoresFiltrados = operadoresProcessados.filter((operador) => {
      return operador.totalPesoProcessado > 0
    })

    const ranking = operadoresFiltrados.sort((a, b) => {
      const pesoComparacao = b.totalPesoProcessado - a.totalPesoProcessado
      if (pesoComparacao !== 0) return pesoComparacao
      return parseFloat(b.mediaRendimento) - parseFloat(a.mediaRendimento)
    })

    return NextResponse.json(ranking)
  } catch (error) {
    console.error("Erro ao buscar ranking:", error)
    return NextResponse.json({ error: "Erro ao buscar ranking" }, { status: 500 })
  }
}

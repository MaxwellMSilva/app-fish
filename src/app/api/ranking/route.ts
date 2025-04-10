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
            tipoPesagem: {
              in: ['inicial', 'final'],
            },
            corte: {
              ...(corteId && { id: corteId }),
              createdAt: {
                gte: dataInicial,
                lte: dataFinal,
              },
            },
          },
        },
      },
    })

    const operadoresComPerda = operadores.map((operador) => {
      const pesagensIniciais = operador.pesagens.filter(p => p.tipoPesagem === 'inicial')
      const pesagensFinais = operador.pesagens.filter(p => p.tipoPesagem === 'final')
    
      let totalPerdaKg = 0
      let totalPesoInicial = 0
      let totalPesoFinal = 0
    
      pesagensIniciais.forEach((pesagemInicial, index) => {
        const pesagemFinal = pesagensFinais[index]
        if (pesagemFinal && pesagemInicial.peso && pesagemFinal.peso) {
          const perdaKg = pesagemInicial.peso - pesagemFinal.peso
          totalPerdaKg += perdaKg
          totalPesoInicial += pesagemInicial.peso
          totalPesoFinal += pesagemFinal.peso
        }
      })
    
      const mediaPerdaKg = totalPerdaKg.toFixed(2)
      const mediaRendimento = totalPesoInicial > 0
        ? ((totalPesoFinal / totalPesoInicial) * 100)
        : 0
      const mediaPorcentagem = totalPesoInicial > 0
        ? (totalPerdaKg / totalPesoInicial) * 100
        : 0
    
      return {
        ...operador,
        mediaPerdaKg,
        mediaRendimento: mediaRendimento.toFixed(2),
        mediaPorcentagem: mediaPorcentagem.toFixed(2),
        totalPesoProcessado: parseFloat(totalPesoInicial.toFixed(2)),
      }
    })

    const operadoresFiltrados = operadoresComPerda.filter((operador) => {
      return parseFloat(operador.mediaPerdaKg) > 0 && operador.totalPesoProcessado > 0
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
  } finally {
    await prisma.$disconnect()
  }
}

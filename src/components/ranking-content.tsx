"use client"

import { useEffect, useState } from "react"
import { Medal, Trophy, Award } from "lucide-react"

export function RankingContent() {
  const [operadores, setOperadores] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [dataInicial, setDataInicial] = useState("")
  const [dataFinal, setDataFinal] = useState("")
  const [corteId, setCorteId] = useState("")
  const [cortes, setCortes] = useState<any[]>([])

  const fetchCortes = async () => {
    const res = await fetch("/api/cortes")
    const data = await res.json()
    setCortes(data)
  }

  const fetchRanking = async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams()
      if (dataInicial) params.append("dataInicial", dataInicial)
      if (dataFinal) params.append("dataFinal", dataFinal)
      if (corteId) params.append("corteId", corteId)

      const response = await fetch(`/api/ranking?${params.toString()}`)
      const data = await response.json()
      setOperadores(data)
    } catch (error) {
      console.error("Erro ao buscar ranking:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCortes()
  }, [])

  useEffect(() => {
    if (dataInicial || dataFinal || corteId) {
      fetchRanking()
    }
  }, [dataInicial, dataFinal, corteId]) // Chama o fetchRanking toda vez que essas variáveis mudarem

  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Ranking</h1>
        <p className="text-gray-500">Desempenho dos operadores</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <input
          type="date"
          className="border p-2 rounded"
          value={dataInicial}
          onChange={(e) => setDataInicial(e.target.value)}
        />
        <input
          type="date"
          className="border p-2 rounded"
          value={dataFinal}
          onChange={(e) => setDataFinal(e.target.value)}
        />
        <select
          className="border p-2 rounded"
          value={corteId}
          onChange={(e) => setCorteId(e.target.value)}
        >
          <option value="">Todos os Cortes</option>
          {cortes.map((corte: any) => (
            <option key={corte.id} value={corte.id}>
              {corte.nome}
            </option>
          ))}
        </select>
      </div>

      {operadores.length === 0 ? (
        <div className="text-gray-500 italic text-center mt-10">
          Nenhum dado encontrado. Selecione um intervalo de datas para visualizar o ranking.
        </div>
      ) : (
        <>
          {/* Top 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {operadores.slice(0, 3).map((operador, index) => (
              <div key={index} className={`bg-white p-6 rounded-lg border shadow-sm text-center ${
                index === 0
                    ? "scale-105 shadow-xl" // Top 1 animação de aumento de escala e brilho
                    : index === 1
                    ? "scale-103 shadow-lg" // Top 2 com animação sutil
                    : "scale-100 shadow-sm" // Top 3 sem animação
                }`}>
                <div className="flex justify-center mb-4">
                  {index === 0 ? (
                    <Trophy className="h-12 w-12 text-yellow-500 animate-pulse" />
                  ) : index === 1 ? (
                    <Medal className="h-12 w-12 text-gray-400" />
                  ) : (
                    <Award className="h-12 w-12 text-amber-700" />
                  )}
                </div>
                <h3 className="text-xl font-bold">{operador.nome}</h3>
                <p className="text-gray-500 mt-1">Pesagens: {operador.pesagens.length}</p>
                <p className="text-mg font-semibold mt-2">{`Peso Processado: ${operador.totalPesoProcessado.toFixed(2)} kg`}</p>
                <p className="text-mg font-semibold mt-2">{`Rendimento: ${operador.mediaRendimento}%`}</p>
                <p className="text-mg font-semibold mt-2">{`Perda: ${operador.mediaPorcentagem}%`}</p>
              </div>
            ))}
          </div>

          {/* Tabela completa */}
          <div className="bg-white border rounded-md p-4">
            <h2 className="text-lg font-semibold mb-4">Ranking Completo</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-medium">Posição:</th>
                    <th className="text-left py-3 px-4 font-medium">Operador:</th>
                    <th className="text-center py-3 px-4 font-medium">Total Processado (Kg):</th>
                    <th className="text-center py-3 px-4 font-medium">Rendimento (%):</th>
                    <th className="text-center py-3 px-4 font-medium">Perda (%):</th>
                  </tr>
                </thead>
                <tbody>
                  {operadores.map((operador, index) => (
                    <tr key={operador.id} className="border-b">
                      <td className="py-3 px-4">
                        <div className="flex items-center">
                          <span className="font-bold mr-2">{index + 1}º</span>
                          {index === 0 && <Trophy className="h-4 w-4 text-yellow-500" />}
                          {index === 1 && <Medal className="h-4 w-4 text-gray-400" />}
                          {index === 2 && <Award className="h-4 w-4 text-amber-700" />}
                        </div>
                      </td>
                      <td className="py-3 px-4">{operador.nome}</td>
                      <td className="py-3 px-4 text-center">{operador.totalPesoProcessado.toFixed(2)}</td>
                      <td className="py-3 px-4 text-center">{operador.mediaRendimento}</td>
                      <td className="py-3 px-4 text-center">{operador.mediaPorcentagem}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </>
  )
}

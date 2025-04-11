"use client"

import { useEffect, useState } from "react"
import { Medal, Trophy, Award, Calendar, Maximize2, Minimize2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function RankingContent() {
  const [operadores, setOperadores] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [dataInicial, setDataInicial] = useState("")
  const [dataFinal, setDataFinal] = useState("")
  const [corteId, setCorteId] = useState("")
  const [cortes, setCortes] = useState<any[]>([])
  const [fullscreenMode, setFullscreenMode] = useState(false)

  const fetchCortes = async () => {
    try {
      const res = await fetch("/api/cortes")
      const data = await res.json()
      setCortes(data)
    } catch (error) {
      console.error("Erro ao buscar cortes:", error)
    }
  }

  const fetchRanking = async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams()
      if (dataInicial) params.append("dataInicial", dataInicial)
      if (dataFinal) params.append("dataFinal", dataFinal)
      if (corteId && corteId !== "todos") {
        params.append("corteId", corteId)
      }

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
    fetchRanking()
  }, [])

  useEffect(() => {
    fetchRanking()
  }, [dataInicial, dataFinal, corteId])

  const toggleFullscreen = () => {
    setFullscreenMode(!fullscreenMode)

    if (!fullscreenMode) {
      document.body.classList.add("hide-sidebar")
    } else {
      document.body.classList.remove("hide-sidebar")
    }
  }

  return (
    <>
      <div className="relative">
        <Button
          variant="ghost"
          size="icon"
          className={`absolute right-0 top-0 z-10 transition-all duration-500 ease-in-out transform ${
            fullscreenMode
              ? "opacity-100 scale-110 bg-green-50 text-green-600 hover:bg-green-100"
              : "opacity-50 hover:opacity-100 hover:scale-105"
          }`}
          onClick={toggleFullscreen}
        >
          {fullscreenMode ? <Minimize2 className="h-5 w-5" /> : <Maximize2 className="h-5 w-5" />}
          <span className="sr-only">{fullscreenMode ? "Sair da tela cheia" : "Modo tela cheia"}</span>
        </Button>

        {/* Card de filtros */}
        {!fullscreenMode && (
          <Card className="mb-6 border-gray-200 shadow-sm animate-fade-in">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="">
                  <h1 className="text-2xl font-bold">Ranking</h1>
                  <p className="text-gray-500">Desempenho dos operadores</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dataInicial" className="font-semibold ml-1">
                    Data Inicial:
                  </Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                    <Input
                      id="dataInicial"
                      type="date"
                      className="pl-10 border-gray-300 focus:border-green-500 focus:ring-green-500"
                      value={dataInicial}
                      onChange={(e) => setDataInicial(e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dataFinal" className="font-semibold ml-1">
                    Data Final:
                  </Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                    <Input
                      id="dataFinal"
                      type="date"
                      className="pl-10 border-gray-300 focus:border-green-500 focus:ring-green-500"
                      value={dataFinal}
                      onChange={(e) => setDataFinal(e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="corte" className="font-semibold ml-1">
                    Tipo de Corte:
                  </Label>
                  <Select value={corteId} onValueChange={setCorteId}>
                    <SelectTrigger
                      id="corte"
                      className="w-full border-gray-300 focus:border-green-500 focus:ring-green-500"
                    >
                      <SelectValue placeholder="Todos os Cortes" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="todos">Todos os Cortes</SelectItem>
                      {cortes.map((corte) => (
                        <SelectItem key={corte.id} value={corte.id}>
                          {corte.nome}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Título no modo tela cheia */}
        {fullscreenMode && (
          <div className="mb-6 animate-fade-in">
            <h1 className="text-2xl font-bold">Ranking de Operadores</h1>
          </div>
        )}

        {loading ? (
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-green-500"></div>
          </div>
        ) : operadores.length === 0 ? (
          <div className="text-gray-500 italic text-center mt-10 p-8 bg-white border rounded-md shadow-sm">
            Nenhum dado encontrado. Selecione um intervalo de datas para visualizar o ranking.
          </div>
        ) : (
          <>
            {/* Top 3 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {operadores.slice(0, 3).map((operador, index) => (
                <div
                  key={index}
                  className={`bg-white p-6 rounded-lg border shadow-sm text-center ${
                    index === 0
                      ? "scale-105 shadow-xl" // Top 1 animação de aumento de escala e brilho
                      : index === 1
                        ? "scale-103 shadow-lg" // Top 2 com animação sutil
                        : "scale-100 shadow-sm" // Top 3 sem animação
                  }`}
                >
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
                      <th className="text-left py-3 px-4 font-semibold">Posição:</th>
                      <th className="text-left py-3 px-4 font-semibold">Operador:</th>
                      <th className="text-center py-3 px-4 font-semibold">Total Processado (Kg):</th>
                      <th className="text-center py-3 px-4 font-semibold">Rendimento (%):</th>
                      <th className="text-center py-3 px-4 font-semibold">Perda (%):</th>
                    </tr>
                  </thead>
                  <tbody>
                    {operadores.map((operador, index) => (
                      <tr key={operador.id} className="border-b hover:bg-gray-50">
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
      </div>
    </>
  )
}

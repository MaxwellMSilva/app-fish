"use client"

import { useEffect, useState } from "react"
import {
  Medal,
  Trophy,
  Award,
  Calendar,
  Maximize2,
  Minimize2,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Operador {
  matricula: number
  nome: string
  pesagens: any[]
  totalPesoProcessado: number
  mediaRendimento: string
  mediaPorcentagem: string
}

export function RankingContent() {
  const [operadores, setOperadores] = useState<Operador[]>([])
  const [loading, setLoading] = useState(true)
  const [dataInicial, setDataInicial] = useState("")
  const [dataFinal, setDataFinal] = useState("")
  const [corteId, setCorteId] = useState("")
  const [cortes, setCortes] = useState<any[]>([])
  const [fullscreenMode, setFullscreenMode] = useState(false)

  const fetchCortes = async () => {
    const res = await fetch("/api/cortes")
    setCortes(await res.json())
  }

  const fetchRanking = async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams()
      if (dataInicial) params.append("dataInicial", dataInicial)
      if (dataFinal) params.append("dataFinal", dataFinal)
      if (corteId && corteId !== "todos") params.append("corteId", corteId)

      const res = await fetch(`/api/ranking?${params.toString()}`)
      setOperadores(await res.json())
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCortes()
    fetchRanking()
  }, [dataInicial, dataFinal, corteId])

  const toggleFullscreen = () => {
    setFullscreenMode(!fullscreenMode)
    document.body.classList.toggle("hide-sidebar")
  }

  return (
    <div className="relative">
      {/* FULLSCREEN */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-0 top-0 z-10"
        onClick={toggleFullscreen}
      >
        {fullscreenMode ? <Minimize2 /> : <Maximize2 />}
      </Button>

      {/* FILTROS */}
      {!fullscreenMode && (
        <Card className="mb-6">
          <CardContent className="p-4 sm:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <h1 className="text-2xl font-bold">Ranking</h1>
                <p className="text-gray-500 text-sm">
                  Desempenho dos operadores
                </p>
              </div>

              <div>
                <Label>Data Inicial</Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    type="date"
                    className="pl-10"
                    value={dataInicial}
                    onChange={(e) => setDataInicial(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <Label>Data Final</Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    type="date"
                    className="pl-10"
                    value={dataFinal}
                    onChange={(e) => setDataFinal(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <Label>Tipo de Corte</Label>
                <Select value={corteId} onValueChange={setCorteId}>
                  <SelectTrigger>
                    <SelectValue placeholder="Todos os cortes" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todos</SelectItem>
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

      {/* LOADING */}
      {loading && (
        <div className="flex justify-center py-20">
          <div className="animate-spin h-10 w-10 border-b-2 border-green-500 rounded-full" />
        </div>
      )}

      {/* TOP 3 */}
      {!loading && operadores.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {operadores.slice(0, 3).map((op, i) => (
            <Card key={op.matricula} className="text-center p-4">
              <div className="flex justify-center mb-3">
                {i === 0 && <Trophy className="text-yellow-500 h-8 w-8" />}
                {i === 1 && <Medal className="text-gray-400 h-8 w-8" />}
                {i === 2 && <Award className="text-amber-700 h-8 w-8" />}
              </div>
              <h3 className="font-bold">{op.nome}</h3>
              <p className="text-sm text-gray-500">
                Peso: {op.totalPesoProcessado.toFixed(2)} kg
              </p>
              <p className="text-sm">Rendimento: {op.mediaRendimento}%</p>
              <p className="text-sm">Perda: {op.mediaPorcentagem}%</p>
            </Card>
          ))}
        </div>
      )}

      {/* MOBILE – CARDS */}
      {!loading && (
        <div className="sm:hidden space-y-3">
          {operadores.map((op, i) => (
            <Card key={op.matricula}>
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <strong>
                    {i + 1}º – {op.nome}
                  </strong>
                  {i === 0 && <Trophy className="h-4 w-4 text-yellow-500" />}
                </div>
                <p className="text-sm">Peso: {op.totalPesoProcessado.toFixed(2)} kg</p>
                <p className="text-sm">Rendimento: {op.mediaRendimento}%</p>
                <p className="text-sm">Perda: {op.mediaPorcentagem}%</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* DESKTOP – TABELA */}
      {!loading && (
        <div className="hidden sm:block bg-white border rounded-md p-4 mt-6">
          <h2 className="text-lg font-semibold mb-4">Ranking Completo</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3">Posição</th>
                  <th className="text-left p-3">Operador</th>
                  <th className="text-center p-3">Peso (Kg)</th>
                  <th className="text-center p-3">Rendimento</th>
                  <th className="text-center p-3">Perda</th>
                </tr>
              </thead>
              <tbody>
                {operadores.map((op, i) => (
                  <tr key={op.matricula} className="border-b hover:bg-gray-50">
                    <td className="p-3">{i + 1}º</td>
                    <td className="p-3">{op.nome}</td>
                    <td className="p-3 text-center">
                      {op.totalPesoProcessado.toFixed(2)}
                    </td>
                    <td className="p-3 text-center">{op.mediaRendimento}</td>
                    <td className="p-3 text-center">{op.mediaPorcentagem}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}

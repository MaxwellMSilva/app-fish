"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
} from "@/components/ui/table"
import {
  Download,
  FileText,
  Image as ImageIcon,
  Filter,
  Calendar,
} from "lucide-react"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts"
import { Card, CardContent } from "@/components/ui/card"

interface RelatorioItem {
  matricula: number
  nome: string
  totalKg: number
  valorTotal: number
}

export function RelatoriosContent() {
  const [dataInicial, setDataInicial] = useState("")
  const [dataFinal, setDataFinal] = useState("")
  const [corteId, setCorteId] = useState("")
  const [relatorioData, setRelatorioData] = useState<RelatorioItem[]>([])

  const chartRef = useRef<HTMLDivElement>(null)

  const handleGerarRelatorio = async () => {
    if (!dataInicial || !dataFinal || !corteId) {
      alert("Preencha todos os filtros")
      return
    }

    const params = new URLSearchParams({ dataInicial, dataFinal, corteId })
    const res = await fetch(`/api/relatorios?${params.toString()}`)
    if (!res.ok) {
      alert("Erro ao buscar relatório")
      return
    }

    setRelatorioData(await res.json())
  }

  const handleExportarCSV = () => {
    if (!relatorioData.length) return

    const header = ["Matrícula", "Nome", "Total KG", "Valor Total"]
    const rows = relatorioData.map((i) => [
      i.matricula,
      i.nome,
      i.totalKg.toFixed(2),
      i.valorTotal.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      }),
    ])

    const csv = [header, ...rows].map((r) => r.join(";")).join("\n")
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)

    const link = document.createElement("a")
    link.href = url
    link.download = "relatorio.csv"
    link.click()
  }

  const handleExportarPDF = () => {
    if (!relatorioData.length) return

    const pdf = new jsPDF()
    pdf.text("Relatório de Operadores", 10, 10)

    let y = 20
    relatorioData.forEach((i) => {
      pdf.text(
        `${i.matricula} - ${i.nome} | ${i.totalKg.toFixed(
          2
        )} kg | ${i.valorTotal.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}`,
        10,
        y
      )
      y += 8
    })

    pdf.save("relatorio.pdf")
  }

  const handleExportarGrafico = async () => {
    if (!chartRef.current) return
    const canvas = await html2canvas(chartRef.current)
    const link = document.createElement("a")
    link.href = canvas.toDataURL("image/png")
    link.download = "grafico.png"
    link.click()
  }

  return (
    <div className="space-y-8">
      {/* HEADER PADRÃO RANKING */}
      <Card className="border-gray-200 shadow-sm">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h1 className="text-2xl font-bold">Relatórios</h1>
              <p className="text-gray-500 text-sm">
                Análise de desempenho por operador
              </p>
            </div>

            <div className="space-y-2">
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

            <div className="space-y-2">
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

            <div className="space-y-2">
              <Label>Corte</Label>
              <Select value={corteId} onValueChange={setCorteId}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um corte" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0001">Corte 0001</SelectItem>
                  <SelectItem value="0002">Corte 0002</SelectItem>
                  <SelectItem value="0003">Corte 0003</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mt-6">
            <Button
              className="bg-green-600 hover:bg-green-700 w-full sm:w-auto"
              onClick={handleGerarRelatorio}
            >
              <Filter className="mr-2 h-4 w-4" />
              Filtrar
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* EXPORTAÇÕES */}
      {relatorioData.length > 0 && (
        <div className="flex flex-col sm:flex-row gap-3">
          <Button variant="outline" onClick={handleExportarCSV}>
            <Download className="mr-2 h-4 w-4" />
            CSV
          </Button>
          <Button variant="outline" onClick={handleExportarPDF}>
            <FileText className="mr-2 h-4 w-4" />
            PDF
          </Button>
          <Button variant="outline" onClick={handleExportarGrafico}>
            <ImageIcon className="mr-2 h-4 w-4" />
            Gráfico
          </Button>
        </div>
      )}

      {/* MOBILE – CARDS */}
      {relatorioData.length > 0 && (
        <div className="sm:hidden space-y-3">
          {relatorioData.map((i) => (
            <div key={i.matricula} className="border rounded-md p-4 bg-white">
              <p className="font-semibold">{i.nome}</p>
              <p className="text-sm text-gray-500">
                Matrícula: {i.matricula}
              </p>
              <p className="mt-1">Total: {i.totalKg.toFixed(2)} kg</p>
              <p className="font-semibold">
                {i.valorTotal.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* DESKTOP – TABELA */}
      {relatorioData.length > 0 && (
        <div className="hidden sm:block">
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>Matrícula</TableHeader>
                <TableHeader>Nome</TableHeader>
                <TableHeader>Total KG</TableHeader>
                <TableHeader>Valor Total</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              {relatorioData.map((i) => (
                <TableRow key={i.matricula}>
                  <TableCell>{i.matricula}</TableCell>
                  <TableCell>{i.nome}</TableCell>
                  <TableCell>{i.totalKg.toFixed(2)}</TableCell>
                  <TableCell>
                    {i.valorTotal.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      {/* GRÁFICO */}
      {relatorioData.length > 0 && (
        <div ref={chartRef} className="bg-white border rounded-md p-4 h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={relatorioData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="nome" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="totalKg" fill="#22c55e" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  )
}

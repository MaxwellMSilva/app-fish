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
import { Download, FileText, Image as ImageIcon, Filter } from "lucide-react"
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
      alert("Por favor, preencha todos os filtros!")
      return
    }

    try {
      const queryParams = new URLSearchParams()
      queryParams.append("dataInicial", dataInicial)
      queryParams.append("dataFinal", dataFinal)
      queryParams.append("corteId", corteId)

      const response = await fetch(`/api/relatorios?${queryParams.toString()}`)
      if (!response.ok) {
        const err = await response.json()
        alert("Erro ao buscar dados: " + (err.error ?? "Erro desconhecido"))
        return
      }
      const data: RelatorioItem[] = await response.json()
      setRelatorioData(data)
    } catch (error) {
      console.error("Erro ao gerar relatório:", error)
      alert("Erro ao gerar relatório. Veja o console.")
    }
  }

  const handleExportarCSV = () => {
    if (relatorioData.length === 0) {
      alert("Nenhum dado para exportar.")
      return
    }

    const header = ["Matrícula", "Nome", "Total KG", "Valor Total (R$)"]
    const rows = relatorioData.map((item) => [
      item.matricula,
      item.nome,
      item.totalKg.toFixed(2),
      item.valorTotal.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      }),
    ])

    const csvContent = [header, ...rows].map((e) => e.join(";")).join("\n")

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)

    const link = document.createElement("a")
    link.href = url
    link.setAttribute("download", "relatorio.csv")
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleExportarPDF = () => {
    if (relatorioData.length === 0) {
      alert("Nenhum dado para exportar.")
      return
    }

    const pdf = new jsPDF()
    pdf.setFontSize(14)
    pdf.text("Relatório de Operadores", 10, 10)

    let y = 20
    relatorioData.forEach((item) => {
      pdf.text(
        `${item.matricula} - ${item.nome} | ${item.totalKg.toFixed(
          2
        )} kg | ${item.valorTotal.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}`,
        10,
        y
      )
      y += 10
    })

    pdf.save("relatorio.pdf")
  }

  const handleExportarGrafico = async () => {
    if (!chartRef.current) {
      alert("Nenhum gráfico para exportar.")
      return
    }
    const canvas = await html2canvas(chartRef.current)
    const link = document.createElement("a")
    link.href = canvas.toDataURL("image/png")
    link.download = "grafico.png"
    link.click()
  }

  return (
    <div className="p-6 space-y-8 max-w-7xl mx-auto">
      {/* Filtros */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
        <div>
          <Label>Data Inicial</Label>
          <Input
            type="date"
            value={dataInicial}
            onChange={(e) => setDataInicial(e.target.value)}
          />
        </div>

        <div>
          <Label>Data Final</Label>
          <Input
            type="date"
            value={dataFinal}
            onChange={(e) => setDataFinal(e.target.value)}
          />
        </div>

        <div>
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

        <div>
          <Button
            className="w-full bg-green-600 hover:bg-green-700"
            onClick={handleGerarRelatorio}
          >
            <Filter className="mr-2 h-4 w-4" />
            Filtrar
          </Button>
        </div>
      </div>

      {/* Ações de exportação */}
      {relatorioData.length > 0 && (
        <div className="flex gap-4">
          <Button
            onClick={handleExportarCSV}
            variant="outline"
            className="flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Exportar CSV
          </Button>
          <Button
            onClick={handleExportarPDF}
            variant="outline"
            className="flex items-center gap-2"
          >
            <FileText className="w-4 h-4" />
            Exportar PDF
          </Button>
          <Button
            onClick={handleExportarGrafico}
            variant="outline"
            className="flex items-center gap-2"
          >
            <ImageIcon className="w-4 h-4" />
            Exportar Gráfico
          </Button>
        </div>
      )}

      {/* Tabela */}
      {relatorioData.length > 0 ? (
        <Table className="mt-4">
          <TableHead>
            <TableRow>
              <TableHeader>Matrícula</TableHeader>
              <TableHeader>Nome</TableHeader>
              <TableHeader>Total KG</TableHeader>
              <TableHeader>Valor Total (R$)</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {relatorioData.map((item) => (
              <TableRow key={item.matricula}>
                <TableCell>{item.matricula}</TableCell>
                <TableCell>{item.nome}</TableCell>
                <TableCell>{item.totalKg.toFixed(2)}</TableCell>
                <TableCell>
                  {item.valorTotal.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <p className="text-center mt-6 text-muted-foreground">
          Nenhum dado para mostrar.
        </p>
      )}

      {/* Gráfico */}
      {relatorioData.length > 0 && (
        <div
          ref={chartRef}
          className="mt-10 h-64 w-full bg-white p-4 rounded-md shadow-md"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={relatorioData} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="nome" />
              <YAxis />
              <Tooltip
                formatter={(value: number) =>
                  value.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })
                }
              />
              <Bar dataKey="totalKg" fill="#22c55e" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  )
}

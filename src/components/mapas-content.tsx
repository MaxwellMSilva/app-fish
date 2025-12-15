"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "recharts"

export function MapasContent() {
  const [pesoFazenda, setPesoFazenda] = useState<number>(0)
  const [descontoUmidade, setDescontoUmidade] = useState<number>(3)

  const pesoLiquido =
    pesoFazenda > 0 ? pesoFazenda * ((100 - descontoUmidade) / 100) : 0

  return (
    <div className="space-y-6">

      <h1 className="text-2xl font-bold">Mapa de Compra</h1>

        {/* DADOS DA COMPRA */}
        <Card>
        <CardHeader>
            <CardTitle>Dados da Compra</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
            {/* LINHA 1 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* FORNECEDOR */}
            <div className="md:col-span-2">
                <Label>Fornecedor</Label>
                <Input placeholder="Fornecedor" />
            </div>

            {/* DATA DESPESCA */}
            <div>
                <Label>Data da Despesca</Label>
                <Input type="date" />
            </div>

            {/* DATA PAGAMENTO */}
            <div>
                <Label>Data de Pagamento</Label>
                <Input type="date" />
            </div>
            </div>

            {/* LINHA 2 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* LOTE (MENOR) */}
            <div className="md:col-span-1">
                <Label>Lote</Label>
                <Input placeholder="Lote" />
            </div>
            </div>
        </CardContent>
        </Card>

      {/* PESOS */}
      <Card>
        <CardHeader>
          <CardTitle>Pesos</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Input
            type="number"
            placeholder="Peso Fazenda (kg)"
            value={pesoFazenda}
            onChange={(e) => setPesoFazenda(Number(e.target.value))}
          />

          <Input
            type="number"
            placeholder="Desconto Umidade (%)"
            value={descontoUmidade}
            onChange={(e) => setDescontoUmidade(Number(e.target.value))}
          />

          <Input
            disabled
            value={pesoLiquido.toFixed(2)}
            placeholder="Peso Líquido (kg)"
          />
        </CardContent>
      </Card>

      {/* TABELA DE VALORES (MOCK) */}
      <Card>
        <CardHeader>
          <CardTitle>Valores da Compra</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="border rounded-md">
            <div className="grid grid-cols-3 font-semibold bg-gray-50 p-2">
              <span>Descrição</span>
              <span>Valor</span>
              <span>Total</span>
            </div>
            <div className="grid grid-cols-3 p-2 border-t">
              <Input placeholder="Ex: Valor por KG" />
              <Input placeholder="0,00" />
              <Input placeholder="0,00" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* NF / OBS */}
      <Card>
        <CardHeader>
          <CardTitle>Nota Fiscal / Observações</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="Número da NF" />
          <Textarea placeholder="Observações" />
        </CardContent>
      </Card>

      {/* AÇÕES */}
      <div className="flex gap-3 justify-end">
        <Button variant="outline">Cancelar</Button>
        <Button className="bg-green-500 hover:bg-green-600">
          Salvar
        </Button>
      </div>
    </div>
  )
}

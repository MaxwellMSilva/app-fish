"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

/* ================= TIPOS ================= */
type Option = { id: string; label: string }

type FaixaComValores = {
  faixaPesoId: string
  label: string
  pesoKg: number
  valorKg: number
  auto: boolean
}

/* ================= AUTOCOMPLETE ================= */
function Autocomplete({
  label,
  value,
  options,
  onChange,
  onSelect,
}: {
  label: string
  value: string
  options: Option[]
  onChange: (v: string) => void
  onSelect: (o: Option) => void
}) {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative space-y-1">
      <Label>{label}</Label>
      <Input
        value={value}
        onFocus={() => setOpen(true)}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
        onChange={(e) => {
          onChange(e.target.value)
          setOpen(true)
        }}
      />
      {open && (
        <div className="absolute z-20 w-full rounded-md border bg-background shadow max-h-56 overflow-auto">
          {options.map((opt) => (
            <div
              key={opt.id}
              className="cursor-pointer px-3 py-2 hover:bg-muted"
              onMouseDown={() => onSelect(opt)}
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

/* ================= TELA ================= */
export function MapasContent() {
  const [modoEdicao, setModoEdicao] = useState(false)
  const [mapaId, setMapaId] = useState<string | null>(null)
  const [mapaExistente, setMapaExistente] = useState<any | null>(null)

  const [confirmarOverwrite, setConfirmarOverwrite] = useState(false)
  const [payloadPendente, setPayloadPendente] = useState<any>(null)

  const isResetando = useRef(false)

  /* ---------- Identificação ---------- */
  const [lote, setLote] = useState("")
  const [dataDespesca, setDataDespesca] = useState("")
  const [prazoDias, setPrazoDias] = useState("")

  const [fornecedor, setFornecedor] = useState<Option | null>(null)
  const [fornecedorTexto, setFornecedorTexto] = useState("")
  const [fornecedores, setFornecedores] = useState<Option[]>([])

  /* ---------- Espécie ---------- */
  const [especie, setEspecie] = useState<Option | null>(null)
  const [especieTexto, setEspecieTexto] = useState("")
  const [especies, setEspecies] = useState<Option[]>([])

  /* ---------- Faixas ---------- */
  const [faixas, setFaixas] = useState<FaixaComValores[]>([])

  /* ---------- Pesos ---------- */
  const [pesoBruto, setPesoBruto] = useState("")
  const [descontoUmidade, setDescontoUmidade] = useState(3)

  const pesoLiquido =
    pesoBruto && Number(pesoBruto) > 0
      ? Number(pesoBruto) * ((100 - descontoUmidade) / 100)
      : 0

  const totalMapa = faixas.reduce(
    (acc, f) => acc + f.pesoKg * f.valorKg,
    0
  )

  useEffect(() => {
    if (faixas.length === 0) return

    setFaixas((prev) => {
      const somaManual = prev
        .filter((f) => !f.auto)
        .reduce((acc, f) => acc + f.pesoKg, 0)

      const restante = Math.max(pesoLiquido - somaManual, 0)

      return prev.map((f) =>
        f.auto ? { ...f, pesoKg: restante } : f
      )
    })
  }, [pesoLiquido])
 
  const dataVencimento =
    dataDespesca && prazoDias
      ? new Date(
          new Date(dataDespesca).setDate(
            new Date(dataDespesca).getDate() + Number(prazoDias)
          )
        )
          .toISOString()
          .split("T")[0]
      : ""

  /* ================= AUTOCOMPLETES ================= */
  useEffect(() => {
    if (!fornecedorTexto) return
    const t = setTimeout(async () => {
      const res = await fetch(`/api/fornecedores?q=${fornecedorTexto}`)
      setFornecedores(await res.json())
    }, 300)
    return () => clearTimeout(t)
  }, [fornecedorTexto])

  useEffect(() => {
    if (!especieTexto) return
    const t = setTimeout(async () => {
      const res = await fetch(`/api/especies?q=${especieTexto}`)
      setEspecies(await res.json())
    }, 300)
    return () => clearTimeout(t)
  }, [especieTexto])

  /* ================= FAIXAS DA ESPÉCIE ================= */
  useEffect(() => {
    if (!especie || modoEdicao) return

    async function loadFaixas() {
      const res = await fetch(`/api/especies/${especie.id}/faixas`)
      const data = await res.json()

      setFaixas(
        data.map((f: any, i: number) => ({
          faixaPesoId: f.id,
          label: f.label,
          pesoKg: 0,
          valorKg: 0,
          auto: i === data.length - 1,
        }))
      )
    }

    loadFaixas()
  }, [especie, modoEdicao])

  /* ================= BUSCA POR LOTE ================= */
  useEffect(() => {
    if (isResetando.current) return
    if (!lote || Number(lote) <= 0) return

    const t = setTimeout(async () => {
      const res = await fetch(`/api/mapaCompra/lote/${lote}`)
      if (!res.ok) return

      const json = await res.json()

      if (!json.found) {
        setModoEdicao(false)
        setMapaId(null)
        setMapaExistente(null)
        return
      }

      const data = json.mapa
      setMapaExistente(data)
      setModoEdicao(true)
      setMapaId(data.id)

      setFornecedor({
        id: data.fornecedor.id,
        label: `${data.fornecedor.nome} - ${data.fornecedor.fazenda}`,
      })
      setFornecedorTexto(`${data.fornecedor.nome} - ${data.fornecedor.fazenda}`)

      setEspecie({ id: data.especie.id, label: data.especie.nome })
      setEspecieTexto(data.especie.nome)

      setDataDespesca(data.dataDespesca.split("T")[0])
      setPrazoDias(String(data.prazoDias))
      setPesoBruto(String(data.pesoBruto))
      setDescontoUmidade(Number(data.descontoUmidade))

      const ultimaFaixaId = data.faixas.reduce(
        (max: any, atual: any) =>
          atual.faixaPeso.pesoMax > max.faixaPeso.pesoMax ? atual : max
      ).faixaPesoId
      
      setFaixas(
        data.faixas
          .sort(
            (a: any, b: any) =>
              a.faixaPeso.pesoMin - b.faixaPeso.pesoMin
          )
          .map((f: any) => ({
            faixaPesoId: f.faixaPesoId,
            label: `${f.faixaPeso.pesoMin} - ${f.faixaPeso.pesoMax} kg`,
            pesoKg: Number(f.pesoKg),
            valorKg: Number(f.valorKg),
            auto: f.faixaPesoId === ultimaFaixaId,
          }))
      )
    }, 400)

    return () => clearTimeout(t)
  }, [lote])

  /* ================= REGRA DA ÚLTIMA FAIXA ================= */
  function updatePesoManual(index: number, peso: number) {
    setFaixas((prev) => {
      const atualizadas = prev.map((f, i) =>
        i === index ? { ...f, pesoKg: Math.max(0, peso) } : f
      )

      const soma = atualizadas
        .filter((f) => !f.auto)
        .reduce((a, f) => a + f.pesoKg, 0)

      const restante = Math.max(pesoLiquido - soma, 0)

      return atualizadas.map((f) =>
        f.auto ? { ...f, pesoKg: restante } : f
      )
    })
  }

  /* ================= SUBMIT ================= */
  async function handleSubmit() {
    if (!fornecedor || !especie || !lote || !pesoBruto || !prazoDias) {
      toast.warning("Preencha todos os campos obrigatórios")
      return
    }

    const payload = {
      fornecedorId: fornecedor.id,
      especieId: especie.id,
      lote: Number(lote),
      dataDespesca,
      prazoDias: Number(prazoDias),
      pesoBruto: Number(pesoBruto),
      descontoUmidade,
      faixas,
    }

    if (modoEdicao) {
      setPayloadPendente(payload)
      setConfirmarOverwrite(true)
      return
    }

    await salvarMapa(payload)
  }

  async function salvarMapa(payload: any) {
    const res = await fetch(
      modoEdicao ? `/api/mapaCompra/${mapaId}` : "/api/mapaCompra",
      {
        method: modoEdicao ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    )

    if (!res.ok) {
      toast.error("Erro ao salvar mapa")
      return
    }

    toast.success(
      modoEdicao
        ? "Mapa atualizado com sucesso"
        : "Mapa criado com sucesso"
    )

    resetForm()
  }

  function resetForm() {
    isResetando.current = true
    setModoEdicao(false)
    setMapaId(null)
    setMapaExistente(null)
    setLote("")
    setDataDespesca("")
    setPrazoDias("")
    setFornecedor(null)
    setFornecedorTexto("")
    setEspecie(null)
    setEspecieTexto("")
    setFaixas([])
    setPesoBruto("")
    setDescontoUmidade(3)
    setTimeout(() => (isResetando.current = false), 300)
  }

  /* ================= UI ================= */
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">
        {modoEdicao ? "Editar Mapa de Compra" : "Novo Mapa de Compra"}
      </h1>

      {modoEdicao && (
        <div className="rounded-md border border-yellow-400 bg-yellow-50 px-4 py-2 text-sm text-yellow-800">
          ⚠️ Você está editando um mapa existente (Lote {lote})
        </div>
      )}

      {/* IDENTIFICAÇÃO */}
      <Card>
        <CardHeader><CardTitle>Identificação</CardTitle></CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Autocomplete
            label="Fornecedor"
            value={fornecedorTexto}
            options={fornecedores}
            onChange={setFornecedorTexto}
            onSelect={(o) => {
              setFornecedor(o)
              setFornecedorTexto(o.label)
            }}
          />

          <Input
            placeholder="Lote"
            value={lote}
            disabled={modoEdicao}
            className={modoEdicao ? "bg-muted cursor-not-allowed" : ""}
            onChange={(e) => setLote(e.target.value)}
          />

          <Input
            type="date"
            value={dataDespesca}
            onChange={(e) => setDataDespesca(e.target.value)}
          />

          <Input
            placeholder="Prazo (dias)"
            value={prazoDias}
            onChange={(e) => setPrazoDias(e.target.value)}
          />

          <Input disabled value={dataVencimento} />
        </CardContent>
      </Card>

      {/* ESPÉCIE */}
      <Card>
        <CardHeader><CardTitle>Espécie</CardTitle></CardHeader>
        <CardContent>
          <Autocomplete
            label="Espécie"
            value={especieTexto}
            options={especies}
            onChange={setEspecieTexto}
            onSelect={(o) => {
              setEspecie(o)
              setEspecieTexto(o.label)
            }}
          />
        </CardContent>
      </Card>

      {/* PESOS */}
      <Card>
        <CardHeader><CardTitle>Pesos</CardTitle></CardHeader>
        <CardContent className="grid grid-cols-3 gap-4">
          <Input
            placeholder="Peso Bruto"
            value={pesoBruto}
            onChange={(e) => setPesoBruto(e.target.value)}
          />
          <Input
            placeholder="Desconto (%)"
            value={descontoUmidade}
            onChange={(e) => setDescontoUmidade(Number(e.target.value))}
          />
          <Input disabled value={pesoLiquido.toFixed(2)} />
        </CardContent>
      </Card>

      {/* FAIXAS */}
      {faixas.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Distribuição por Faixa</CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            {faixas.map((f, i) => (
              <div
                key={f.faixaPesoId}
                className="grid grid-cols-3 gap-4 items-center"
              >
                <Input disabled value={f.label} />

                <Input
                  type="number"
                  disabled={f.auto}
                  value={f.pesoKg}
                  onChange={(e) =>
                    updatePesoManual(i, Number(e.target.value))
                  }
                />

                <Input
                  type="number"
                  value={f.valorKg}
                  onChange={(e) => {
                    const v = [...faixas]
                    v[i].valorKg = Number(e.target.value)
                    setFaixas(v)
                  }}
                />
              </div>
            ))}

            {/* ===== RESUMO FINANCEIRO ===== */}
            <div className="mt-4 rounded-md border bg-muted/40 p-4">
              <div className="flex justify-between text-sm">
                <span className="font-medium">Peso líquido total</span>
                <span>{pesoLiquido.toFixed(2)} kg</span>
              </div>

              <div className="flex justify-between text-sm mt-1">
                <span className="font-medium">Valor total do mapa</span>
                <span className="font-bold text-green-600">
                  R$ {totalMapa.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                  })}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="flex justify-end gap-3">
        <Button variant="outline" onClick={resetForm}>
          Cancelar
        </Button>
        <Button onClick={handleSubmit}>
          Salvar Mapa
        </Button>
      </div>

      {/* MODAL CONFIRMAÇÃO + RESUMO */}
      <Dialog open={confirmarOverwrite} onOpenChange={setConfirmarOverwrite}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Sobrescrever mapa existente?</DialogTitle>
            <DialogDescription>
              Revise os dados abaixo antes de confirmar.
            </DialogDescription>
          </DialogHeader>

          {mapaExistente && (
            <div className="space-y-4 text-sm">
              <strong>Resumo do Mapa Atual</strong>

              <div className="grid grid-cols-3 gap-4">
                <div>Peso Bruto: {mapaExistente.pesoBruto}</div>
                <div>Desconto: {mapaExistente.descontoUmidade}%</div>
                <div>Peso Líquido: {mapaExistente.pesoLiquido}</div>
              </div>
            </div>
          )}

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setConfirmarOverwrite(false)}
            >
              Cancelar
            </Button>
            <Button
              className="bg-red-600 hover:bg-red-700"
              onClick={() => {
                setConfirmarOverwrite(false)
                salvarMapa(payloadPendente)
              }}
            >
              Sim, sobrescrever
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

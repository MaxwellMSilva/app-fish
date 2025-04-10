"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { toast } from "sonner"
import { CheckCircle, Upload, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"

type Corte = {
  id: string
  nome: string
  imagem?: string | null
}

type Operador = {
  id: string
  nome: string
}

type ProcessoFormData = {
  tipoPesagem: "inicial" | "final"
  operadorId: string
  peso: string
}

type PesagemFormProps = {
  corte: Corte | null
  onSuccess: () => void
  onCancel: () => void
}

export function PesagemForm({ corte, onSuccess, onCancel }: PesagemFormProps) {
  const [processoFormData, setProcessoFormData] = useState<ProcessoFormData>({
    tipoPesagem: "inicial",
    operadorId: "",
    peso: "",
  })
  const [submittingProcesso, setSubmittingProcesso] = useState(false)
  const [operadorEncontrado, setOperadorEncontrado] = useState<Operador | null>(null)
  const [verificandoOperador, setVerificandoOperador] = useState(false)
  const [operadorStatus, setOperadorStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  // Verificar operador quando o código é digitado
  const verificarOperador = async (id: string) => {
    if (!id.trim()) {
      setOperadorEncontrado(null)
      setOperadorStatus("idle")
      return
    }
  
    try {
      setVerificandoOperador(true)
      setOperadorStatus("loading")
  
      const url = `/api/operadores?id=${encodeURIComponent(id)}`
      console.log("Verificando operador na URL:", url)
  
      const response = await fetch(url)
  
      if (!response.ok) {
        if (response.status === 404) {
          setOperadorEncontrado(null)
          setOperadorStatus("error")
          return
        }
        throw new Error("Falha ao verificar operador")
      }
  
      const data = await response.json()
      console.log("Resposta da API:", data)
  
      if (data.exists && data.operador) {
        setOperadorEncontrado(data.operador)
        setOperadorStatus("success")
      } else {
        setOperadorEncontrado(null)
        setOperadorStatus("error")
      }
    } catch (error) {
      console.error("Erro ao verificar operador:", error)
      setOperadorEncontrado(null)
      setOperadorStatus("error")
    } finally {
      setVerificandoOperador(false)
    }
  }

  // Manipular mudanças no formulário de processo
  const handleProcessoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setProcessoFormData((prev) => ({ ...prev, [id]: value }))

    // Verificar operador quando o código é digitado
    if (id === "operadorId" && value.trim()) {
      // Usar debounce para evitar muitas requisições
      const timeoutId = setTimeout(() => {
        verificarOperador(value)
      }, 300)

      return () => clearTimeout(timeoutId)
    }
  }

  // Efeito para verificar operador quando o código muda
  useEffect(() => {
    if (!processoFormData.operadorId.trim()) return
  
    const timeoutId = setTimeout(() => {
      verificarOperador(processoFormData.operadorId)
    }, 300)
  
    return () => clearTimeout(timeoutId)
  }, [processoFormData.operadorId])

  // Manipular mudança no tipo de pesagem
  const handleTipoPesagemChange = (value: "inicial" | "final") => {
    setProcessoFormData((prev) => ({ ...prev, tipoPesagem: value }))
  }

  // Enviar formulário de processo
  const handleProcessoSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!corte) return

    // Validar formulário
    if (!processoFormData.operadorId.trim()) {
      toast.error("O código do operador é obrigatório")
      return
    }

    if (operadorStatus === "error") {
      toast.error("Operador não encontrado. Por favor, verifique o código.")
      return
    }

    if (!processoFormData.peso.trim()) {
      toast.error("O peso é obrigatório")
      return
    }

    const pesoNum = Number.parseFloat(processoFormData.peso)
    if (isNaN(pesoNum) || pesoNum <= 0) {
      toast.error("Por favor, insira um peso válido")
      return
    }

    try {
      setSubmittingProcesso(true)

      // Enviar dados para a API
      const response = await fetch("/api/pesagens", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          corteId: corte.id,
          operadorId: processoFormData.operadorId,
          peso: pesoNum,
          tipoPesagem: processoFormData.tipoPesagem,
        }),
      })

      if (!response.ok) {
        let errorMessage = "Falha ao registrar pesagem"
        try {
          const errorData = await response.json()
          if (errorData && errorData.error) {
            errorMessage = errorData.error
          }
        } catch (parseError) {
          console.error("Erro ao processar resposta de erro:", parseError)
        }
        throw new Error(errorMessage)
      }

      const data = await response.json()
      console.log("Pesagem registrada:", data.pesagem)

      toast.success(`Processo de pesagem ${processoFormData.tipoPesagem} registrado com sucesso`)

      // Resetar o formulário para o próximo uso
      setProcessoFormData({
        tipoPesagem: "inicial",
        operadorId: "",
        peso: "",
      })
      setOperadorEncontrado(null)
      setOperadorStatus("idle")

      onSuccess()
    } catch (error: any) {
      console.error("Erro ao registrar processo:", error)
      toast.error(error.message || "Não foi possível registrar o processo")
    } finally {
      setSubmittingProcesso(false)
    }
  }

  const handleCancel = () => {
    setProcessoFormData({
      tipoPesagem: "inicial",
      operadorId: "",
      peso: "",
    })
    setOperadorEncontrado(null)
    setOperadorStatus("idle")
    onCancel()
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Iniciar Processo de Pesagem</DialogTitle>
      </DialogHeader>
      <form onSubmit={handleProcessoSubmit}>
        <div className="grid gap-6 py-4">
          {corte && (
            <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-md">
              {corte.imagem ? (
                <img
                  src={corte.imagem || "/placeholder.svg"}
                  alt={corte.nome}
                  className="w-12 h-12 object-cover rounded-md"
                />
              ) : (
                <div className="w-12 h-12 bg-gray-200 rounded-md flex items-center justify-center">
                  <Upload className="h-6 w-6 text-gray-400" />
                </div>
              )}
              <div>
                <h3 className="font-medium">{corte.nome}</h3>
                <p className="text-sm text-gray-500">Código: {corte.id.substring(0, 8)}</p>
              </div>
            </div>
          )}

          <div className="space-y-2">
            <Label>Tipo de Pesagem</Label>
            <RadioGroup
              value={processoFormData.tipoPesagem}
              onValueChange={(value) => handleTipoPesagemChange(value as "inicial" | "final")}
              className="flex gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="inicial" id="pesagem-inicial" />
                <Label htmlFor="pesagem-inicial">Pesagem Inicial</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="final" id="pesagem-final" />
                <Label htmlFor="pesagem-final">Pesagem Final</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="operadorId">Código do Operador</Label>
            <div className="relative">
            <Input
              id="operadorId"
              name="operadorId"
              value={processoFormData.operadorId}
              onChange={handleProcessoChange}
              placeholder="Digite ou bipe o código do operador"
              className={`pr-10 ${
                operadorStatus === "success"
                  ? "border-green-500 focus-visible:ring-green-500"
                  : operadorStatus === "error" && processoFormData.operadorId
                  ? "border-red-500 focus-visible:ring-red-500"
                  : ""
              }`}
              required
              autoComplete="off"
            />
              {operadorStatus === "loading" && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <div className="animate-spin h-4 w-4 border-2 border-gray-500 border-t-transparent rounded-full"></div>
                </div>
              )}
              {operadorStatus === "success" && (
                <CheckCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500 h-5 w-5" />
              )}
              {operadorStatus === "error" && processoFormData.operadorId && (
                <XCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500 h-5 w-5" />
              )}
            </div>
            {operadorStatus === "success" && operadorEncontrado && (
              <p className="text-sm text-green-600 mt-1">
                Operador: <span className="font-medium">{operadorEncontrado.nome}</span>
              </p>
            )}
            {operadorStatus === "error" && processoFormData.operadorId && (
              <p className="text-sm text-red-600 mt-1">Operador não encontrado</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="peso">Peso (kg)</Label>
            <Input
              id="peso"
              name="peso"
              type="number"
              min="0.01"
              step="0.01"
              value={processoFormData.peso}
              onChange={handleProcessoChange}
              placeholder="Digite o peso em kg"
              required
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="button" variant="outline" onClick={handleCancel} disabled={submittingProcesso}>
            Cancelar
          </Button>
          <Button
            type="submit"
            className="bg-green-500 hover:bg-green-600"
            disabled={submittingProcesso || (!!processoFormData.operadorId && operadorStatus === "error")}
          >
            {submittingProcesso ? "Salvando..." : "Confirmar"}
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}

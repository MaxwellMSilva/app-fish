"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"

type OperadorFormProps = {
  onSuccess: () => void
  onCancel: () => void
  modo: "novo" | "editar"
  operadorEdit?: {
    matricula: number
    nome: string
    valor: number
  }
}

export function OperadorForm({ onSuccess, onCancel, modo, operadorEdit }: OperadorFormProps) {
  const [formData, setFormData] = useState({
    matricula: "",
    nome: "",
    valor: "",
    valorNumerico: 0,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  // Preencher dados se estiver editando
  useEffect(() => {
    if (modo === "editar" && operadorEdit) {
      setFormData({
        matricula: operadorEdit.matricula.toString(),
        nome: operadorEdit.nome,
        valor: operadorEdit.valor.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        }),
        valorNumerico: operadorEdit.valor,
      })
    } else {
      // reset se for novo
      setFormData({ matricula: "", nome: "", valor: "", valorNumerico: 0 })
    }
  }, [modo, operadorEdit])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    let formattedValue = value

    if (name === "nome") {
      formattedValue = value
        .toUpperCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^A-Z\s]/g, "")
      setFormData((prev) => ({ ...prev, nome: formattedValue }))
      return
    }

    if (name === "matricula") {
      formattedValue = value.replace(/\D/g, "")
      if (formattedValue.length > 3) {
        formattedValue = formattedValue.slice(0, 3)
      }
      setFormData((prev) => ({ ...prev, matricula: formattedValue }))
      return
    }

    if (name === "valor") {
      const numeric = value.replace(/\D/g, "")
      const floatValue = parseFloat(numeric) / 100

      const formatted = floatValue.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })

      setFormData((prev) => ({
        ...prev,
        valor: formatted,
        valorNumerico: floatValue,
      }))
      return
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      setIsSubmitting(true)

      const url =
        modo === "novo"
          ? "/api/operadores"
          : `/api/operadores/${formData.matricula}`

      const method = modo === "novo" ? "POST" : "PUT"

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          matricula: parseInt(formData.matricula, 10),
          nome: formData.nome,
          valor: formData.valorNumerico,
        }),
      })

      if (!response.ok) {
        let errorMessage = modo === "novo" ? "Falha ao criar operador" : "Falha ao atualizar operador"
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

      toast.success(modo === "novo" ? "Operador criado com sucesso" : "Operador atualizado com sucesso", {
        duration: 2000,
      })

      onSuccess()
    } catch (error: any) {
      console.error("Erro no formulário:", error)
      toast.error(error.message || "Erro inesperado", { duration: 2000 })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleCancel = () => {
    setFormData({ matricula: "", nome: "", valor: "", valorNumerico: 0 })
    onCancel()
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{modo === "novo" ? "Adicionar Novo Operador" : "Editar Operador"}</DialogTitle>
      </DialogHeader>

      <form onSubmit={handleSubmit} ref={formRef}>
        <div className="space-y-4 py-4">
          {/* Linha com Matrícula e Valor */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <Label htmlFor="matricula" className="font-semibold text-gray-700 mb-1">
                Matrícula:
              </Label>
              <Input
                id="matricula"
                name="matricula"
                placeholder="Digite a matrícula..."
                value={formData.matricula}
                onChange={handleChange}
                required
                disabled={modo === "editar"} // desativar ao editar
                className={`border ${
                  formData.matricula ? "border-green-500" : "border-gray-300"
                } rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 transition`}
              />
            </div>

            <div className="flex flex-col">
              <Label htmlFor="valor" className="font-semibold text-gray-700 mb-1">
                Valor:
              </Label>
              <Input
                id="valor"
                name="valor"
                placeholder="Digite o valor..."
                value={formData.valor}
                onChange={handleChange}
                required
                className={`border ${
                  formData.valor ? "border-green-500" : "border-gray-300"
                } rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 transition text-right`}
              />
            </div>
          </div>

          <div className="flex flex-col">
            <Label htmlFor="nome" className="font-semibold text-gray-700 mb-1">
              Nome:
            </Label>
            <Input
              id="nome"
              name="nome"
              placeholder="Digite o nome do operador..."
              value={formData.nome}
              onChange={handleChange}
              required
              className={`border ${
                formData.nome ? "border-green-500" : "border-gray-300"
              } rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 transition`}
            />
          </div>
        </div>

        <DialogFooter className="mt-6">
          <Button
            type="button"
            variant="outline"
            onClick={handleCancel}
            disabled={isSubmitting}
            className="cursor-pointer h-10 px-6 font-semibold"
          >
            Cancelar
          </Button>
          <Button
            type="submit"
            className="cursor-pointer bg-green-500 hover:bg-green-600 text-white h-10 px-6 font-semibold"
            disabled={isSubmitting || !formData.nome}
          >
            {isSubmitting ? "Salvando..." : "Salvar"}
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}

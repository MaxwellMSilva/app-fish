"use client"

import type React from "react"

import { useState } from "react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"

type NovoCorteFormProps = {
  onSuccess: () => void
  onCancel: () => void
}

export function NovoCorteForm({ onSuccess, onCancel }: NovoCorteFormProps) {
  const [formData, setFormData] = useState({ nome: "", imagem: "" })
  const [previewImage, setPreviewImage] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Manipular mudanças no formulário
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Manipular upload de imagem
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Validar tipo de arquivo
    if (!file.type.includes("image/")) {
      toast.error("Por favor, selecione uma imagem válida")
      return
    }

    // Criar URL para preview
    const reader = new FileReader()
    reader.onload = () => {
      setPreviewImage(reader.result as string)
      setFormData((prev) => ({ ...prev, imagem: reader.result as string }))
    }
    reader.readAsDataURL(file)
  }

  // Enviar formulário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/cortes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: formData.nome,
          imagem: formData.imagem || null,
        }),
      })

      if (!response.ok) {
        let errorMessage = "Falha ao criar corte"
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

      toast.success("Corte criado com sucesso")
      onSuccess()
    } catch (error: any) {
      console.error("Erro ao criar corte:", error)
      toast.error(error.message || "Não foi possível criar o corte")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleCancel = () => {
    setFormData({ nome: "", imagem: "" })
    setPreviewImage(null)
    onCancel()
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Adicionar Novo Corte</DialogTitle>
      </DialogHeader>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="nome" className="text-right">
              Nome
            </Label>
            <Input
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              className="col-span-3"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-start gap-4">
            <Label htmlFor="imagem" className="text-right pt-2">
              Imagem
            </Label>
            <div className="col-span-3">
              <Input
                id="imagem"
                name="imagem-upload"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="mb-2"
              />
              {previewImage && (
                <div className="mt-2">
                  <p className="text-sm text-gray-500 mb-1">Preview:</p>
                  <img
                    src={previewImage || "/placeholder.svg"}
                    alt="Preview"
                    className="w-32 h-32 object-cover rounded-md border"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="button" variant="outline" onClick={handleCancel} disabled={isSubmitting}>
            Cancelar
          </Button>
          <Button type="submit" className="bg-green-500 hover:bg-green-600" disabled={isSubmitting}>
            {isSubmitting ? "Salvando..." : "Salvar"}
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}

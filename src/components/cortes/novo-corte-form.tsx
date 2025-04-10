"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
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
  const dialogContentRef = useRef<HTMLDivElement>(null); // Ref para o DialogContent
  const formRef = useRef<HTMLFormElement>(null) // Ref para o formulário

  // Manipular mudanças no formulário
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    const formattedValue = value
    .toUpperCase() // Converte para maiúsculas
    .normalize("NFD") // Normaliza caracteres com acentos
    .replace(/[\u0300-\u036f]/g, "") // Remove acentos

    setFormData((prev) => ({ ...prev, [name]: formattedValue }))
  }

  // Manipular upload de imagem
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Validar tipo de arquivo
    if (!file.type.includes("image/")) {
      toast.error("Por favor, selecione uma imagem válida", {
        duration: 2000
      })
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

      toast.success("Corte criado com sucesso", {
        duration: 2000
      })
      onSuccess()

      setFormData({ nome: "", imagem: "" })
      setPreviewImage(null)
    } catch (error: any) {
      console.error("Erro ao criar corte:", error)
      toast.error(error.message || "Não foi possível criar o corte", {
        duration: 2000
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleCancel = () => {
    setFormData({ nome: "", imagem: "" })
    setPreviewImage(null)
    onCancel()
  }

  // Manipulador para fechar quando clicar fora
  const handleClickOutside = (e: MouseEvent) => {
    if (formRef.current && !formRef.current.contains(e.target as Node)) {
      setFormData({
        nome: "",
        imagem: ""
      })
      setPreviewImage(null)
    }
  }
  
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <DialogContent ref={dialogContentRef}>
      <DialogHeader>
        <DialogTitle>Cadastrar Novo Corte</DialogTitle>
      </DialogHeader>
      <form onSubmit={handleSubmit} ref={formRef}>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="nome" className="text-right font-bold">
              Nome:
            </Label>
            <Input
              id="nome"
              name="nome"
              placeholder="Nome do corte..."
              value={formData.nome}
              onChange={handleChange}
              className="col-span-3"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-start gap-4">
            <Label htmlFor="imagem" className="text-right pt-2 font-bold">
              Imagem:
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
          <Button type="button" variant="outline" onClick={handleCancel} disabled={isSubmitting} className="h-10 w-25">
            Cancelar
          </Button>
          <Button type="submit" 
                  className="bg-green-500 hover:bg-green-600 h-10 w-25" 
                  disabled={isSubmitting || !formData.nome}
          >
            {isSubmitting ? "Salvando..." : "Salvar"}
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}

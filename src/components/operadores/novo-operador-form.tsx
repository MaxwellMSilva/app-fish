"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"

type Operador = {
    onSuccess: () => void
    onCancel: () => void
}

export function NovoOperadorForm({ onSuccess, onCancel }: Operador) {
  const [formData, setFormData] = useState({ nome: "" })
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
    .replace(/[^A-Z]/g, ""); // Remove tudo que não seja letra

    setFormData((prev) => ({ ...prev, [name]: formattedValue }))
  }

  // Enviar formulário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
        setIsSubmitting(true)

        const response = await fetch("/api/operadores", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
            nome: formData.nome
            }),
        })

        if (!response.ok) {
            let errorMessage = "Falha ao criar operador"
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

        toast.success("Operador criado com sucesso", {
          duration: 2000
        })
        onSuccess()

        setFormData({ nome: "" })
    } catch (error: any) {
      console.error("Erro ao criar operador:", error)
      toast.error(error.message || "Não foi possível criar o corte", {
        duration: 2000
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleCancel = () => {
    setFormData({ nome: "" })
    onCancel()
  }

  // Manipulador para fechar quando clicar fora
  const handleClickOutside = (e: MouseEvent) => {
    if (formRef.current && !formRef.current.contains(e.target as Node)) {
      setFormData({
        nome: ""
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
            <DialogTitle>Adicionar Novo Operador</DialogTitle>
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
                  placeholder="Digite o nome do operador..."
                  value={formData.nome}
                  onChange={handleChange}
                  className="col-span-3"
                  required
                />
              </div>
              
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={handleCancel} disabled={isSubmitting} className="h-10 w-25 cursor-pointer font-semibold">
                Cancelar
              </Button>
              <Button type="submit" 
                      className="bg-green-500 hover:bg-green-600 h-10 w-25 cursor-pointer font-semibold"
                      disabled={isSubmitting || !formData.nome}
                      >
                {isSubmitting ? "Salvando..." : "Salvar"}
              </Button>
            </DialogFooter>
        </form>
        
    </DialogContent>
  )
}

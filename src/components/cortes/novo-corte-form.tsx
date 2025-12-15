"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

type Corte = {
  id: string
  nome: string
  imagem?: string | null
}

type NovoCorteFormProps = {
  corte?: Corte | null
  onSuccess: () => void
  onCancel: () => void
}

export function NovoCorteForm({ corte, onSuccess, onCancel }: NovoCorteFormProps) {
  const [formData, setFormData] = useState({ nome: "", imagem: "" })
  const [previewImage, setPreviewImage] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [nomeErro, setNomeErro] = useState<string | null>(null)
  const [nomeValido, setNomeValido] = useState(false)
  const [checkingNome, setCheckingNome] = useState(false)

  const debounceRef = useRef<NodeJS.Timeout | null>(null)
  const isEdit = Boolean(corte)

  /* ===== Preencher dados ao editar ===== */
  useEffect(() => {
    if (corte) {
      setFormData({
        nome: corte.nome,
        imagem: corte.imagem || "",
      })
      setPreviewImage(corte.imagem || null)
      validarNome(corte.nome)
    } else {
      setFormData({ nome: "", imagem: "" })
      setPreviewImage(null)
      setNomeErro(null)
      setNomeValido(false)
    }
  }, [corte])

  /* ===== Validação de nome ===== */
  const validarNome = async (nome: string) => {
    if (!nome || nome.length < 2) {
      setNomeErro(null)
      setNomeValido(false)
      return
    }

    setCheckingNome(true)

    try {
      const params = new URLSearchParams({
        nome,
        id: corte?.id ?? "",
      })

      const res = await fetch(`/api/cortes/check-nome?${params}`)
      const data = await res.json()

      if (data.exists) {
        setNomeErro("Já existe um corte com esse nome")
        setNomeValido(false)
      } else {
        setNomeErro(null)
        setNomeValido(true)
      }
    } catch {
      setNomeErro(null)
      setNomeValido(false)
    } finally {
      setCheckingNome(false)
    }
  }

  const handleNomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
      .toUpperCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")

    setFormData((prev) => ({ ...prev, nome: value }))
    setNomeErro(null)
    setNomeValido(false)

    if (debounceRef.current) clearTimeout(debounceRef.current)

    debounceRef.current = setTimeout(() => {
      validarNome(value)
    }, 300)
  }

  /* ===== Upload imagem ===== */
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file || !file.type.includes("image/")) {
      toast.error("Selecione uma imagem válida")
      return
    }

    const reader = new FileReader()
    reader.onload = () => {
      setPreviewImage(reader.result as string)
      setFormData((prev) => ({ ...prev, imagem: reader.result as string }))
    }
    reader.readAsDataURL(file)
  }

  /* ===== Submit ===== */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (nomeErro || !nomeValido) return

    setIsSubmitting(true)

    try {
      const res = await fetch(
        isEdit ? `/api/cortes/${corte!.id}` : "/api/cortes",
        {
          method: isEdit ? "PUT" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            nome: formData.nome,
            imagem: formData.imagem || null,
          }),
        }
      )

      if (res.status === 409) {
        setNomeErro("Já existe um corte com esse nome")
        setNomeValido(false)
        return
      }

      if (!res.ok) throw new Error()

      toast.success(isEdit ? "Corte atualizado com sucesso" : "Corte criado com sucesso")
      onSuccess()
    } catch {
      toast.error("Erro ao salvar o corte")
    } finally {
      setIsSubmitting(false)
    }
  }

  /* ===== Estilo da borda ===== */
  const nomeBorderClass = checkingNome
    ? "border-yellow-400 focus:ring-yellow-400"
    : nomeErro
    ? "border-red-500 focus:ring-red-500"
    : nomeValido
    ? "border-green-500 focus:ring-green-500"
    : "border-gray-300 focus:ring-green-500"

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>
          {isEdit ? "Editar Corte" : "Cadastrar Novo Corte"}
        </DialogTitle>
      </DialogHeader>

      <form onSubmit={handleSubmit}>
        <div className="space-y-4 py-4">
          {/* NOME */}
          <div className="flex flex-col">
            <Label className="font-semibold text-gray-700 mb-1">
              Nome:
            </Label>
            <Input
              placeholder="Digite o nome do corte..."
              value={formData.nome}
              onChange={handleNomeChange}
              className={`border rounded-md px-3 py-2 focus:outline-none focus:ring-2 transition ${nomeBorderClass}`}
              required
            />
            {checkingNome && (
              <span className="text-xs text-yellow-600 mt-1">
                Verificando disponibilidade…
              </span>
            )}
            {nomeErro && (
              <span className="text-xs text-red-500 mt-1">
                {nomeErro}
              </span>
            )}
          </div>

          {/* IMAGEM */}
          <div className="flex flex-col">
            <Label className="font-semibold text-gray-700 mb-1">
              Imagem:
            </Label>
            <Input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="cursor-pointer"
            />

            {previewImage && (
              <img
                src={previewImage}
                alt="Preview"
                className="mt-2 w-32 h-32 object-cover rounded-md border"
              />
            )}
          </div>
        </div>

        <DialogFooter className="mt-6">
          <Button
            type="button"
            variant="outline"
            onClick={onCancel}
            disabled={isSubmitting}
            className="cursor-pointer h-10 px-6 font-semibold"
          >
            Cancelar
          </Button>

          <Button
            type="submit"
            disabled={isSubmitting || !nomeValido}
            className="cursor-pointer bg-green-500 hover:bg-green-600 text-white h-10 px-6 font-semibold"
          >
            {isSubmitting ? "Salvando..." : "Salvar"}
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}

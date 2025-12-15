"use client"

import { useState, useEffect } from "react"
import { Search, Plus, Trash2, Pencil, Upload, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { toast } from "sonner"

import { NovoCorteForm } from "@/components/cortes/novo-corte-form"
import { PesagemForm } from "@/components/pesagens/novo-pesagem-form"
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog"

type Corte = {
  id: string
  nome: string
  imagem?: string | null
}

export function CortesContent() {
  const [cortes, setCortes] = useState<Corte[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")

  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isProcessoDialogOpen, setIsProcessoDialogOpen] = useState(false)

  const [corteAtual, setCorteAtual] = useState<Corte | null>(null)
  const [corteParaEditar, setCorteParaEditar] = useState<Corte | null>(null)

  const [isDeleteOpen, setIsDeleteOpen] = useState(false)
  const [corteParaExcluir, setCorteParaExcluir] = useState<Corte | null>(null)
  const [deleting, setDeleting] = useState(false)

  const removeAccents = (str: string) =>
    str.normalize("NFD").replace(/[\u0300-\u036f]/g, "")

  const fetchCortes = async () => {
    try {
      setLoading(true)
      const res = await fetch("/api/cortes")
      if (!res.ok) throw new Error()
      setCortes(await res.json())
    } catch {
      toast.error("Não foi possível carregar os cortes")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCortes()
  }, [])

  const filteredCortes = cortes.filter(
    (c) =>
      removeAccents(c.nome.toUpperCase()).includes(removeAccents(searchTerm)) ||
      removeAccents(c.id.toUpperCase()).includes(removeAccents(searchTerm))
  )

  const handleConfirmDelete = async () => {
    if (!corteParaExcluir) return
    setDeleting(true)

    try {
      const res = await fetch(`/api/cortes/${corteParaExcluir.id}`, {
        method: "DELETE",
      })
      if (!res.ok) throw new Error()

      setCortes((prev) => prev.filter((c) => c.id !== corteParaExcluir.id))
      toast.success("Corte excluído com sucesso")
    } catch {
      toast.error("Erro ao excluir corte")
    } finally {
      setDeleting(false)
      setIsDeleteOpen(false)
      setCorteParaExcluir(null)
    }
  }

  return (
    <>
      {/* HEADER */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-6">
        <h1 className="text-2xl font-bold">Cortes</h1>

        <Button
          className="bg-green-500 hover:bg-green-600 font-bold cursor-pointer"
          onClick={() => {
            setCorteParaEditar(null)
            setIsDialogOpen(true)
          }}
        >
          <Plus className="mr-2 h-4 w-4" />
          Novo Corte
        </Button>
      </div>

      {/* BUSCA */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <Input
            className="pl-10 w-full"
            placeholder="Buscar cortes..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(removeAccents(e.target.value.toUpperCase()))
            }
          />
        </div>
      </div>

      {/* LISTA */}
      <div className="bg-white border rounded-md p-4">
        {/* CONTADOR */}
        <p className="text-sm text-gray-500 mb-4">
          Total de {filteredCortes.length} cortes encontrados
        </p>

        {loading ? (
          <div className="py-8 text-center">Carregando...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredCortes.map((corte) => (
              <Card key={corte.id} className="overflow-hidden hover:shadow-md">
                <div className="aspect-[3/2] bg-gray-100">
                  {corte.imagem ? (
                    <img src={corte.imagem} className="w-full h-full object-cover" />
                  ) : (
                    <div className="h-full flex items-center justify-center">
                      <Upload className="h-8 w-8 text-gray-400" />
                    </div>
                  )}
                </div>

                <CardContent className="p-3 space-y-1">
                  <h3 className="font-semibold">{corte.nome}</h3>
                  <p className="text-xs text-gray-500">
                    Código: {corte.id.slice(0, 8)}
                  </p>

                  <div className="flex gap-2 pt-2">
                    <Button
                      size="icon"
                      variant="outline"
                      className="flex-1 bg-amber-200 hover:bg-amber-300 cursor-pointer"
                      onClick={() => {
                        setCorteParaEditar(corte)
                        setIsDialogOpen(true)
                      }}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>

                    <Button
                      size="icon"
                      variant="destructive"
                      className="flex-1 bg-red-400 hover:bg-red-500 cursor-pointer"
                      onClick={() => {
                        setCorteParaExcluir(corte)
                        setIsDeleteOpen(true)
                      }}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>

                <CardFooter className="p-3 pt-1">
                  <Button
                    className="w-full bg-green-500 hover:bg-green-600 cursor-pointer"
                    onClick={() => {
                      setCorteAtual(corte)
                      setIsProcessoDialogOpen(true)
                    }}
                  >
                    <Play className="mr-2 h-4 w-4" />
                    Iniciar Processo
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* MODAIS */}
      <Dialog
        open={isDialogOpen}
        onOpenChange={(open) => {
          setIsDialogOpen(open)
          if (!open) setCorteParaEditar(null)
        }}
      >
        <NovoCorteForm
          key={corteParaEditar?.id ?? "novo"}
          corte={corteParaEditar}
          onSuccess={() => {
            fetchCortes()
            setIsDialogOpen(false)
            setCorteParaEditar(null)
          }}
          onCancel={() => {
            setIsDialogOpen(false)
            setCorteParaEditar(null)
          }}
        />
      </Dialog>

      <Dialog open={isProcessoDialogOpen} onOpenChange={setIsProcessoDialogOpen}>
        <PesagemForm
          corte={corteAtual}
          onSuccess={() => {
            setIsProcessoDialogOpen(false)
            setCorteAtual(null)
          }}
          onCancel={() => {
            setIsProcessoDialogOpen(false)
            setCorteAtual(null)
          }}
        />
      </Dialog>

      {/* MODAL EXCLUSÃO */}
      <AlertDialog open={isDeleteOpen} onOpenChange={setIsDeleteOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Excluir corte</AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja excluir o corte{" "}
              <strong>{corteParaExcluir?.nome}</strong>?  
              Essa ação não pode ser desfeita.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter className="flex flex-col-reverse sm:flex-row sm:justify-end gap-2">
            <AlertDialogCancel className="cursor-pointer">
              Cancelar
            </AlertDialogCancel>

            <AlertDialogAction
              className="bg-red-500 hover:bg-red-600 cursor-pointer"
              onClick={handleConfirmDelete}
              disabled={deleting}
            >
              {deleting ? "Excluindo..." : "Excluir"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}

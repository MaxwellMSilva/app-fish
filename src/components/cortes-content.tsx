"use client"

import { useState, useEffect } from "react"
import { Search, Plus, Trash2, Pencil, Upload, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog } from "@/components/ui/dialog"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { toast } from "sonner"

import { NovoCorteForm } from "@/components/cortes/novo-corte-form"
import { PesagemForm } from "@/components/pesagens/novo-pesagem-form"

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

  const removeAccents = (str: string) =>
    str.normalize("NFD").replace(/[\u0300-\u036f]/g, "")

  const fetchCortes = async () => {
    try {
      setLoading(true)
      const response = await fetch("/api/cortes")
      if (!response.ok) throw new Error()
      setCortes(await response.json())
    } catch {
      toast.error("Não foi possível carregar os cortes", { duration: 2000 })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCortes()
  }, [])

  const filteredCortes = cortes.filter(
    (corte) =>
      removeAccents(corte.id.toUpperCase()).includes(removeAccents(searchTerm)) ||
      removeAccents(corte.nome.toUpperCase()).includes(removeAccents(searchTerm))
  )

  const handleDelete = async (id: string) => {
    if (!confirm("Tem certeza que deseja excluir este corte?")) return

    try {
      const response = await fetch(`/api/cortes/${id}`, { method: "DELETE" })
      if (!response.ok) throw new Error()
      toast.success("Corte excluído com sucesso", { duration: 2000 })
      fetchCortes()
    } catch {
      toast.error("Não foi possível excluir o corte", { duration: 2000 })
    }
  }

  return (
    <>
      {/* HEADER */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-6">
        <h1 className="text-2xl font-bold">Cortes</h1>

        <Button
          className="bg-green-500 hover:bg-green-600 w-full sm:w-auto font-bold"
          onClick={() => setIsDialogOpen(true)}
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
            onChange={(e) => setSearchTerm(removeAccents(e.target.value.toUpperCase()))}
          />
        </div>
      </div>

      {/* LISTA */}
      <div className="bg-white border rounded-md p-4">
        <p className="text-sm text-gray-500 mb-4">
          Total de {filteredCortes.length} cortes encontrados
        </p>

        {loading ? (
          <div className="py-8 text-center">Carregando cortes...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filteredCortes.length === 0 ? (
              <div className="col-span-full py-8 text-center text-gray-500">
                Nenhum corte encontrado
              </div>
            ) : (
              filteredCortes.map((corte) => (
                <Card key={corte.id} className="overflow-hidden">
                  <div className="relative aspect-video bg-gray-100">
                    {corte.imagem ? (
                      <img
                        src={corte.imagem}
                        alt={corte.nome}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Upload className="h-10 w-10 text-gray-400" />
                      </div>
                    )}
                  </div>

                  <CardContent className="p-4">
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <h3 className="font-semibold text-lg leading-tight">
                          {corte.nome}
                        </h3>
                        <p className="text-sm text-gray-500">
                          Código: {corte.id.substring(0, 8)}
                        </p>
                      </div>

                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-10 w-10 bg-amber-200 hover:bg-amber-300"
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>

                        <Button
                          variant="destructive"
                          size="icon"
                          className="h-10 w-10 bg-red-400 hover:bg-red-500"
                          onClick={() => handleDelete(corte.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="p-4 pt-0">
                    <Button
                      className="w-full bg-green-500 hover:bg-green-600 font-semibold"
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
              ))
            )}
          </div>
        )}
      </div>

      {/* MODAIS */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <NovoCorteForm
          onSuccess={() => {
            fetchCortes()
            setIsDialogOpen(false)
          }}
          onCancel={() => setIsDialogOpen(false)}
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
    </>
  )
}

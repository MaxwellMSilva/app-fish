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
  
  // Função para remover acentos
  const removeAccents = (str: string) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  }

  // Buscar cortes
  const fetchCortes = async () => {
    try {
      setLoading(true)
      const response = await fetch("/api/cortes")
      if (!response.ok) throw new Error("Falha ao buscar cortes")

      const data = await response.json()
      setCortes(data)
    } catch (error) {
      console.error("Erro ao buscar cortes:", error)
      toast.error("Não foi possível carregar os cortes", {
        duration: 2000
      })
    } finally {
      setLoading(false)
    }
  }

  // Carregar cortes ao montar o componente
  useEffect(() => {
    fetchCortes()
  }, [])

  // Filtrar cortes com base no termo de busca (com maiúsculas e sem acentos)
  const filteredCortes = cortes.filter(
    (corte) =>
      removeAccents(corte.id.toUpperCase()).includes(removeAccents(searchTerm.toUpperCase())) ||
      removeAccents(corte.nome.toUpperCase()).includes(removeAccents(searchTerm.toUpperCase()))
  )

  // Excluir corte
  const handleDelete = async (id: string) => {
    if (!confirm("Tem certeza que deseja excluir este corte?")) return

    try {
      const response = await fetch(`/api/cortes/${id}`, {
        method: "DELETE",
      })

      if (!response.ok) throw new Error("Falha ao excluir corte")

      await fetchCortes()
      toast.success("Corte excluído com sucesso", {
        duration: 2000
      })
    } catch (error) {
      console.error("Erro ao excluir corte:", error)
      toast.error("Não foi possível excluir o corte", {
        duration: 2000
      })
    }
  }

  // Iniciar processo
  const handleStartProcess = (corte: Corte) => {
    setCorteAtual(corte)
    setIsProcessoDialogOpen(true)
  }

  // Handlers para os formulários
  const handleNovoCorteSuccess = () => {
    fetchCortes()
    setIsDialogOpen(false)
  }

  const handlePesagemSuccess = () => {
    setIsProcessoDialogOpen(false)
    setCorteAtual(null)
  }

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Cortes</h1>
        <Button className="bg-green-500 hover:bg-green-600 cursor-pointer font-bold" onClick={() => setIsDialogOpen(true)}>
          <Plus className="mr-1 h-4 w-4 font-semibold" />Novo Corte
        </Button>
      </div>

      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            className="pl-10 w-full"
            placeholder="Buscar cortes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(removeAccents(e.target.value.toUpperCase()))}
          />
        </div>
      </div>

      <div className="bg-white border rounded-md p-4">
        <h2 className="text-lg font-semibold mb-2">Lista de Cortes</h2>
        <p className="text-sm text-gray-500 mb-4">Total de {filteredCortes.length} cortes encontrados</p>

        {loading ? (
          <div className="py-8 text-center">Carregando cortes...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredCortes.length === 0 ? (
              <div className="col-span-full py-8 text-center text-gray-500">Nenhum corte encontrado</div>
            ) : (
              filteredCortes.map((corte) => (
                <Card key={corte.id} className="overflow-hidden">
                  <div className="relative aspect-video bg-gray-100">
                    {corte.imagem ? (
                      <img
                        src={corte.imagem || "/placeholder.svg"}
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
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{corte.nome}</h3>
                        <p className="text-sm text-gray-500">Código: {corte.id.substring(0, 8)}</p>
                      </div>
                      <div className="flex gap-1">
                        <Button variant="outline" size="icon" className="h-10 w-10 cursor-pointer bg-amber-200 hover:bg-amber-300">
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="destructive"
                          size="icon"
                          className="cursor-pointer bg-red-400 hover:bg-red-500 h-10 w-10"
                          onClick={() => handleDelete(corte.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button
                      className="w-full bg-green-500 hover:bg-green-600 cursor-pointer"
                      onClick={() => handleStartProcess(corte)}
                    >
                      <Play className="mr-1 h-4 w-4 font-semibold" />INICIAR PROCESSO
                    </Button>
                  </CardFooter>
                </Card>
              ))
            )}
          </div>
        )}
      </div>

      {/* Modal para adicionar novo corte */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <NovoCorteForm onSuccess={handleNovoCorteSuccess} onCancel={() => setIsDialogOpen(false)} />
      </Dialog>

      {/* Modal para iniciar processo */}
      <Dialog open={isProcessoDialogOpen} onOpenChange={setIsProcessoDialogOpen}>
        <PesagemForm
          corte={corteAtual}
          onSuccess={handlePesagemSuccess}
          onCancel={() => {
            setIsProcessoDialogOpen(false)
            setCorteAtual(null)
          }}
        />
      </Dialog>
    </>
  )
}

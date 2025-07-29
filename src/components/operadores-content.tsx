"use client"

import { useState, useEffect } from "react"
import { Search, Plus, Trash2, Pencil, Printer } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog } from "@/components/ui/dialog"
import { toast } from "sonner"

import { OperadorForm } from "@/components/operadores/operador-form"
import { EtiquetaModal } from "@/components/operadores/etiquetal-modal"

type Operador = {
  matricula: number
  nome: string
  valor?: number
}

export function OperadoresContent() {
  const [operadores, setOperadores] = useState<Operador[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [dialogMode, setDialogMode] = useState<"novo" | "editar">("novo")
  const [operadorParaEditar, setOperadorParaEditar] = useState<Operador | null>(null)

  const [isEtiquetaModalOpen, setIsEtiquetaModalOpen] = useState(false)
  const [selectedOperador, setSelectedOperador] = useState<Operador | null>(null)

  const fetchOperadores = async () => {
    try {
      setLoading(true)
      const response = await fetch("/api/operadores")
      if (!response.ok) throw new Error("Falha ao buscar operadores")

      const data = await response.json()
      setOperadores(data)
    } catch (error) {
      console.error("Erro ao buscar operadores:", error)
      toast.error("Não foi possível carregar os operadores", { duration: 2000 })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchOperadores()
  }, [])

  const filteredOperadores = operadores.filter((operador) => {
    const termo = searchTerm.toLowerCase()
    return (
      operador.matricula.toString().includes(termo) ||
      operador.nome.toLowerCase().includes(termo)
    )
  })

  const handleDelete = async (matricula: number) => {
    if (!confirm("Tem certeza que deseja excluir este operador?")) return

    try {
      const response = await fetch(`/api/operadores/${matricula}`, {
        method: "DELETE",
      })

      if (!response.ok) throw new Error("Falha ao excluir operador")

      await fetchOperadores()
      toast.success("Operador excluído com sucesso", { duration: 2000 })
    } catch (error) {
      console.error("Erro ao excluir operador:", error)
      toast.error("Não foi possível excluir o operador", { duration: 2000 })
    }
  }

  const handleOpenEtiquetaModal = (operador: Operador) => {
    setSelectedOperador(operador)
    setIsEtiquetaModalOpen(true)
  }

  const handleCloseEtiquetaModal = () => {
    setIsEtiquetaModalOpen(false)
    setSelectedOperador(null)
  }

  const handleOperadorSuccess = () => {
    fetchOperadores()
    setIsDialogOpen(false)
  }

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Operadores</h1>
        <Button
          className="bg-green-500 hover:bg-green-600 cursor-pointer"
          onClick={() => {
            setDialogMode("novo")
            setOperadorParaEditar(null)
            setIsDialogOpen(true)
          }}
        >
          <Plus className="mr-2 h-4 w-4 font-semibold" />
          Novo Operador
        </Button>
      </div>

      <div className="mb-6">
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={18}
            aria-hidden="true"
          />
          <Input
            className="pl-10 w-full"
            placeholder="Buscar operadores..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Buscar operadores"
          />
        </div>
      </div>

      <div className="bg-white border rounded-md p-4">
        <h2 className="text-lg font-semibold mb-2">Lista de Operadores</h2>
        <p className="text-sm text-gray-500 mb-4">
          Total de {filteredOperadores.length} operadores encontrados
        </p>

        {loading ? (
          <div className="py-8 text-center">Carregando operadores...</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-semibold">Matrícula</th>
                  <th className="text-left py-3 px-4 font-semibold">Nome</th>
                  <th className="text-right py-3 px-4 font-semibold">Valor</th>
                  <th className="text-right py-3 px-4 font-semibold">Ações</th>
                </tr>
              </thead>
              <tbody>
                {filteredOperadores.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="py-8 text-center text-gray-500">
                      Nenhum operador encontrado
                    </td>
                  </tr>
                ) : (
                  filteredOperadores.map((operador) => (
                    <tr key={operador.matricula} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4">{operador.matricula}</td>
                      <td className="py-3 px-4">{operador.nome}</td>
                      <td className="py-3 px-4 text-right">
                        {operador.valor !== undefined
                          ? operador.valor.toLocaleString("pt-BR", {
                              style: "currency",
                              currency: "BRL",
                            })
                          : "-"}
                      </td>
                      <td className="py-3 px-4 text-right">
                        <div className="flex justify-end gap-2">
                          <Button
                            variant="outline"
                            className="cursor-pointer flex items-center w-40 bg-gray-300 hover:bg-gray-400"
                            onClick={() => handleOpenEtiquetaModal(operador)}
                          >
                            <span className="mr-2">Etiqueta</span>
                            <Printer className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            className="cursor-pointer bg-amber-200 hover:bg-amber-300"
                            onClick={() => {
                              setDialogMode("editar")
                              setOperadorParaEditar(operador)
                              setIsDialogOpen(true)
                            }}
                            aria-label={`Editar operador ${operador.nome}`}
                          >
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="destructive"
                            size="icon"
                            className="cursor-pointer bg-red-400 hover:bg-red-500"
                            onClick={() => handleDelete(operador.matricula)}
                            aria-label={`Excluir operador ${operador.nome}`}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <OperadorForm
          modo={dialogMode}
          operadorEdit={operadorParaEditar ? { ...operadorParaEditar, valor: operadorParaEditar.valor ?? 0 } : undefined}
          onSuccess={handleOperadorSuccess}
          onCancel={() => setIsDialogOpen(false)}
        />
      </Dialog>

      <Dialog open={isEtiquetaModalOpen} onOpenChange={handleCloseEtiquetaModal}>
        {selectedOperador && (
          <EtiquetaModal
            operador={selectedOperador}
            onCancel={handleCloseEtiquetaModal}
            isOpen={isEtiquetaModalOpen}
          />
        )}
      </Dialog>
    </>
  )
}

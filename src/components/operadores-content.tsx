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
      if (!response.ok) throw new Error()
      setOperadores(await response.json())
    } catch {
      toast.error("Não foi possível carregar os operadores", { duration: 2000 })
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (matricula: number) => {
    if (!confirm("Tem certeza que deseja excluir este operador?")) return

    try {
      const response = await fetch(`/api/operadores/${matricula}`, {
        method: "DELETE",
      })

      if (!response.ok) throw new Error()

      toast.success("Operador excluído com sucesso", { duration: 2000 })
      fetchOperadores()
    } catch {
      toast.error("Não foi possível excluir o operador", { duration: 2000 })
    }
  }

  useEffect(() => {
    fetchOperadores()
  }, [])

  const filteredOperadores = operadores.filter((o) =>
    o.matricula.toString().includes(searchTerm) ||
    o.nome.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <>
      {/* HEADER */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-6">
        <h1 className="text-2xl font-bold">Operadores</h1>

        <Button
          className="bg-green-500 hover:bg-green-600 w-full sm:w-auto"
          onClick={() => {
            setDialogMode("novo")
            setOperadorParaEditar(null)
            setIsDialogOpen(true)
          }}
        >
          <Plus className="mr-2 h-4 w-4" />
          Novo Operador
        </Button>
      </div>

      {/* BUSCA */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <Input
            className="pl-10 w-full"
            placeholder="Buscar operadores..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* CONTEÚDO */}
      <div className="bg-white border rounded-md p-4">
        <p className="text-sm text-gray-500 mb-4">
          Total de {filteredOperadores.length} operadores encontrados
        </p>

        {loading && <div className="py-8 text-center">Carregando...</div>}

        {/* ===== MOBILE (CARDS) ===== */}
        {!loading && (
          <div className="sm:hidden space-y-3">
            {filteredOperadores.map((operador) => (
              <div
                key={operador.matricula}
                className="border rounded-lg p-4 shadow-sm"
              >
                <div className="flex justify-between mb-2">
                  <div>
                    <p className="text-xs text-gray-500">Matrícula</p>
                    <p className="font-semibold">{operador.matricula}</p>
                  </div>

                  <div className="text-right">
                    <p className="text-xs text-gray-500">Valor</p>
                    <p className="font-semibold">
                      {operador.valor
                        ? operador.valor.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          })
                        : "-"}
                    </p>
                  </div>
                </div>

                <div className="mb-3">
                  <p className="text-xs text-gray-500">Nome</p>
                  <p className="font-medium">{operador.nome}</p>
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    className="flex-1 bg-gray-300 hover:bg-gray-400"
                    onClick={() => {
                      setSelectedOperador(operador)
                      setIsEtiquetaModalOpen(true)
                    }}
                  >
                    <Printer className="h-4 w-4 mr-2" />
                    Etiqueta
                  </Button>

                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-amber-200 hover:bg-amber-300"
                    onClick={() => {
                      setDialogMode("editar")
                      setOperadorParaEditar(operador)
                      setIsDialogOpen(true)
                    }}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>

                  <Button
                    variant="destructive"
                    size="icon"
                    className="bg-red-400 hover:bg-red-500"
                    onClick={() => handleDelete(operador.matricula)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ===== DESKTOP (TABELA) ===== */}
        {!loading && (
          <div className="hidden sm:block overflow-x-auto -mx-4 sm:mx-0">
            <table className="min-w-[720px] w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left px-4 py-3">Matrícula</th>
                  <th className="text-left px-4 py-3">Nome</th>
                  <th className="text-right px-4 py-3">Valor</th>
                  <th className="text-right px-4 py-3">Ações</th>
                </tr>
              </thead>
              <tbody>
                {filteredOperadores.map((operador) => (
                  <tr key={operador.matricula} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3">{operador.matricula}</td>
                    <td className="px-4 py-3">{operador.nome}</td>
                    <td className="px-4 py-3 text-right">
                      {operador.valor
                        ? operador.valor.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          })
                        : "-"}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2 justify-end">
                        <Button
                          variant="outline"
                          className="bg-gray-300 hover:bg-gray-400 px-3"
                          onClick={() => {
                            setSelectedOperador(operador)
                            setIsEtiquetaModalOpen(true)
                          }}
                        >
                          <Printer className="h-4 w-4 mr-2" />
                          Etiqueta
                        </Button>

                        <Button
                          variant="outline"
                          size="icon"
                          className="bg-amber-200 hover:bg-amber-300"
                          onClick={() => {
                            setDialogMode("editar")
                            setOperadorParaEditar(operador)
                            setIsDialogOpen(true)
                          }}
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>

                        <Button
                          variant="destructive"
                          size="icon"
                          className="bg-red-400 hover:bg-red-500"
                          onClick={() => handleDelete(operador.matricula)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* MODAIS */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <OperadorForm
          modo={dialogMode}
          operadorEdit={
            operadorParaEditar
              ? { ...operadorParaEditar, valor: operadorParaEditar.valor ?? 0 }
              : undefined
          }
          onSuccess={() => {
            fetchOperadores()
            setIsDialogOpen(false)
          }}
          onCancel={() => setIsDialogOpen(false)}
        />
      </Dialog>

      <Dialog open={isEtiquetaModalOpen} onOpenChange={() => setIsEtiquetaModalOpen(false)}>
        {selectedOperador && (
          <EtiquetaModal
            operador={selectedOperador}
            isOpen={isEtiquetaModalOpen}
            onCancel={() => setIsEtiquetaModalOpen(false)}
          />
        )}
      </Dialog>
    </>
  )
}

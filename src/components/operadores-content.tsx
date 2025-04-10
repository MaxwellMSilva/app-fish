"use client"

import { useState, useEffect } from "react"

import { Search, Plus, Trash2, Pencil, Printer } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog } from "@/components/ui/dialog"
import { toast } from "sonner"

import { NovoOperadorForm } from "@/components/operadores/novo-operador-form"

type Operador = {
  id: string
  nome: string
}

export function OperadoresContent() {
  const [operadores, setOperadores] = useState<Operador[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isClient, setIsClient] = useState(false)

  // Buscar operadores
  const fetchOperadores = async () => {
    try {
      setLoading(true)
      const response = await fetch("/api/operadores")
      if (!response.ok) throw new Error("Falha ao buscar operadores")

      const data = await response.json()
      setOperadores(data)
    } catch (error) {
      console.error("Erro ao buscar operadores:", error)
      toast.error("Não foi possível carregar os operadores", {
        duration: 2000
      })
    } finally {
      setLoading(false)
    }
  }

  // Carregar operadores ao montar o componente
  useEffect(() => {
    fetchOperadores()
  }, [])

  // Filtrar operadores com base no termo de busca
  const filteredOperadores = operadores.filter(
    (operador) =>
      operador.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      operador.nome.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // Excluir operador
  const handleDelete = async (id: string) => {
    if (!confirm("Tem certeza que deseja excluir este operador?")) return

    try {
      const response = await fetch(`/api/operadores/${id}`, {
        method: "DELETE",
      })

      if (!response.ok) throw new Error("Falha ao excluir operador")

      await fetchOperadores()
      toast.success("Operador excluído com sucesso", {
        duration: 2000
      })
    } catch (error) {
      console.error("Erro ao excluir operador:", error)
      toast.error("Não foi possível excluir o operador", {
        duration: 2000
      })
    }
  }

  // Handlers para os formulários
  const handleNovoOperadorSuccess = () => {
    fetchOperadores()
    setIsDialogOpen(false)
  }

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Operadores</h1>
        <Button className="bg-green-500 hover:bg-green-600 cursor-pointer" onClick={() => setIsDialogOpen(true)}>
          <Plus className="mr-2 h-4 w-4" /> Novo Operador
        </Button>
      </div>

      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            className="pl-10 w-full"
            placeholder="Buscar operadores..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="bg-white border rounded-md p-4">
        <h2 className="text-lg font-semibold mb-2">Lista de Operadores</h2>
        <p className="text-sm text-gray-500 mb-4">Total de {filteredOperadores.length} operadores encontrados</p>

        {loading ? (
          <div className="py-8 text-center">Carregando operadores...</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium">Id</th>
                  <th className="text-left py-3 px-4 font-medium">Nome</th>
                </tr>
              </thead>
              <tbody>
                {filteredOperadores.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="py-8 text-center text-gray-500">
                      Nenhum operador encontrado
                    </td>
                  </tr>
                ) : (
                  filteredOperadores.map((operador) => (
                    <tr key={operador.id} className="border-b">
                      <td className="py-3 px-4">{operador.id}</td>
                      <td className="py-3 px-4">{operador.nome}</td>
                      <td className="py-3 px-4 text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="outline" size="icon" className="flex w-40 bg-gray-300 hover:bg-gray-400 cursor-pointer">
                            <p>Etiqueta</p>
                            <Printer className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="icon" className="cursor-pointer bg-amber-200 hover:bg-amber-300">
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button variant="destructive" size="icon" className="cursor-pointer bg-red-400 hover:bg-red-500" onClick={() => handleDelete(operador.id)}>
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

      {/* Modal para adicionar novo operador */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <NovoOperadorForm onSuccess={handleNovoOperadorSuccess} onCancel={() => setIsDialogOpen(false)} />
      </Dialog>
    </>
  )
}

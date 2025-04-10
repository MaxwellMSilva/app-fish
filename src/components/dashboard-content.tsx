import { BarChart, LineChart, PieChart } from "lucide-react"

export function DashboardContent() {
  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-500">Visão geral das operações</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Total de Vendas</p>
              <h3 className="text-2xl font-bold mt-1">R$ 24.780,00</h3>
              <p className="text-sm text-green-500 mt-1">+12% em relação ao mês anterior</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <BarChart className="h-6 w-6 text-green-500" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Operadores Ativos</p>
              <h3 className="text-2xl font-bold mt-1">5</h3>
              <p className="text-sm text-green-500 mt-1">+1 em relação ao mês anterior</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <PieChart className="h-6 w-6 text-blue-500" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Cortes Vendidos</p>
              <h3 className="text-2xl font-bold mt-1">342</h3>
              <p className="text-sm text-green-500 mt-1">+8% em relação ao mês anterior</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <LineChart className="h-6 w-6 text-purple-500" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Vendas por Mês</h3>
          <div className="h-64 flex items-end space-x-2">
            {[65, 45, 75, 55, 80, 90, 75, 85, 95, 70, 85, 95].map((height, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div className="w-full bg-green-500 rounded-t" style={{ height: `${height}%` }}></div>
                <span className="text-xs mt-1">
                  {["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"][index]}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Cortes Mais Vendidos</h3>
          <div className="space-y-4">
            {[
              { nome: "FILÉ", porcentagem: 35 },
              { nome: "COSTELA", porcentagem: 25 },
              { nome: "POSTA", porcentagem: 20 },
              { nome: "CAUDA", porcentagem: 15 },
              { nome: "ESPECIAL", porcentagem: 5 },
            ].map((corte, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">{corte.nome}</span>
                  <span className="text-sm text-gray-500">{corte.porcentagem}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: `${corte.porcentagem}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
 
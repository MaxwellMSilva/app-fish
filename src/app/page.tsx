import { AdminLayout } from "@/components/admin-layout"
import { OperadoresContent } from "@/components/operadores-content"

export default function Home() {
  return (
    <AdminLayout activeTab="operadores">
      <OperadoresContent />
    </AdminLayout>
  )
}

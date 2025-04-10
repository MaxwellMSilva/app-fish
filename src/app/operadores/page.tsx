import { AdminLayout } from "@/components/admin-layout"
import { OperadoresContent } from "@/components/operadores-content"

export default function OperadoresPage() {
  return (
    <AdminLayout activeTab="operadores">
      <OperadoresContent />
    </AdminLayout>
  )
}

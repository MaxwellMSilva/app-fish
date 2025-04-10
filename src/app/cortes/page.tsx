import { AdminLayout } from "@/components/admin-layout"
import { CortesContent } from "@/components/cortes-content"

export default function CortesPage() {
  return (
    <AdminLayout activeTab="cortes">
      <CortesContent />
    </AdminLayout>
  )
}

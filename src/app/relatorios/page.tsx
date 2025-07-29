import { AdminLayout } from "@/components/admin-layout"
import { RelatoriosContent } from "@/components/relatorios-content"

export default function RankingPage() {
  return (
    <AdminLayout activeTab="relatorios">
      <RelatoriosContent />
    </AdminLayout>
  )
}

import { AdminLayout } from "@/components/admin-layout"
import { RankingContent } from "@/components/ranking-content"

export default function RankingPage() {
  return (
    <AdminLayout activeTab="ranking">
      <RankingContent />
    </AdminLayout>
  )
}

import { AdminLayout } from "@/components/admin-layout"
import { DashboardContent } from "@/components/dashboard-content"

export default function DashboardPage() {
  return (
    <AdminLayout activeTab="dashboard">
      <DashboardContent />
    </AdminLayout>
  )
}

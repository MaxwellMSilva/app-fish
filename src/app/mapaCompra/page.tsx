import { AdminLayout } from "@/components/admin-layout"
import { MapasContent } from "@/components/mapas-content"

export default function MapaPage() {
  return (
    <AdminLayout activeTab="mapas">
      <MapasContent />
    </AdminLayout>
  )
}

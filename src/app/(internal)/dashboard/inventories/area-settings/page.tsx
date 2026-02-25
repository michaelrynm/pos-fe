import AreaManagementHeader from "@/features/internal/inventory-management/area-settings/header";
import AreaManagementTable from "@/features/internal/inventory-management/area-settings/table";

export default function AreaManagement() {
  return (
    <div className="space-y-4">
      <AreaManagementHeader />
      <AreaManagementTable />
    </div>
  );
}

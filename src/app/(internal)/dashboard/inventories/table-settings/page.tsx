import CustomerTableManagementHeader from "@/features/internal/inventory-management/table-settings/header";
import CustomerTableManagementTable from "@/features/internal/inventory-management/table-settings/table";

export default function CustomerTableManagement() {
  return (
    <div className="space-y-4">
      <CustomerTableManagementHeader />
      <CustomerTableManagementTable />
    </div>
  );
}

import UserManagementHeader from "@/features/internal/user-management/header";
import UserManagementTable from "@/features/internal/user-management/table";

export default function UserManagement() {
  return (
    <div className="space-y-4">
      <UserManagementHeader />
      <UserManagementTable />
    </div>
  );
}

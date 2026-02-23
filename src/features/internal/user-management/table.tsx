"use client";

import { DataTable } from "@/components/ui/data-table";
import { columns, User } from "@/features/internal/user-management/columns";
import UserTableToolbar from "@/features/internal/user-management/toolbar";

const data: User[] = [
  {
    id: "USR001",
    name: "John Doe",
    email: "john.doe@example.com",
    username: "johndoe",
    role: "Admin",
    status: "Active",
  },
  {
    id: "USR002",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    username: "janesmith",
    role: "Cashier",
    status: "Active",
  },
  {
    id: "USR003",
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    username: "bobjohnson",
    role: "Manager",
    status: "Inactive",
  },
  {
    id: "USR004",
    name: "Alice Williams",
    email: "alice.williams@example.com",
    username: "alicew",
    role: "Cashier",
    status: "Active",
  },
  {
    id: "USR005",
    name: "Charlie Brown",
    email: "charlie.brown@example.com",
    username: "charlieb",
    role: "Cashier",
    status: "Inactive",
  },
];

export default function UserManagementTable() {
  return (
    <DataTable
      columns={columns}
      data={data}
      toolbar={(table) => <UserTableToolbar table={table} />}
    />
  );
}

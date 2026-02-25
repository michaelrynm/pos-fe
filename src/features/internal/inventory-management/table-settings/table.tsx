"use client";

import { DataTable } from "@/components/ui/data-table";

import {
  columns,
  CustomerTable,
} from "@/features/internal/inventory-management/table-settings/columns";
import CustomerTableToolbar from "@/features/internal/inventory-management/table-settings/toolbar";

const data: CustomerTable[] = [
  {
    id: "d610baf4-579a-4258-9a8c-2dd021a21b99",
    area: "INDOOR",
    tableNumber: "1",
    qrUrl: "-",
    isActive: false,
  },
  {
    id: "f0353f48-acc5-4181-906f-bef3fefc5024",
    area: "INDOOR",
    tableNumber: "2",
    qrUrl: "-",
    isActive: false,
  },
  {
    id: "b2800af5-fb35-47e4-98e9-caa88fcb45a7",
    area: "INDOOR",
    tableNumber: "3",
    qrUrl: "-",
    isActive: false,
  },
];

export default function CustomerTableManagementTable() {
  return (
    <DataTable
      columns={columns}
      data={data}
      toolbar={(table) => <CustomerTableToolbar table={table} />}
    />
  );
}

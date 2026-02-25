"use client";

import { DataTable } from "@/components/ui/data-table";

import {
  columns,
  Area,
} from "@/features/internal/inventory-management/area-settings/columns";
import AreaToolbar from "@/features/internal/inventory-management/area-settings/toolbar";

const data: Area[] = [
  {
    id: "d610baf4-579a-4258-9a8c-2dd021a21b99",
    name: "INDOOR",
  },
  {
    id: "f0353f48-acc5-4181-906f-bef3fefc5024",
    name: "OUTDOOR",
  },
  {
    id: "b2800af5-fb35-47e4-98e9-caa88fcb45a7",
    name: "INDOOR SMOKING",
  },
];

export default function AreaManagementTable() {
  return (
    <DataTable
      columns={columns}
      data={data}
      toolbar={(table) => <AreaToolbar table={table} />}
    />
  );
}

"use client";

import { Table } from "@tanstack/react-table";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Search, ChevronDown } from "lucide-react";
import { CustomerTable } from "./columns";

interface CustomerTableToolbarProps {
  table: Table<CustomerTable>;
}

const roles = ["Admin", "Cashier", "Manager"];
const statuses = ["Active", "Inactive"];

export default function CustomerTableToolbar({
  table,
}: CustomerTableToolbarProps) {
  return (
    <div className="flex items-center justify-between gap-2 border-b p-2">
      <div className="relative flex-1 max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search tables..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="pl-9"
        />
      </div>

      <div className="flex items-center gap-1">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size={"sm"} className="font-normal">
              {"All Roles"}
              <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuCheckboxItem>All Roles</DropdownMenuCheckboxItem>
            {roles.map((role) => (
              <DropdownMenuCheckboxItem key={role}>
                {role}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="font-normal" size="sm">
              {"All Status"}
              <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuCheckboxItem>All Status</DropdownMenuCheckboxItem>
            {statuses.map((status) => (
              <DropdownMenuCheckboxItem key={status}>
                {status}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

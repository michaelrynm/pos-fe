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
import { User } from "./columns";

interface UserTableToolbarProps {
  table: Table<User>;
}

const roles = ["Admin", "Cashier", "Manager"];
const statuses = ["Active", "Inactive"];

export default function UserTableToolbar({ table }: UserTableToolbarProps) {
  const roleFilter =
    (table.getColumn("role")?.getFilterValue() as string) ?? "";
  const statusFilter =
    (table.getColumn("status")?.getFilterValue() as string) ?? "";

  return (
    <div className="flex items-center justify-between gap-2 border-b p-2">
      <div className="relative flex-1 max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search users..."
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
              {roleFilter ? `Role: ${roleFilter}` : "All Roles"}
              <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuCheckboxItem
              checked={roleFilter === ""}
              onCheckedChange={() =>
                table.getColumn("role")?.setFilterValue("")
              }
            >
              All Roles
            </DropdownMenuCheckboxItem>
            {roles.map((role) => (
              <DropdownMenuCheckboxItem
                key={role}
                checked={roleFilter === role}
                onCheckedChange={() =>
                  table
                    .getColumn("role")
                    ?.setFilterValue(roleFilter === role ? "" : role)
                }
              >
                {role}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="font-normal" size="sm">
              {statusFilter ? `Status: ${statusFilter}` : "All Status"}
              <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuCheckboxItem
              checked={statusFilter === ""}
              onCheckedChange={() =>
                table.getColumn("status")?.setFilterValue("")
              }
            >
              All Status
            </DropdownMenuCheckboxItem>
            {statuses.map((status) => (
              <DropdownMenuCheckboxItem
                key={status}
                checked={statusFilter === status}
                onCheckedChange={() =>
                  table
                    .getColumn("status")
                    ?.setFilterValue(statusFilter === status ? "" : status)
                }
              >
                {status}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

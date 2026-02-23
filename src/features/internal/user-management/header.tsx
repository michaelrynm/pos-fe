import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FileText, CirclePlus, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function UserManagementHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="font-semibold text-lg">Users</p>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink>User Management</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>User</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex items-center gap-2">
        <Tooltip>
          <TooltipTrigger>
            <div className="p-1 border rounded-sm">
              <FileText color="red" size={20} />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Export to PDF</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <div className="p-1 border rounded-sm">
              <FileText color="green" size={20} />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Export to Xls</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <div className="p-1 border rounded-sm">
              <RefreshCcw size={20} />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Refresh</p>
          </TooltipContent>
        </Tooltip>
        <Button size={"sm"} className="bg-[#092C4C]">
          <CirclePlus /> Add user
        </Button>
      </div>
    </div>
  );
}

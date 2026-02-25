import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FileText, CirclePlus, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AreaManagementHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="font-semibold text-lg">Area Settings</p>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink>Inventory Management</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>Area Settings</BreadcrumbLink>
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
          <CirclePlus /> Add area
        </Button>
      </div>
    </div>
  );
}

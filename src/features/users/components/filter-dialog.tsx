// components/pos/filter-dialog.tsx
"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";
import { FilterSidebar } from "./filter-sidebar";

export function FilterDialog() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="lg:hidden rounded-full flex items-center gap-2"
        >
          <SlidersHorizontal className="w-4 h-4" />
          Filter
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-105 p-0 rounded-2xl">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle>Filter Products</DialogTitle>
        </DialogHeader>

        <div className="p-6 pt-4 max-h-[70vh] overflow-y-auto">
          <FilterSidebar />
        </div>
      </DialogContent>
    </Dialog>
  );
}

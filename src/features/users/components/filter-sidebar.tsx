// components/pos/filter-sidebar.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SlidersHorizontal } from "lucide-react";

function FilterContent() {
  return (
    <div className="space-y-6 text-sm pt-2">
      <div className="space-y-3">
        <p className="font-semibold">Drink</p>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Checkbox id="ice-coffee" />
            <label htmlFor="ice-coffee">Ice Coffee</label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="coffee" />
            <label htmlFor="coffee">Coffee</label>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <p className="font-semibold">Food</p>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Checkbox id="noodles" />
            <label htmlFor="noodles">Noodles</label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="burger" />
            <label htmlFor="burger">Burger</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FilterSidebar() {
  return (
    <>
      <Card className="rounded-2xl hidden lg:flex">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-base">Filter</CardTitle>
          <Button
            className="rounded-full outline-blue-900"
            variant="outline"
            size="sm"
          >
            Reset
          </Button>
        </CardHeader>

        <hr className="mx-6 w-auto border border-secondary" />

        <CardContent>
          <FilterContent />
        </CardContent>
      </Card>

      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="sm" className="rounded-full gap-2">
              <SlidersHorizontal className="w-4 h-4" />
              Filter
            </Button>
          </SheetTrigger>
          <SheetContent
            side="bottom"
            className="rounded-t-2xl max-h-[80vh] overflow-y-auto"
          >
            <SheetHeader className="flex flex-row items-center justify-between pr-6 mt-5">
              <SheetTitle>Filter</SheetTitle>
              <Button variant="outline" size="sm" className="rounded-full">
                Reset
              </Button>
            </SheetHeader>
            <div className="px-4 pb-6">
              <FilterContent />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}

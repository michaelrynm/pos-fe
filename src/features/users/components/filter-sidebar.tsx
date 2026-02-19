// components/pos/filter-sidebar.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

export function FilterSidebar() {
  return (
    <Card className="rounded-2xl">
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

      <CardContent className="space-y-6 text-sm">
        <div className="space-y-3">
          <p className="font-bold">Drink</p>
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

        {/* Food */}
        <div className="space-y-3">
          <p className="font-bold">Food</p>
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
      </CardContent>
    </Card>
  );
}

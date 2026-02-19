import { FilterDialog } from "./filter-dialog";

// components/pos/breadcrumb.tsx
export function BreadcrumbNav() {
  return (
    <div className="text-md lg:text-xl text-muted-foreground grid grid-cols-2">
      <div className="my-auto">
        <span>Home</span>
        <span className="mx-2">›</span>
        <span className="text-foreground font-medium">Product</span>
      </div>
      <div className="flex justify-end">
        <FilterDialog />
      </div>
    </div>
  );
}

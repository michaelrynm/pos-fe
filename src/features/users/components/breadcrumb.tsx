import { FilterDialog } from "./filter-dialog";

// components/pos/breadcrumb.tsx
export function BreadcrumbNav() {
  return (
    <div className="text-md lg:text-xl text-muted-foreground ">
      <div className="my-auto">
        <span>Home</span>
        <span className="mx-2">›</span>
        <span className="text-foreground font-medium">Product</span>
      </div>
    </div>
  );
}

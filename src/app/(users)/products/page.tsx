import {
  BreadcrumbNav,
  FilterSidebar,
  ProductGrid,
} from "@/features/users/components";

export default function UserPage() {
  return (
    <div className="container py-6 space-y-6 px-6 lg:px-24">
      <BreadcrumbNav />

      <div className="lg:hidden">
        <FilterSidebar />
      </div>

      <div className="flex gap-6">
        <div className="hidden lg:block w-65 shrink-0">
          <FilterSidebar />
        </div>

        <div className="flex-1">
          <ProductGrid />
        </div>
      </div>
    </div>
  );
}

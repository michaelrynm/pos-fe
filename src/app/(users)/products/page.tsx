import {
  BreadcrumbNav,
  FilterSidebar,
  ProductGrid,
} from "@/features/users/components";

export default function UserPage() {
  return (
    <div className="py-6 space-y-6 container">
      <BreadcrumbNav />

      <div className="flex gap-6">
        <div className="hidden lg:block w-[260px] shrink-0">
          <FilterSidebar />
        </div>

        <div className="flex-1">
          <ProductGrid />
        </div>
      </div>
    </div>
  );
}

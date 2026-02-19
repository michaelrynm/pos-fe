// components/pos/product-grid.tsx
import { ProductCard } from "./product-card";
import { products } from "../../../lib/products";

export function ProductGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

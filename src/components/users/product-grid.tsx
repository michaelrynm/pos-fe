// components/pos/product-grid.tsx
import { ProductCard } from "./product-card";
import { Product } from "@/lib/types";

const products: Product[] = [
  {
    id: "1",
    categoryId: "Coffee",
    name: "Espresso Ice Coffee",
    description: "Rich and creamy espresso with ice",
    basePrice: "IDR 20.000",
    thumbnail:
      "https://companieslogo.com/img/orig/SBUX-0200dcbd.png?t=1740461378",
  },
  {
    id: "2",
    categoryId: "Coffee",
    name: "Espresso Ice Coffee",
    description: "Rich and creamy espresso with ice",
    basePrice: "IDR 20.000",
    thumbnail:
      "https://companieslogo.com/img/orig/SBUX-0200dcbd.png?t=1740461378",
  },
  {
    id: "3",
    categoryId: "Coffee",
    name: "Espresso Ice Coffee",
    description: "Rich and creamy espresso with ice",
    basePrice: "IDR 20.000",
    thumbnail:
      "https://companieslogo.com/img/orig/SBUX-0200dcbd.png?t=1740461378",
  },
  {
    id: "4",
    categoryId: "Coffee",
    name: "Espresso Ice Coffee",
    description: "Rich and creamy espresso with ice",
    basePrice: "IDR 20.000",
    thumbnail:
      "https://companieslogo.com/img/orig/SBUX-0200dcbd.png?t=1740461378",
  },
  {
    id: "5",
    categoryId: "Coffee",
    name: "Espresso Ice Coffee",
    description: "Rich and creamy espresso with ice",
    basePrice: "IDR 20.000",
    thumbnail:
      "https://companieslogo.com/img/orig/SBUX-0200dcbd.png?t=1740461378",
  },
  {
    id: "6",
    categoryId: "Coffee",
    name: "Espresso Ice Coffee aijsdlfkajds",
    description: "Rich and creamy espresso with ice",
    basePrice: "IDR 20.000",
    thumbnail:
      "https://companieslogo.com/img/orig/SBUX-0200dcbd.png?t=1740461378",
  },
];

export function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

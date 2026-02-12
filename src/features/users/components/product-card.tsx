// components/pos/product-card.tsx
"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Product } from "@/lib/types";

interface Props {
  product: Product;
}

export function ProductCard({ product }: Props) {
  return (
    <Card className="rounded-2xl hover:shadow-md transition-shadow cursor-pointer pt-0">
      <div className="relative w-full h-[180px] bg-muted  overflow-hidden">
        <Image
          src={product.thumbnail}
          alt={product.name}
          fill
          className="object-contain"
        />
      </div>
      <CardContent className="p-4 space-y-4">
        <div className="space-y-1">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold">{product.name}</h3>
            <span className="text-sm font-medium bg-muted px-2 py-1 rounded-full">
              {product.basePrice}
            </span>
          </div>
          <p className="text-sm text-muted-foreground capitalize">
            {product.categoryId}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

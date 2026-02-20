"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Product } from "@/lib/types";
import { useState } from "react";
import { ProductDialog } from "./product-dialog";

interface Props {
  product: Product;
}

export function ProductCard({ product }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Card
        className="rounded-2xl hover:shadow-md transition-shadow cursor-pointer pt-0"
        onClick={() => setOpen(true)}
      >
        <div className="relative w-full h-25 lg:h-45 bg-muted rounded-t-2xl overflow-hidden">
          <Image
            src={product.thumbnail}
            alt={product.name}
            fill
            className="object-contain"
          />
        </div>
        <CardContent className="p-2 sm:p-3 md:p-4 !pb-0 space-y-2 sm:space-y-4">
          <div className="space-y-1">
            <div className="flex justify-between items-center gap-2">
              <h3 className="font-semibold text-xs sm:text-sm md:text-base truncate">
                {product.name}
              </h3>
              <span className="text-[10px] sm:text-xs font-medium border px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full whitespace-nowrap">
                {product.basePrice.toLocaleString("id-ID")}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground capitalize">
              {product.categoryId}
            </p>

            <div className="flex items-center gap-1">
              <svg
                width="18"
                height="18"
                viewBox="0 0 7 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.3291 0L4.1149 2.41844H6.6578L4.60055 3.91312L5.38635 6.33156L3.3291 4.83688L1.27185 6.33156L2.05765 3.91312L0.000403643 2.41844H2.5433L3.3291 0Z"
                  fill="#FFCC41"
                />
              </svg>

              <p className="text-gray-500 text-xs font-semibold">
                4.5 | 1000 Sold
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <ProductDialog
        product={product}
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}

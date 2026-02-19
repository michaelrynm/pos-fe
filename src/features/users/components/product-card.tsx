"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Product } from "@/lib/types";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Props {
  product: Product;
}

export function ProductCard({ product }: Props) {
  return (
    <Link href={`/products/${product.id}`}>
      <Card className="gap-0 lg:gap-4 rounded-2xl hover:shadow-md transition-shadow cursor-pointer py-0">
        <div className="relative w-full h-25 lg:h-45 bg-muted rounded-t-2xl overflow-hidden">
          <Image
            src={product.thumbnail}
            alt={product.name}
            fill
            className="object-contain"
          />
        </div>
        <CardContent className="p-4 space-y-4">
          <div className="space-y-2">
            <div className="grid grid-cols-5 grid-rows-2 text-xs lg:text-sm">
              <h3 className="col-span-3 font-medium">{product.name}</h3>
              <p className="col-span-2 font-medium text-green-700 px-2 py-1 text-end">
                {product.basePrice}
              </p>

              <p className="col-span-3 text-muted-foreground capitalize">
                {product.categoryId}
              </p>
              <div className="col-span-2 flex justify-end">
                <Button
                  className="rounded-full justify-end text-xs lg:text-sm"
                  variant="outline"
                  size="sm"
                >
                  + Cart
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

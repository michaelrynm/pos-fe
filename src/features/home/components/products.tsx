"use client";

import { useState } from "react";
import ProductCard from "./product-card";
import { Button } from "@/components/ui/button";

export default function ProductList() {
  const PRODUCTS = Array.from({ length: 12 });
  const INITIAL_COUNT = 4;

  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const handleLoadMore = () => {
    setVisibleCount(PRODUCTS.length);
  };

  const handleViewLess = () => {
    setVisibleCount(INITIAL_COUNT);
  };

  const isAllVisible = visibleCount >= PRODUCTS.length;

  return (
    <div className="mx-auto px-4 sm:px-8 md:px-24">
      <p className="text-3xl sm:text-4xl md:text-5xl font-semibold">
        Our Products
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {PRODUCTS.slice(0, visibleCount).map((_, index) => (
          <ProductCard key={index} />
        ))}
      </div>

      <div className="w-full flex justify-center mt-10">
        {!isAllVisible ? (
          <Button
            onClick={handleLoadMore}
            className="px-6 py-3 sm:py-4 rounded-3xl"
          >
            View All
          </Button>
        ) : (
          <Button
            onClick={handleViewLess}
            className="px-6 py-3 sm:py-4 rounded-3xl"
          >
            View Less
          </Button>
        )}
      </div>
    </div>
  );
}

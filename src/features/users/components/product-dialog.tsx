// features/users/components/product-dialog.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import {
  Minus,
  Plus,
  ShoppingCart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Product } from "@/lib/types";
import { useCartStore } from "@/stores/cart-store";
import { cn } from "@/lib/utils";

const SIZES = ["S", "M", "L"];

const TOPPINGS = [
  { id: "pearl", label: "Pearl" },
  { id: "pudding", label: "Pudding" },
  { id: "coconut-jelly", label: "Coconut Jelly" },
  { id: "aloe-vera", label: "Aloe Vera" },
];

interface Props {
  product: Product | null;
  open: boolean;
  onClose: () => void;
  images?: string[];
}

export function ProductDialog({ product, open, onClose, images }: Props) {
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [imageIndex, setImageIndex] = useState(0);
  const addItem = useCartStore((s) => s.addItem);

  if (!product) return null;

  const productImages = images?.length ? images : [product.thumbnail];
  const totalImages = productImages.length;

  function prevImage() {
    setImageIndex((i) => (i === 0 ? totalImages - 1 : i - 1));
  }

  function nextImage() {
    setImageIndex((i) => (i === totalImages - 1 ? 0 : i + 1));
  }

  function toggleTopping(id: string) {
    setSelectedToppings((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id],
    );
  }

  function handleAddToCart() {
    addItem({
      productId: product!.id,
      name: product!.name,
      thumbnail: product!.thumbnail,
      size: selectedSize,
      toppings: selectedToppings,
      price: product!.basePrice,
      quantity,
    });
    onClose();
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className={cn(
          "rounded-2xl p-0 overflow-hidden",
          // Mobile: near full-width; Desktop: large fixed width
          "w-[95vw] max-w-[95vw]",
          "sm:w-[680px] sm:max-w-[680px]",
          "lg:w-[860px] lg:max-w-[860px]",
          "xl:w-[960px] xl:max-w-[960px]",
        )}
      >
        <div className="flex flex-col sm:flex-row h-full">
          {/* ── LEFT: Image carousel ── */}
          <div
            className="relative bg-muted shrink-0
            w-full h-[220px]
            sm:w-[280px] sm:h-auto
            lg:w-[380px]
            xl:w-[420px]"
          >
            <Image
              src={productImages[imageIndex]}
              alt={product.name}
              fill
              className="object-contain p-4"
            />

            {/* Carousel controls */}
            {totalImages > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1.5 shadow transition"
                >
                  <ChevronLeft className="w-4 h-4 text-foreground" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1.5 shadow transition"
                >
                  <ChevronRight className="w-4 h-4 text-foreground" />
                </button>
              </>
            )}

            {/* Slide counter */}
            <div className="absolute top-3 right-3 bg-black/40 text-white text-xs rounded-full px-2.5 py-0.5 font-medium tracking-wide">
              {String(imageIndex + 1).padStart(2, "0")}/
              {String(totalImages).padStart(2, "0")}
            </div>
          </div>

          {/* ── RIGHT: Product details ── */}
          <div className="flex flex-col flex-1 overflow-y-auto max-h-[75vh] sm:max-h-[85vh]">
            <div className="flex flex-col gap-4 p-6 lg:p-8 flex-1">
              <div>
                {/* Name */}
                <DialogTitle asChild>
                  <h2 className="!text-4xl font-semibold leading-tight">
                    {product.name}
                  </h2>
                </DialogTitle>

                <p className="text-xs text-muted-foreground capitalize my-1 tracking-wide">
                  {product.categoryId?.replace("-", " ")} | Coffee
                </p>

                {/* Price row */}
                <div className="flex items-center gap-3 mt-2 flex-wrap">
                  <span className="text-2xl lg:text-3xl font-bold text-foreground">
                    IDR {product.basePrice.toLocaleString("id-ID")}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 flex-wrap">
                <div className="flex items-center gap-3 border rounded-full px-4 py-2 bg-muted/50">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-5 text-center text-sm font-semibold">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <Button
                  onClick={handleAddToCart}
                  className="rounded-full gap-2 px-6 flex-1 sm:flex-none cursor-pointer"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </Button>
              </div>

              <hr className="border-border" />

              {/* Size */}
              <div className="space-y-2">
                <p className="text-sm font-semibold">Size</p>
                <div className="flex gap-2">
                  {SIZES.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={cn(
                        "w-10 h-10 rounded-xl border text-sm font-medium transition-colors cursor-pointer",
                        selectedSize === size
                          ? "bg-primary text-primary-foreground border-primary"
                          : "hover:border-primary",
                      )}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Toppings */}
              <div className="space-y-2">
                <p className="text-sm font-semibold">Topping</p>
                <div className="grid grid-cols-2 gap-2">
                  {TOPPINGS.map((topping) => (
                    <div key={topping.id} className="flex items-center gap-2">
                      <Checkbox
                        id={topping.id}
                        checked={selectedToppings.includes(topping.id)}
                        onCheckedChange={() => toggleTopping(topping.id)}
                      />
                      <label
                        htmlFor={topping.id}
                        className="text-sm cursor-pointer"
                      >
                        {topping.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <hr className="border-border" />

              <div className="space-y-1">
                <p className="text-sm font-semibold">Descriptions</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {product.description ?? "No description available."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

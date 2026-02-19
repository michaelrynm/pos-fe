// features/users/components/cart-dropdown.tsx
"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import {
  ShoppingCart,
  X,
  Minus,
  Plus,
  Trash2,
  ArrowRight,
  ShoppingBag,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/cart-store";
import { cn } from "@/lib/utils";

export function CartDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const items = useCartStore((s) => s.items);
  const removeItem = useCartStore((s) => s.removeItem);
  const updateQuantity = useCartStore((s) => s.updateQuantity);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  // Close on outside click
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  console.log("items", items);

  return (
    <div ref={ref} className="relative">
      {/* ── Trigger Button ── */}
      <button
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "relative flex items-center justify-center rounded-full transition-all duration-200",
          "bg-transparent hover:bg-primary hover:text-primary-foreground",
          open && "bg-primary text-primary-foreground",
        )}
        aria-label="Open cart"
      >
        <ShoppingBag className="w-5 h-5" />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 min-w-[18px] h-[18px] flex items-center justify-center rounded-full bg-rose-500 text-white text-[10px] font-bold px-1 leading-none">
            {totalItems > 99 ? "99+" : totalItems}
          </span>
        )}
      </button>

      {/* ── Dropdown Panel ── */}
      <div
        className={cn(
          "absolute right-0 top-[calc(100%+12px)] z-50",
          "w-[360px] rounded-2xl overflow-hidden",
          "bg-background border border-border shadow-2xl",
          "transition-all duration-300 origin-top-right",
          open
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none",
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border bg-muted/40">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-primary" />
            <span className="font-semibold text-sm text-black">My Cart</span>
            {totalItems > 0 && (
              <span className="bg-primary text-primary-foreground text-xs font-bold rounded-full px-2 py-0.5 leading-none">
                {totalItems}
              </span>
            )}
          </div>
          <button
            onClick={() => setOpen(false)}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Items */}
        <div className="overflow-y-auto max-h-[360px] divide-y divide-border">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-14 gap-3 text-muted-foreground">
              <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center">
                <ShoppingCart className="w-6 h-6" />
              </div>
              <p className="text-sm font-medium">Your cart is empty</p>
              <p className="text-xs">Add some drinks to get started!</p>
            </div>
          ) : (
            items.map((item, idx) => (
              <div
                key={`${item.productId}-${item.size}-${item.toppings?.join("-")}-${idx}`}
                className="flex items-start gap-3 px-5 py-4 hover:bg-muted/30 transition-colors group"
              >
                {/* Thumbnail */}
                <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-muted shrink-0">
                  <Image
                    src={item.thumbnail}
                    alt={item.name}
                    fill
                    className="object-contain p-1"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-black truncate">
                      {item.name}
                    </p>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-muted-foreground hover:text-rose-500 transition-colors group-hover:opacity-100 mt-0.5 shrink-0"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex items-center gap-1.5 mt-0.5 flex-wrap">
                    <span className="text-xs text-muted-foreground bg-muted rounded-full px-2 py-0.5">
                      {item.size}
                    </span>
                    {item.toppings?.map((t) => (
                      <span
                        key={t}
                        className="text-xs text-muted-foreground bg-muted rounded-full px-2 py-0.5 capitalize"
                      >
                        {t.replace("-", " ")}
                      </span>
                    ))}
                  </div>

                  {/* Qty + Price */}
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-2 border border-border rounded-full px-2 py-0.5">
                      <button
                        onClick={() =>
                          item.quantity <= 1
                            ? removeItem(item.id)
                            : updateQuantity(item.id, item.quantity - 1)
                        }
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-semibold w-4 text-center text-black">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <span className="text-sm font-semibold text-primary">
                      IDR {(item.price * item.quantity).toLocaleString("id-ID")}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border bg-muted/30 px-5 py-4 space-y-3">
            {/* Subtotal */}
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-semibold text-base text-black">
                IDR {totalPrice.toLocaleString("id-ID")}
              </span>
            </div>

            {/* CTA */}
            <Button
              className="w-full rounded-full gap-2 font-semibold"
              onClick={() => setOpen(false)}
            >
              Checkout
              <ArrowRight className="w-4 h-4" />
            </Button>

            <button
              onClick={() => setOpen(false)}
              className="w-full text-xs text-center text-muted-foreground hover:text-foreground transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

"use client";

import { Bell, Heart, Menu, Search, ShoppingBag } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import { useState } from "react";

export function UserHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-black text-white px-4 lg:px-6 py-4 sticky top-0 z-50">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Mobile Hamburger */}
          <div className="lg:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="left"
                className="bg-black text-white border-none w-full sm:w-[400px]"
              >
                <div className="flex flex-col h-full p-12">
                  {/* Location */}
                  <div className="flex items-center gap-2 mt-4 text-lg font-medium">
                    <img
                      src="https://companieslogo.com/img/orig/SBUX-0200dcbd.png?t=1740461378"
                      alt="example-logo"
                      className="h-10 w-10"
                    />
                    <h2>Starbucks</h2>
                  </div>

                  {/* Search */}
                  <div className="relative mt-6">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/60" />
                    <Input
                      placeholder="Search Product.."
                      className="pl-9 bg-transparent border-white/30 text-white placeholder:text-white/60 focus-visible:ring-0"
                    />
                  </div>

                  {/* Menu Items */}
                  <div className="flex flex-col gap-6 mt-10 text-lg">
                    <div className="flex items-center justify-between">
                      <span>Cart</span>
                      <ShoppingBag className="w-5 h-5 text-white/70" />
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="mt-auto text-sm text-white/60">
                    © 2023 – damiun.cs
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <div className="hidden lg:flex items-center gap-2 font-medium">
            <img
              src="https://companieslogo.com/img/orig/SBUX-0200dcbd.png?t=1740461378"
              alt="example-logo"
              className="h-10 w-10"
            />
            <h2>Starbucks</h2>
          </div>
        </div>

        <div className="hidden md:flex items-center w-[400px] relative">
          <Search className="absolute left-3 w-4 h-4 text-white" />
          <Input
            placeholder="Search product..."
            className="rounded-full pl-9 bg-transparent border-white text-white placeholder:text-white/50"
          />
        </div>

        <div className="flex items-center gap-4">
          <ShoppingBag className="w-5 h-5 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}

"use client";

import { Bell, Heart, Search, ShoppingBag } from "lucide-react";
import { Input } from "@/components/ui/input";
import { CartDropdown } from "./cart";

export function UserHeader() {
  return (
    <header className="bg-black text-white py-4 px-5 md:px-24">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src="https://companieslogo.com/img/orig/SBUX-0200dcbd.png?t=1740461378"
            alt="example-logo"
            className="h-10 w-10"
          />
          <h2>Starbucks</h2>
        </div>

        <div className="hidden md:flex items-center w-[400px] relative">
          <Search className="absolute left-3 w-4 h-4 text-white" />
          <Input
            placeholder="Search product..."
            className="rounded-full pl-9 bg-transparent border-white text-white placeholder:text-white/50"
          />
        </div>

        <div className="flex items-center gap-4">
          <Heart className="w-5 h-5 cursor-pointer" />
          <Bell className="w-5 h-5 cursor-pointer" />
          <CartDropdown />

          <div className="w-8 h-8 rounded-full bg-muted" />
        </div>
      </div>
    </header>
  );
}

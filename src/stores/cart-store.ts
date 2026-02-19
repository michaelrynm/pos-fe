// stores/cart-store.ts
import { create } from "zustand";

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  thumbnail: string;
  size: string;
  toppings: string[];
  price: number;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "id">) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],

  addItem: (item) =>
    set((state) => {
      const key = `${item.productId}-${item.size}-${item.toppings.sort().join(",")}`;
      const existing = state.items.find(
        (i) =>
          `${i.productId}-${i.size}-${i.toppings.sort().join(",")}` === key,
      );

      if (existing) {
        return {
          items: state.items.map((i) =>
            i.id === existing.id
              ? { ...i, quantity: i.quantity + item.quantity }
              : i,
          ),
        };
      }

      return {
        items: [...state.items, { ...item, id: crypto.randomUUID() }],
      };
    }),

  removeItem: (id) =>
    set((state) => ({ items: state.items.filter((i) => i.id !== id) })),

  updateQuantity: (id, quantity) =>
    set((state) => ({
      items: state.items.map((i) => (i.id === id ? { ...i, quantity } : i)),
    })),

  clearCart: () => set({ items: [] }),
}));

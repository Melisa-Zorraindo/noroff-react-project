import { create } from "zustand";
import { url } from "./constants";

export const useProductsStore = create((set) => ({
  availableProducts: [],
  isLoading: false,
  error: null,
  fetchProducts: async () => {
    try {
      set({ isLoading: true });
      const response = await fetch(url);
      set({ availableProducts: await response.json(), isLoading: false });
      set((state) => ({
        availableProducts: state.availableProducts.map((item) => ({
          ...item,
          count: 0,
        })),
      }));
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },
  addOne: (productId) =>
    set((state) => ({
      availableProducts: state.availableProducts.map((item) =>
        item.id === productId ? { ...item, count: item.count + 1 } : item
      ),
    })),
  subtractOne: (productId) =>
    set((state) => ({
      availableProducts: state.availableProducts.map((item) =>
        item.id === productId
          ? { ...item, count: item.count > 0 ? item.count - 1 : 0 }
          : item
      ),
    })),
  clearCount: (productId) =>
    set((state) => ({
      availableProducts: state.availableProducts.map((item) =>
        item.id === productId ? { ...item, count: 0 } : item
      ),
    })),
  clearCart: () =>
    set((state) => ({
      availableProducts: state.availableProducts.map((item) => ({
        ...item,
        count: 0,
      })),
    })),
}));

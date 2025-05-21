import { create } from "zustand";
import { QuoteStoreState } from "../types/global";

export const useQuoteStore = create<QuoteStoreState>((set) => ({
  text: "",
  loading: false,
  getRandomQuote: async () => {
    set({
      loading: true,
    });
    try {
      const response = await fetch("https://catfact.ninja/fact");
      const data = await response.json();
      set({ text: data.fact, loading: false });
    } catch (error) {
      console.error("Failed to fetch quote:", error);
    }
  },
}));

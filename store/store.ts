import { create } from "zustand";

interface Store {
  sessionActive: boolean;
  setSessionActive: (sessionActive: boolean) => void;
}
export const useStore = create<Store>((set) => ({
  sessionActive: false,
  setSessionActive: (sessionActive: boolean) => set({ sessionActive }),
}));

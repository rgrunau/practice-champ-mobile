import { create } from "zustand";

interface Store {
  sessionActive: boolean;
  setSessionActive: (sessionActive: boolean) => void;
  activeSessionId: number | null;
  setActiveSessionId: (id: number | null) => void;
}
export const useStore = create<Store>((set) => ({
  sessionActive: false,
  setSessionActive: (sessionActive: boolean) => set({ sessionActive }),
  activeSessionId: null,
  setActiveSessionId: (activeSessionId: number | null) =>
    set({ activeSessionId }),
}));

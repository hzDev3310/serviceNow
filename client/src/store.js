import { create } from "zustand";

const useDarkMode = create((set) => ({
  darkMode: false,
  changeDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
}));

export {
    useDarkMode,
}

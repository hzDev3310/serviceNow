import { create } from "zustand";

const useColorMode = create((set) => ({
  colorMode: "dark",
  changeColorMode: () =>
    set((state) => ({
      colorMode: state.colorMode === "dark" ? "light" : "dark",
    })),
}));

const useUserID = create((set) => ({
  id: "",
  setId: (id) => set({ id }),
}));
const useCity = create((set) => ({
  cityName: "",
  setCityName: (cityName) => set({ cityName }),
}));

const useLog = create((set) => ({
  isLogin: false,
  setLogin: () => set((state) => ({ isLogin: !state.isLogin })),
}));

const useNotif = create((set) => ({
  notif: false,

  setNotif: () =>
    set((state) => ({
      notif: !state.notif,
    })),
}));

export { useCity, useNotif, useUserID, useColorMode, useLog };

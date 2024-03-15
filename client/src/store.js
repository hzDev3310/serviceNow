import { create } from "zustand";

const useLogin = create((set) => ({
  isLogin: false,

  setLogin: () =>
    set((state) => ({
      isLogin: !state.isLogin,
    })),
}));

const useCity = create((set) => ({
  cityName: "",
  setCityName: (cityName) => set({ cityName }),
}));

export { useCity, useLogin };

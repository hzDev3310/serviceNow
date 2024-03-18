import { create } from "zustand";




const useUserID = create((set) => ({
  id: '',
  setId: (id) => set({ id })
}));
const useCity = create((set) => ({
  cityName: "",
  setCityName: (cityName) => set({ cityName }),
}));


const useNotif = create((set) => ({
  notif: false,

  setNotif: () =>
    set((state) => ({
      notif:!state.notif, 
    })),
}));

export default useNotif;


export { useCity, useNotif , useUserID};
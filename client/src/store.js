import create from 'zustand';

const useLogin = create((set) => ({
  isLogin: false,

  setLogin: () =>
    set((state) => ({
      isLogin: !state.isLogin,
    })),
}));

export  {useLogin};

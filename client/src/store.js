import { create } from 'zustand'

const useId = create((set) => ({
  id: '',
  setId: (newID) => set(() => ({ id: newID })),
}))

export { useId }

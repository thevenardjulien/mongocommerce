import { create } from 'zustand'
import zukeeper from 'zukeeper';

export const useStore = create(zukeeper((set) => ({
  token: undefined,
  setToken: (newToken) => set({ token: newToken }),
})))

window.store = useStore;
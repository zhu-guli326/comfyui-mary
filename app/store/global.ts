import { create } from 'zustand'

interface GlobalState {
  isMusicEnabled: boolean
  toggleMusic: () => void
}

export const useGlobalStore = create<GlobalState>((set) => ({
  isMusicEnabled: window.isMusicEnabled,
  toggleMusic: () => {
    window.isMusicEnabled = !window.isMusicEnabled;
    set({ isMusicEnabled: window.isMusicEnabled });
  },
}))
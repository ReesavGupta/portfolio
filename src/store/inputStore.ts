import { create } from 'zustand'

type InputState = {
  input: string
  update: (newInput: string) => void
  clear: () => void
}

export const useInput = create<InputState>((set) => ({
  input: '',
  update: (newInput: string) => set(() => ({ input: newInput })),
  clear: () => set(() => ({ input: '' })),
}))

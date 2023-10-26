import { create } from "zustand";

export const usePlayerStore = create((set)=> ({
  isPlaying: false,
  currentMusic: {playlist: null, song: null, songs:[]},
  volume: 1,
  setVolume: (newVolume) => set({volume:newVolume}),
  setIsPlaying: (isPlaying)=> set({isPlaying}),
  setCurrentMusic: (currentMusic) => set({currentMusic})
}))
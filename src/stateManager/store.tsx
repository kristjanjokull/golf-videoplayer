import React from "react";
import { create } from "zustand";

type Theme = "light" | "dark";

interface ThemeStore {
  theme: Theme;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: "light",
  toggleTheme: () => {
    set((state) => ({
      theme: state.theme === "light" ? "dark" : "light",
    }));
  },
}));

// =============== Video store ====================

interface VideoStore {
  videoRef: React.RefObject<HTMLVideoElement>;
  isPlaying: boolean;
  setVideoRef: (ref: React.RefObject<HTMLVideoElement>) => void;
  togglePlay: () => void;
  rewind: () => void;
  forward: () => void;
}

export const useVideoStore = create<VideoStore>((set) => ({
  videoRef: React.createRef(),
  isPlaying: false,
  setVideoRef: (ref) => set({ videoRef: ref }),
  togglePlay: () =>
    set((state) => {
      if (!state.videoRef.current) return { isPlaying: state.isPlaying };

      if (state.isPlaying) {
        void state.videoRef.current.pause();
      } else {
        void state.videoRef.current.play();
      }

      return { isPlaying: !state.isPlaying };
    }),
  rewind: () =>
    set((state) => {
      if (state.videoRef.current) {
        state.videoRef.current.currentTime = Math.max(
          0,
          state.videoRef.current.currentTime - 0.07,
        );
      }

      return { ...state };
    }),
  forward: () =>
    set((state) => {
      if (state.videoRef.current) {
        state.videoRef.current.currentTime = Math.min(
          state.videoRef.current.duration,
          state.videoRef.current.currentTime + 0.07,
        );
      }

      return { ...state };
    }),
}));

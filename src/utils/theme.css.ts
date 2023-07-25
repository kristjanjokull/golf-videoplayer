import {
  createGlobalTheme,
  createTheme,
  createThemeContract,
} from "@vanilla-extract/css";

import { darkThemeColors, lightThemeColors } from "./colors";

const root = createGlobalTheme("#root", {});

const colors = createThemeContract({
  background: "",
  dock: "",
  slider: {
    thumb: "",
    trackPlayed: "",
    trackUnPlayed: "",
  },
  sidebarButtons: {
    buttonIdle: "",
  },
  controlButtons: {
    buttonIdle: "",
    buttonHover: "",
  },
});

export const lightTheme = createTheme(colors, {
  background: lightThemeColors.background,
  dock: lightThemeColors.dock,
  slider: {
    thumb: lightThemeColors.slider.thumb,
    trackPlayed: lightThemeColors.slider.trackPlayed,
    trackUnPlayed: lightThemeColors.slider.trackUnPlayed,
  },
  sidebarButtons: {
    buttonIdle: "",
  },
  controlButtons: {
    buttonIdle: lightThemeColors.controlButtons.buttonIdle,
    buttonHover: "",
  },
});

export const darkTheme = createTheme(colors, {
  background: darkThemeColors.background,
  dock: darkThemeColors.dock,
  slider: {
    thumb: darkThemeColors.slider.thumb,
    trackPlayed: darkThemeColors.slider.trackPlayed,
    trackUnPlayed: darkThemeColors.slider.trackUnPlayed,
  },
  sidebarButtons: {
    buttonIdle: "",
  },
  controlButtons: {
    buttonIdle: darkThemeColors.controlButtons.buttonIdle,
    buttonHover: "",
  },
});

export const vars = { ...root, colors };

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
  controls: {
    button: "",
    buttonActive: "",
    slider: "",
    sliderActive: "",
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
  controls: {
    button: lightThemeColors.buttons.idle,
    buttonActive: lightThemeColors.buttons.hover,
    slider: lightThemeColors.slider.trackUnPlayed,
    sliderActive: lightThemeColors.slider.trackPlayed,
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
  controls: {
    button: darkThemeColors.buttons.idle,
    buttonActive: darkThemeColors.buttons.hover,
    slider: darkThemeColors.slider.trackUnPlayed,
    sliderActive: darkThemeColors.slider.trackPlayed,
  },
});

export const vars = { ...root, colors };

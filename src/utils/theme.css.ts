import {
  createGlobalTheme,
  createTheme,
  createThemeContract,
} from "@vanilla-extract/css";

import { darkThemeColors, lightThemeColors } from "./colors";

const root = createGlobalTheme("#root", {});

const colors = createThemeContract({
  backgroundColor: "",
  controls: {
    container: "",
    button: "",
    buttonActive: "",
    slider: "",
    sliderActive: "",
    thumb: "",
  },
});

export const lightTheme = createTheme(colors, {
  backgroundColor: lightThemeColors.background,
  controls: {
    container: lightThemeColors.dock,
    button: lightThemeColors.buttons.idle,
    buttonActive: lightThemeColors.buttons.hover,
    slider: lightThemeColors.slider.trackUnPlayed,
    sliderActive: lightThemeColors.slider.trackPlayed,
    thumb: lightThemeColors.slider.knob,
  },
});

export const darkTheme = createTheme(colors, {
  backgroundColor: darkThemeColors.background,
  controls: {
    container: darkThemeColors.dock,
    button: darkThemeColors.buttons.idle,
    buttonActive: darkThemeColors.buttons.hover,
    slider: darkThemeColors.slider.trackUnPlayed,
    sliderActive: darkThemeColors.slider.trackPlayed,
    thumb: darkThemeColors.slider.knob,
  },
});

export const vars = { ...root, colors };

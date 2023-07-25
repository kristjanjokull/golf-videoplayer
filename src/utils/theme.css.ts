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
  dockTransparent: "",
  slider: {
    thumb: "",
    trackPlayed: "",
    trackUnPlayed: "",
  },
  sidebarButtons: {
    background: "",
    backgroundHover: "",
    icon: "",
    iconHover: "",
  },
  controlButtons: {
    background: "",
    backgroundHover: "",
    icon: "",
    iconHover: "",
  },
});

export const lightTheme = createTheme(colors, {
  background: lightThemeColors.background,
  dock: lightThemeColors.dock,
  dockTransparent: lightThemeColors.dockTransparent,
  slider: {
    thumb: lightThemeColors.slider.thumb,
    trackPlayed: lightThemeColors.slider.trackPlayed,
    trackUnPlayed: lightThemeColors.slider.trackUnPlayed,
  },
  sidebarButtons: {
    background: lightThemeColors.sidebarButtons.background,
    backgroundHover: lightThemeColors.sidebarButtons.backgroundHover,
    icon: lightThemeColors.sidebarButtons.icon,
    iconHover: lightThemeColors.sidebarButtons.iconHover,
  },
  controlButtons: {
    background: lightThemeColors.controlButtons.background,
    backgroundHover: lightThemeColors.controlButtons.backgroundHover,
    icon: lightThemeColors.controlButtons.icon,
    iconHover: lightThemeColors.controlButtons.iconHover,
  },
});

export const darkTheme = createTheme(colors, {
  background: darkThemeColors.background,
  dock: darkThemeColors.dock,
  dockTransparent: darkThemeColors.dockTransparent,
  slider: {
    thumb: darkThemeColors.slider.thumb,
    trackPlayed: darkThemeColors.slider.trackPlayed,
    trackUnPlayed: darkThemeColors.slider.trackUnPlayed,
  },
  sidebarButtons: {
    background: darkThemeColors.sidebarButtons.background,
    backgroundHover: darkThemeColors.sidebarButtons.backgroundHover,
    icon: darkThemeColors.sidebarButtons.icon,
    iconHover: darkThemeColors.sidebarButtons.iconHover,
  },
  controlButtons: {
    background: darkThemeColors.controlButtons.background,
    backgroundHover: darkThemeColors.controlButtons.backgroundHover,
    icon: darkThemeColors.controlButtons.icon,
    iconHover: darkThemeColors.controlButtons.iconHover,
  },
});

export const vars = { ...root, colors };

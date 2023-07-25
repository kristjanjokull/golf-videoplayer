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
    buttonIdle: "",
    buttonHover: "",
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
    buttonIdle: lightThemeColors.controlButtons.buttonIdle,
    buttonHover: lightThemeColors.controlButtons.buttonHover,
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
    buttonIdle: darkThemeColors.controlButtons.buttonIdle,
    buttonHover: darkThemeColors.controlButtons.buttonHover,
  },
});

export const vars = { ...root, colors };

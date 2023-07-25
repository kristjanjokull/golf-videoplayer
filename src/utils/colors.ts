import Color from "color";

type Colors = {
  background: string;
  buttons: Record<"idle" | "hover", string>;
  dock: string;
  dockTransparent: string;
  slider: Record<"thumb" | "trackPlayed" | "trackUnPlayed", string>;
  controlButtons: Record<"buttonIdle" | "buttonHover", string>;
  sidebarButtons: Record<
    "background" | "backgroundHover" | "icon" | "iconHover",
    string
  >;
};

const _black = "#000";

const _light_MainColor = "rgb(117, 117, 117)";
const _light_MainColorLighter = Color(_light_MainColor)
  .lighten(0.95)
  .toString();
const _light_MainColorTransparent = Color(_light_MainColor)
  .alpha(0.5)
  .toString();
const _light_MainColorHover = Color(_light_MainColorLighter)
  .darken(0.1)
  .toString();

const _dark_mainColor = "#555";
const _dark_SidebarButtonsBackgroundHover = Color(_dark_mainColor)
  .darken(0.1)
  .toString();

export const lightThemeColors: Colors = {
  background: "#fff",
  buttons: {
    idle: "#ece2e2",
    hover: "#dbdcdf",
  },
  dock: _light_MainColor,
  dockTransparent: _light_MainColorTransparent,
  slider: {
    thumb: "#ecc90a",
    trackPlayed: "#ecc90a",
    trackUnPlayed: "#d7d5d5",
  },
  controlButtons: {
    buttonIdle: "#fff",
    buttonHover: "#cdcdd2",
  },
  sidebarButtons: {
    background: _light_MainColorLighter,
    backgroundHover: _light_MainColorHover,
    icon: _black,
    iconHover: _black,
  },
};

export const darkThemeColors: Colors = {
  background: "black",
  buttons: {
    idle: "#ece2e2",
    hover: "#dbdcdf",
  },
  dock: _dark_mainColor,
  dockTransparent: _dark_mainColor,
  slider: {
    thumb: "#ecc90a",
    trackPlayed: "#ecc90a",
    trackUnPlayed: "#d7d5d5",
  },
  controlButtons: {
    buttonIdle: "#fff",
    buttonHover: "#cdcdd2",
  },
  sidebarButtons: {
    background: _dark_mainColor,
    backgroundHover: _dark_SidebarButtonsBackgroundHover,
    icon: "#fff",
    iconHover: "#fff",
  },
};

import {
  createTheme,
  createThemeContract,
  createGlobalTheme,
} from "@vanilla-extract/css";

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
  backgroundColor: "rgb(233, 236, 239)",
  controls: {
    container: "rgba(117, 117, 117, 0.5)",
    button: "#d7d5d5",
    buttonActive: "#fff",
    slider: "#d7d5d5",
    sliderActive: "#ecc90a",
    thumb: "#ecc90a",
  },
});

export const darkTheme = createTheme(colors, {
  backgroundColor: "red",
  controls: {
    container: "rgba(117, 117, 117, 0.5)",
    button: "#d7d5d5",
    buttonActive: "#fff",
    slider: "#d7d5d5",
    sliderActive: "#ecc90a",
    thumb: "#ecc90a",
  },
});

export const vars = { ...root, colors };

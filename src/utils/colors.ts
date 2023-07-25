type Colors = {
  background: string;
  buttons: Record<"idle" | "hover", string>;
  dock: string;
  slider: Record<"thumb" | "trackPlayed" | "trackUnPlayed", string>;
  controlButtons: Record<"buttonIdle" | "buttonHover", string>;
};

export const lightThemeColors: Colors = {
  background: "white", // rgb(233, 236, 239)
  buttons: {
    idle: "#ece2e2",
    hover: "#dbdcdf",
  },
  dock: "rgba(117, 117, 117, 0.5)",
  slider: {
    thumb: "#ecc90a",
    trackPlayed: "#ecc90a",
    trackUnPlayed: "#d7d5d5",
  },
  controlButtons: {
    buttonIdle: "#fff",
    buttonHover: "#cdcdd2",
  },
};

export const darkThemeColors: Colors = {
  background: "black",
  buttons: {
    idle: "#ece2e2",
    hover: "#dbdcdf",
  },
  dock: "rgba(117, 117, 117, 0.5)",
  slider: {
    thumb: "#ecc90a",
    trackPlayed: "#ecc90a",
    trackUnPlayed: "#d7d5d5",
  },
  controlButtons: {
    buttonIdle: "#fff",
    buttonHover: "#cdcdd2",
  },
};

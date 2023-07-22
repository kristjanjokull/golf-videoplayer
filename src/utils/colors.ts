type Colors = {
  background: string;
  buttons: Record<"idle" | "hover", string>;
  controlButtons: Record<"idle" | "hover", string>;
  dock: string;
  slider: Record<"knob" | "trackPlayed" | "trackUnPlayed", string>;
};

export const lightThemeColors: Colors = {
  background: "rgb(233, 236, 239)",
  buttons: {
    idle: "#ece2e2",
    hover: "#dbdcdf",
  },
  controlButtons: {
    idle: "white",
    hover: "black",
  },
  dock: "rgba(117, 117, 117, 0.5)",
  slider: {
    knob: "#ecc90a",
    trackPlayed: "#ecc90a",
    trackUnPlayed: "#d7d5d5",
  },
};

export const darkThemeColors: Colors = {
  background: "#ece2e2",
  buttons: {
    idle: "#ece2e2",
    hover: "#dbdcdf",
  },
  controlButtons: {
    idle: "white",
    hover: "black",
  },
  dock: "rgba(117, 117, 117, 0.5)",
  slider: {
    knob: "#ecc90a",
    trackPlayed: "#ecc90a",
    trackUnPlayed: "#d7d5d5",
  },
};

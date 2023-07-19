import { style } from "@vanilla-extract/css";
import { vars } from "../../theme/theme.css";

export const videoContainer = style({
  position: "absolute",
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  marginInline: "auto",
  backgroundColor: vars.colors.backgroundColor,
  overflow: "hidden",
});

export const video = style({
  minWidth: "100%",
  minHeight: "100%",
});

export const dock = style({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  color: "white",
  zIndex: 100,
  // opacity: 0,
  transition: "opacity 150ms ease-in-out",
  background: "rgba(117, 117, 117, 0.5)",
  padding: "1rem 0",
});

// TODO: Delete
export const controls = style({
  display: "flex",
  gap: "0.5rem",
  padding: "0.2rem 0 1rem 0",
  alignItems: "center",
  justifyContent: "center",
});
// TODO: Delete
export const controlsButton = style({
  background: "none",
  boxShadow: "none",
  border: "none",
  cursor: "pointer",
});

export const timelineContainer = style({
  display: "flex",
  alignItems: "center",
  height: 7,
  marginInline: "0.5rem",
  cursor: "pointer",
  marginTop: 5,
});

export const timeline = style({
  backgroundColor: "#ece2e2",
  height: 3,
  width: "100%",
  position: "relative",
  "::before": {
    content: "",
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    right: "calc(100% - var(--preview-position) * 100%)",
    backgroundColor: "rgb(150, 150, 150)",
    display: "none",
  },
  "::after": {
    content: "",
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    right: "calc(100% - var(--progress-position) * 100%)",
    backgroundColor: "red",
  },
});

export const thumbIndicator = style({
  position: "absolute",
  transform: "translateX(-50%) scale(var(--scale))",
  height: "200%",
  top: "-50%",
  left: "calc(var(--progress-position) * 100%)",
  backgroundColor: "red",
  borderRadius: "50%",
  transition: "transform 150ms ease-in-out",
  aspectRatio: "1 / 1",
});

export const sliderContainer = style({
  background: "pink",
});

export const mugamuga = style({
  background: "yellow",
});

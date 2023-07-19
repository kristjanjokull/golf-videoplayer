import { style } from "@vanilla-extract/css";

export const sidebar = style({
  position: "absolute",
  top: 10,
  left: 10,
  display: "flex",
  flexDirection: "column",
  gridGap: "0.5rem",
  width: 60,
  zIndex: 2,
});

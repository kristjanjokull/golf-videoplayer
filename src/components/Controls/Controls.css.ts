import { style } from "@vanilla-extract/css";

export const controls = style({
  display: "flex",
  gap: "0.5rem",
  padding: "0.2rem 0 1rem 0",
  alignItems: "center",
  justifyContent: "center",
});

export const controlsButton = style({
  background: "none",
  boxShadow: "none",
  border: "none",
  cursor: "pointer",
});

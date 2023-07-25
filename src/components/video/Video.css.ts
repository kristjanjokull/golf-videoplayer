import { ComplexStyleRule, style } from "@vanilla-extract/css";

import { vars } from "$utils/theme.css";

export const videoContainer = style({
  position: "absolute",
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  marginInline: "auto",
  backgroundColor: vars.colors.background,
  overflow: "hidden",
});

const videoBase: ComplexStyleRule = {
  minWidth: "100%",
  minHeight: "100%",
};

export const video = style(videoBase);

export const videoFlipped = style({
  ...videoBase,
  transform: "rotateY(180deg)",
});

export const dock = style({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 100,
  // opacity: 0,
  transition: "opacity 150ms ease-in-out",
  background: vars.colors.dock,
  padding: "1rem 0",
});

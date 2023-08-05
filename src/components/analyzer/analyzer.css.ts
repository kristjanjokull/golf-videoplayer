import { ComplexStyleRule, style } from "@vanilla-extract/css";

import { breakpoints } from "$utils/breakpoints";
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
  padding: "1rem 0",
  background: vars.colors.dockTransparent,
  display: "flex",
  justifyContent: "center",
  gridGap: "0.8rem",
  "@media": {
    [`${breakpoints.phablet}, ${breakpoints.phone}`]: {
      background: vars.colors.dock,
    },
  },
});

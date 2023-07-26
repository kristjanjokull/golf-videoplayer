import { ComplexStyleRule, globalStyle, style } from "@vanilla-extract/css";

import { vars } from "$utils/theme.css";

const buttonBase: ComplexStyleRule = {
  border: "none",
  cursor: "pointer",
};

export const sidebarButton = style({
  ...buttonBase,
  background: vars.colors.sidebarButtons.background,
  borderRadius: "10px",
  ":hover": {
    background: vars.colors.sidebarButtons.backgroundHover,
  },
});

export const controlButton = style({
  ...buttonBase,
  background: "none",
  ":hover": {
    background: "none",
  },
});

globalStyle(`${controlButton}:hover svg path`, {
  fill: vars.colors.controlButtons.iconHover,
});

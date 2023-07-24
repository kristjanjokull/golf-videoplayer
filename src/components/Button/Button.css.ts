import { style, ComplexStyleRule, globalStyle } from "@vanilla-extract/css";
// import { vars } from "../../utils/theme.css";
// vars.colors.backgroundColor (see theme.css.ts)

const buttonBase: ComplexStyleRule = {
  border: "none",
  cursor: "pointer",
};

export const sidebarButton = style({
  ...buttonBase,
  borderRadius: "10px",
  ":hover": {
    background: "#cdcdd2", //
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
  fill: "#cdcdd2",
});

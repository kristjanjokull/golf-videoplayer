import { style, globalStyle, ComplexStyleRule } from "@vanilla-extract/css";
import { breakpoints } from "../../utils/breakpoints";

export const horizontalSlider = style({
  width: "100%",
  height: 40,
  maxWidth: 500,
  margin: "auto",
  cursor: "pointer",
  "@media": {
    [`${breakpoints.phablet}, ${breakpoints.phone}`]: {
      maxWidth: 400,
    },
  },
});

const thumbBase: ComplexStyleRule = {
  cursor: "pointer",
  position: "absolute",
  zIndex: 100,
  background: "#ecc90a",
  border: "5px solid #ecc90a",
  borderRadius: "100%",
  display: "block",
  boxShadow: "0 0 2px 0 rgb(0 0 0 / 44%)",
  top: 12,
  width: 10,
  height: 10,
  outline: "none",
  lineHeight: 38,
};

export const thumb = style(thumbBase);

export const thumbWithTransition = style({
  ...thumbBase,
  transition: "left 0.8s ease-out",
});

globalStyle(`${thumb} .active`, {
  backgroundColor: "grey",
});

const trackBase: ComplexStyleRule = {
  position: "relative",
  background: "#d7d5d5",
  top: 20,
  height: 4,
};

export const track = style(trackBase);

export const trackWithTransition = style({
  ...trackBase,
  transition: "width 0.8s ease-out",
});

export const activeTrack = style({
  position: "relative",
  background: "#ecc90a",
  top: 20,
  height: 4,
});

globalStyle(`${track}.example-track-0`, {
  background: "#83a9ff",
});

globalStyle(`${horizontalSlider}.disabled`, {
  cursor: "not-allowed",
});

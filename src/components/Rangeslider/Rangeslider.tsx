import { useState } from "react";
import ReactSlider, { ReactSliderProps } from "react-slider";
import { horizontalSlider, track, thumb, activeTrack } from "./Rangeslider.css";

type RenderThumb = ReactSliderProps<number>["renderThumb"];
type RenderTrack = ReactSliderProps<number>["renderTrack"];

const Track: RenderTrack = (props, state) => {
  const indx = state.index;
  return <div {...props} className={indx === 1 ? track : activeTrack}></div>;
};

const Thumb: RenderThumb = (props, state) => {
  return (
    <div {...props} className={thumb}>
      {state.valueNow}
    </div>
  );
};

export const RangeSlider = () => {
  const [value, setValue] = useState(0);

  return (
    <ReactSlider
      className={horizontalSlider}
      value={value}
      onChange={(v) => setValue(v)}
      renderTrack={Track}
      renderThumb={Thumb}
    />
  );
};

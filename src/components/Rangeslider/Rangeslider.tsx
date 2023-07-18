import { useState } from "react";
import ReactSlider, { ReactSliderProps } from "react-slider";
import { horizontalSlider, track, thumb, activeTrack } from "./Rangeslider.css";
import { useVideoStore } from "../../stateManager/store";

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
  const videoRef = useVideoStore((state) => state.videoRef);
  const [value, setValue] = useState(0);

  const handleChange = (v: number) => {
    setValue(v);
    if (videoRef.current) {
      const videoDuration = videoRef.current.duration;
      const newTime = (v / 100) * videoDuration;
      videoRef.current.currentTime = newTime;
    }
  };

  return (
    <ReactSlider
      className={horizontalSlider}
      value={value}
      onChange={handleChange}
      renderTrack={Track}
      renderThumb={Thumb}
    />
  );
};

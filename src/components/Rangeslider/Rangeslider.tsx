import ReactSlider, { ReactSliderProps } from "react-slider";

import { useVideoStore } from "$stateManager/store";

import {
  activeTrack,
  horizontalSlider,
  thumb,
  thumbWithTransition,
  track,
  trackWithTransition,
} from "./rangeslider.css";

type RenderThumb = ReactSliderProps<number>["renderThumb"];
type RenderTrack = ReactSliderProps<number>["renderTrack"];

export const RangeSlider = () => {
  const { videoRef, isPlaying, currentTime, videoDuration } = useVideoStore(
    (state) => ({
      videoRef: state.videoRef,
      isPlaying: state.isPlaying,
      currentTime: state.currentTime,
      videoDuration: state.videoDuration,
    }),
  );

  const Track: RenderTrack = (props, state) => {
    const indx = state.index;
    const trackCSS = isPlaying ? trackWithTransition : track;
    return (
      <div {...props} className={indx === 1 ? trackCSS : activeTrack}></div>
    );
  };

  const Thumb: RenderThumb = (props, state) => {
    const thumbCSS = isPlaying ? thumbWithTransition : thumb;
    return (
      <div {...props} className={thumbCSS}>
        {state.valueNow}
      </div>
    );
  };

  const value = videoDuration > 0 ? (currentTime / videoDuration) * 100 : 0;

  const handleChange = (v: number) => {
    if (videoRef.current) {
      const newTime = (v / 100) * videoDuration;
      videoRef.current.currentTime = newTime;
    }
  };

  return (
    <ReactSlider
      disabled={isPlaying}
      className={horizontalSlider}
      value={value}
      onChange={handleChange}
      renderTrack={Track}
      renderThumb={Thumb}
    />
  );
};

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
  const { videoRef, isPlaying, currentTime, videoDuration } = useVideoStore(
    (state) => ({
      videoRef: state.videoRef,
      isPlaying: state.isPlaying,
      currentTime: state.currentTime,
      videoDuration: state.videoDuration,
    }),
  );

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

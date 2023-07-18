import { useRef, useState } from "react";

// import { darkTheme, lightTheme } from "../../theme/theme.css";

import { PlayIcon } from "../icons/Play";
import { PauseIcon } from "../icons/Pause";
import { RewindIcon } from "../icons/Rewind";
import { ForwardIcon } from "../icons/Forward";
import {
  videoContainer,
  video,
  dock,
  controls,
  controlsButton,
} from "./Video.css";
import { RangeSlider } from "../Rangeslider/Rangeslider";
import { ThemeSwitch } from "../ThemeSwitch/ThemeSwitch";

type Props = {
  src: string;
};

const durationMS = 0.07;

export const Video = ({ src }: Props) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoRef = useRef(null);

  const handlePlayPause = async () => {
    const videoElement = videoRef.current as unknown as HTMLVideoElement;
    if (!isPlaying) {
      setIsPlaying(true);
      await videoElement.play();
    } else {
      setIsPlaying(false);
      videoElement.pause();
    }
  };

  const handleForward = () => {
    const videoElement = videoRef.current as unknown as HTMLVideoElement;
    if (videoElement) {
      videoElement.currentTime += durationMS;
    }
  };

  const handleBack = () => {
    const videoElement = videoRef.current as unknown as HTMLVideoElement;
    if (videoElement) {
      videoElement.currentTime -= durationMS;
    }
  };

  return (
    <div className={videoContainer}>
      <ThemeSwitch />
      <div className={dock}>
        <RangeSlider />
        <div className={controls}>
          <button type="button" className={controlsButton} onClick={handleBack}>
            <RewindIcon />
          </button>
          <button
            type="button"
            className={controlsButton}
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onClick={handlePlayPause}
          >
            {!isPlaying && <PlayIcon />}
            {isPlaying && <PauseIcon />}
          </button>
          <button
            type="button"
            className={controlsButton}
            onClick={handleForward}
          >
            <ForwardIcon />
          </button>
        </div>
      </div>
      <video ref={videoRef} className={video}>
        <source src={src} type="video/webm" />
        <source src={src} type="video/mp4" />
        <p>
          Your browser doesn't support HTML video. Here is a
          <a href="myVideo.mp4">link to the video</a> instead.
        </p>
      </video>
    </div>
  );
};

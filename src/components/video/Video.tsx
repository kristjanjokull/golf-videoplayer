import { useRef } from "react";
import { videoContainer, video, dock } from "./Video.css";
import { RangeSlider } from "../Rangeslider/Rangeslider";
import { ThemeSwitch } from "../ThemeSwitch/ThemeSwitch";
import { Controls } from "../Controls/Controls";

type Props = {
  src: string;
};

export const Video = ({ src }: Props) => {
  const videoRef = useRef(null);

  return (
    <div className={videoContainer}>
      <ThemeSwitch />
      <div className={dock}>
        <RangeSlider />
        <Controls />
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

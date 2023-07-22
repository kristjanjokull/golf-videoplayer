import { videoContainer, video, videoFlipped, dock } from "./Video.css";
import { RangeSlider } from "../Rangeslider/Rangeslider";
import { ThemeSwitch } from "../ThemeSwitch/ThemeSwitch";
import { Controls } from "../Controls/Controls";
import { useVideoStore } from "../../stateManager/store";
import Sidebar from "../Sidebar/Sidebar";
import { SoundToggler } from "../SoundToggler/SoundToggler";
import { VideoFlip } from "../VideoFlip/VideoFlip";
import { FullScreen } from "../Fullscreen/Fullscreen";

type Props = {
  src: string;
};

export const Video = ({ src }: Props) => {
  // const videoRef = useVideoStore((state) => state.videoRef);
  const { videoRef, isMuted, isFlipped, setVideoDuration, setCurrentTime } =
    useVideoStore((state) => ({
      videoRef: state.videoRef,
      isMuted: state.isMuted,
      isFlipped: state.isFlipped,
      setVideoDuration: state.setVideoDuration,
      setCurrentTime: state.setCurrentTime,
    }));

  return (
    <div className={videoContainer}>
      <Sidebar
        components={[ThemeSwitch, SoundToggler, VideoFlip, FullScreen]}
      />
      <div className={dock}>
        <RangeSlider />
        <Controls />
      </div>
      <video
        ref={videoRef}
        className={!isFlipped ? video : videoFlipped}
        muted={isMuted}
        onTimeUpdate={() =>
          videoRef.current && setCurrentTime(videoRef.current.currentTime)
        }
        onLoadedMetadata={() =>
          videoRef.current && setVideoDuration(videoRef.current.duration)
        }
      >
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

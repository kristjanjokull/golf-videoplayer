import { RangeSlider } from "@components/rangeslider/Rangeslider";
import { ThemeSwitch } from "@components/themeSwitch/themeSwitch";
import { Controls } from "@components/controls/controls";
import { useVideoStore } from "@stateManager/store";
import Sidebar from "@components/sidebar/sidebar";
import { SoundToggler } from "@components/soundToggler/soundToggler";
import { VideoFlip } from "@components/videoFlip/videoFlip";
import { FullScreen } from "@components/fullscreen/fullscreen";
import { videoContainer, video, videoFlipped, dock } from "./video.css";

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

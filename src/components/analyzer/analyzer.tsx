import { Theme, useVideoStore } from "../../utils/state";
import { Controls } from "../controls/controls";
import { FullScreen } from "../fullscreen/fullscreen";
import { Rangeslider } from "../rangeslider/rangeslider";
import { Sidebar } from "../sidebar/sidebar";
import { SoundToggler } from "../soundToggler/soundToggler";
import { ThemeSwitch } from "../themeSwitch/themeSwitch";
import { VideoFlip } from "../videoFlip/videoFlip";

type Props = {
  src: string;
  colorTheme?: Theme;
};

export const Analyzer = ({ src }: Props) => {
  const { videoRef, isMuted, isFlipped, setVideoDuration, setCurrentTime } =
    useVideoStore((state) => ({
      videoRef: state.videoRef,
      isMuted: state.isMuted,
      isFlipped: state.isFlipped,
      setVideoDuration: state.setVideoDuration,
      setCurrentTime: state.setCurrentTime,
    }));

  return (
    <div className="videoContainer">
      <Sidebar
        components={[ThemeSwitch, SoundToggler, VideoFlip, FullScreen]}
      />
      <div className="dock">
        <Controls variant="play" />
        <Rangeslider />
        <Controls variant="time" />
      </div>
      <video
        ref={videoRef}
        className={isFlipped ? "video video--flipped" : "video"}
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

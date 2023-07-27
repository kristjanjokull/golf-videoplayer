import { Controls } from "$components/controls/controls";
import { FullScreen } from "$components/fullscreen/fullscreen";
import { Rangeslider } from "$components/rangeslider/rangeslider";
import { Sidebar } from "$components/sidebar/sidebar";
import { SoundToggler } from "$components/soundToggler/soundToggler";
import { ThemeSwitch } from "$components/themeSwitch/themeSwitch";
import { VideoFlip } from "$components/videoFlip/videoFlip";
import { Theme, useVideoStore } from "$utils/state";

import { dock, video, videoContainer, videoFlipped } from "./analyzer.css";

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
    <div className={videoContainer}>
      <Sidebar
        components={[ThemeSwitch, SoundToggler, VideoFlip, FullScreen]}
      />
      <div className={dock}>
        <Rangeslider />
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

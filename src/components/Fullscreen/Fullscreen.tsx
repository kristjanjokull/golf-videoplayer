import { useEffect, useState } from "react";
import { Button } from "@components/button/button";
import { FullscreenIcon } from "@components/icons/fullscreen";
import { FullscreenExitIcon } from "@components/icons/fullScreenExit";

interface FullScreenDocument extends Document {
  msExitFullscreen?: () => Promise<void>;
  webkitExitFullscreen?: () => Promise<void>;
  mozCancelFullScreen?: () => Promise<void>;
  exitFullscreen: () => Promise<void>;
}

export const FullScreen: React.FC = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    function onFullscreenChange() {
      setIsFullscreen(Boolean(document.fullscreenElement));
    }

    document.addEventListener("fullscreenchange", onFullscreenChange);

    return () =>
      document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);

  const goFullScreen = () => {
    const fsElement = document.documentElement as HTMLElement & {
      mozRequestFullScreen?: () => Promise<void>;
      msRequestFullscreen?: () => Promise<void>;
      webkitRequestFullscreen?: () => Promise<void>;
    };

    if (fsElement.requestFullscreen) {
      void fsElement.requestFullscreen();
    } else if (fsElement.mozRequestFullScreen) {
      void fsElement.mozRequestFullScreen();
    } else if (fsElement.webkitRequestFullscreen) {
      void fsElement.webkitRequestFullscreen();
    } else if (fsElement.msRequestFullscreen) {
      void fsElement.msRequestFullscreen();
    }
  };

  const exitFullScreen = () => {
    const fsDoc = document as FullScreenDocument;
    if (fsDoc.exitFullscreen) {
      void fsDoc.exitFullscreen();
    } else if (fsDoc.mozCancelFullScreen) {
      /* Firefox */
      void fsDoc.mozCancelFullScreen();
    } else if (fsDoc.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      void fsDoc.webkitExitFullscreen();
    } else if (fsDoc.msExitFullscreen) {
      /* IE/Edge */
      void fsDoc.msExitFullscreen();
    }
  };

  return (
    <Button
      type="sidebar"
      title={!isFullscreen ? "Go fullscreen" : "Exit fullscreen"}
      onClick={() => {
        if (!isFullscreen) {
          setIsFullscreen(true);
          goFullScreen();
        } else {
          setIsFullscreen(false);
          exitFullScreen();
        }
      }}
    >
      {!isFullscreen ? <FullscreenIcon /> : <FullscreenExitIcon />}
    </Button>
  );
};

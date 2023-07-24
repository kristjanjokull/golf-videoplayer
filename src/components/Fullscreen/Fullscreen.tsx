import { useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { FullscreenIcon } from "../icons/Fullscreen";
import { FullscreenExitIcon } from "../icons/FullScreenExit";

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

  return (
    <Button
      type="sidebar"
      title={!isFullscreen ? "Go fullscreen" : "Exit fullscreen"}
      onClick={() => {
        if (!isFullscreen) {
          setIsFullscreen(true);
          goFullScreen();
        }
      }}
    >
      {!isFullscreen ? <FullscreenIcon /> : <FullscreenExitIcon />}
    </Button>
  );
};

import { useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { FullscreenIcon } from "../icons/Fullscreen";

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
    if (document.documentElement.requestFullscreen) {
      void document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      // Firefox
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      // Chrome, Safari and Opera
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      // IE/Edge
      document.documentElement.msRequestFullscreen();
    }
  };

  return (
    <Button
      onClick={() => {
        if (!isFullscreen) {
          setIsFullscreen(true);
          goFullScreen();
        }
      }}
    >
      <FullscreenIcon />
    </Button>
  );
};

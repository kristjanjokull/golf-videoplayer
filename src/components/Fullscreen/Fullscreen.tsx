import { Button } from "../Button/Button";
import { FullscreenIcon } from "../icons/Fullscreen";

export const FullScreen: React.FC = () => {
  return (
    <Button onClick={() => console.log("huga huga")}>
      <FullscreenIcon />
    </Button>
  );
};

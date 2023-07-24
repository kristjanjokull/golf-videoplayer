import { useVideoStore } from "../../stateManager/store";
import { Button } from "../button/button";
import { FlipRightIcon } from "../icons/flipRight";
import { FlipLeftIcon } from "../icons/flipLeft";

export const VideoFlip: React.FC = () => {
  const { isFlipped, toggleFlipped } = useVideoStore((state) => ({
    isFlipped: state.isFlipped,
    toggleFlipped: state.toggleFlipped,
  }));
  return (
    <Button
      type="sidebar"
      title={!isFlipped ? "Flip video" : "Unflip video"}
      onClick={toggleFlipped}
    >
      {!isFlipped ? <FlipRightIcon /> : <FlipLeftIcon />}
    </Button>
  );
};

import { useVideoStore } from "../../stateManager/store";
import { Button } from "../Button/Button";
import { FlipRightIcon } from "../icons/FlipRight";
import { FlipLeftIcon } from "../icons/FlipLeft";

export const VideoFlip: React.FC = () => {
  const { isFlipped, toggleFlipped } = useVideoStore((state) => ({
    isFlipped: state.isFlipped,
    toggleFlipped: state.toggleFlipped,
  }));
  return (
    <Button
      title={!isFlipped ? "Flip video" : "Unflip video"}
      onClick={toggleFlipped}
    >
      {!isFlipped && <FlipRightIcon />}
      {isFlipped && <FlipLeftIcon />}
    </Button>
  );
};

import { Button } from "$components/button/button";
import { FlipLeftIcon } from "$components/icons/flipLeftTemp";
import { FlipRightIcon } from "$components/icons/flipRightTemp";
import { useVideoStore } from "$utils/state";

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

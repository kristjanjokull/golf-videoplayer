import { Button } from "../Button/Button";
import { FlipRightIcon } from "../icons/FlipRight";

export const VideoFlip: React.FC = () => {
  return (
    <Button onClick={() => console.log("huga huga")}>
      <FlipRightIcon />
    </Button>
  );
};

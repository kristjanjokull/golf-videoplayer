import { Button } from "../Button/Button";
import { MuteIcon } from "../icons/Mute";

export const SoundToggler: React.FC = () => {
  return (
    <Button onClick={() => console.log("huga huga")}>
      <MuteIcon />
    </Button>
  );
};

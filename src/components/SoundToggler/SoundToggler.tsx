import { useVideoStore } from "../../stateManager/store";
import { Button } from "../Button/Button";
import { MuteIcon } from "../icons/Mute";
import { SoundOnIcon } from "../icons/SoundOn";

export const SoundToggler: React.FC = () => {
  const { isMuted, toggleMute } = useVideoStore((state) => ({
    isMuted: state.isMuted,
    toggleMute: state.toggleMute,
  }));
  return (
    <Button
      type="sidebar"
      onClick={toggleMute}
      title={isMuted ? "Turn sound on" : "Turn sound off"}
    >
      {isMuted ? <MuteIcon /> : <SoundOnIcon />}
    </Button>
  );
};

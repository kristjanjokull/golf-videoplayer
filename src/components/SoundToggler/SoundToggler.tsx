import { Button } from "$components/buttonTemp/button";
import { MuteIcon } from "$components/icons/mute";
import { SoundOnIcon } from "$components/icons/soundOn";
import { useVideoStore } from "$utils/state";

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

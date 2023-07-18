import { PlayIcon } from "../icons/Play";
import { PauseIcon } from "../icons/Pause";
import { RewindIcon } from "../icons/Rewind";
import { ForwardIcon } from "../icons/Forward";
import { controls, controlsButton } from "./Controls.css";
import { useVideoStore } from "../../stateManager/store";

export const Controls: React.FC = () => {
  const { rewind, forward, togglePlay, isPlaying } = useVideoStore((state) => ({
    rewind: state.rewind,
    forward: state.forward,
    togglePlay: state.togglePlay,
    isPlaying: state.isPlaying,
  }));

  return (
    <div className={controls}>
      <button type="button" className={controlsButton} onClick={rewind}>
        <RewindIcon />
      </button>
      <button type="button" className={controlsButton} onClick={togglePlay}>
        {!isPlaying && <PlayIcon />}
        {isPlaying && <PauseIcon />}
      </button>
      <button type="button" className={controlsButton} onClick={forward}>
        <ForwardIcon />
      </button>
    </div>
  );
};

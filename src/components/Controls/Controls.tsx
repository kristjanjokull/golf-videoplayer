// import { useThemeStore } from "../../stateManager/store";
import { PlayIcon } from "../icons/Play";
import { PauseIcon } from "../icons/Pause";
import { RewindIcon } from "../icons/Rewind";
import { ForwardIcon } from "../icons/Forward";
import { controls, controlsButton } from "./Controls.css";

export const Controls: React.FC = () => {
  // TODO: Remove this variable when statemanager is ready
  const isPlaying = false;

  const togglePlay = () => {
    // TODO: Play/Pause video
  };

  const rewind = () => {
    // TODO: Rewind video of 0.07s from current time
  };

  const forward = () => {
    // TODO: Rewind video of 0.07s from current time
  };

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

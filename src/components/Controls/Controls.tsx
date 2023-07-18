// import { useThemeStore } from "../../stateManager/store";
import { PlayIcon } from "../icons/Play";
import { PauseIcon } from "../icons/Pause";
import { RewindIcon } from "../icons/Rewind";
import { ForwardIcon } from "../icons/Forward";
import { controls, controlsButton } from "./Controls.css";

export const Controls: React.FC = () => {
  // const { theme, toggleTheme } = useThemeStore();
  const isPlaying = false;
  const handleBack = () => console.log("todo");
  const handlePlayPause = () => console.log("todo");
  const handleForward = () => console.log("todo");

  return (
    <div className={controls}>
      <button type="button" className={controlsButton} onClick={handleBack}>
        <RewindIcon />
      </button>
      <button
        type="button"
        className={controlsButton}
        onClick={handlePlayPause}
      >
        {!isPlaying && <PlayIcon />}
        {isPlaying && <PauseIcon />}
      </button>
      <button type="button" className={controlsButton} onClick={handleForward}>
        <ForwardIcon />
      </button>
    </div>
  );
};

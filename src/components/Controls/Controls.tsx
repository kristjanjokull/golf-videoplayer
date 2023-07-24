import { PlayIcon } from "../icons/play";
import { PauseIcon } from "../icons/pause";
import { RewindIcon } from "../icons/rewind";
import { ForwardIcon } from "../icons/forward";
import { controls } from "./controls.css";
import { useVideoStore } from "../../stateManager/store";
import { Button } from "../button/button";

export const Controls: React.FC = () => {
  const { rewind, forward, togglePlay, isPlaying } = useVideoStore((state) => ({
    rewind: state.rewind,
    forward: state.forward,
    togglePlay: state.togglePlay,
    isPlaying: state.isPlaying,
  }));

  return (
    <div className={controls}>
      <Button type="control" title="Rewind" onClick={rewind}>
        <RewindIcon />
      </Button>
      <Button
        type="control"
        title={!isPlaying ? "Play" : "Pause"}
        onClick={togglePlay}
      >
        {!isPlaying && <PlayIcon />}
        {isPlaying && <PauseIcon />}
      </Button>
      <Button type="control" title="Forward" onClick={forward}>
        <ForwardIcon />
      </Button>
    </div>
  );
};

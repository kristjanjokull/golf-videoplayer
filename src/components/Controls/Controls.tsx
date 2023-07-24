import { PlayIcon } from "@components/icons/play";
import { PauseIcon } from "@components/icons/pause";
import { RewindIcon } from "@components/icons/rewind";
import { ForwardIcon } from "@components/icons/forward";
import { useVideoStore } from "@stateManager/store";
import { Button } from "@components/button/button";
import { controls } from "./controls.css";

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

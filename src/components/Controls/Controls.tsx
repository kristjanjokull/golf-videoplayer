import { Button } from "$components/buttonTemp/button";
import { ForwardIcon } from "$components/icons/forward";
import { PauseIcon } from "$components/icons/pause";
import { PlayIcon } from "$components/icons/play";
import { RewindIcon } from "$components/icons/rewind";
import { useVideoStore } from "$utils/state";

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

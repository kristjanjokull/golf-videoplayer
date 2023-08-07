import { useVideoStore } from "../../utils/state";
import { Button } from "../button/button";
import { ForwardIcon } from "../icons/forward";
import { PauseIcon } from "../icons/pause";
import { PlayIcon } from "../icons/play";
import { RewindIcon } from "../icons/rewind";
import { controls } from "./controls.css";

type Props = {
  variant: "play" | "time";
};

export const Controls: React.FC<Props> = ({ variant }) => {
  const { rewind, forward, togglePlay, isPlaying } = useVideoStore((state) => ({
    rewind: state.rewind,
    forward: state.forward,
    togglePlay: state.togglePlay,
    isPlaying: state.isPlaying,
  }));

  return (
    <div className={controls}>
      {variant === "time" && (
        <>
          <Button type="control" title="Rewind" onClick={rewind}>
            <RewindIcon />
          </Button>
          <Button type="control" title="Forward" onClick={forward}>
            <ForwardIcon />
          </Button>
        </>
      )}

      {variant === "play" && (
        <Button
          type="control"
          title={!isPlaying ? "Play" : "Pause"}
          onClick={togglePlay}
        >
          {!isPlaying && <PlayIcon />}
          {isPlaying && <PauseIcon />}
        </Button>
      )}
    </div>
  );
};

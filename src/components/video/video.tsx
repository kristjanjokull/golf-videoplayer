import "../../styles/styles.css";

import { FC } from "react";

import { Theme } from "../../utils/state";
import { Analyzer } from "../analyzer/analyzer";

type Props = {
  src: Array<string>;
  colorTheme?: Theme;
};

export const Video: FC<Props> = ({ src }) => {
  return (
    <div>
      {src.length === 1 && <Analyzer src={src[0]} />}
      {src.length === 2 && (
        <>
          <Analyzer src={src[0]} />
          <Analyzer src={src[1]} />
        </>
      )}
    </div>
  );
};

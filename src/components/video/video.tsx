import { FC, useEffect } from "react";

import { Analyzer } from "$components/analyzer/analyzer";
import { Theme } from "$utils/state";
import { useThemeStore } from "$utils/state";
import { darkTheme, lightTheme } from "$utils/theme.css";

import { videoContainer } from "./video.css";

type Props = {
  src: Array<string>;
  colorTheme?: Theme;
};

export const Video: FC<Props> = ({ src, colorTheme = "light" }) => {
  const { theme, setTheme } = useThemeStore((state) => ({
    theme: state.theme,
    setTheme: state.setTheme,
  }));

  useEffect(() => {
    if (colorTheme) {
      setTheme(colorTheme);
    }
  }, [colorTheme, setTheme]);

  return (
    <div className={theme === "light" ? lightTheme : darkTheme}>
      <div className={videoContainer}>
        {src.length === 1 && <Analyzer src={src[0]} colorTheme={colorTheme} />}
        {src.length === 2 && (
          <>
            <Analyzer src={src[0]} colorTheme={colorTheme} />
            <Analyzer src={src[1]} colorTheme={colorTheme} />
          </>
        )}
      </div>
    </div>
  );
};

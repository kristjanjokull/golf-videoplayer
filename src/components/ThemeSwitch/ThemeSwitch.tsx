import { MoonIcon } from "../icons/Moon";
import { SunIcon } from "../icons/Sun";
import { useThemeStore } from "../../stateManager/store";

export const ThemeSwitch: React.FC = () => {
  const { theme, toggleTheme } = useThemeStore();
  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? <MoonIcon /> : <SunIcon />}
    </button>
  );
};

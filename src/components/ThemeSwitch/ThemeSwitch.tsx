import { MoonIcon } from "../icons/Moon";
import { SunIcon } from "../icons/Sun";
import { themeButton } from "./ThemeSwitch.css";
import { useThemeStore } from "../../stateManager/store";

export const ThemeSwitch: React.FC = () => {
  const { theme, toggleTheme } = useThemeStore();
  return (
    <button className={themeButton} onClick={toggleTheme}>
      {theme === "light" ? <MoonIcon /> : <SunIcon />}
    </button>
  );
};

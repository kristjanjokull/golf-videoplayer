import { MoonIcon } from "../icons/Moon";
import { SunIcon } from "../icons/Sun";
import { useThemeStore } from "../../stateManager/store";
import { Button } from "../Button/Button";

export const ThemeSwitch: React.FC = () => {
  const { theme, toggleTheme } = useThemeStore();
  return (
    <Button type="sidebar" title="Change theme" onClick={toggleTheme}>
      {theme === "light" ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
};

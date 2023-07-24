import { MoonIcon } from "../icons/moon";
import { SunIcon } from "../icons/sun";
import { useThemeStore } from "../../stateManager/store";
import { Button } from "../button/button";

export const ThemeSwitch: React.FC = () => {
  const { theme, toggleTheme } = useThemeStore();
  return (
    <Button type="sidebar" title="Change theme" onClick={toggleTheme}>
      {theme === "light" ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
};

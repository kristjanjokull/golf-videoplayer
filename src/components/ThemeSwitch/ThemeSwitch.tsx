import { MoonIcon } from "@components/icons/moon";
import { SunIcon } from "@components/icons/sun";
import { useThemeStore } from "@stateManager/store";
import { Button } from "@components/button/button";

export const ThemeSwitch: React.FC = () => {
  const { theme, toggleTheme } = useThemeStore();
  return (
    <Button type="sidebar" title="Change theme" onClick={toggleTheme}>
      {theme === "light" ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
};

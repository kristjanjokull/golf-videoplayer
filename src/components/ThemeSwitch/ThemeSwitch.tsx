import { Button } from "$components/buttonTemp/button";
import { MoonIcon } from "$components/icons/moon";
import { SunIcon } from "$components/icons/sun";
import { useThemeStore } from "$utils/state";

export const ThemeSwitch: React.FC = () => {
  const { theme, toggleTheme } = useThemeStore();
  return (
    <Button type="sidebar" title="Change theme" onClick={toggleTheme}>
      {theme === "light" ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
};

import { Button } from "$components/button/button";
import { MoonIcon } from "$components/icons/moonTemp";
import { SunIcon } from "$components/icons/sunTemp";
import { useThemeStore } from "$utils/state";

export const ThemeSwitch: React.FC = () => {
  const { theme, toggleTheme } = useThemeStore();
  return (
    <Button type="sidebar" title="Change theme" onClick={toggleTheme}>
      {theme === "light" ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
};

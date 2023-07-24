import video from "./assets/demoswing.mp4";
import { Video } from "./components/video/video";
import { useThemeStore } from "./stateManager/store";
import { darkTheme, lightTheme } from "./utils/theme.css";

function App() {
  const { theme } = useThemeStore();

  return (
    <div className={theme === "light" ? lightTheme : darkTheme}>
      <Video src={video} />
    </div>
  );
}

export default App;

import video from "./assets/demoswing.mp4";
import { Video } from "./components/video/Video";
import { lightTheme, darkTheme } from "./utils/theme.css";
import { useThemeStore } from "./stateManager/store";

function App() {
  const { theme } = useThemeStore();

  return (
    <div className={theme === "light" ? lightTheme : darkTheme}>
      <Video src={video} />
    </div>
  );
}

export default App;

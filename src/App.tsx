import video from "./assets/demoswing.mp4";
// import "./style.css";
import { Video } from "./components/video/Video";

import { lightTheme, darkTheme } from "./theme/theme.css";
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

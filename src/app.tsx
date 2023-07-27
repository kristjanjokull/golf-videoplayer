import video from "./assets/demoswing.mp4";
import { Video } from "./components/analyzer/analyzer";

function App() {
  return (
    <div>
      <Video src={video} colorTheme="dark" />;
    </div>
  );
}

export default App;

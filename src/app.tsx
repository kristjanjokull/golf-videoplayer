import { Video } from "$components/video/video";

import video from "./assets/demoswing.mp4";

function App() {
  return <Video src={[video]} />;
}

export default App;

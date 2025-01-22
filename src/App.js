import "./App.css";
import Lottie from "react-lottie";
import ScrollIcon from "./lotties/mouse_animation";
import LotusAnimation from "./components/LotusAnimation";
import AvatarFrame from "./components/photoCover/photoCover";

import Header from "./components/header/header";
import MainIllustration from "./components/MainIllustration/MainIllustration.js";

function App() {
  return (
    <div className="App">
      <Header />
      <MainIllustration />
      {/* <LotusAnimation /> */}
      {/* <Lottie options={defaultOptions} height={40} width={40} /> */}
    </div>
  );
}

export default App;

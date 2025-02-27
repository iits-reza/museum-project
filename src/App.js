import "./App.css";
import { AnimatedAvatar } from "./components/AnimatedAvatar/AnimatedAvatar.js";

import Header from "./components/header/header";
import ImageSlider from "./components/ImageSlider.js";
import MainIllustration from "./components/MainIllustration/MainIllustration.js";

function App() {
  return (
    <div className="App">
      <Header />
      <MainIllustration />
      <AnimatedAvatar />
      <ImageSlider />
    </div>
  );
}

export default App;

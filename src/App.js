import "./App.css";
import { AnimatedAvatar } from "./components/AnimatedAvatar/AnimatedAvatar.js";

import Header from "./components/header/header";
import MainIllustration from "./components/MainIllustration/MainIllustration.js";

function App() {
  return (
    <div className="App">
      <Header />
      <MainIllustration />
      <AnimatedAvatar />
    </div>
  );
}

export default App;

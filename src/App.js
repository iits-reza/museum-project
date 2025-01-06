import Lottie from "react-lottie";
import ScrollIcon from "./lotties/mouse_animation";
import "./App.css";
import LotusAnimation from "./components/LotusAnimation";
import AvatarFrame from "./components/photoCover/photoCover";

// import Header from "./components/header/header";

function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: ScrollIcon,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="App">
      {/* <Header /> */}
      <LotusAnimation />
      <Lottie options={defaultOptions} height={40} width={40} />
      <AvatarFrame />
    </div>
  );
}

export default App;

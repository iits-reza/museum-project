import Lottie from "react-lottie";
import ScrollIcon from "./lotties/mouse_animation";
import "./App.css";
import LotusAnimation from "./components/LotusAnimation";
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
      <Lottie options={defaultOptions} height={40} width={40} />
      <LotusAnimation />
    </div>
  );
}

export default App;

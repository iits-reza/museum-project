import logo from "./logo.svg";
import ScrollIcon from "./images/mouseScroll.gif";
import "./App.css";
import LotusAnimation from "./components/LotusAnimation";
import Header from "./components/header/header";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <img src={ScrollIcon} />
      <LotusAnimation />
    </div>
  );
}

export default App;

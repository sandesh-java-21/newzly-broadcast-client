import logo from "./logo.svg";
import "./App.css";
import Carousel from "./components/Carousel";
import CustomSlider from "./components/CustomSlider";
import Navbar from "./components/Navbar/NavBar";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CustomSlider />
    </div>
  );
}

export default App;

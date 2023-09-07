// import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import ClientUsage from "./components/ClientUsage/ClientUsage";
// import Connectivity from "./components/Connectivity/Connectivity";
import Navbar from "./components/Navbar/Navbar";
import Ports from "./components/Ports/Ports";
import Location from "./components/Location/Location";
import Tools from "./components/Tools/Tools";
import Home from "./components/Home/Home";
import Summary from "./components/Summary/Summary";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ports" element={<Ports />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/Location" element={<Location />} />
          <Route path="/tools" element={<Tools />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

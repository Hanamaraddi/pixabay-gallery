import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Search from "./Search/Search";
import Navbar from "./Nav/Navbar";

function App() {
  return (
    <div className="App">
      <center>
        <div>
          <Navbar />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search/:image" element={<Search />} />
          </Routes>
        </div>
      </center>
    </div>
  );
}

export default App;

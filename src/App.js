import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Pages/Home/Home";
import Navbar from "./components/Nav_Footer/Navbar";
import PharHome from "./components/Applications/Pharmacy/Home/PharHome";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <Home /> */}
      <PharHome></PharHome>
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import WilderList from "./pages/WilderList";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-wilders" element={<WilderList />} />
        <Route path="/my-profile" element="<div>Mon profil</div>" />
        <Route path="/login" element="<div>login</div>" />
      </Routes>
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import WilderList from "./pages/WilderList";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Wilder from "./pages/Wilder";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wilders" element={<WilderList />} />
        <Route path="/wilders/:id" element={<Wilder />} />
        <Route path="/my-profile" element="Mon profil" />
        <Route path="/login" element="login" />
      </Routes>
    </div>
  );
}

export default App;

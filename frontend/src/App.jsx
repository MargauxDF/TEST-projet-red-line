import { Route, Routes } from "react-router-dom";
import UserProvider from "./contexts/UserContext";
import WilderList from "./pages/WilderList";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Wilder from "./pages/Wilder";
import MyProfile from "./pages/MyProfile";
import Login from "./pages/Login";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wilders" element={<WilderList />} />
          <Route path="/wilders/:id" element={<Wilder />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </UserProvider>
  );
}

export default App;

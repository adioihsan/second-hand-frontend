import Login from "./pages/auth/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Guest from "./layouts/Guest";
import Home from "./pages/home/Home";
import Register from "./pages/auth/Register/Registration";
import Halamanproduk from "./pages/halamanproduk/Halamanproduk";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<Guest />}>
            <Route path="/" element={<Home />} />
            <Route path="/halamanproduk" element={<Halamanproduk />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import Login from "./pages/auth/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Guest from "./layouts/Guest";
import Home from "./pages/home/Home";
import Register from "./pages/auth/Register/Registration";
import Halamanproduk from "./pages/halamanproduk/Halamanproduk";
import ProfileInfo from "./pages/profileInfo/ProfileInfo";
import Buyer from "./layouts/Buyer";
import ProductAdd from "./pages/productAdd/productAdd";
import Seller from "./layouts/Seller";
import Negotiationinfo from "./pages/negotiationinfo/Negotiationinfo";
import BuyerProductPage from "./pages/BuyerProductPage/BuyerProductPage";

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
            <Route path="/negotiationinfo" element={<Negotiationinfo />} />
            <Route path="/buyerproductpage" element={<BuyerProductPage />} />
          </Route>
          <Route element={<Buyer />}>
            <Route path="/profile-info" element={<ProfileInfo />} />
          </Route>
          <Route element={<Seller />}>
            <Route path="/product-add" element={<ProductAdd />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

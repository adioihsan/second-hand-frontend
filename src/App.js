import Login from "./pages/auth/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Public from "./layouts/Public";
import Home from "./pages/home/Home";
import Register from "./pages/auth/Register/Registration";
import Halamanproduk from "./pages/halamanproduk/Halamanproduk";
import ProfileInfo from "./pages/profileInfo/ProfileInfo";
import ProductAdd from "./pages/productAdd/productAdd";
import Negotiationinfo from "./pages/negotiationinfo/Negotiationinfo";
import ProductList from "./pages/productList/ProductList";
import Private from "./layouts/Private";
import BuyerProductPage from "./pages/BuyerProductPage/BuyerProductPage";
import ProductEdit from "./pages/productEdit/productEdit";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<Public />}>
            <Route path="/" element={<Home />} />
            <Route path="/category/:categoryId" element={<Home />} />
            <Route path="/halamanproduk" element={<Halamanproduk />} />
          </Route>
          <Route element={<Private />}>
            <Route path="/profile-info" element={<ProfileInfo />} />
            <Route path="/product-add" element={<ProductAdd />} />
            <Route path="/product-list" element={<ProductList />} />
            <Route path="/product-edit/:productId" element={<ProductEdit />} />
            <Route path="/buyerproductpage" element={<BuyerProductPage />} />
            <Route path="/negotiation-info" element={<Negotiationinfo />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-center"
        theme="colored"
        hideProgressBar
        autoClose={2500}
      />
    </div>
  );
}

export default App;

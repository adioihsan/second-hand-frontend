import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faDollar } from "@fortawesome/free-solid-svg-icons";
import { faCube } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import ProductCard, {
  ProductCardAdd,
} from "../../components/card/productCard/ProductCard";
import noProductImg from "../../assets/images/noProduct.png";
import SellerCard from "../../components/card/sellerCard/SellerCard";
import CategoryNav from "../../components/navigation/categoryNav/CategoryNav";
import "./productList.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoadingFull from "../../components/loading/lodingFull/LoadingFull";
import { useState } from "react";
import { toast } from "react-toastify";
function ProductList(props) {
  // hooks
  const dispatch = useDispatch();
  const location = useLocation();

  const menus = [
    { name: "Produk", icon: faCube, isActive: true },
    { name: "Diminati", icon: faHeart, isActive: false },
    { name: "Terjual", icon: faDollar, isActive: false },
  ];
  // const { message } = useSelector((state) => state.product);
  const [message, setMessage] = useState(null);
  const renderNoProduct = () => {
    return (
      <div className="grid place-content-center place-items-center gap-5 w-full my-16">
        <img src={noProductImg} alt="no product" />
        <p className="text-center text-lg">
          Belum ada produkmu yang diminati nih, sabar ya rejeki nggak kemana kok
        </p>
      </div>
    );
  };
  // effect
  return (
    <main className="productList">
      {/* {pending && <LoadingFull />} */}
      <article>
        <section>
          <h1 className="productPageTitle">Daftar Jual Saya</h1>
          <SellerCard />
        </section>
        <section className="menuButtons">
          <CategoryNav categories={menus} />
        </section>
        <div className="productListWrapper">
          <section className="menuLeft">
            <CategoryNav categories={menus} type="list" />
          </section>
          {false ? (
            <section className="productListItem">
              <ProductCardAdd />
              {Array(12)
                .fill(0)
                .map((item, index) => (
                  <ProductCard key={"cardSample" + index} />
                ))}
            </section>
          ) : (
            renderNoProduct()
          )}
        </div>
      </article>
    </main>
  );
}

export default ProductList;

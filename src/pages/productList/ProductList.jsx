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
function ProductList(props) {
  const menus = [
    { name: "Produk", icon: faCube, isActive: true },
    { name: "Diminati", icon: faHeart, isActive: false },
    { name: "Terjual", icon: faDollar, isActive: false },
  ];
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
  return (
    <main className="productList">
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

import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faDollar } from "@fortawesome/free-solid-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faCube } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import CategoryButton from "../../components/button/buttonCategory.jsx/ButtonCategory";
import ProductCard, {
  ProductCardAdd,
} from "../../components/card/productCard/ProductCard";
import SellerCard from "../../components/card/sellerCard/SellerCard";
import CategoryNav from "../../components/navigation/categoryNav/CategoryNav";
import "./productList.css";
function ProductList(props) {
  const menus = [
    { name: "Produk", icon: faCube, isActive: true },
    { name: "Diminati", icon: faHeart, isActive: false },
    { name: "Terjual", icon: faDollar, isActive: false },
  ];
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
          <section className="productListItem">
            <ProductCardAdd />
            {Array(12)
              .fill(0)
              .map((item, index) => (
                <ProductCard key={"cardSample" + index} />
              ))}
          </section>
        </div>
      </article>
    </main>
  );
}

export default ProductList;

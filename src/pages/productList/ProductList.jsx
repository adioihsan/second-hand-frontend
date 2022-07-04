import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faDollar } from "@fortawesome/free-solid-svg-icons";
import { faCube } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import ProductCard, {
  ProductCardAdd,
  ProductCardLoading,
} from "../../components/card/productCard/ProductCard";
import noProductImg from "../../assets/images/noProduct.png";
import SellerCard from "../../components/card/sellerCard/SellerCard";
import CategoryNav from "../../components/navigation/categoryNav/CategoryNav";
import "./productList.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getMyProductList } from "../../services/actions/productAction";
import apiStatus from "../../services/utils/apiStatus";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
function ProductList(props) {
  // hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const menus = [
    { name: "Produk", icon: faCube, isActive: true },
    { name: "Diminati", icon: faHeart, isActive: false },
    { name: "Terjual", icon: faDollar, isActive: false },
  ];
  const { data, status, count } = useSelector((state) => state.productList);
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
  useEffect(() => {
    dispatch(getMyProductList({ page: 1, limit: 12, filter: 1 }));
  }, []);
  return (
    <>
      <Helmet>
        <title>Secondhand. Daftar Jual Saya</title>
      </Helmet>
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
            <section className="productListItem">
              <Link to="/product-add">
                <ProductCardAdd />{" "}
              </Link>
              {status === apiStatus.pending &&
                Array(5)
                  .fill(0)
                  .map((dum, index) => (
                    <ProductCardLoading key={"productDummy" + index} />
                  ))}
              {status === apiStatus.error && (
                <h1>Terjadi kesalahan saat mengambil data</h1>
              )}
              {data?.map((product) => (
                <ProductCard
                  product={product}
                  onClick={() => navigate("/product-view/seller/" + product.id)}
                />
              ))}
            </section>
            {status === apiStatus.error && (
              <h1>Terjadi kesalahan saat mengambil data</h1>
            )}
          </div>
        </article>
      </main>
    </>
  );
}

export default ProductList;

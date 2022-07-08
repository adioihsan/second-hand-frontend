import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./whishlistBuyer.css";
import { getProductList } from "../../services/actions/productAction";
import apiStatus from "../../services/utils/apiStatus";
import { useSelector } from "react-redux";
import ProductCard, {
  ProductCardAdd,
  ProductCardLoading,
} from "../../components/card/productCard/ProductCard";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const WhishlistBuyer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, status } = useSelector((state) => state.productList);
  useEffect(() => {
    dispatch(
      getProductList({
        page: 1,
        limit: 12,
        search: "",
        categoryId: "",
      })
    );
  }, []);

  return (
    <>
      <Helmet>
        <title>Secondhand. Daftar Jual Saya</title>
      </Helmet>
      <section className="products mt-6 px-3 ">
        {status === apiStatus.pending &&
          Array(12)
            .fill(0)
            .map((dum, index) => (
              <ProductCardLoading key={"cardDummy" + index} />
            ))}
        {status === apiStatus.error && (
          <h1>Terjadi kesalahan saat mengambil data</h1>
        )}
        {status === apiStatus.success &&
          data.map((product, index) => (
            <ProductCard
              product={product}
              key={"productHome" + product.name + product.id}
              onClick={() => navigate("/product-view/see/" + product.id)}
            />
          ))}
      </section>
    </>
  );
};

export default WhishlistBuyer;

import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./whishlistBuyer.css";
import { getProduct } from "../../services/actions/productAction";
import apiStatus from "../../services/utils/apiStatus";
import { useSelector } from "react-redux";
import ProductCard, {
  ProductCardAdd,
  ProductCardLoading,
} from "../../components/card/productCard/ProductCard";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { getWishes } from "../../services/actions/whishlistAction";
import { useState } from "react";
const WhishlistBuyer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { data, status } = useSelector((state) => state.productList);
  const { data: dataProduct, status: statusProduct } = useSelector(
    (state) => state.product
  );
  const { data: wishesData, status: wishesStatus } = useSelector(
    (state) => state.whishlist
  );
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    setProductList([]);
    dispatch(getWishes());
  }, []);
  useEffect(() => {
    if (wishesData !== null && wishesData.length !== 0) {
      setProductList([]);
      wishesData.forEach((element) => {
        dispatch(getProduct(element.product_id));
      });
    }
  }, [wishesData]);

  useEffect(() => {
    if (dataProduct !== null && wishesData !== null) {
      setProductList((previousValue) => {
        if (wishesData.length <= previousValue.length) return previousValue;
        return [...previousValue, { ...dataProduct }];
      });
    } else {
      console.log("data tidak terpanggil");
    }
  }, [dataProduct]);
  return (
    <div className="WhishlistBuyer">
      <Helmet>
        <title>Secondhand. Whislist</title>
      </Helmet>
      <h1 className="font-bold mx-auto">Your Whishlist</h1>
      <section className="products">
        {wishesStatus === apiStatus.pending &&
          Array(12)
            .fill(0)
            .map((dum, index) => (
              <ProductCardLoading key={"cardDummy" + index} />
            ))}
        {wishesStatus === apiStatus.error && (
          <h1>Terjadi kesalahan saat mengambil data</h1>
        )}
        {productList.map((product) => (
          <>
            <ProductCard
              product={product}
              key={"productHome" + product.name + product.id}
              onClick={() => navigate("/product-view/see/" + product.id)}
            />
          </>
        ))}
      </section>
    </div>
  );
};

export default WhishlistBuyer;

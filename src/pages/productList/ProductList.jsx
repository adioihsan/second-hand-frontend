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
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getMyProductList } from "../../services/actions/productAction";
import apiStatus from "../../services/utils/apiStatus";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { faHandshake } from "@fortawesome/free-regular-svg-icons";
import { getSellerNegoList } from "../../services/actions/negotiationAction";
import NegoCard from "../../components/card/negoCard/NegoCard";
import { useOutletContext } from "react-router-dom";
function ProductList(props) {
  // hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const outletContext = useOutletContext();
  const menus = [
    {
      name: "Produk",
      icon: faCube,
      isActive: params.category === "products",
      cb: () => navigate("/product-list/products"),
    },
    // {
    //   name: "Diminati",
    //   icon: faHeart,
    //   isActive: params.category === "wish",
    //   cb: () => navigate("/product-list/wish"),
    // },
    {
      name: "Penawaran",
      icon: faHandshake,
      isActive: params.category === "negotiation",
      cb: () => navigate("/product-list/negotiation"),
    },
    {
      name: "Terjual",
      icon: faDollar,
      isActive: params.category === "sold",
      cb: () => navigate("/product-list/sold"),
    },
  ];
  const { data, status, count } = useSelector((state) => state.productList);
  const { userData } = useSelector((state) => state.user);
  const { data: negoData, status: negoStatus } = useSelector(
    (state) => state.negotiationList
  );
  const renderNoProduct = (message) => {
    return (
      <div className="grid place-content-center place-items-center gap-5 w-full my-16">
        <img src={noProductImg} alt="no product" />
        <p className="text-center text-lg">{message}</p>
      </div>
    );
  };
  // actions
  const doFilterNego = (e) => {
    navigate("/product-list/negotiation/" + e.target.value);
  };

  // effect
  useEffect(() => {
    outletContext.setNavType(null);
    outletContext.setNavTitle(null);
  }, []);
  useEffect(() => {
    if (params.category === "products")
      dispatch(getMyProductList({ page: 1, limit: 12, filter: 1 }));
    else if (params.category === "negotiation")
      dispatch(
        getSellerNegoList({ page: 1, limit: 12, filter: params.filter })
      );
    else if (params.category === "sold")
      dispatch(getMyProductList({ page: 1, limit: 12, filter: 2 }));
    // else if (params.category === "wish")
    //   dispatch(getMyProductList({ page: 1, limit: 12, filter: 4 }));
  }, [params.category, params.filter]);
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
            {/* <SellerCard seller={userData} /> */}
          </section>
          <section className="menuButtons">
            <CategoryNav categories={menus} />
          </section>
          <div className="productListWrapper">
            <section className="menuLeft">
              <CategoryNav categories={menus} type="list" />
            </section>
            {params.category !== "negotiation" && (
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
                {data?.map((product, index) => (
                  <ProductCard
                    product={product}
                    onClick={() =>
                      navigate("/product-view/seller/" + product.id)
                    }
                    key={"productList" + index}
                  />
                ))}
              </section>
            )}
            {params.category === "negotiation" && (
              <div className="flex flex-col gap-3 w-full">
                <select className="p-2 rounded-md" onChange={doFilterNego}>
                  <option value="">Semua Penawaran</option>
                  <option value="pending">Penawaran baru</option>
                  <option value="rejected">Penawaran ditolak</option>
                  <option value="accepted">Penawaran diterima</option>
                </select>
                {negoData?.length === 0 &&
                  renderNoProduct("Belum ada penawaran")}
                <section className="negoListItem">
                  {negoStatus === apiStatus.pending &&
                    Array(5)
                      .fill(0)
                      .map((dum, index) => (
                        <ProductCardLoading key={"productDummy" + index} />
                      ))}
                  {negoStatus === apiStatus.error && (
                    <h1>Terjadi kesalahan saat mengambil data</h1>
                  )}
                  {negoData?.map((nego, index) => {
                    if (nego.status !== "done")
                      return (
                        <NegoCard
                          product={nego.product}
                          negoPrice={nego.price}
                          negoDate={nego.updatedAt}
                          negoStatus={nego.status}
                          buyer={nego.user_buyer.user_detail}
                          key={"productNego" + index}
                          onClick={() =>
                            navigate("/negotiation-info/" + nego.id)
                          }
                        />
                      );
                  })}
                </section>
              </div>
            )}

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

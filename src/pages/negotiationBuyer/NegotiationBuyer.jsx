import React from "react";
import "./negotiationBuyer.css";
import { Helmet } from "react-helmet-async";
import CategoryNav from "../../components/navigation/categoryNav/CategoryNav";
import { faCube } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { faHandshakeSlash } from "@fortawesome/free-solid-svg-icons";
import { faHandshake } from "@fortawesome/free-regular-svg-icons";
import { faHandshakeAlt } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faCircleDot } from "@fortawesome/free-regular-svg-icons";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getBuyerNegoList } from "../../services/actions/negotiationAction";
import { useSelector } from "react-redux";
import { useState } from "react";
import apiStatus from "../../services/utils/apiStatus";
import { ProductCardLoading } from "../../components/card/negoCard/NegoCard";
import NegoCard from "../../components/card/negoCard/NegoCard";
import noProductImg from "../../assets/images/noProduct.png";
function NegotiationBuyer(props) {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data, status } = useSelector((state) => state.negotiationList);
  const [negoData, setNegoData] = useState([]);
  const menus = [
    {
      name: "Semua",
      icon: faCube,
      isActive: params.category === "all",
      cb: () => navigate("/negotiation/all"),
    },
    {
      name: "Dalam proses",
      icon: faCircleDot,
      isActive: params.category === "pending",
      cb: () => navigate("/negotiation/pending"),
    },
    {
      name: "Diterima",
      icon: faHandshakeAlt,
      isActive: params.category === "accepted",
      cb: () => navigate("/negotiation/accepted"),
    },
    {
      name: "Ditolak",
      icon: faHandshakeSlash,
      isActive: params.category === "rejected",
      cb: () => navigate("/negotiation/rejected"),
    },
  ];

  // components
  const renderNoProduct = (message) => {
    return (
      <div className="grid place-content-center place-items-center gap-5 w-full my-16">
        <img src={noProductImg} alt="no product" />
        <p className="text-center text-lg">{message}</p>
      </div>
    );
  };
  // helpers
  const filterNegoData = (data, category, otherCategory) => {
    return data.filter(
      (nego) => nego.status === category || nego.status === otherCategory
    );
  };
  useEffect(() => {
    dispatch(getBuyerNegoList({ page: 1, limit: 12 }));
  }, []);
  useEffect(() => {
    if (params.category === "all" && data) setNegoData(data);
    if (params.category === "pending" && data)
      setNegoData(() => filterNegoData(data, "pending"));
    if (params.category === "rejected" && data)
      setNegoData(() => filterNegoData(data, "rejected"));
    if (params.category === "accepted" && data)
      setNegoData(() => filterNegoData(data, "accepted", "done"));
  }, [params.category, data]);
  return (
    <>
      <Helmet>
        <title>Secondhand. Penawaran saya</title>
      </Helmet>
      <main className="negotiationBuyer">
        <article>
          <section>
            <h1 className="productPageTitle">Penawaran Saya</h1>
            {/* <SellerCard seller={userData} /> */}
          </section>
          <section className="menuButtons mb-3">
            <CategoryNav categories={menus} />
          </section>
          <div className="productListWrapper">
            <section className="menuLeft">
              <CategoryNav categories={menus} type="list" />
            </section>
            <div className="flex flex-col gap-3 w-full">
              {status === apiStatus.success &&
                negoData.length === 0 &&
                renderNoProduct("Belum ada penawaran")}
              <section className="negoListItem">
                {status === apiStatus.pending &&
                  negoData.length === 0 &&
                  Array(5)
                    .fill(0)
                    .map((dum, index) => (
                      <ProductCardLoading key={"productDummy" + index} />
                    ))}
                {status === apiStatus.error && (
                  <h1>Terjadi kesalahan saat mengambil data</h1>
                )}
                {negoData?.map((nego, index) => (
                  <NegoCard
                    product={nego.product}
                    negoPrice={nego.price}
                    negoDate={nego.updatedAt}
                    negoStatus={nego.status}
                    key={"productNego" + index}
                    onClick={() =>
                      navigate(
                        "/product-view/see/" +
                          nego.product.user_id +
                          "/" +
                          nego.product.id
                      )
                    }
                  />
                ))}
              </section>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}

export default NegotiationBuyer;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";
import ButtonPrimary from "../../components/button/buttonPrimary/ButtonPrimary";
import NegoCard from "../../components/card/negoCard/NegoCard";
import SellerCard from "../../components/card/sellerCard/SellerCard";
import NegoAcceptedModal from "../../components/modal/nengoAcceptedModal/NegoAcceptedModal";
import {
  acceptNego,
  doneNego,
  getNego,
  rejectNego,
} from "../../services/actions/negotiationAction";
import apiStatus from "../../services/utils/apiStatus";
import "./negotiationinfo.css";
import iconWhatsapp from "../../assets/images/icon-whatsapp-16.png";
import UpdateStatusModal from "../../components/modal/updateStatusModal/UpdateStatusModal";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Negotiationinfo = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const {
    data: negoData,
    status,
    message,
    buyer,
  } = useSelector((state) => state.negotiation);
  const {
    data: product,
    status: productStatus,
    message: productMessage,
  } = useSelector((state) => state.product);
  const [isAction, setIsAction] = useState(false);
  const [isProductAction, setIsProductAction] = useState(false);
  const outletContext = useOutletContext();
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [showAcceptModal, setShowAcceptModal] = useState(false);

  const doAccept = (negoId) => {
    dispatch(acceptNego(negoId));
    setIsAction(true);
  };
  const doReject = (negoId) => {
    dispatch(rejectNego(negoId));
    setIsAction(true);
  };

  const doCallBuyer = () => {
    const buyer = negoData.user_buyer.user_detail;
    window.open(
      `https://wa.me/${buyer.phone}?text=Hallo ${
        buyer.name
      } , saya setuju untuk menjual *${
        negoData.product.name
      }* dengan harga ${negoData.price.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
      })}`
    );
  };

  const doSoldProduct = (negoId) => {
    setShowStatusModal(false);
    dispatch(doneNego(negoId));
    setIsProductAction(true);
  };
  useEffect(() => {
    outletContext.setNavType("back");
    outletContext.setNavTitle("Info Penawar");
    dispatch(getNego(params.negoId));
  }, []);
  useEffect(() => {
    if (status === apiStatus.pending) outletContext.setShowBar(true);
    else if (status === apiStatus.success && isAction) {
      if (negoData.status === "accepted") setShowAcceptModal(true);
      if (negoData.status === "done") toast.success("Produk mu sudah terjual");
      if (negoData.status === "rejected")
        toast.warning("Tawaran telah di tolak");
    } else if (status === apiStatus.error && isAction) toast.error(message);
    if (status !== apiStatus.pending) {
      outletContext.setShowBar(false);
      setShowStatusModal(false);
      setIsAction(false);
    }
  }, [status]);
  console.log(negoData);
  if (status === apiStatus.pending) return "";
  if (negoData)
    return (
      <>
        <Helmet>
          <title>Seconhand. Info Penawaran</title>
        </Helmet>
        <div className="w-full flex justify-center">
          <div className="negotiationInfo">
            <SellerCard seller={buyer.user_detail} noEdit />
            <NegoCard
              product={negoData.product}
              negoPrice={negoData.price}
              negoDate={negoData.updatedAt}
              negoStatus={negoData.status}
            />
            {negoData.status === "pending" && (
              <div className="btnsAction">
                <ButtonPrimary
                  className="w-full md:w-1/4"
                  onClick={() => doAccept(negoData.id)}
                >
                  Terima{" "}
                </ButtonPrimary>
                <ButtonPrimary
                  className="w-full md:w-1/4"
                  type="outlined"
                  onClick={() => doReject(negoData.id)}
                >
                  Tolak
                </ButtonPrimary>
              </div>
            )}
            {negoData.status === "accepted" && (
              <div className="btnsAction">
                <ButtonPrimary
                  className="w-full md:w-1/4"
                  type="outlined"
                  onClick={() => setShowStatusModal(true)}
                >
                  Status
                </ButtonPrimary>

                <ButtonPrimary
                  className="w-full md:w-1/4"
                  onClick={() => doCallBuyer()}
                >
                  Hubungi di <img src={iconWhatsapp} alt="whatsapp" />
                </ButtonPrimary>
              </div>
            )}
          </div>
        </div>
        {showAcceptModal && (
          <NegoAcceptedModal
            negoData={negoData}
            cb={{ doCallBuyer }}
            onClick={() => setShowAcceptModal(false)}
          />
        )}
        {showStatusModal && (
          <UpdateStatusModal
            cb={{ doSoldProduct, doReject }}
            productId={negoData.product.id}
            negoId={negoData.id}
            onClick={() => setShowStatusModal(false)}
          />
        )}
      </>
    );
};

export default Negotiationinfo;

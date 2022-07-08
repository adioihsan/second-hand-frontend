import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import ButtonPrimary from "../../components/button/buttonPrimary/ButtonPrimary";
import NegoCard from "../../components/card/negoCard/NegoCard";
import SellerCard from "../../components/card/sellerCard/SellerCard";
import NegoAcceptedModal from "../../components/modal/nengoAcceptedModal/NegoAcceptedModal";
import {
  acceptNego,
  rejectNego,
} from "../../services/actions/negotiationAction";
import apiStatus from "../../services/utils/apiStatus";
import "./negotiationinfo.css";
import iconWhatsapp from "../../assets/images/icon-whatsapp-16.png";
import UpdateStatusModal from "../../components/modal/updateStatusModal/UpdateStatusModal";
import { soldProduct } from "../../services/actions/productAction";

const Negotiationinfo = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, status, message } = useSelector((state) => state.negotiation);
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
  const [negoData, setNegoData] = useState(location.state);

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

  const doSoldProduct = (productId) => {
    setShowStatusModal(false);
    dispatch(soldProduct(productId));
    setIsProductAction(true);
  };
  useEffect(() => {
    outletContext.setNavType("back");
    outletContext.setNavTitle("Info Penawar");
    if (negoData === null) navigate("/");
  }, []);
  useEffect(() => {
    if (status === apiStatus.pending) outletContext.setShowBar(true);
    else if (status === apiStatus.success && isAction) {
      setNegoData(data);
      if (data.status === "accepted") setShowAcceptModal(true);
      if (data.status === "rejected") toast.warning("Tawaran telah di tolak");
    } else if (status === apiStatus.error && isAction) toast.error(message);
    if (status !== apiStatus.pending) {
      outletContext.setShowBar(false);
      setIsAction(false);
    }
  }, [status]);
  useEffect(() => {
    if (productStatus === apiStatus.pending) outletContext.setShowBar(true);
    else if (productStatus === apiStatus.success && isProductAction) {
      toast.success(productMessage);
    } else if (productStatus === apiStatus.error && isProductAction) {
      toast.error(productMessage);
    }
    if (productStatus !== apiStatus.pending) outletContext.setShowBar(false);
  }, [productStatus]);
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="negotiationInfo">
          <SellerCard seller={negoData.user_buyer.user_detail} noEdit />
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

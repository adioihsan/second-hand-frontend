import React, { useState } from "react";
import "./productView.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  deleteProduct,
  getMyProduct,
  getProduct,
  releaseProduct,
  unReleaseProduct,
} from "../../services/actions/productAction";
import { useSelector } from "react-redux";
import LoadingFull from "../../components/loading/lodingFull/LoadingFull";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import apiStatus from "../../services/utils/apiStatus";
import { useOutletContext } from "react-router-dom";
import ButtonPrimary from "../../components/button/buttonPrimary/ButtonPrimary";
import { Helmet } from "react-helmet-async";
import BuyerNegoModal from "../../components/modal/buyerNegoModal/BuyerNegoModal";
const ProductView = () => {
  // hooks
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const outletContext = useOutletContext();

  //data
  const { data, status, message } = useSelector((state) => state.product);
  const [isAction, setIsAction] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [showModal, setShowModal] = useState(false);
  // const { userData } = useSelector((state) => state.user);

  // actions
  const doReleaseProduct = () => {
    dispatch(releaseProduct(params.productId));
    setIsAction(true);
  };
  const doUnReleaseProduct = () => {
    dispatch(unReleaseProduct(params.productId));
    setIsAction(true);
  };
  const doEditProduct = () => {
    navigate("/product-edit/" + params.productId);
    setIsAction(true);
  };
  const doDeleteProduct = () => {
    dispatch(deleteProduct(params.productId));
    setIsDelete(true);
  };

  // render component

  const renderSellerButton = () => (
    <>
      {data?.is_release ? (
        <button
          className="buttonOne button button-primary"
          onClick={doUnReleaseProduct}
        >
          Sembunyikan
        </button>
      ) : (
        <button
          className="buttonOne button button-primary"
          onClick={doReleaseProduct}
        >
          Terbitkan
        </button>
      )}
      <button
        className="buttonTwo button button-primary"
        onClick={doEditProduct}
      >
        Edit
      </button>
      <button
        className="outline  rounded-md py-3 px-2 outline-1 outline-red-600"
        onClick={doDeleteProduct}
      >
        Hapus Produk
      </button>
    </>
  );
  const renderUserButton = () => (
    <ButtonPrimary onClick={() => setShowModal(true)}>
      Saya tertarik
    </ButtonPrimary>
  );

  useEffect(() => {
    if (params.productId && params.userType === "seller")
      dispatch(getMyProduct(params.productId));
    else dispatch(getProduct(params.productId));
    outletContext.setNavType(null);
    outletContext.setNavTitle(null);
  }, [params.productId]);

  useEffect(() => {
    if (status === apiStatus.pending) {
      outletContext.setShowBar(true);
    } else if (status === apiStatus.success && isDelete) {
      toast.success("Produk telah di hapus");
      setIsDelete(false);
      navigate("/product-list");
    } else if (status === apiStatus.error && isDelete) {
      toast.error(message);
      setIsDelete(false);
      navigate("/product-list");
    } else if (status === apiStatus.success && isAction) {
      data.is_release
        ? toast.success("Produk berhasil di rilis", {
            toastId: "hideToast",
          })
        : toast.success("Produk berhasil di sembunyikan", {
            toastId: "releaseToast",
          });
      setIsAction(false);
    } else if (status === apiStatus.error) {
      if (message === "You are not authorized to see this product") {
        toast.error(message, { toastId: "productViewToast" });
        navigate("/");
      }
      if (message === "Product not found") {
        toast.error("Produk tidak tersedia", { toastId: "productViewToast" });
        navigate("/");
      }
    }
    if (status !== apiStatus.pending) outletContext.setShowBar(false);
  }, [status]);
  if (status === apiStatus.success && data !== null && data !== undefined)
    return (
      <>
        {data.name && (
          <Helmet>
            <title>Seconhand. {data.name}</title>
          </Helmet>
        )}

        <div className="HalamanProduk">
          <div className="halamanProdukWraper">
            <div className="flex basis-1/2 flex-col">
              {data.images_url && (
                <Carousel
                  showArrows={true}
                  className="carousel"
                  showThumbs={false}
                >
                  {data.images_url.split(",").map((url) => (
                    <img
                      src={process.env.REACT_APP_STORAGE_URL + "/images/" + url}
                      className="imageProduct"
                      key={"productImg" + url}
                    />
                  ))}
                </Carousel>
              )}

              <div className=" border-2 border-gray rounded-xl mb-5">
                <h1 className="my-5 mx-5 font-medium">Deskripsi</h1>
                <p className="mx-5 mb-5 text-regular text-gray-400">
                  {data.description && data?.description}
                </p>
              </div>
            </div>
            <div className="flex basis-1/4 flex-col">
              <div className=" shadow-xl flex flex-col rounded-xl w-full p-5">
                <h1 className=" font-bold">{data.name}</h1>
                <h1 className=" pt-1 pb-2 text-regular text-gray-400">
                  {data.categories && data.categories[0].name}
                </h1>
                <h1 className=" pb-5 font-regular">
                  {data.price &&
                    data?.price.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                </h1>
                {/* button herer */}
                {params.userType === "seller" && renderSellerButton()}
                {params.userType !== "seller" && renderUserButton()}
              </div>
              <div className="description flex items-center  border-2 border-gray rounded-xl mt-7 p-5 w-full">
                <div className="">
                  {data.user && data.user && (
                    <img
                      src={
                        process.env.REACT_APP_STORAGE_URL +
                        "/images/" +
                        data.user.image
                      }
                      className="profilePicture rounded-xl object-cover"
                    />
                  )}
                </div>
                <div className="flex-col ml-5 ">
                  <h1 className="font-bold">{data.user && data?.user?.name}</h1>
                  <h1>{data.user && data?.user?.city}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        {showModal && <BuyerNegoModal onClick={() => setShowModal(false)} />}
      </>
    );
};

export default ProductView;

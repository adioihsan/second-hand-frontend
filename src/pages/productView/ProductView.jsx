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
import user from "../../services/reducers/user";
import apiStatus from "../../services/utils/apiStatus";
import { useOutletContext } from "react-router-dom";
import ButtonPrimary from "../../components/button/buttonPrimary/ButtonPrimary";
const ProductView = () => {
  // hooks
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const outletContext = useOutletContext();

  //data
  const { data, status, message } = useSelector((state) => state.product);
  const [isAction, setIsAction] = useState(false);
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
    setIsAction(true);
    navigate("/product-list");
    toast.success("produk berhasil dihapus");
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
  const renderUserButton = () => <ButtonPrimary>Saya tertarik</ButtonPrimary>;

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
  if (!data || data?.length === 0) return <LoadingFull />;
  if (data.name)
    return (
      <div className="HalamanProduk">
        <div className="halamanProdukWraper">
          <div className="flex basis-1/2 flex-col">
            <Carousel showArrows={true} className="carousel" showThumbs={false}>
              {data?.images_url.split(",").map((url) => (
                <div>
                  <img
                    src={process.env.REACT_APP_API_URL + "/images/" + url}
                    className="imageProduct"
                    key={"productImg" + url}
                  />
                </div>
              ))}
            </Carousel>

            <div className=" border-2 border-gray rounded-xl mb-5">
              <h1 className="my-5 mx-5 font-medium">Deskripsi</h1>
              <p className="mx-5 mb-5 text-regular text-gray-400">
                {data?.description}
              </p>
            </div>
          </div>
          <div className="flex basis-1/4 flex-col">
            <div className=" shadow-xl flex flex-col rounded-xl w-full p-5">
              <h1 className=" font-bold">{data.name}</h1>
              <h1 className=" py-3 text-regular text-gray-400">
                {data?.category}
              </h1>
              <h1 className=" pb-5 font-regular">
                {data?.price.toLocaleString("id-ID", {
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
                <img
                  src="/assets/images/profilepicture.jpg"
                  className="profilePicture rounded-xl object-cover"
                />
              </div>
              <div className="flex-col ml-5 ">
                <h1 className="font-bold">{data?.user?.name}</h1>
                <h1>{data?.user?.city}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProductView;

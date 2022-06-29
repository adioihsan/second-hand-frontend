import React from "react";
import "./productView.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  deleteProduct,
  getMyProduct,
  releaseProduct,
  unReleaseProduct,
} from "../../services/actions/productAction";
import { useSelector } from "react-redux";
import LoadingFull from "../../components/loading/lodingFull/LoadingFull";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const ProductView = () => {
  // hooks
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  //data
  const { data, error, pending, succsess, message } = useSelector(
    (state) => state.product
  );

  // actions
  const doReleaseProduct = () => {
    dispatch(releaseProduct(params.productId));
    if (!pending && !error) toast.success("Produk berhasil di terbitkan");
    if (error) toast.error(message);
  };
  const doUnReleaseProduct = () => {
    dispatch(unReleaseProduct(params.productId));
    if (!pending && !error) toast.success("Produk telah di sembunyikan");
    if (error) toast.error(message);
  };
  const doEditProduct = () => {
    navigate("/product-edit/" + params.productId);
  };
  const doDeleteProduct = () => {
    dispatch(deleteProduct(params.productId));
    if (!pending && !error) {
      toast.success("Produk telah dihapus");
      navigate("/product-list");
    }
    if (error) toast.error(message);
  };

  useEffect(() => {
    if (params.productId) dispatch(getMyProduct(params.productId));
  }, [params.productId]);

  if (error) {
    if (message === "You are not authorized to see this product") {
      toast.error(message, { toastId: "productViewToast" });
      navigate("/");
    }
    if (message === "Product not found") {
      toast.error("Produk tidak tersedia", { toastId: "productViewToast" });
      navigate("/");
    }
  } else if (!data) return <LoadingFull />;
  else
    return (
      <div className="HalamanProduk">
        <div className="halamanProdukWraper">
          <div className="flex basis-1/2 flex-col">
            <Carousel showArrows={true} className="carousel" showThumbs={false}>
              {data.images_url.split(",").map((url) => (
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
                {data.description}
              </p>
            </div>
          </div>
          <div className="flex basis-1/4 flex-col">
            <div className=" shadow-xl flex flex-col rounded-xl w-full p-5">
              <h1 className=" font-bold">{data.name}</h1>
              <h1 className=" py-3 text-regular text-gray-400">
                {data.category}
              </h1>
              <h1 className=" pb-5 font-regular">
                {data.price.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}
              </h1>
              {data.is_release ? (
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
            </div>
            <div className="description flex items-center  border-2 border-gray rounded-xl mt-7 p-5 w-full">
              <div className="">
                <img
                  src="/assets/images/profilepicture.jpg"
                  className="profilePicture rounded-xl object-cover"
                />
              </div>
              <div className="flex-col ml-5 ">
                <h1 className="font-bold">Nama Penjual</h1>
                <h1>Kota</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProductView;

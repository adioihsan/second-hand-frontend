import React from "react";
import "./productView.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getMyProduct } from "../../services/actions/productAction";
import { useSelector } from "react-redux";
import LoadingFull from "../../components/loading/lodingFull/LoadingFull";
const ProductView = () => {
  // hooks
  const dispatch = useDispatch();
  const params = useParams();

  //data
  const { data, error, pending, succsess } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    if (params.productId) dispatch(getMyProduct(params.productId));
  }, [params.productId]);

  if (!data) return <LoadingFull />;
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
              <button className="buttonOne button button-primary">
                Terbitkan
              </button>
              <button className="buttonTwo button button-primary">Edit</button>
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

import { faXmarkCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import SellerCard from "../../card/sellerCard/SellerCard";
import "./previewModal.css";
function PreviewModal({ data, ...others }) {
  var formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });
  return (
    <div className="previewModalWrapper" {...others}>
      <div
        className="HalamanProduk bg-white rounded-lg relative "
        onClick={(e) => e.stopPropagation()}
      >
        <FontAwesomeIcon
          icon={faXmarkCircle}
          size="2x"
          className="absolute top-24 md:top-3 right-3 z-50 bg-white p-2 rounded-full cursor-pointer"
          color="gray"
          {...others}
        />

        <div className="halamanProdukWraper">
          <div className="flex basis-1/2 flex-col">
            {data.images_url && (
              <Carousel showArrows={true} showThumbs={false}>
                {data.images_url.map((url) => (
                  <img
                    src={process.env.REACT_APP_STORAGE_URL + "/images%2F" + url}
                    key={"productImg" + url}
                  />
                ))}
              </Carousel>
            )}

            <div className=" border-2 border-gray rounded-xl my-5 max-h-48 overflow-scroll ">
              <h1 className="my-5 mx-5 font-medium">Deskripsi</h1>
              <p className="mx-5 mb-5 text-regular text-gray-400 ">
                {/* {data.description && data?.description} */}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
                quas maxime modi in unde iste praesentium consequuntur molestias
                quis alias at illo, omnis perferendis veritatis voluptatibus
                tempore, sint rerum. Ducimus sunt atque esse veniam repudiandae
                magni illum neque quae totam? Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Ullam quas maxime modi in unde
                iste praesentium consequuntur molestias quis alias at illo,
                omnis perferendis veritatis voluptatibus tempore, sint rerum.
                Ducimus sunt atque esse veniam repudiandae magni illum neque
                quae totam? Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Ullam quas maxime modi in unde iste praesentium
                consequuntur molestias quis alias at illo, omnis perferendis
                veritatis voluptatibus tempore, sint rerum. Ducimus sunt atque
                esse veniam repudiandae magni illum neque quae totam? Lorem,
                ipsum dolor sit amet consectetur adipisicing elit. Ullam quas
                maxime modi in unde iste praesentium consequuntur molestias quis
                alias at illo, omnis perferendis veritatis voluptatibus tempore,
                sint rerum. Ducimus sunt atque esse veniam repudiandae magni
                illum neque quae totam? Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Ullam quas maxime modi in unde iste
                praesentium consequuntur molestias quis alias at illo, omnis
                perferendis veritatis voluptatibus tempore, sint rerum. Ducimus
                sunt atque esse veniam repudiandae magni illum neque quae totam?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
                quas maxime modi in unde iste praesentium consequuntur molestias
                quis alias at illo, omnis perferendis veritatis voluptatibus
                tempore, sint rerum. Ducimus sunt atque esse veniam repudiandae
                magni illum neque quae totam? Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Ullam quas maxime modi in unde
                iste praesentium consequuntur molestias quis alias at illo,
                omnis perferendis veritatis voluptatibus tempore, sint rerum.
                Ducimus sunt atque esse veniam repudiandae magni illum neque
                quae totam?
              </p>
            </div>
          </div>
          <div className="flex basis-1/4 flex-col">
            <div className=" shadow-xl flex flex-col rounded-xl w-full p-5">
              <h1 className=" font-bold">{data.name}</h1>
              <h1 className=" pt-1 pb-2 text-regular text-gray-400">
                {data.categories}
              </h1>
              <h1 className=" pb-5 font-regular">{formatter.format(5000)}</h1>
            </div>
            <div className="mt-3">
              <SellerCard seller={data.user} noEdit />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreviewModal;

import { useNavigate } from "react-router-dom";
import Dot from "../../dot/Dot";
import "./notificationItem.css";
function NotificationItem({ notif }) {
  const navigate = useNavigate();
  const onNotifClick = () => {
    if (notif.category_id == 1) {
      navigate("/product-view/seller/" + notif.product_id);
    } else if (notif.category_id == 2 && notif.nego_price) {
      navigate("/negotiation-info/" + notif.nego_id);
    } else {
      navigate("/product-view/see/" + notif.product_id);
    }
  };
  return (
    <div className="notificationItem" onClick={onNotifClick}>
      <div>
        <img
          src={
            process.env.REACT_APP_STORAGE_URL +
            "/images%2F" +
            notif.product.images_url.split(",")[0] +
            "?alt=media"
          }
          alt={notif.name}
        />
      </div>
      <div className="w-full">
        <div className="flex justify-between text-sm text-gray-500">
          <h1>{notif.category.title}</h1>
          <div className="notfiDate">
            {new Date(notif.updatedAt).toLocaleString("id-ID", {
              day: "2-digit",
              month: "long",
              year: "2-digit",
              hour: "numeric",
              minute: "2-digit",
            })}{" "}
            <Dot status={notif.is_checked ? "deactive" : "active"} />
          </div>
        </div>
        <p className="font-medium">{notif.product.name}</p>
        <p
          className={
            (notif.nego_id && notif.status === "accepted") ||
            notif.status === "done"
              ? "font-medium line-through"
              : "font-medium"
          }
        >
          {" "}
          {notif.product.price.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          })}
        </p>
        {notif.nego_id && notif.status === "accepted" && (
          <>
            <p className="font-medium">
              Berhasil Ditawar{" "}
              {notif.price.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}{" "}
            </p>
            <p className="text-xs text-green-600 ">
              Kamu akan segera di hubungi penjual via whatsapp
            </p>
          </>
        )}
        {notif.nego_id && notif.status === "rejected" && (
          <>
            <p className="text-xs text-red-600 ">
              Penawaran mu belum disetujui penjual, yuk tawar lagi !
            </p>
          </>
        )}
        {notif.nego_id && notif.status === "done" && (
          <>
            <p className="font-medium">
              Berhasil Ditawar{" "}
              {notif.price.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}{" "}
            </p>
            <p className="text-xs text-gray-600 ">
              Yeay transaksi kamu berhasil, penjual sudah mengubah status
              transaksi ke selesai
            </p>
          </>
        )}

        {notif.nego_price && (
          <p className="font-medium">
            Ditawar{" "}
            {notif.nego_price.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}{" "}
          </p>
        )}
      </div>
    </div>
  );
}
export default NotificationItem;

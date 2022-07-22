import Dot from "../../dot/Dot";
import "./notificationItem.css";
function NotificationItem({ notif }) {
  console.log(notif);
  return (
    <div className="notificationItem">
      <div>
        <img
          src={
            process.env.REACT_APP_STORAGE_URL +
            "/images/" +
            notif.product.images_url.split(",")[0]
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
        {/* {notif.price && (
          <p className="font-medium">
            Berhasil di tawar{" "}
            {notif.price.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}{" "}
          </p>
        )} */}
        {notif.nego_id && notif.status === "accepted" && (
          <>
            <p className="font-medium">
              Berhasil Ditawar{" "}
              {notif.price.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}{" "}
            </p>
            <p className="text-xs text-gray-600 ">
              Kamu akan segera di hubungi penjual via whatsapp
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

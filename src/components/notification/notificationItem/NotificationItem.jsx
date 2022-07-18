import Dot from "../../dot/Dot";
import "./notificationItem.css";
function NotificationItem({ notif }) {
  return (
    <div className="notificationItem">
      <div>
        <img src="/assets/images/product.png" />
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
        <p className="font-medium">
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

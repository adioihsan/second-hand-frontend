import React, { useEffect } from "react";
import {
  deleteNotificationAll,
  getAllNotifications,
} from "../../services/actions/notificationAction";
import "./notificationpage.css";
import { useDispatch, useSelector } from "react-redux";
import NotificationItem from "../../components/notification/notificationItem/NotificationItem";
import ButtonPrimary from "../../components/button/buttonPrimary/ButtonPrimary";
import { Helmet } from "react-helmet-async";

const NotificationPage = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.notificationList);
  const deleteNotificationClick = () => {
    dispatch(deleteNotificationAll());
  };
  useEffect(() => {
    dispatch(getAllNotifications());
  }, []);
  return (
    <>
      {" "}
      <Helmet>
        <title>Seconhand. Notifikasi</title>
      </Helmet>
      <div className="wrapper">
        <div className="notificationpage">
          <div className="notificationHeader">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Notifikasi
            </h5>
            <ButtonPrimary onClick={deleteNotificationClick}>
              Hapus Semua Notifikasi
            </ButtonPrimary>
          </div>
          {/* <div className="card notificationCard">
        <div className="partOne">
          <div className="">
            <img
              src="assets/images/profilepicture.jpg"
              className="profilePicture rounded-xl object-cover"
            />
          </div>
        </div>
        <div className="partTwo">
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            wes sembarang sak karepmu
          </p>
          <a
            href="#"
            className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Read more
            <svg
              className="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div> */}
          {data.map((notif, index) => {
            return (
              <NotificationItem
                notif={notif}
                key={`notificationKey ${index}` + notif.id + notif.product_id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default NotificationPage;

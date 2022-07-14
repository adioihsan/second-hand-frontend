import React from "react";
import "./notificationpage.css";

const NotificationPage = () => {
  return (
    <div className="notificationpage">
      <div class="card notificationCard">
        <div className="partOne">
          <div className="">
            <img
              src="assets/images/profilepicture.jpg"
              className="profilePicture rounded-xl object-cover"
            />
          </div>
        </div>
        <div className="partTwo">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Notifikasi
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            wes sembarang sak karepmu
          </p>
          <a
            href="#"
            class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Read more
            <svg
              class="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotificationPage;

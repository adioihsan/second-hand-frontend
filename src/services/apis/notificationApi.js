import privateAxios from "./config/privateAxios";

const notificationApi = {
  getAllNotifications: (authToken) =>
    privateAxios(authToken).get("/notifications"),
  deleteNotificationAll: (authToken) =>
    privateAxios(authToken).delete("/notifications"),
};
export default notificationApi;

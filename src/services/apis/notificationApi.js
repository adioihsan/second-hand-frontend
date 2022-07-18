import privateAxios from "./config/privateAxios";

const notificationApi = {
  getAllNotifications: (authToken) =>
    privateAxios(authToken).get("/notifications"),
};
export default notificationApi;

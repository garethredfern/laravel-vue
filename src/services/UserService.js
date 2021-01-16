import * as API from "@/services/API";

export default {
  getUser(userId) {
    return API.apiClient.get(`/users/${userId}`);
  },
  getUsers() {
    return API.apiClient.get("/users");
  },
};

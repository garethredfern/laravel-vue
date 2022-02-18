import * as API from "@/services/API";

export default {
  getUser(userId) {
    return API.apiClient.get(`/user/${userId}`);
  },
  getUsers(page) {
    return API.apiClient.get(`/users/?page=${page}`);
  },
  paginateUsers(link) {
    return API.apiClient.get(link);
  },
  updateUser(payload) {
    return API.apiClient.put("/user", payload);
  },
  updatePassword(payload) {
    return API.apiClient.put("/user/password", payload);
  },
};

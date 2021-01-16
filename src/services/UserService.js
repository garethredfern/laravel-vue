import * as API from "@/services/API";

export default {
  getUser(userId) {
    return API.apiClient.get(`/users/${userId}`);
  },
  getUsers(page = 1) {
    return API.apiClient.get(`/users/?page=${page}`);
  },
};

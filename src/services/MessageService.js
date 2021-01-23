import * as API from "@/services/API";

export default {
  getMessages(page) {
    return API.apiClient.get(`/messages/?page=${page}`);
  },
  paginateMessages(link) {
    return API.apiClient.get(link);
  },
};

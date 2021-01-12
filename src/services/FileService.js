import * as API from "@/services/API";

export default {
  async uploadFile(payload) {
    await API.apiClient.post(payload.endpoint, payload.file);
  },
};

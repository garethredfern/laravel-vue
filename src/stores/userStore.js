import { defineStore } from "pinia";
import { getError } from "@/utils/helpers";
import UserService from "@/services/UserService";

export const useUser = defineStore({
  id: "userStore",
  state: () => ({
    user: null,
    error: null,
    loading: false,
  }),

  actions: {
    async getUser(userId) {
      try {
        this.loading = true;
        const response = await UserService.getUser(userId);
        this.user = response.data.data;
        this.loading = false;
      } catch (error) {
        this.user = null;
        this.loading = false;
        this.error = getError(error);
      }
    },
  },
});

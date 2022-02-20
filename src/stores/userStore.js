import { defineStore } from "pinia";
import { getError } from "@/utils/helpers";
import UserService from "@/services/UserService";

export const useUser = defineStore({
  id: "userStore",
  state: () => ({
    user: null,
    users: [],
    meta: null,
    links: null,
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
        return response;
      } catch (error) {
        this.user = null;
        this.loading = false;
        this.error = getError(error);
        return error;
      }
    },
    async getUsers(pageNumber) {
      try {
        this.loading = true;
        const response = await UserService.getUsers(pageNumber);
        this.users = response.data.data;
        this.meta = response.data.meta;
        this.links = response.data.links;
        this.loading = false;
        return response;
      } catch (error) {
        this.users = [];
        this.loading = false;
        this.error = getError(error);
        return error;
      }
    },
    async paginateUsers(link) {
      try {
        this.loading = true;
        const response = await UserService.paginateUsers(link);
        this.users = response.data.data;
        this.meta = response.data.meta;
        this.links = response.data.links;
        this.loading = false;
        return response;
      } catch (error) {
        this.users = [];
        this.loading = false;
        this.error = getError(error);
        return error;
      }
    },
  },
});

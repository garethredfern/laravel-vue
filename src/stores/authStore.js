import { defineStore } from "pinia";
import { getError } from "@/utils/helpers";
import AuthService from "@/services/AuthService";

export const useAuth = defineStore({
  id: "authStore",
  state: () => ({
    user: null,
    error: null,
    loading: false,
  }),

  actions: {
    async login(payload) {
      try {
        await AuthService.login(payload);
        await this.getAuthUser();
        if (this.loggedIn) this.router.push({ path: "/dashboard" });
      } catch (error) {
        this.error = getError(error);
      }
    },
    async logout() {
      try {
        await AuthService.logout();
        this.user = null;
        this.router.push({ path: "/login" });
      } catch (error) {
        this.user = null;
        this.error = getError(error);
      }
    },
    async getAuthUser() {
      try {
        this.loading = true;
        const response = await AuthService.getAuthUser();
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
  },

  getters: {
    loggedIn: (state) => !!state.user,
    isAdmin: (state) => (state.user ? state.user.isAdmin : false),
  },
});

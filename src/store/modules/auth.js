import router from "@/router";
import { getError } from "@/utils/helpers";
import AuthService from "@/services/AuthService";

export const namespaced = true;

export const state = {
  user: null,
  loading: false,
  error: null,
};

export const mutations = {
  SET_USER(state, user) {
    state.user = user;
  },
  SET_LOADING(state, loading) {
    state.loading = loading;
  },
  SET_MESSAGE(state, message) {
    state.message = message;
  },
  SET_ERROR(state, error) {
    state.error = error;
  },
};

export const actions = {
  logout({ commit }) {
    return AuthService.logout()
      .then(() => {
        commit("SET_USER", null);
        router.push({ path: "/login" });
      })
      .catch((error) => {
        commit("SET_ERROR", getError(error));
      });
  },
  getAuthUser({ commit }) {
    commit("SET_LOADING", true);
    return AuthService.getAuthUser()
      .then((response) => {
        commit("SET_USER", response.data.data);
        commit("SET_LOADING", false);
      })
      .catch((error) => {
        commit("SET_LOADING", false);
        commit("SET_USER", null);
        commit("SET_ERROR", getError(error));
      });
  },
};

export const getters = {
  authUser: (state) => {
    return state.user;
  },
  error: (state) => {
    return state.error;
  },
  loading: (state) => {
    return state.loading;
  },
  loggedIn: (state) => {
    return !!state.user;
  },
};

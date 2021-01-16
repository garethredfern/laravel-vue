import { getError } from "@/utils/helpers";
import UserService from "@/services/UserService";

export const namespaced = true;

export const state = {
  user: null,
  users: [],
  meta: null,
  links: null,
  loading: false,
  error: null,
};

export const mutations = {
  SET_USER(state, user) {
    state.user = user;
  },
  SET_USERS(state, users) {
    state.users = users;
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
  getUser({ commit }, userId) {
    commit("SET_LOADING", true);
    UserService.getUser(userId)
      .then((response) => {
        commit("SET_USER", response.data.data);
        commit("SET_LOADING", false);
      })
      .catch((error) => {
        commit("SET_LOADING", false);
        commit("SET_ERROR", getError(error));
      });
  },
  getUsers({ commit }) {
    commit("SET_LOADING", true);
    UserService.getUsers()
      .then((response) => {
        commit("SET_USERS", response.data.data);
        commit("SET_LOADING", false);
      })
      .catch((error) => {
        commit("SET_LOADING", false);
        commit("SET_ERROR", getError(error));
      });
  },
};

export const getters = {
  user: (state) => {
    return state.user;
  },
  users: (state) => {
    return state.users;
  },
  loading: (state) => {
    return state.loading;
  },
  message: (state) => {
    return state.message;
  },
  error: (state) => {
    return state.error;
  },
};

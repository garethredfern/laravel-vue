import { getError } from "@/utils/helpers";
import UserService from "@/services/UserService";

export const namespaced = true;

export const state = {
  user: null,
  users: [],
  meta: null,
  links: null,
  loading: false,
  message: null,
  error: null,
};

export const mutations = {
  SET_USER(state, user) {
    state.user = user;
  },
  SET_USERS(state, users) {
    state.users = users;
  },
  SET_META(state, meta) {
    state.meta = meta;
  },
  SET_LINKS(state, links) {
    state.links = links;
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
  getUsers({ commit }, page) {
    commit("SET_LOADING", true);
    UserService.getUsers(page)
      .then((response) => {
        commit("SET_USERS", response.data.data);
        if (response.data.meta) {
          commit("SET_META", response.data.meta);
        }
        if (response.data.links) {
          commit("SET_LINKS", response.data.links);
        }
        commit("SET_LOADING", false);
      })
      .catch((error) => {
        commit("SET_LOADING", false);
        commit("SET_ERROR", getError(error));
      });
  },
  paginateUsers({ commit }, link) {
    commit("SET_LOADING", true);
    UserService.paginateUsers(link)
      .then((response) => {
        commit("SET_USERS", response.data.data);
        if (response.data.meta) {
          commit("SET_META", response.data.meta);
        }
        if (response.data.links) {
          commit("SET_LINKS", response.data.links);
        }
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
  meta: (state) => {
    return state.meta;
  },
  links: (state) => {
    return state.links;
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

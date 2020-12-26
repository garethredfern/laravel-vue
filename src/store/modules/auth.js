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
  CLEAR_USER() {
    window.localStorage.clear();
    location.reload();
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
  login({ commit }, payload) {
    commit("SET_LOADING", true);
    return AuthService.login(payload).catch((error) => {
      commit("SET_LOADING", false);
      commit("SET_ERROR", error.data ? error.data.message : error);
    });
  },
  logout({ commit }) {
    return AuthService.logout()
      .then(() => {
        commit("CLEAR_USER");
      })
      .catch(() => {
        commit("CLEAR_USER");
      });
  },
  getAuthUser({ commit }) {
    commit("SET_LOADING", true);
    return AuthService.getAuthUser()
      .then((response) => {
        commit("SET_USER", response.data);
        commit("SET_LOADING", false);
      })
      .catch((error) => {
        commit("SET_LOADING", false);
        commit("SET_ERROR", error.data ? error.data.message : error);
      });
  },
  resetPassword({ commit }, payload) {
    commit("SET_LOADING", true);
    return AuthService.resetPassword(payload).catch((error) => {
      commit("SET_LOADING", false);
      commit("SET_ERROR", error.data ? error.data.message : error);
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

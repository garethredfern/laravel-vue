import Vue from "vue";
import Vuex from "vuex";

import * as auth from "@/store/modules/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,

  modules: {
    auth,
  },
});

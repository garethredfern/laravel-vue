import Vue from "vue";
import store from "../store/index";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/dashboard",
    name: "dashboard",
    meta: { requiresAuth: true },
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/Dashboard"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import(/* webpackChunkName: "login" */ "../views/Login"),
  },
  {
    path: "/reset-password",
    name: "ResetPassword",
    component: () =>
      import(/* webpackChunkName: "reset-password" */ "../views/ResetPassword"),
  },
  {
    path: "/email/verify/:id/:hash",
    name: "ResetPassword",
    component: () =>
      import(/* webpackChunkName: "verify-email" */ "../views/VerifyEmail"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  if (!store.getters["auth/authUser"]) {
    store.dispatch("auth/getAuthUser").then(() => {
      if (
        to.matched.some((record) => record.meta.requiresAuth) &&
        !store.getters["auth/authUser"]
      ) {
        next({ path: "/login", query: { redirect: to.fullPath } });
      } else {
        next(); // make sure to always call next()!
      }
    });
  } else {
    next(); // make sure to always call next()!
  }
});

export default router;

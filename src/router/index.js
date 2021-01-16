import Vue from "vue";
import store from "@/store/index";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    meta: { requiresAuth: true },
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/Dashboard"),
  },
  {
    path: "/user",
    name: "user",
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "user" */ "../views/User"),
  },
  {
    path: "/users",
    name: "users",
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "users" */ "../views/Users"),
    beforeEnter: (to, from, next) => {
      if (store.getters["auth/isAdmin"]) next();
      else next(false);
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import(/* webpackChunkName: "login" */ "../views/Login"),
  },
  {
    path: "/register",
    name: "register",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Register"),
  },
  {
    path: "/reset-password",
    name: "ResetPassword",
    component: () =>
      import(/* webpackChunkName: "reset-password" */ "../views/ResetPassword"),
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: () =>
      import(
        /* webpackChunkName: "forgot-password" */ "../views/ForgotPassword"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  const authUser = store.getters["auth/authUser"];
  const reqAuth = to.matched.some((record) => record.meta.requiresAuth);
  const loginQuery = { path: "/login", query: { redirect: to.fullPath } };

  if (reqAuth && !authUser) {
    store.dispatch("auth/getAuthUser").then(() => {
      if (!store.getters["auth/authUser"]) next(loginQuery);
      else next();
    });
  } else {
    next(); // make sure to always call next()!
  }
});

export default router;

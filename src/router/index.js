import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () =>
        import(/* webpackChunkName: "dashboard" */ "@/views/Dashboard.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () =>
        import(/* webpackChunkName: "login" */ "@/views/Login.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () =>
        import(/* webpackChunkName: "register" */ "@/views/Register.vue"),
    },
    {
      path: "/forgot-password",
      name: "forgotPassword",
      component: () =>
        import(
          /* webpackChunkName: "forgotPassword" */ "@/views/ForgotPassword.vue"
        ),
    },
  ],
});

export default router;

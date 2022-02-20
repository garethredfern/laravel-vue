import { createRouter, createWebHistory } from "vue-router";
import { canSeeUser, authenticated, canSeeUsers } from "@/middleware";

import Home from "@/views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: { requiresAuth: false },
    },
    {
      path: "/dashboard",
      name: "dashboard",
      meta: { requiresAuth: true },
      component: () =>
        import(/* webpackChunkName: "Dashboard" */ "@/views/Dashboard.vue"),
    },
    {
      path: "/login",
      name: "login",
      meta: { requiresAuth: false },
      component: () =>
        import(/* webpackChunkName: "Login" */ "@/views/Login.vue"),
    },
    {
      path: "/register",
      name: "register",
      meta: { requiresAuth: false },
      component: () =>
        import(/* webpackChunkName: "Register" */ "@/views/Register.vue"),
    },
    {
      path: "/forgot-password",
      name: "forgotPassword",
      meta: { requiresAuth: false },
      component: () =>
        import(
          /* webpackChunkName: "ForgotPassword" */ "@/views/ForgotPassword.vue"
        ),
    },
    {
      path: "/password-reset/:token",
      name: "passwordReset",
      meta: { requiresAuth: false },
      component: () =>
        import(
          /* webpackChunkName: "PasswordReset" */ "@/views/PasswordReset.vue"
        ),
    },
    {
      path: "/user/:id",
      name: "user",
      meta: { requiresAuth: true },
      component: () =>
        import(/* webpackChunkName: "User" */ "@/views/User.vue"),
      beforeEnter: [canSeeUser],
    },
    {
      path: "/users",
      name: "users",
      meta: { requiresAuth: true },
      component: () =>
        import(/* webpackChunkName: "Users" */ "@/views/Users.vue"),
      beforeEnter: [canSeeUsers],
    },
    {
      path: "/404",
      name: "notFound",
      component: () =>
        import(/* webpackChunkName: "NotFound" */ "@/views/NotFound.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: () => {
        // catch all redirect to 404
        return { name: "notFound" };
      },
    },
  ],
});

// use middleware to check auth
router.beforeEach(authenticated);

export default router;

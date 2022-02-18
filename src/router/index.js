import { createRouter, createWebHistory } from "vue-router";
import { useAuth } from "@/stores/authStore";
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
        import(/* webpackChunkName: "PasswordReset" */ "@/views/User.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notFound",
      component: () =>
        import(/* webpackChunkName: "NotFound" */ "@/views/NotFound.vue"),
    },
  ],
});

const guestAuthRoutes = [
  "login",
  "register",
  "forgotPassword",
  "passwordReset",
];

router.beforeEach(async (to) => {
  const authStore = useAuth();
  await authStore.getAuthUser();
  // instead of having to check every route record with
  // to.matched.some(record => record.meta.requiresAuth)
  if (to.meta.requiresAuth && !authStore.authUser) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    return {
      path: "/login",
      // save the location we were at to come back later
      query: { redirect: to.fullPath },
    };
  }
  if (authStore.authUser && guestAuthRoutes.includes(to.name)) {
    return {
      path: "/dashboard",
    };
  }
});

export default router;

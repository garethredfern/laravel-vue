import { useAuth } from "@/stores/authStore";
import { useUser } from "@/stores/userStore";

const guestAuthRoutes = [
  "login",
  "register",
  "forgotPassword",
  "passwordReset",
];

export const canSeeUser = async (to) => {
  const userStore = useUser();
  const data = await userStore.getUser(to.params.id);
  if (data instanceof Error && data.response.status === 403) {
    return {
      path: "notFound",
    };
  }
};

export const canSeeUsers = async () => {
  const userStore = useUser();
  const data = await userStore.getUsers();
  if (data instanceof Error && data.response.status === 403) {
    return {
      path: "notFound",
    };
  }
};

export const authenticated = async (to) => {
  const authStore = useAuth();
  await authStore.getAuthUser();
  // instead of having to check every route record with
  // to.matched.some(record => record.meta.requiresAuth)
  if (to.meta.requiresAuth && !authStore.user) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    return {
      path: "/login",
      // save the location we were at to come back later
      query: { redirect: to.fullPath },
    };
  }
  if (authStore.user && guestAuthRoutes.includes(to.name)) {
    return {
      path: "/dashboard",
    };
  }
};

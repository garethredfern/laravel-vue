export default function auth({ to, next, store }) {
  const authUser = store.getters["auth/authUser"];
  const loginQuery = { path: "/login", query: { redirect: to.fullPath } };

  if (!authUser) {
    store.dispatch("auth/getAuthUser").then(() => {
      if (!store.getters["auth/authUser"]) next(loginQuery);
      else next();
    });
  } else {
    next();
  }
}

export default function guest({ next, store }) {
  const guest = window.localStorage.getItem("guest");

  if (!guest && !store.getters["auth/authUser"]) {
    store.dispatch("auth/getAuthUser").then(() => {
      if (store.getters["auth/authUser"]) {
        next({ name: "dashboard" });
      } else {
        store.dispatch("auth/setGuest", { value: true });
        next();
      }
    });
  } else {
    next();
  }
}

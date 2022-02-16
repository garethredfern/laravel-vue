import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
import "@/assets/tailwind.css";

import App from "@/App.vue";
import router from "@/router";

const app = createApp(App);

const pinia = createPinia();

// add the router to Pina as a plugin
// gives you access to the router
// use this.router in any store
pinia.use(({ store }) => {
  store.router = markRaw(router);
});

app.use(pinia);
app.use(router);

app.mount("#app");

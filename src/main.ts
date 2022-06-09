import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { createPinia } from "pinia";
import withUUID from "vue-uuid";

createApp(App)
  .use(createPinia())

  .use(withUUID)
  .use(router)
  .mount("#app");

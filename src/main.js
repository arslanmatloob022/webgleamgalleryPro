import Aos from "aos";
import "aos/dist/aos.css";
import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
Aos.init();

createApp(App).use(store).use(router).mount("#app");

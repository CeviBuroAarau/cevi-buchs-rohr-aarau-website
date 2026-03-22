import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import {
  faPhone,
  faEnvelope,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { faUser, faBars } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

dom.watch();

import "./assets/main.scss";

library.add(faPhone, faEnvelope, faUser, faBars, faMagnifyingGlass);

const app = createApp(App);
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");

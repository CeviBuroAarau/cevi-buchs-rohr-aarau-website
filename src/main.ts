import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faUser, faBars } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { formatDateFilter } from "@/filters";

dom.watch();

Vue.config.productionTip = false;

require("./assets/main.scss");

library.add(faPhone, faEnvelope, faUser, faBars);
Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  router,
  filters: {
    formatDateFilter,
  },
  render: (h) => h(App),
}).$mount("#app");

import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import ErrorReportingService from "./services/ErrorReportingService";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

dom.watch();

const errorReportingService = new ErrorReportingService();
errorReportingService.init();

Vue.config.productionTip = false;

require("./assets/main.scss");

library.add(faPhone, faEnvelope, faUser, faBars);
Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

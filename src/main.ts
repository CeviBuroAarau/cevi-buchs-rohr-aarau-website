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
import * as Sentry from "@sentry/vue";
import { CaptureConsole } from "@sentry/integrations";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

dom.watch();

Sentry.init({
  Vue: Vue,
  dsn:
    "https://c8be78aede154a729e2190299e2588bc@o391315.ingest.sentry.io/5237271",
  integrations: [
    new CaptureConsole({
      levels: ["error"],
    }),
  ],
});

Vue.config.productionTip = false;

require("./assets/main.scss");

library.add(faPhone, faEnvelope, faUser, faBars);
Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

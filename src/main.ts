import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faUser, faBars } from "@fortawesome/free-solid-svg-icons";
import { ErrorReportingService } from "@/services";
import VueMatomo from "vue-matomo";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { formatDateFilter } from "@/filters";

dom.watch();

const errorReportingService = new ErrorReportingService();
errorReportingService.init();

Vue.config.productionTip = false;

require("./assets/main.scss");

library.add(faPhone, faEnvelope, faUser, faBars);
Vue.component("font-awesome-icon", FontAwesomeIcon);

if (process.env.NODE_ENV === "production") {
  Vue.use(VueMatomo, {
    host: process.env.VUE_APP_MATOMO_HOST,
    siteId: process.env.VUE_APP_MATOMO_SITE_ID,
    trackerFileName: "matomo",
    router: router,
    enableLinkTracking: true,
    requireConsent: false,
    trackInitialView: true,
    disableCookies: false,
    enableHeartBeatTimer: true,
    heartBeatTimerInterval: 15,
    debug: false,
    userId: undefined,
    cookieDomain: undefined,
    domains: undefined,
    preInitActions: [],
  });
}

new Vue({
  router,
  store,
  filters: {
    formatDateFilter,
  },
  render: (h) => h(App),
}).$mount("#app");

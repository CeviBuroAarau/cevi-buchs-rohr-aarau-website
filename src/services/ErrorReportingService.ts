import Vue from "vue";
import * as Sentry from "@sentry/vue";
import { CaptureConsole } from "@sentry/integrations";

export class ErrorReportingService {
  init() {
    if (process.env.NODE_ENV === "production") {
      Sentry.init({
        Vue: Vue,
        dsn: process.env.VUE_APP_SENTRY_DSN,
        integrations: [
          new CaptureConsole({
            levels: ["error"],
          }),
        ],
      });
    }
  }

  // eslint-disable-next-line
  report(err: any) {
    if (process.env.NODE_ENV === "production") {
      Sentry.captureException(err);
    } else {
      console.error(err);
    }
  }
}

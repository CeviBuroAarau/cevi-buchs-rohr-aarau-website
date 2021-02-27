import Vue from "vue";
import * as Sentry from "@sentry/vue";
import { CaptureConsole } from "@sentry/integrations";

export default class ErrorReportingService {
  init() {
    if (process.env.NODE_ENV === "production") {
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
    }
  }

  // eslint-disable-next-lin
  report(err: any) {
    if (process.env.NODE_ENV === "production") {
      Sentry.captureException(err);
    }
  }
}

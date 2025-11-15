/* eslint-disable no-console */

import Vue from "vue";
import * as Sentry from "@sentry/vue";

export class ErrorReportingService {
  init(): void {
    if (process.env.NODE_ENV === "production") {
      Sentry.init({
        app: Vue,
        dsn: process.env.VUE_APP_SENTRY_DSN,

        integrations: [
          Sentry.captureConsoleIntegration({
            levels: ["error"],
          }),
          Sentry.browserTracingIntegration(),
        ],

        tracesSampleRate: 1.0,
        environment: process.env.VUE_APP_SENTRY_ENVIRONMENT,
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

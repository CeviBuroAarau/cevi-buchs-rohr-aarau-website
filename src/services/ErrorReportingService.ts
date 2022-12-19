/* eslint-disable no-console */

import Vue from "vue";
import * as Sentry from "@sentry/vue";
import { CaptureConsole } from "@sentry/integrations";
import { Integrations } from "@sentry/tracing";

export class ErrorReportingService {
  init(): void {
    if (process.env.NODE_ENV === "production") {
      Sentry.init({
        Vue: Vue,
        dsn: process.env.VUE_APP_SENTRY_DSN,
        integrations: [
          new CaptureConsole({
            levels: ["error"],
          }),
          new Integrations.BrowserTracing(),
        ],
        tracesSampleRate: 1.0,
        tracingOptions: {
          trackComponents: true,
        },
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

/* eslint-disable no-console */
export class ErrorReportingService {
  init(): void {}

  // eslint-disable-next-line
  report(err: any) {
    console.error(err);
  }
}

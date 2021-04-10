import axios, { AxiosResponse } from "axios";
import { DateUtil } from "./DateUtil";

export class AxiosUtil {
  static getCockpitInstance() {
    return axios.create({
      baseURL: process.env.VUE_APP_COCKPIT_API,
      timeout: 10000,
      headers: {
        Authorization: "Bearer " + process.env.VUE_APP_COCKPIT_AUTHORIZATION,
        "Content-Type": "application/json",
      },
    });
  }

  static dateConversionInterceptor(
    originalResponse: AxiosResponse<any>,
    fieldName: string
  ) {
    if (originalResponse.data.entries) {
      // eslint-disable-next-line
      originalResponse.data.entries.forEach((entry: any) =>
        this.handleDates(entry, fieldName)
      );
    }
    return originalResponse;
  }

  // eslint-disable-next-line
  private static handleDates(body: any, searchKey: string) {
    if (body === null || body === undefined || typeof body !== "object")
      return body;

    for (const key of Object.keys(body)) {
      if (key == searchKey) {
        const value = body[key];
        body[key] = DateUtil.parseDateWithoutTime(value);
      }
    }
  }
}

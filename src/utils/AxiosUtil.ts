import axios, { AxiosInstance, AxiosResponse } from "axios";
import { DateUtil } from "./DateUtil";

export class AxiosUtil {
  static getCockpitInstance(): AxiosInstance {
    return axios.create({
      baseURL: import.meta.env.VITE_COCKPIT_API,
      timeout: 10000,
      headers: {
        Authorization: "Bearer " + import.meta.env.VITE_COCKPIT_AUTHORIZATION,
        "Content-Type": "application/json",
      },
    });
  }

  static dateConversionInterceptor(
    originalResponse: AxiosResponse<any>, // eslint-disable-line @typescript-eslint/no-explicit-any
    fieldName: string,
    // eslint-disable-next-line
  ): AxiosResponse<any, any> {
    if (originalResponse.data.entries) {
      // eslint-disable-next-line
      originalResponse.data.entries.forEach((entry: any) =>
        this.handleDates(entry, fieldName),
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

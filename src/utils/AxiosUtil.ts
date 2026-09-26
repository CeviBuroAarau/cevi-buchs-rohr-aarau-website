import axios, { AxiosInstance } from "axios";

export class AxiosUtil {
  static getBackendInstance(): AxiosInstance {
    return axios.create({
      baseURL: import.meta.env.VITE_BACKEND_URL + "/api/",
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

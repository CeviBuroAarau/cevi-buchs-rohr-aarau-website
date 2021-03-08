import axios from "axios";

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
}

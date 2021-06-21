import { AxiosInstance, AxiosResponse } from "axios";
import { WelcomeImage, CockpitWelcomeImage } from "@/types";

export class WelcomeImageService {
  private axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  async getImages(): Promise<WelcomeImage[]> {
    const resp: AxiosResponse<CockpitWelcomeImage> =
      await this.axios.get<CockpitWelcomeImage>(
        "collections/get/WelcomeImages"
      );

    return resp.data.entries.map((welcomeImage) => {
      return {
        url: process.env.VUE_APP_COCKPIT_FILES + welcomeImage.image.path,
      };
    });
  }
}

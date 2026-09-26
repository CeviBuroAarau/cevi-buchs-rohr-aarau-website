import { AxiosInstance, AxiosResponse } from "axios";
import { WelcomeImage, BackendWelcomeImages } from "@/types";
import { PayloadUtil } from "@/utils";

export class WelcomeImageService {
  private axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  async getImages(): Promise<WelcomeImage[]> {
    const resp: AxiosResponse<BackendWelcomeImages> =
      await this.axios.get<BackendWelcomeImages>("welcome-images", {
        params: PayloadUtil.listParams({ sort: "_order" }),
      });

    return resp.data.docs.map((welcomeImage) => {
      return {
        url: welcomeImage.image.url,
      };
    });
  }
}

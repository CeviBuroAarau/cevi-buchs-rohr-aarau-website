import { CockpitMedia, Media } from "@/types";
import { AxiosInstance, AxiosResponse } from "axios";
import { SortingUtil, DateUtil, AxiosUtil } from "@/utils";

export class MediaService {
  private axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
    this.axios.interceptors.response.use((resp) =>
      AxiosUtil.dateConversionInterceptor(resp, "date")
    );
  }

  private async retrieveMedia(): Promise<Media[]> {
    const resp: AxiosResponse<CockpitMedia> = await this.axios.get<CockpitMedia>(
      "collections/get/Media"
    );

    let result: Media[] = resp.data.entries;
    result.forEach((m) => {
      m.file = process.env.VUE_APP_COCKPIT_FILES + m.file;
    });

    result = result.sort((a: Media, b: Media) => {
      return SortingUtil.sortDescending(a.date, b.date);
    });

    return result;
  }

  async getChronic(): Promise<Media[]> {
    const media: Media[] = await this.retrieveMedia();
    return media.filter((m) => m.type === "historic");
  }

  async getNews(): Promise<Media[]> {
    const media: Media[] = await this.retrieveMedia();
    return media.filter((m) => m.type !== "historic");
  }
}

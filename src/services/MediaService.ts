import { CockpitMedia, Media } from "@/types";
import { AxiosInstance, AxiosResponse } from "axios";
import { SortingUtil } from "@/utils";

export class MediaService {
  private axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;

    this.axios.interceptors.response.use((originalResponse) => {
      if (originalResponse.data.entries) {
        // eslint-disable-next-line
        originalResponse.data.entries.forEach((entry: any) =>
          this.handleDates(entry, "date")
        );
      }
      return originalResponse;
    });
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

  // eslint-disable-next-line
  private handleDates(body: any, searchKey: string) {
    if (body === null || body === undefined || typeof body !== "object")
      return body;

    for (const key of Object.keys(body)) {
      if (key == searchKey) {
        const value = body[key];
        body[key] = new Date(value);
      }
    }
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

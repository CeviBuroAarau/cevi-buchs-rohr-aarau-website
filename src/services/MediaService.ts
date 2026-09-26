import { BackendMedia, Media } from "@/types";
import { AxiosInstance, AxiosResponse } from "axios";
import { PayloadUtil } from "@/utils";

export class MediaService {
  private axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  private async retrieveMedia(): Promise<Media[]> {
    const resp: AxiosResponse<BackendMedia> =
      await this.axios.get<BackendMedia>("press", {
        params: PayloadUtil.listParams({ sort: "-date" }),
      });

    return resp.data.docs.map((m) => {
      return {
        type: m.type,
        date: new Date(m.date),
        description: m.descriptionHtml,
        file: m.file.url,
      };
    });
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

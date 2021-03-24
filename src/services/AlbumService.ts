import { CockpitAlbum, CockpitAlbumEntry, Album } from "@/types";
import { AxiosInstance, AxiosResponse } from "axios";
import { SortingUtil, DateUtils } from "@/utils";

export class AlbumService {
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

  async getAlbums(): Promise<Album[]> {
    const resp: AxiosResponse<CockpitAlbum> = await this.axios.get<CockpitAlbum>(
      "collections/get/Album"
    );

    const tempResult: CockpitAlbumEntry[] = resp.data.entries;
    let result: Album[] = tempResult.map((a) => {
      return {
        ...a,
        images: a.images.map((img) => {
          return {
            title: img.meta.title,
            url: process.env.VUE_APP_COCKPIT_FILES + img.path,
          };
        }),
        previewImage: {
          url: process.env.VUE_APP_COCKPIT_FILES + a.previewImage.path,
        },
      };
    });

    result = result.sort((a: Album, b: Album) => {
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
        body[key] = DateUtils.parseDateWithoutTime(value);
      }
    }
  }
}

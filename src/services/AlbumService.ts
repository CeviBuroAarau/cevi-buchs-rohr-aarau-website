import { CockpitAlbum, CockpitAlbumEntry, Album } from "@/types";
import { AxiosInstance, AxiosResponse } from "axios";
import { SortingUtil, AxiosUtil } from "@/utils";

export class AlbumService {
  private axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
    this.axios.interceptors.response.use((resp) =>
      AxiosUtil.dateConversionInterceptor(resp, "date")
    );
  }

  async getAlbums(): Promise<Album[]> {
    const resp: AxiosResponse<CockpitAlbum> =
      await this.axios.get<CockpitAlbum>("collections/get/Album");

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
}

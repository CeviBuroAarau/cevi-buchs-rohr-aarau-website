import { BackendAlbums, Album } from "@/types";
import { AxiosInstance, AxiosResponse } from "axios";
import { PayloadUtil } from "@/utils";

export class AlbumService {
  private axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  async getAlbums(): Promise<Album[]> {
    const resp: AxiosResponse<BackendAlbums> =
      await this.axios.get<BackendAlbums>("albums", {
        params: PayloadUtil.listParams({ sort: "-date" }),
      });

    return resp.data.docs.map((a) => {
      return {
        title: a.title,
        dateLabel: a.dateLabel,
        date: new Date(a.date),
        year: a.year,
        images: a.images.map((img) => {
          return {
            title: img.title ?? "",
            url: img.url,
          };
        }),
        previewImage: {
          url: a.previewImage.url,
        },
        downloadUrl:
          import.meta.env.VITE_BACKEND_URL + `/api/albums/${a.id}/zip`,
      };
    });
  }
}

import {
  ShopFormRequest,
  ShopFormResponse,
  CockpitArticles,
  Article,
} from "@/types";
import { AxiosInstance, AxiosResponse } from "axios";

export class ShopService {
  private axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  async submitForm(data: ShopFormRequest): Promise<void> {
    await this.axios.post<ShopFormResponse>("forms/submit/shoporder", data);
  }

  async getArticles(): Promise<Article[]> {
    const resp: AxiosResponse<CockpitArticles> =
      await this.axios.get<CockpitArticles>("collections/get/Shop");

    const result: Article[] = resp.data.entries.map((article) => {
      return {
        categories: article.category,
        file: process.env.VUE_APP_COCKPIT_FILES + article.image.path,
        ...article,
      };
    });

    return result;
  }
}

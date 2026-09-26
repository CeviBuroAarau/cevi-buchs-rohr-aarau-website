import { ShopFormRequest, BackendArticles, Article } from "@/types";
import { AxiosInstance, AxiosResponse } from "axios";
import { PayloadUtil } from "@/utils";

export class ShopService {
  private axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  async submitForm(data: ShopFormRequest): Promise<void> {
    await this.axios.post("form-shoporder", data);
  }

  async getArticles(): Promise<Article[]> {
    const resp: AxiosResponse<BackendArticles> =
      await this.axios.get<BackendArticles>("shop-articles", {
        params: PayloadUtil.listParams({ sort: "_order" }),
      });

    return resp.data.docs.map((article) => {
      return {
        categories: article.category,
        file: article.image.url,
        name: article.name,
        description: article.description,
        price: article.price,
      };
    });
  }
}

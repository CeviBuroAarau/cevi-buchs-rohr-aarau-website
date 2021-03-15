import { KontaktFormRequest, KontaktFormResponse } from "@/types";
import { AxiosInstance, AxiosResponse } from "axios";

export class KontaktService {
  private axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  async submitForm(data: KontaktFormRequest) {
    const resp: AxiosResponse<KontaktFormResponse> = await this.axios.post<KontaktFormResponse>(
      "forms/submit/contact",
      data
    );
  }
}

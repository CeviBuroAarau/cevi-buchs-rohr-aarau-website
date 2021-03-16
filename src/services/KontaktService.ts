import { KontaktFormRequest, KontaktFormResponse } from "@/types";
import { AxiosInstance } from "axios";

export class KontaktService {
  private axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  async submitForm(data: KontaktFormRequest) {
    await this.axios.post<KontaktFormResponse>("forms/submit/contact", data);
  }
}

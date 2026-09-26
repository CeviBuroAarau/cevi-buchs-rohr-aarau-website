import { KontaktFormRequest } from "@/types";
import { AxiosInstance } from "axios";

export class KontaktService {
  private axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  async submitForm(data: KontaktFormRequest): Promise<void> {
    await this.axios.post("form-contact", data);
  }
}

import { SchnuppernFormRequest, SchnuppernFormResponse } from "@/types";
import { AxiosInstance } from "axios";

export class SchnuppernService {
  private axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  async submitForm(data: SchnuppernFormRequest): Promise<void> {
    await this.axios.post<SchnuppernFormResponse>("forms/submit/join", data);
  }
}

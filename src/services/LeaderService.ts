import { CockpitLeaders, Leader } from "@/types";
import { AxiosInstance, AxiosResponse } from "axios";

export class LeaderService {
  private axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  async getLeaders(): Promise<Leader[]> {
    const resp: AxiosResponse<CockpitLeaders> =
      await this.axios.get<CockpitLeaders>("collections/get/Leader");

    const result: Leader[] = resp.data.entries.map((leader) => {
      return {
        ...leader,
        group: leader.group.display,
        file: import.meta.env.VITE_COCKPIT_FILES + leader.image.path,
      };
    });

    return result.filter((leader) => leader.isactive);
  }
}

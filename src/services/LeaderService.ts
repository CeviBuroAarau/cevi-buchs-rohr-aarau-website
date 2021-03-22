import { CockpitLeaders, Leader } from "@/types";
import { AxiosInstance, AxiosResponse } from "axios";

export class LeaderService {
  private axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  async getLeaders(): Promise<Leader[]> {
    const resp: AxiosResponse<CockpitLeaders> = await this.axios.get<CockpitLeaders>(
      "collections/get/Leader"
    );

    const result: Leader[] = resp.data.entries.map((leader) => {
      return {
        name: leader.name,
        scoutname: leader.scoutname,
        function: leader.function,
        group: leader.group,
        birthyear: leader.birthyear,
        place: leader.place,
        profession: leader.profession,
        recreation: leader.recreation,
        inScoutsSince: leader.inScoutsSince,
        inScoutsBecause: leader.inScoutsBecause,
        bestExperiences: leader.bestExperiences,
        file: process.env.VUE_APP_COCKPIT_FILES + leader.image.path,
      };
    });

    return result;
  }
}

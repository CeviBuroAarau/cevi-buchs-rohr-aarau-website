import { BackendLeaders, Leader } from "@/types";
import { AxiosInstance, AxiosResponse } from "axios";
import { PayloadUtil } from "@/utils";

export class LeaderService {
  private axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  async getLeaders(): Promise<Leader[]> {
    const resp: AxiosResponse<BackendLeaders> =
      await this.axios.get<BackendLeaders>("leaders", {
        params: PayloadUtil.listParams({
          where: { isActive: { equals: true } },
        }),
      });

    return resp.data.docs.map((leader) => {
      return {
        name: leader.name,
        isActive: leader.isActive,
        scoutname: leader.scoutname,
        function: leader.function,
        group: leader.group?.name ?? "",
        birthyear: leader.birthyear,
        place: leader.place,
        profession: leader.profession,
        recreation: leader.recreation,
        inScoutsSince: leader.inScoutsSince,
        inScoutsBecause: leader.inScoutsBecause,
        bestExperiences: leader.bestExperiences,
        file: leader.image.url,
      };
    });
  }
}

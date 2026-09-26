import { BackendActivities, Activity } from "@/types";
import { AxiosInstance, AxiosResponse } from "axios";
import { PayloadUtil } from "@/utils";

export class ActivitiesService {
  private axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  private async retrieveActivities(): Promise<Activity[]> {
    const resp: AxiosResponse<BackendActivities> =
      await this.axios.get<BackendActivities>("activities", {
        params: PayloadUtil.listParams({ sort: "_order" }),
      });

    return resp.data.docs.map((activity) => {
      return {
        title: activity.title,
        url: activity.image.url,
        thumb: PayloadUtil.thumbnailUrl(activity.image),
      };
    });
  }

  async getActivities(): Promise<Activity[]> {
    const activities: Activity[] = await this.retrieveActivities();
    return activities;
  }
}

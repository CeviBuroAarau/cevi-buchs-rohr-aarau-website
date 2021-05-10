import { CockpitActivities, Activity } from "@/types";
import { AxiosInstance, AxiosResponse } from "axios";

export class ActivitiesService {
  private axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  private async retrieveActivities(): Promise<Activity[]> {
    const resp: AxiosResponse<CockpitActivities> =
      await this.axios.get<CockpitActivities>("collections/get/Activities");

    const result: Activity[] = resp.data.entries.map((activity) => {
      return {
        title: activity.title,
        url: process.env.VUE_APP_COCKPIT_FILES + activity.image.path,
        thumb: process.env.VUE_APP_COCKPIT_FILES + activity.thumb.path,
      };
    });

    return result;
  }

  async getActivities(): Promise<Activity[]> {
    const activities: Activity[] = await this.retrieveActivities();
    return activities;
  }
}

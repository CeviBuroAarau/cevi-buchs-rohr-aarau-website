import {
  CockpitAgenda,
  Agenda,
  CockpitEventInfo,
  EventInfo,
} from "@/types/Agenda";
import { AxiosInstance, AxiosResponse } from "axios";

export default class AgendaService {
  private axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;

    this.axios.interceptors.response.use((originalResponse) => {
      if (originalResponse.data.entries) {
        // eslint-disable-next-line
        originalResponse.data.entries.forEach((entry: any) =>
          this.handleDates(entry, "date")
        );
      }
      return originalResponse;
    });
  }

  private async retrieveAgenda(): Promise<Agenda[]> {
    const resp: AxiosResponse<CockpitAgenda> = await this.axios.get<CockpitAgenda>(
      "collections/get/Agenda"
    );

    const currentDay = new Date();
    currentDay.setHours(0, 0, 0, 0);
    const result: Agenda[] = resp.data.entries
      .filter((a) => a.date >= currentDay)
      .slice(0, 3);

    return result;
  }

  private async retrieveEventInfo(): Promise<EventInfo[]> {
    const resp: AxiosResponse<CockpitEventInfo> = await this.axios.get<CockpitEventInfo>(
      "collections/get/EventInfo"
    );

    const currentDay = new Date();
    currentDay.setHours(0, 0, 0, 0);
    const result: EventInfo[] = resp.data.entries.filter(
      (ei) => ei.date >= currentDay
    );

    return result;
  }

  // eslint-disable-next-line
  private handleDates(body: any, searchKey: string) {
    if (body === null || body === undefined || typeof body !== "object")
      return body;

    for (const key of Object.keys(body)) {
      if (key == searchKey) {
        const value = body[key];
        body[key] = new Date(value);
      }
    }
  }

  async getAgenda(): Promise<Agenda[]> {
    const agenda: Agenda[] = await this.retrieveAgenda();
    return agenda;
  }

  async getEventInfo(): Promise<EventInfo[]> {
    const eventInfo: EventInfo[] = await this.retrieveEventInfo();
    return eventInfo;
  }
}

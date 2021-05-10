import { CockpitAgenda, Agenda, CockpitEventInfo, EventInfo } from "@/types";
import { AxiosInstance, AxiosResponse } from "axios";
import { SortingUtil, AxiosUtil } from "@/utils";

export class AgendaService {
  private axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
    this.axios.interceptors.response.use((resp) =>
      AxiosUtil.dateConversionInterceptor(resp, "date")
    );
  }

  private async retrieveUpcomingEvents(currentDay: Date): Promise<Agenda[]> {
    const resp: AxiosResponse<CockpitAgenda> =
      await this.axios.get<CockpitAgenda>("collections/get/Agenda");

    currentDay.setHours(0, 0, 0, 0);

    let result: Agenda[] = resp.data.entries.filter(
      (a) => a.date >= currentDay
    );

    result = result.sort((a: Agenda, b: Agenda) => {
      return SortingUtil.sortAscending(a.date, b.date);
    });

    return result;
  }

  private async retrieveEventInfo(): Promise<EventInfo[]> {
    const resp: AxiosResponse<CockpitEventInfo> =
      await this.axios.get<CockpitEventInfo>("collections/get/EventInfo");

    const currentDay = new Date();
    currentDay.setHours(0, 0, 0, 0);
    const result: EventInfo[] = resp.data.entries.filter(
      (ei) => ei.date >= currentDay
    );

    return result;
  }

  async getEventsAfterDate(currentDate: Date): Promise<Agenda[]> {
    const agenda: Agenda[] = await this.retrieveUpcomingEvents(currentDate);
    return agenda;
  }

  async getEventInfo(): Promise<EventInfo[]> {
    const eventInfo: EventInfo[] = await this.retrieveEventInfo();
    return eventInfo;
  }
}

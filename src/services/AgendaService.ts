import { CockpitAgenda, Agenda, EventInfo, CockpitEventInfos } from "@/types";
import { AxiosInstance, AxiosResponse } from "axios";
import { SortingUtil, AxiosUtil, HtmlUtil } from "@/utils";
import { AgendaPDFCreator } from "./AgendaPDFCreator";

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
    const resp: AxiosResponse<CockpitEventInfos> =
      await this.axios.get<CockpitEventInfos>("collections/get/EventInfo");

    const currentDay = new Date();
    currentDay.setHours(0, 0, 0, 0);
    const result: EventInfo[] = resp.data.entries
      .filter((ei) => ei.date >= currentDay)
      .map((info) => {
        return { ...info, scope: info.scope.display };
      });

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

  async generatePDF(events: Agenda[]) {
    const eventTableHeader = [["Datum", "Anlass"]];
    const eventTableData: Array<string[]> = [];
    events.forEach((event) => {
      eventTableData.push([
        event.title,
        HtmlUtil.decodeHTMLEntities(event.text.replace(/<\/?[^>]+>/gi, "")),
      ]);
    });

    const contactHeader = [["Funktion", "Kontaktdaten"]];
    const contactData: Array<string[]> = [
      ["Gruppenleiterin Sprösslis", "Seraina Frei v/o Floh, 079 952 70 84"],
      [
        "Gruppenleiterin Feuerstühle",
        "Leah Dellenbach v/o Luna, 076 405 81 18",
      ],
      ["Gruppenleiter Glühwürmli", "Yannis Bontempi v/o Ayal, 079 932 44 85"],
      ["Abteilungsleitung", "Leah Dellenbach v/o Luna, 076 405 81 18"],
    ];

    const creator: AgendaPDFCreator = new AgendaPDFCreator();
    await creator.generatePDF(
      "Liebe Eltern, liebe Jungschärlerinnen und Jungschärler",
      "Das sind die geplanten Jungschardaten. Wir versuchen, diese Daten einzuhalten, sollte uns dies nicht möglich sein, werden wir Euch rechtzeitig informieren.",
      "Abmeldungen:",
      "Damit die Gruppenleiter ihr Programm wie geplant durchführen können, bitten wir euch, eure Kinder bei Verhinderungen frühzeitig bei den GruppenleiterInnen abzumelden.\r\nIdealerweise eine Woche vor dem Nachmittag. Danke!",
      eventTableHeader,
      eventTableData,
      contactHeader,
      contactData,
      "Wollt ihr mal einem Gschpändli die Jungschi zeigen?:",
      "Kein Problem! Gebt uns doch kurz Bescheid, damit wir planen können. Wir freuen uns über jeden neuen Cevianer!",
      "Anschlag:",
      "Jeweils ungefähr eine Woche vor den Jungschinachmittagen veröffentlichen wir einen Anschlag mit detaillierten Informationen (z. B. ob die Kinder Z'vieri mitnehmen müssen). Bei speziellen Anlässen erfolgt die Information in der Regel mehrere Wochen vorher."
    );
  }
}

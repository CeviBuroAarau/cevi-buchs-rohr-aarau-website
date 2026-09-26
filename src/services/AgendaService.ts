import { BackendAgenda, Agenda, EventInfo, BackendEventInfos } from "@/types";
import { AxiosInstance, AxiosResponse } from "axios";
import { HtmlUtil, PayloadUtil } from "@/utils";
import { AgendaPDFCreator } from "./AgendaPDFCreator";

export class AgendaService {
  private axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  private async retrieveUpcomingEvents(currentDay: Date): Promise<Agenda[]> {
    const resp: AxiosResponse<BackendAgenda> =
      await this.axios.get<BackendAgenda>("agenda", {
        params: PayloadUtil.listParams({
          sort: "date",
          where: {
            date: { greater_than_equal: PayloadUtil.startOfDay(currentDay) },
          },
        }),
      });

    return resp.data.docs.map((agenda) => {
      return {
        title: agenda.title,
        text: agenda.textHtml,
        date: new Date(agenda.date),
      };
    });
  }

  private async retrieveEventInfo(): Promise<EventInfo[]> {
    const resp: AxiosResponse<BackendEventInfos> =
      await this.axios.get<BackendEventInfos>("event-infos", {
        params: PayloadUtil.listParams({
          sort: "date",
          where: {
            date: { greater_than_equal: PayloadUtil.startOfDay(new Date()) },
          },
        }),
      });

    return resp.data.docs.map((info) => {
      return {
        // an announcement without a group is meant for everyone
        scope: info.group?.name ?? "Alle",
        text: info.textHtml,
        date: new Date(info.date),
      };
    });
  }

  async getEventsAfterDate(currentDate: Date): Promise<Agenda[]> {
    const agenda: Agenda[] = await this.retrieveUpcomingEvents(currentDate);
    return agenda;
  }

  async getEventInfo(): Promise<EventInfo[]> {
    const eventInfo: EventInfo[] = await this.retrieveEventInfo();
    return eventInfo;
  }

  async generatePDF(events: Agenda[]): Promise<void> {
    const eventTableHeader = [["Datum", "Anlass"]];
    const eventTableData: Array<string[]> = [];
    events.forEach((event) => {
      eventTableData.push([
        event.title,
        HtmlUtil.decodeHTMLEntities(HtmlUtil.stripTags(event.text)),
      ]);
    });

    const contactHeader = [["Funktion", "Kontaktdaten"]];
    const contactData: Array<string[]> = [
      [
        "Gruppenleiterin",
        "Sira Hächler v/o Zippora, 075 424 67 11 / zippora@cevimail.ch",
      ],
      [
        "Abteilungsleiterin",
        "Leah Dellenbach v/o Luna, 076 405 81 18 / luna@cevimail.ch",
      ],
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
      "Jeweils ungefähr eine Woche vor den Jungschinachmittagen veröffentlichen wir einen Anschlag mit detaillierten Informationen (z. B. ob die Kinder Z'vieri mitnehmen müssen). Bei speziellen Anlässen erfolgt die Information in der Regel mehrere Wochen vorher.",
    );
  }
}

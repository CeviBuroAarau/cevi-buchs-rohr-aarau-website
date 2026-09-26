import { AgendaService } from "@/services";
import { fakeAxios } from "./fakeAxios";

describe("AgendaService", () => {
  test("getEventsAfterDate", async () => {
    const { instance, get } = fakeAxios([
      {
        id: 1,
        title: "29. August 2020 14:00 - 17:00",
        textHtml: '<div class="payload-richtext"><p>Nachmittag</p></div>',
        date: "2020-08-29T12:00:00.000Z",
      },
    ]);
    const currentDate = new Date(2020, 7, 20, 15, 30);

    const agendas = await new AgendaService(instance).getEventsAfterDate(
      currentDate,
    );

    expect(get).toHaveBeenCalledWith("agenda", {
      params: {
        pagination: false,
        depth: 1,
        sort: "date",
        where: {
          date: {
            greater_than_equal: new Date(2020, 7, 20).toISOString(),
          },
        },
      },
    });
    expect(agendas).toEqual([
      {
        title: "29. August 2020 14:00 - 17:00",
        text: '<div class="payload-richtext"><p>Nachmittag</p></div>',
        date: new Date("2020-08-29T12:00:00.000Z"),
      },
    ]);
  });

  test("getEventInfo", async () => {
    const { instance, get } = fakeAxios([
      {
        id: 1,
        group: { id: 2, name: "Gruppe Glühwürmli" },
        textHtml: "<p>Treffpunkt</p>",
        date: "2026-09-12T12:00:00.000Z",
      },
      {
        id: 2,
        group: null,
        textHtml: "<p>Für alle</p>",
        date: "2026-09-19T12:00:00.000Z",
      },
    ]);

    const infos = await new AgendaService(instance).getEventInfo();

    expect(get.mock.calls[0][0]).toBe("event-infos");
    expect(
      get.mock.calls[0][1].params.where.date.greater_than_equal,
    ).toBeDefined();
    expect(infos).toEqual([
      {
        scope: "Gruppe Glühwürmli",
        text: "<p>Treffpunkt</p>",
        date: new Date("2026-09-12T12:00:00.000Z"),
      },
      {
        scope: "Alle",
        text: "<p>Für alle</p>",
        date: new Date("2026-09-19T12:00:00.000Z"),
      },
    ]);
  });
});

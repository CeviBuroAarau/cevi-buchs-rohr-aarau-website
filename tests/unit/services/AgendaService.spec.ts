import { AgendaService } from "@/services";
import { Agenda } from "@/types";
import axios from "axios";

vi.mock("axios", () => {
  const mock = {
    create: vi.fn(),
    interceptors: {
      request: { use: vi.fn(), eject: vi.fn() },
      response: { use: vi.fn(), eject: vi.fn() },
    },
    get: () =>
      Promise.resolve({
        data: {
          fields: {
            title: {
              name: "title",
              type: "text",
              localize: false,
              options: [],
            },
            text: {
              name: "text",
              type: "wysiwyg",
              localize: false,
              options: [],
            },
            date: {
              name: "date",
              type: "date",
              localize: false,
              options: [],
            },
          },
          entries: [
            {
              title: "15. August 2020 14:00 - 17:00",
              text: "Regulärer Jungschinachmittag.",
              date: new Date(2020, 7, 15),
              _mby: "5e8c4a1f30656581770002f3",
              _by: "5e8c4a1f30656581770002f3",
              _modified: 1605462138,
              _created: 1605461999,
              _id: "5fb167ef64326267cb000269",
            },
            {
              title: "29. August 2020 14:00 - 17:00",
              text: "Regulärer Jungschinachmittag.",
              date: new Date(2020, 7, 29),
              _mby: "5e8c4a1f30656581770002f3",
              _by: "5e8c4a1f30656581770002f3",
              _modified: 1605462143,
              _created: 1605462020,
              _id: "5fb16804356432659000017e",
            },
            {
              title: "12. September 2020 14:00 - 17:00",
              text: "Cevitag.",
              date: new Date(2020, 8, 12),
              _mby: "5e8c4a1f30656581770002f3",
              _by: "5e8c4a1f30656581770002f3",
              _modified: 1605462148,
              _created: 1605462041,
              _id: "5fb168196463307c6b00011f",
            },
            {
              title: "19. September 2020 - 20. September 2020",
              text: "Pfila Ersatzlager",
              date: new Date(2020, 8, 19),
              _mby: "5e8c4a1f30656581770002f3",
              _by: "5e8c4a1f30656581770002f3",
              _modified: 1605462100,
              _created: 1605462100,
              _id: "5fb168546135355be40003b7",
            },
            {
              title: "17. Oktober 2020 14:00 - 17:00",
              text: "Regulärer Jungschinachmittag",
              date: new Date(2020, 9, 17),
              _mby: "5e8c4a1f30656581770002f3",
              _by: "5e8c4a1f30656581770002f3",
              _modified: 1605462182,
              _created: 1605462182,
              _id: "5fb168a6376238780f000372",
            },
          ],
          total: 5,
        },
      }),
  };
  return { default: mock, ...mock };
});

const axiosInstance = axios as vi.Mocked<typeof axios>;

describe("AgendaService", () => {
  test("getEventsAfterDate", async () => {
    const service: AgendaService = new AgendaService(axiosInstance);
    const agendas: Agenda[] = await service.getEventsAfterDate(
      new Date(Date.UTC(2020, 7, 20)),
    );
    expect(agendas.length).toBe(4);
    expect(agendas[0].title).toBe("29. August 2020 14:00 - 17:00");
  });
});

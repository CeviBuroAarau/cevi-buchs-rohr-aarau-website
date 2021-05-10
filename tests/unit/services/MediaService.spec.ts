import { MediaService } from "@/services";
import { Media } from "@/types";
import axios from "axios";

jest.mock("axios", () => {
  return {
    create: jest.fn(),
    interceptors: {
      request: { use: jest.fn(), eject: jest.fn() },
      response: { use: jest.fn(), eject: jest.fn() },
    },
    get: () =>
      Promise.resolve({
        data: {
          fields: {
            media: {
              name: "media",
              type: "text",
              localize: false,
              options: [],
            },
            date: {
              name: "date",
              type: "date",
              localize: false,
              options: [],
            },
            description: {
              name: "description",
              type: "wysiwyg",
              localize: false,
              options: [],
            },
            file: {
              name: "file",
              type: "file",
              localize: false,
              options: [],
            },
          },
          entries: [
            {
              type: "historic",
              media: "intern",
              date: "1982-03-27",
              description:
                "<p>Am 27. M&auml;rz 1982 wird die Cevi Jungschar Buchs-Rohr in den Cevi Regionalverband AG-SO-LU-ZG aufgenommen.<\\/p>",
              file: "storage\\/uploads\\/2021\\/03\\/04\\/1982-03-27-Aufnahme-in-den-Regionalverband_uid_60416156a29fc.pdf",
              _mby: "5e8c4a1f30656581770002f3",
              _by: "5e8c4a1f30656581770002f3",
              _modified: 1614897539,
              _created: 1614897539,
              _id: "604161833363653b380000fc",
            },
            {
              type: "news",
              media: "Zeitung",
              date: "2019-04-11",
              description:
                "<p>Am vergangenen Samstag folgten 23 Erwachsene und 34 Kinder dem Aufruf der Gr&uuml;nen Buchs und machten w&auml;hrend zwei Stunden Buchs etwas sauberer. Insgesamt waren &uuml;ber 60 Freiwillige zugegen, dabei waren die Kinder vom BuMeiJo von der katholischen Kirche, die Jungschar der reformierten Kirche und ein Gemeinderat begr&uuml;sste undlobte die Helfer.<\\/p>",
              file: "storage\\/uploads\\/2021\\/03\\/04\\/2019-04-11-Clean-up-day_uid_604162f2a8f9c.pdf",
              _mby: "5e8c4a1f30656581770002f3",
              _by: "5e8c4a1f30656581770002f3",
              _modified: 1614897910,
              _created: 1614897910,
              _id: "604162f6326335d566000314",
            },
          ],
          total: 2,
        },
      }),
  };
});

const axiosInstance = axios as jest.Mocked<typeof axios>;

describe("MediaService", () => {
  test("get chronic", async () => {
    const service: MediaService = new MediaService(axiosInstance);
    const news: Media[] = await service.getChronic();
    expect(news[0].date).toBe("1982-03-27");
  });
  test("get news", async () => {
    const service: MediaService = new MediaService(axiosInstance);
    const news: Media[] = await service.getNews();
    expect(news[0].date).toBe("2019-04-11");
  });
});

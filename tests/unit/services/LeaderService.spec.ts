import { LeaderService } from "@/services";
import { Leader } from "@/types";
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
            scoutname: {
              name: "scoutname",
              type: "text",
              localize: false,
              options: [],
            },
            name: { name: "name", type: "text", localize: false, options: [] },
            isactive: {
              name: "isactive",
              type: "boolean",
              localize: false,
              options: [],
            },
            group: {
              name: "group",
              type: "collectionlinkselect",
              localize: false,
              options: {
                link: "Groups",
                display: "group_name",
                multiple: false,
                limit: false,
              },
            },
            function: {
              name: "function",
              type: "multipleselect",
              localize: false,
              options: {
                options:
                  "Abteilungsleiter, Abteilungsleiterin, Gruppenleiter, Gruppenleiterin, Hilfsleiter, Hilfsleiterin, Materialverantwortlicher, L\u00e4deliverantwortliche, Homepagebetreuer, Koordination YMCA, Lagerleiter",
              },
            },
            birthyear: {
              name: "birthyear",
              type: "text",
              localize: false,
              options: [],
            },
            place: {
              name: "place",
              type: "text",
              localize: false,
              options: [],
            },
            profession: {
              name: "profession",
              type: "text",
              localize: false,
              options: [],
            },
            recreation: {
              name: "recreation",
              type: "text",
              localize: false,
              options: [],
            },
            image: {
              name: "image",
              type: "image",
              localize: false,
              options: [],
            },
            inScoutsSince: {
              name: "inScoutsSince",
              type: "text",
              localize: false,
              options: [],
            },
            inScoutsBecause: {
              name: "inScoutsBecause",
              type: "text",
              localize: false,
              options: [],
            },
            bestExperiences: {
              name: "bestExperiences",
              type: "text",
              localize: false,
              options: [],
            },
          },
          entries: [
            {
              name: "Leah Dellenbach",
              scoutname: "Luna",
              function: ["Gruppenleiterin", "Abteilungsleiterin"],
              group: {
                _id: "617598493562642bd80000c3",
                link: "Groups",
                display: "Gruppe Gl\u00fchw\u00fcrmli",
              },
              birthyear: "1998",
              place: "Aarau",
              profession: "Studentin Universit\u00e4t Basel",
              recreation: "Lesen, Jungschi, mit Freunden treffen",
              _mby: "5e8c4a1f30656581770002f3",
              _by: "5e8c4a1f30656581770002f3",
              _modified: 1635102452,
              _created: 1586261102,
              _id: "5e8c6c6e633238ddad0002c5",
              image: {
                path: "/storage/uploads/2021/02/01/2017-12-Luna.jpg_uid_6018765b6b961.webp",
              },
              inScoutsSince: "ungef\u00e4hr 2006",
              inScoutsBecause:
                "es lustig ist mit Gleichgesinnten etwas zu machen",
              bestExperiences: "Pfila 2007, Leiteranl\u00e4sse",
              isactive: true,
            },
          ],
          total: 1,
        },
      }),
  };
});

const axiosInstance = axios as jest.Mocked<typeof axios>;

describe("LeaderService", () => {
  test("getLeaders", async () => {
    const service: LeaderService = new LeaderService(axiosInstance);
    const leaders: Leader[] = await service.getLeaders();
    expect(leaders[0].place).toBe("Aarau");
    expect(leaders.length).toBe(1);
  });
});

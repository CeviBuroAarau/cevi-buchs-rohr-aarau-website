import { ShopService } from "@/services";
import { Article } from "@/types";
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
            sortkey: {
              name: "sortkey",
              type: "text",
              localize: false,
              options: [],
            },
            name: {
              name: "name",
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
            price: {
              name: "price",
              type: "text",
              localize: false,
              options: [],
            },
            category: {
              name: "category",
              type: "multipleselect",
              localize: false,
              options: {
                options: "Regul\\u00e4re Artikel, Restposten",
              },
            },
            description: {
              name: "description",
              type: "text",
              localize: false,
              options: [],
            },
          },
          entries: [
            {
              name: "Jungscharhemd Kinder",
              image: {
                path:
                  "\\/storage\\/uploads\\/2021\\/01\\/28\\/haupt_01_cevi_hemd.jpg_uid_6013250287435.webp",
              },
              price: "54.9",
              category: ["Regul\\u00e4re Artikel"],
              _mby: "5e8c4a1f30656581770002f3",
              _by: "5e8c4a1f30656581770002f3",
              _modified: 1611867477,
              _created: 1586265967,
              _id: "5e8c7f6f356337fda20000f5",
              sortkey: "01",
              description: "Verf\\u00fcgbare Gr\\u00f6ssen 140, 152, 164",
            },
            {
              name: "Jungscharhemd Erwachsene",
              image: {
                path:
                  "\\/storage\\/uploads\\/2021\\/01\\/28\\/haupt_02_cevi_hemd_erwachsene.jpg_uid_60132502b1bcf.webp",
              },
              price: "62.9",
              category: ["Regul\\u00e4re Artikel"],
              _mby: "5e8c4a1f30656581770002f3",
              _by: "5e8c4a1f30656581770002f3",
              _modified: 1611867504,
              _created: 1586265992,
              _id: "5e8c7f88363366bb110003ca",
              sortkey: "02",
              description: "Verf\\u00fcgbare Gr\\u00f6ssen S, M, L, XL, 2XL",
            },
          ],
          total: 2,
        },
      }),
  };
});

const axiosInstance = axios as jest.Mocked<typeof axios>;

describe("ShopService", () => {
  test("getArticles", async () => {
    const service: ShopService = new ShopService(axiosInstance);
    const activities: Article[] = await service.getArticles();
    expect(activities[0].name).toBe("Jungscharhemd Kinder");
  });
});

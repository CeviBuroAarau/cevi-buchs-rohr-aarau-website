import { AlbumService } from "@/services";
import { Album } from "@/types";
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
            title: {
              name: "title",
              type: "text",
              localize: false,
              options: [],
            },
            dateString: {
              name: "dateString",
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
            year: {
              name: "year",
              type: "text",
              localize: false,
              options: [],
            },
            images: {
              name: "images",
              type: "gallery",
              localize: false,
              options: [],
            },
            previewImage: {
              name: "previewImage",
              type: "image",
              localize: false,
              options: [],
            },
          },
          entries: [
            {
              title: "Diverse Bilder",
              dateString: "2015",
              date: "31.12.2015",
              year: "2015",
              images: [
                {
                  meta: {
                    title: "21.02 - Kochen \u00fcber dem Feuer",
                    asset: "5fb25628396661804a000350",
                  },
                  path: "/storage/uploads/2020/11/16/2015-02-21-1455-Waldlufer.jpg_uid_5fb25628437ec.webp",
                },
                {
                  meta: {
                    title: "21.02 - Schoggicreme mit Doppelrahm",
                    asset: "5fb256283937362a5000009e",
                  },
                  path: "/storage/uploads/2020/11/16/2015-02-21-162824-Waldlufer.jpg_uid_5fb256289b73b.webp",
                },
              ],
              _mby: "5e8c4a1f30656581770002f3",
              _by: "5e8c4a1f30656581770002f3",
              _modified: 1605731804,
              _created: 1605474150,
              _id: "5fb1976632643038e10002fe",
              previewImage: {
                path: "/storage/uploads/2020/11/18/2015-diverse.jpg_uid_5fb5827dbbd71.webp",
              },
            },
          ],
          total: 1,
        },
      }),
  };
});

const axiosInstance = axios as jest.Mocked<typeof axios>;

describe("AlbumService", () => {
  test("getAlbums", async () => {
    const service: AlbumService = new AlbumService(axiosInstance);
    const albums: Album[] = await service.getAlbums();
    expect(albums[0].date).toBe("31.12.2015");
  });
});

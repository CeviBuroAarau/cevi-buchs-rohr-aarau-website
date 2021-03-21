import { WelcomeImageService } from "@/services";
import { WelcomeImage } from "@/types";
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
            image: {
              name: "image",
              type: "image",
              localize: false,
              options: [],
            },
          },
          entries: [
            {
              image: {
                path:
                  "/storage/uploads/2021/02/27/background1_uid_603a773e640b4.webp",
              },
              _mby: "5e8c4a1f30656581770002f3",
              _by: "5e8c4a1f30656581770002f3",
              _modified: 1614446576,
              _created: 1614446576,
              _id: "603a7ff06631383966000367",
            },
            {
              image: {
                path:
                  "/storage/uploads/2021/02/27/background2_uid_603a773ecd85d.webp",
              },
              _mby: "5e8c4a1f30656581770002f3",
              _by: "5e8c4a1f30656581770002f3",
              _modified: 1614446588,
              _created: 1614446588,
              _id: "603a7ffc3837306e0600036f",
            },
          ],
          total: 2,
        },
      }),
  };
});

const axiosInstance = axios as jest.Mocked<typeof axios>;

describe("WelcomeImageService", () => {
  test("getWelcomeImages", async () => {
    const service: WelcomeImageService = new WelcomeImageService(axiosInstance);
    const images: WelcomeImage[] = await service.getImages();
    expect(images[0].url).toBe(
      process.env.VUE_APP_COCKPIT_FILES +
        "/storage/uploads/2021/02/27/background1_uid_603a773e640b4.webp"
    );
  });
});

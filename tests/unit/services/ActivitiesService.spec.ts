import { ActivitiesService } from "@/services";
import { Activity } from "@/types";
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
            image: {
              name: "image",
              type: "image",
              localize: false,
              options: [],
            },
            thumb: {
              name: "thumb",
              type: "image",
              localize: false,
              options: [],
            },
          },
          entries: [
            {
              title: "Kochen \u00fcber dem Feuer",
              image: {
                path:
                  "/storage/uploads/2020/11/16/01Kochen.jpg_uid_5fb2509f512be.webp",
              },
              thumb: {
                path:
                  "/storage/uploads/2020/11/16/01Kochen.jpg_uid_5fb255d55ef95.webp",
              },
              _mby: "5e8c4a1f30656581770002f3",
              _by: "5e8c4a1f30656581770002f3",
              _o: 0,
              _modified: 1605523173,
              _created: 1605466600,
              _id: "5fb179e86336632721000101",
              _pid: null,
              children: [],
            },
          ],
          total: 1,
        },
      }),
  };
});

const axiosInstance = axios as jest.Mocked<typeof axios>;

describe("ActivitiesService", () => {
  test("retrieveActivities", async () => {
    const service: ActivitiesService = new ActivitiesService(axiosInstance);
    const activities: Activity[] = await service.getActivities();
    expect(activities[0].title).toBe("Kochen \u00fcber dem Feuer");
  });
});

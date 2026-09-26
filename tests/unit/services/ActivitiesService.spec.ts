import { ActivitiesService } from "@/services";
import { fakeAxios, upload, FILE_URL } from "./fakeAxios";

describe("ActivitiesService", () => {
  test("getActivities", async () => {
    const { instance, get } = fakeAxios([
      {
        id: 1,
        title: "Kochen über dem Feuer",
        image: upload("01Kochen.webp", "01Kochen-400x300.webp"),
      },
      { id: 2, title: "Klein", image: upload("klein.webp") },
    ]);

    const activities = await new ActivitiesService(instance).getActivities();

    expect(get).toHaveBeenCalledWith("activities", {
      params: { pagination: false, depth: 1, sort: "_order" },
    });
    expect(activities).toEqual([
      {
        title: "Kochen über dem Feuer",
        url: FILE_URL + "01Kochen.webp",
        thumb: FILE_URL + "01Kochen-400x300.webp",
      },
      {
        title: "Klein",
        url: FILE_URL + "klein.webp",
        thumb: FILE_URL + "klein.webp",
      },
    ]);
  });
});

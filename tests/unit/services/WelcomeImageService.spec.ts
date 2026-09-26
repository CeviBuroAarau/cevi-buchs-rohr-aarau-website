import { WelcomeImageService } from "@/services";
import { fakeAxios, upload, FILE_URL } from "./fakeAxios";

describe("WelcomeImageService", () => {
  test("getWelcomeImages", async () => {
    const { instance, get } = fakeAxios([
      { id: 1, image: upload("background1.webp", "background1-400x301.webp") },
    ]);

    const images = await new WelcomeImageService(instance).getImages();

    expect(get).toHaveBeenCalledWith("welcome-images", {
      params: { pagination: false, depth: 1, sort: "_order" },
    });
    expect(images).toEqual([{ url: FILE_URL + "background1.webp" }]);
  });
});

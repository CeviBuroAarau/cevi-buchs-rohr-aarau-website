import { AlbumService } from "@/services";
import { fakeAxios, upload, FILE_URL } from "./fakeAxios";

describe("AlbumService", () => {
  test("getAlbums", async () => {
    const { instance, get } = fakeAxios([
      {
        id: 41,
        title: "Taufweekend 2025",
        date: "2025-01-18T12:00:00.000Z",
        dateLabel: "18 Januar 2025",
        year: "2025",
        previewImage: upload("2025Taufurkunde.jpg"),
        images: [
          { ...upload("a.jpg", "a-400x300.webp"), title: "Lagerfeuer" },
          upload("b.jpg"),
        ],
      },
    ]);

    const albums = await new AlbumService(instance).getAlbums();

    expect(get).toHaveBeenCalledWith("albums", {
      params: { pagination: false, depth: 1, sort: "-date" },
    });
    expect(albums).toEqual([
      {
        title: "Taufweekend 2025",
        dateLabel: "18 Januar 2025",
        date: new Date("2025-01-18T12:00:00.000Z"),
        year: "2025",
        images: [
          { title: "Lagerfeuer", url: FILE_URL + "a.jpg" },
          { title: "", url: FILE_URL + "b.jpg" },
        ],
        previewImage: { url: FILE_URL + "2025Taufurkunde.jpg" },
        downloadUrl: import.meta.env.VITE_BACKEND_URL + "/api/albums/41/zip",
      },
    ]);
  });
});

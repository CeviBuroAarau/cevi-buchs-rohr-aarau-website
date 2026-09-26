import { MediaService } from "@/services";
import { fakeAxios, upload, FILE_URL } from "./fakeAxios";

const docs = [
  {
    id: 2,
    type: "news",
    date: "2019-04-11T12:00:00.000Z",
    source: "Aargauer Zeitung",
    descriptionHtml: "<p>Artikel</p>",
    file: upload("artikel.pdf"),
  },
  {
    id: 1,
    type: "historic",
    date: "1982-03-27T12:00:00.000Z",
    source: "Chronik",
    descriptionHtml: "<p>Gründung</p>",
    file: upload("chronik.pdf"),
  },
];

describe("MediaService", () => {
  test("get chronic", async () => {
    const { instance, get } = fakeAxios(docs);

    const chronic = await new MediaService(instance).getChronic();

    expect(get).toHaveBeenCalledWith("press", {
      params: { pagination: false, depth: 1, sort: "-date" },
    });
    expect(chronic).toEqual([
      {
        type: "historic",
        date: new Date("1982-03-27T12:00:00.000Z"),
        description: "<p>Gründung</p>",
        file: FILE_URL + "chronik.pdf",
      },
    ]);
  });

  test("get news", async () => {
    const { instance } = fakeAxios(docs);

    const news = await new MediaService(instance).getNews();

    expect(news.length).toBe(1);
    expect(news[0].date).toEqual(new Date("2019-04-11T12:00:00.000Z"));
    expect(news[0].file).toBe(FILE_URL + "artikel.pdf");
  });
});

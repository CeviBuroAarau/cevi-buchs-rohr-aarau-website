import { ShopService } from "@/services";
import { fakeAxios, upload, FILE_URL } from "./fakeAxios";

describe("ShopService", () => {
  test("getArticles", async () => {
    const { instance, get } = fakeAxios([
      {
        id: 1,
        name: "Jungscharhemd Kinder",
        price: "54.9",
        category: ["Reguläre Artikel"],
        description: "Verfügbare Grössen 140, 152, 164",
        image: upload("haupt_01_cevi_hemd.webp"),
      },
    ]);

    const articles = await new ShopService(instance).getArticles();

    expect(get).toHaveBeenCalledWith("shop-articles", {
      params: { pagination: false, depth: 1, sort: "_order" },
    });
    expect(articles).toEqual([
      {
        name: "Jungscharhemd Kinder",
        price: "54.9",
        categories: ["Reguläre Artikel"],
        description: "Verfügbare Grössen 140, 152, 164",
        file: FILE_URL + "haupt_01_cevi_hemd.webp",
      },
    ]);
  });

  test("submitForm", async () => {
    const { instance, post } = fakeAxios();
    const order = {
      name: "Muster",
      email: "muster@example.com",
      articles: "1x Hemd",
      deliveryMethod: "Abholen",
      adress: "",
    };

    await new ShopService(instance).submitForm(order);

    expect(post).toHaveBeenCalledWith("form-shoporder", order);
  });
});

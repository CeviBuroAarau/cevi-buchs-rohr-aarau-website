import { PayloadUtil } from "@/utils";

describe("PayloadUtil", () => {
  test("listParams", () => {
    expect(PayloadUtil.listParams({ sort: "-date" })).toEqual({
      pagination: false,
      depth: 1,
      sort: "-date",
    });
  });

  test("startOfDay", () => {
    expect(PayloadUtil.startOfDay(new Date(2026, 8, 26, 18, 30))).toBe(
      new Date(2026, 8, 26).toISOString(),
    );
  });

  test("thumbnailUrl with thumbnail", () => {
    expect(
      PayloadUtil.thumbnailUrl({
        url: "big.jpg",
        sizes: { thumbnail: { url: "small.webp" } },
      }),
    ).toBe("small.webp");
  });

  test("thumbnailUrl falls back to the original", () => {
    expect(
      PayloadUtil.thumbnailUrl({
        url: "small.jpg",
        sizes: { thumbnail: { url: null } },
      }),
    ).toBe("small.jpg");
    expect(PayloadUtil.thumbnailUrl({ url: "file.pdf" })).toBe("file.pdf");
  });
});

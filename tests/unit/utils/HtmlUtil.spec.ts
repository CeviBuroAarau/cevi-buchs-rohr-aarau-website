import { HtmlUtil } from "@/utils";

describe("HtmlUtil", () => {
  test("decodeHtmlEntites without entities", () => {
    expect(HtmlUtil.decodeHTMLEntities("<p>Test</p>")).toBe("<p>Test</p>");
  });
  test("decodeHtmlEntites without entities", () => {
    expect(HtmlUtil.decodeHTMLEntities("<p>&auml</p>")).toBe("<p>ä</p>");
  });
});

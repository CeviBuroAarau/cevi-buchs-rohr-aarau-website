import { formatDate } from "@/filters";

describe("DateFilter", () => {
  test("format a date", () => {
    expect(formatDate(new Date(2021, 0, 1))).toBe("01.01.2021");
  });
  test("format null gives empty string", () => {
    expect(formatDate(null as unknown as Date)).toBe("");
  });
});

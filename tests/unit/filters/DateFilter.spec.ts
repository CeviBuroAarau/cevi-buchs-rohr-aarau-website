import DateFilter from "@/filters/DateFilter";

describe("DateFilter", () => {
  test("format a date", () => {
    expect(DateFilter(new Date(2021, 0, 1))).toBe("01.01.2021");
  });
  test("format null gives empty string", () => {
    expect(DateFilter(null)).toBe("");
  });
});

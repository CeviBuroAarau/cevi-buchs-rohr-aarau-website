import { DateUtil } from "@/utils";

describe("DateUtil", () => {
  test("isSameDay with same object", () => {
    const d: Date = new Date(2021, 0, 1);
    expect(DateUtil.isSameDay(d, d)).toBe(true);
  });
  test("isSameDay with same day", () => {
    const d: Date = new Date(2021, 0, 1);
    const d2: Date = new Date(2021, 0, 1);
    expect(DateUtil.isSameDay(d, d2)).toBe(true);
  });
  test("isSameDay with same day and different hours", () => {
    const d: Date = new Date(2021, 0, 1, 1, 0, 0);
    const d2: Date = new Date(2021, 0, 1, 2, 0, 0);
    expect(DateUtil.isSameDay(d, d2)).toBe(true);
  });
  test("isSameDay with different days", () => {
    const d: Date = new Date(2021, 0, 2, 1, 0, 0);
    const d2: Date = new Date(2021, 0, 1, 2, 0, 0);
    expect(DateUtil.isSameDay(d, d2)).toBe(false);
  });
  test("isSameDay with different days one week apart", () => {
    const d: Date = new Date(2021, 0, 2, 1, 0, 0);
    const d2: Date = new Date(2021, 0, 9, 1, 0, 0);
    expect(DateUtil.isSameDay(d, d2)).toBe(false);
  });
  test("parseDateWithoutTime iso", () => {
    expect(DateUtil.parseDateWithoutTime("2020-06-01").toISOString()).toBe(
      "2020-06-01T00:00:00.000Z"
    );
  });
  test("parseDateWithoutTime ch", () => {
    expect(DateUtil.parseDateWithoutTime("01.06.2020").toISOString()).toBe(
      "2020-06-01T00:00:00.000Z"
    );
  });
  test("parseDateWithoutTime invalid dates", () => {
    expect(() => DateUtil.parseDateWithoutTime("abc")).toThrow(RangeError);
  });
});

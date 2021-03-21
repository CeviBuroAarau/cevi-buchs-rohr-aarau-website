import { SortingUtil } from "@/utils";

describe("SortingUtil", () => {
  test("sortAscending with same object", () => {
    const d: Date = new Date(2021, 0, 1);
    expect(SortingUtil.sortAscending(d, d)).toBe(0);
  });
  test("sortDescending with same object", () => {
    const d: Date = new Date(2021, 0, 1);
    expect(SortingUtil.sortDescending(d, d)).toBe(0);
  });
  test("sortAscending first is older", () => {
    const d: Date = new Date(2021, 0, 1);
    const d2: Date = new Date(2021, 0, 2);
    expect(SortingUtil.sortAscending(d, d2)).toBe(-1);
  });
  test("sortDescending first is older", () => {
    const d: Date = new Date(2021, 0, 1);
    const d2: Date = new Date(2021, 0, 2);
    expect(SortingUtil.sortDescending(d, d2)).toBe(1);
  });
  test("sortAscending second is older", () => {
    const d: Date = new Date(2021, 0, 1);
    const d2: Date = new Date(2020, 0, 2);
    expect(SortingUtil.sortAscending(d, d2)).toBe(1);
  });
  test("sortDescending second is older", () => {
    const d: Date = new Date(2021, 0, 1);
    const d2: Date = new Date(2020, 0, 2);
    expect(SortingUtil.sortDescending(d, d2)).toBe(-1);
  });
});

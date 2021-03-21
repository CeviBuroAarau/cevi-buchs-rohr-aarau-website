export class SortingUtil {
  static sortDescending(a: Date, b: Date): number {
    if (a > b) {
      return -1;
    } else if (a === b) {
      return 0;
    } else {
      return 1;
    }
  }

  static sortAscending(a: Date, b: Date): number {
    const res = -1 * this.sortDescending(a, b);
    return Object.is(res, -0) ? 0 : res;
  }
}

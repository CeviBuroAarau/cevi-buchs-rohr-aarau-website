export class SortingUtil {
  static sortDescending(a: Date, b: Date) {
    if (a > b) {
      return -1;
    } else if (a === b) {
      return 0;
    } else {
      return 1;
    }
  }

  static sortAscending(a: Date, b: Date) {
    return -1 * this.sortDescending(a, b);
  }
}

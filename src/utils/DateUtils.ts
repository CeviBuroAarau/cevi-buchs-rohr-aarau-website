export class DateUtils {
  static isSameDay(a: Date, b: Date) {
    if (a == null || b == null) {
      return a == null && b == null;
    }

    return (
      a.getUTCFullYear() == b.getUTCFullYear() &&
      a.getUTCMonth() == b.getUTCMonth() &&
      a.getUTCDay() == b.getUTCDay()
    );
  }
}

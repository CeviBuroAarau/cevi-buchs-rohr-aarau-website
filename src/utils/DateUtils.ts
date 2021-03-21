export class DateUtils {
  static isSameDay(a: Date, b: Date) {
    return (
      a.getUTCFullYear() == b.getUTCFullYear() &&
      a.getUTCMonth() == b.getUTCMonth() &&
      a.getUTCDay() == b.getUTCDay()
    );
  }
}

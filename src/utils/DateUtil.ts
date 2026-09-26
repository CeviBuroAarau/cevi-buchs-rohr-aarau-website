export class DateUtil {
  static isSameDay(a: Date, b: Date): boolean {
    return (
      a.getUTCFullYear() == b.getUTCFullYear() &&
      a.getUTCMonth() == b.getUTCMonth() &&
      a.getUTCDate() == b.getUTCDate()
    );
  }
}

export class DateUtil {
  static isSameDay(a: Date, b: Date) {
    return (
      a.getUTCFullYear() == b.getUTCFullYear() &&
      a.getUTCMonth() == b.getUTCMonth() &&
      a.getUTCDate() == b.getUTCDate()
    );
  }

  static parseDateWithoutTime(str: string): Date {
    const isoFormat = /(\d{2,4})-(\d{1,2})-(\d{1,2})$/;
    const chFormat = /^(\d{1,2}).(\d{1,2}).(\d{2,4})$/;

    if (isoFormat.test(str)) {
      const match = str.match(isoFormat);
      if (match != null && match.length == 4) {
        return new Date(
          Date.UTC(+match[1], +match[2] - 1, +match[3], 0, 0, 0, 0)
        );
      }
    }

    if (chFormat.test(str)) {
      const match = str.match(chFormat);
      if (match != null && match.length == 4) {
        return new Date(
          Date.UTC(+match[3], +match[2] - 1, +match[1], 0, 0, 0, 0)
        );
      }
    }

    throw new RangeError(
      str + " is neither an ISO nor a CH dateformat (without time)"
    );
  }
}

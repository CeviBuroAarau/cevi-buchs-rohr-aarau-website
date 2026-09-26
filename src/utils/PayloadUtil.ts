import { PayloadUpload } from "@/types";

export class PayloadUtil {
  // Query parameters to fetch a whole collection with uploads and relations
  // resolved to objects. Filters and sort orders are passed in `extra`.
  static listParams(
    extra: Record<string, unknown> = {},
  ): Record<string, unknown> {
    return { pagination: false, depth: 1, ...extra };
  }

  // Start of the given day in local time, as ISO string for date filters.
  static startOfDay(date: Date): string {
    const day = new Date(date);
    day.setHours(0, 0, 0, 0);
    return day.toISOString();
  }

  // The backend only creates a thumbnail for images wider than 400 px.
  static thumbnailUrl(upload: PayloadUpload): string {
    return upload.sizes?.thumbnail?.url ?? upload.url;
  }
}

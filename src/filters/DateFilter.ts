export function formatDate(date: Date): string {
  if (date === null) {
    return "";
  }

  return date.toLocaleDateString("de-CH", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

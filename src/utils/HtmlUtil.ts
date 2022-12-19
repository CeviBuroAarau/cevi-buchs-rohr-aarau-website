export class HtmlUtil {
  static decodeHTMLEntities(html: string): string {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }
}

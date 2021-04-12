import { JsPdfUtil } from "@/utils";
import jsPDF from "jspdf";
import "jspdf-autotable";

export class AgendaPDFCreator {
  static readonly PAGE_HEIGHT = 295;
  static readonly PAGE_WIDTH = 210;
  static readonly PAGE_TOP_MARGIN = 15;
  static readonly PAGE_LEFT_MARGIN = 20;
  static readonly PAGE_RIGHT_MARGIN = 20;
  static readonly PAGE_AVAILABLE_WIDTH =
    AgendaPDFCreator.PAGE_WIDTH -
    AgendaPDFCreator.PAGE_LEFT_MARGIN -
    AgendaPDFCreator.PAGE_RIGHT_MARGIN;
  static readonly LINE_HEIGHT_MM = 5;
  static readonly LINE_HEIGHT_FACTOR = 1.3;
  static readonly FONT_NAME = "Helvetica";
  static readonly COLOR_CEVI_BLUE = [50, 51, 148];
  currentY = 0;
  doc: jsPDF = this.initDoc();
  currentDate: Date = new Date(Date.now());

  async generatePDF(
    headingText: string,
    introductionText: string,
    unregistrationTitle: string,
    unregistrationText: string,
    eventTableHeader: Array<string[]>,
    eventTableData: Array<string[]>,
    contactHeader: Array<string[]>,
    contactData: Array<string[]>,
    schnuppernTitle: string,
    schnuppernText: string,
    anschlagTitle: string,
    anschlagText: string
  ) {
    await this.addLogo();
    this.addEmptyLine();
    this.addHeading(headingText);
    this.addEmptyLine();
    this.addRegularText(introductionText);
    this.addTable(eventTableHeader, eventTableData);
    this.addEmptyLine();
    this.addEmptyLine();
    this.addBlock(unregistrationTitle, unregistrationText);
    this.addTable(contactHeader, contactData, true);
    this.addEmptyLine();
    this.addEmptyLine();
    this.addBlock(schnuppernTitle, schnuppernText);
    this.addBlock(anschlagTitle, anschlagText);
    this.addLink(
      "https://cevi-buro-aarau.ch/cevianer/agenda",
      "https://cevi-buro-aarau.ch/cevianer/agenda"
    );
    this.addEmptyLine();
    this.addRegularText(this.getCreatedText());
    this.save();
  }

  getCreatedText() {
    return (
      "Generiert am: " +
      this.currentDate.toLocaleDateString("de-CH", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }) +
      " um " +
      this.currentDate.toLocaleTimeString("de-CH", {
        hour: "2-digit",
        minute: "2-digit",
      }) +
      " Uhr"
    );
  }

  save() {
    this.doc.save(this.getFilename());
  }

  getFilename() {
    return (
      this.currentDate.getFullYear() +
      "-" +
      String(this.currentDate.getMonth() + 1).padStart(2, "0") +
      "-" +
      String(this.currentDate.getDate()).padStart(2, "0") +
      "_Cevi_Buchs-Rohr_Aarau_Jungschidaten.pdf"
    );
  }

  initDoc(): jsPDF {
    return new jsPDF("portrait", "mm", "a4");
  }

  async addLogo() {
    const logo = await JsPdfUtil.getPngImageData("logo.png");
    const logoHeight = 35;
    this.doc.addImage(
      logo,
      "PNG",
      AgendaPDFCreator.PAGE_LEFT_MARGIN,
      AgendaPDFCreator.PAGE_TOP_MARGIN,
      170,
      logoHeight,
      undefined,
      "MEDIUM"
    );
    this.currentY = AgendaPDFCreator.PAGE_TOP_MARGIN + logoHeight;
  }

  addHeading(heading: string) {
    this.applyHeadingStyle();
    this.addText(heading);
  }

  addRegularText(text: string) {
    this.applyRegularStyle();
    this.addText(text);
  }

  addLink(text: string, url: string) {
    this.applyLinkStyle();
    this.doc.textWithLink(
      text,
      AgendaPDFCreator.PAGE_LEFT_MARGIN,
      this.currentY,
      {
        url: url,
      }
    );
    this.currentY = this.currentY + AgendaPDFCreator.LINE_HEIGHT_MM;
  }

  addBlock(heading: string, text: string) {
    this.applyBoldStyle();
    this.addText(heading);
    this.applyRegularStyle();
    this.addText(text);
  }

  addTable(
    header: Array<string[]>,
    data: Array<string[]>,
    isDoubleMargin = false
  ) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (this.doc as any).autoTable({
      headStyles: {
        fillColor: AgendaPDFCreator.COLOR_CEVI_BLUE,
      },
      head: header,
      body: data,
      theme: "grid",
      startY: this.currentY,
      margin: {
        left: isDoubleMargin
          ? AgendaPDFCreator.PAGE_LEFT_MARGIN * 2
          : AgendaPDFCreator.PAGE_LEFT_MARGIN,
        right: isDoubleMargin
          ? AgendaPDFCreator.PAGE_RIGHT_MARGIN
          : AgendaPDFCreator.PAGE_RIGHT_MARGIN,
      },
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.currentY = (this.doc as any).previousAutoTable.finalY;
  }

  addEmptyLine() {
    this.currentY = this.currentY + AgendaPDFCreator.LINE_HEIGHT_MM;
  }

  addText(text: string) {
    const lines: string[] = this.doc.splitTextToSize(
      text,
      AgendaPDFCreator.PAGE_AVAILABLE_WIDTH
    );
    this.insertPageBreakIfNeeded(this.doc, lines.length);
    this.doc.text(lines, AgendaPDFCreator.PAGE_LEFT_MARGIN, this.currentY, {
      lineHeightFactor: AgendaPDFCreator.LINE_HEIGHT_FACTOR,
    });
    this.currentY =
      this.currentY + lines.length * AgendaPDFCreator.LINE_HEIGHT_MM;
  }

  insertPageBreakIfNeeded(doc: jsPDF, lineCount: number) {
    if (
      this.currentY +
        lineCount * AgendaPDFCreator.LINE_HEIGHT_MM +
        AgendaPDFCreator.LINE_HEIGHT_MM >
      AgendaPDFCreator.PAGE_HEIGHT
    ) {
      doc.addPage();
      this.currentY = AgendaPDFCreator.PAGE_TOP_MARGIN;
    }
  }

  applyHeadingStyle() {
    this.doc.setFontSize(12);
    this.applyBoldFont();
    this.doc.setTextColor(0, 0, 0);
  }

  applyRegularStyle() {
    this.doc.setFontSize(10);
    this.applyNormalFont();
    this.doc.setTextColor(0, 0, 0);
  }

  applyLinkStyle() {
    this.doc.setFontSize(10);
    this.applyNormalFont();
    this.doc.setTextColor(0, 0, 255);
  }

  applyBoldStyle() {
    this.doc.setFontSize(10);
    this.applyBoldFont();
    this.doc.setTextColor(0, 0, 0);
  }

  applyNormalFont() {
    this.doc.setFont(AgendaPDFCreator.FONT_NAME, "");
  }

  applyBoldFont() {
    this.doc.setFont(AgendaPDFCreator.FONT_NAME, "Bold");
  }
}

import { AgendaPDFCreator } from "@/services/AgendaPDFCreator";

describe("AgendaPDFCreator", () => {
  test("addTable calls doc.autoTable and reads lastAutoTable.finalY without throwing", () => {
    const creator = new AgendaPDFCreator();
    creator.currentY = 50;

    expect(() => {
      creator.addTable([["Datum", "Beschreibung"]], [["15.08.2020", "Test"]]);
    }).not.toThrow();

    expect(creator.currentY).toBeGreaterThan(0);
  });

  test("addTable with double margin does not throw", () => {
    const creator = new AgendaPDFCreator();
    creator.currentY = 50;

    expect(() => {
      creator.addTable([["Name"]], [["Max Muster"]], true);
    }).not.toThrow();
  });

  test("getFilename returns correctly formatted filename", () => {
    const creator = new AgendaPDFCreator();
    creator.currentDate = new Date(2024, 2, 5); // 5 March 2024
    expect(creator.getFilename()).toBe(
      "2024-03-05_Cevi_Buchs-Rohr_Aarau_Jungschidaten.pdf",
    );
  });

  test("addEmptyLine increments currentY by LINE_HEIGHT_MM", () => {
    const creator = new AgendaPDFCreator();
    creator.currentY = 50;
    creator.addEmptyLine();
    expect(creator.currentY).toBe(50 + AgendaPDFCreator.LINE_HEIGHT_MM);
  });

  test("insertPageBreakIfNeeded adds page and resets Y when near bottom", () => {
    const creator = new AgendaPDFCreator();
    creator.currentY = 290;
    const addPageSpy = vi.spyOn(creator.doc, "addPage");

    creator.insertPageBreakIfNeeded(creator.doc, 1);

    expect(addPageSpy).toHaveBeenCalled();
    expect(creator.currentY).toBe(AgendaPDFCreator.PAGE_TOP_MARGIN);
  });

  test("insertPageBreakIfNeeded does not add page when space is available", () => {
    const creator = new AgendaPDFCreator();
    creator.currentY = 50;
    const addPageSpy = vi.spyOn(creator.doc, "addPage");

    creator.insertPageBreakIfNeeded(creator.doc, 1);

    expect(addPageSpy).not.toHaveBeenCalled();
    expect(creator.currentY).toBe(50);
  });
});

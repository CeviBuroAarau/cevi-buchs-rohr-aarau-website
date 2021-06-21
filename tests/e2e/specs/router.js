/* eslint-disable no-undef */
describe("Router", function () {
  test("visit homepage", (browser) => {
    browser
      .init("http://localhost:8080/")
      .waitForElementVisible("#app")
      .waitForElementPresent(".claim")
      .saveScreenshot("tests/e2e/reports/home.png")
      .end();
  });

  test("visit interessierte", (browser) => {
    browser
      .init("http://localhost:8080/interessierte")
      .waitForElementVisible("#app")
      .assert.containsText("h1", "Möchten Sie uns kennenlernen?")
      .saveScreenshot("tests/e2e/reports/interessierte.png")
      .end();
  });

  test("visit schnuppern", (browser) => {
    browser
      .init("http://localhost:8080/interessierte/schnuppern")
      .waitForElementVisible("#app")
      .assert.containsText("h1", "Schnuppern")
      .saveScreenshot("tests/e2e/reports/schnuppern.png")
      .end();
  });

  test("visit aktivitaeten", (browser) => {
    browser
      .init("http://localhost:8080/interessierte/aktivitaeten")
      .waitForElementVisible("#app")
      .assert.containsText("h1", "Aktivitäten")
      .saveScreenshot("tests/e2e/reports/aktivitaeten.png")
      .end();
  });

  test("visit cevi schweiz", (browser) => {
    browser
      .init("http://localhost:8080/interessierte/cevi_schweiz")
      .waitForElementVisible("#app")
      .assert.containsText("h1", "Cevi Schweiz")
      .saveScreenshot("tests/e2e/reports/cevi_schweiz.png")
      .end();
  });

  test("visit standort", (browser) => {
    browser
      .init("http://localhost:8080/interessierte/standort")
      .waitForElementVisible("#app")
      .assert.containsText("h1", "Standort")
      .saveScreenshot("tests/e2e/reports/standort.png")
      .end();
  });

  test("visit medien", (browser) => {
    browser
      .init("http://localhost:8080/interessierte/medien")
      .waitForElementVisible("#app")
      .assert.containsText("h1", "Medien")
      .saveScreenshot("tests/e2e/reports/medien.png")
      .end();
  });

  test("visit spenden", (browser) => {
    browser
      .init("http://localhost:8080/interessierte/spenden")
      .waitForElementVisible("#app")
      .assert.containsText("h1", "Spenden")
      .saveScreenshot("tests/e2e/reports/spenden.png")
      .end();
  });

  test("visit cevianer", (browser) => {
    browser
      .init("http://localhost:8080/cevianer")
      .waitForElementVisible("#app")
      .assert.containsText("h1", "Cevianer/in")
      .saveScreenshot("tests/e2e/reports/cevianer.png")
      .end();
  });

  test("visit agenda", (browser) => {
    browser
      .init("http://localhost:8080/cevianer/agenda")
      .waitForElementVisible("#app")
      .assert.containsText("h1", "Agenda")
      .saveScreenshot("tests/e2e/reports/agenda.png")
      .end();
  });

  test("visit album", (browser) => {
    browser
      .init("http://localhost:8080/cevianer/album")
      .waitForElementVisible("#app")
      .assert.containsText("h1", "Album")
      .saveScreenshot("tests/e2e/reports/album.png")
      .end();
  });

  test("visit laedeli", (browser) => {
    browser
      .init("http://localhost:8080/cevianer/laedeli")
      .waitForElementVisible("#app")
      .assert.containsText("h1", "Lädeli")
      .saveScreenshot("tests/e2e/reports/laedeli.png")
      .end();
  });

  test("visit ausbildung", (browser) => {
    browser
      .init("http://localhost:8080/cevianer/ausbildung")
      .waitForElementVisible("#app")
      .assert.containsText("h1", "Ausbildung")
      .saveScreenshot("tests/e2e/reports/ausbildung.png")
      .end();
  });

  test("visit leiterteam", (browser) => {
    browser
      .init("http://localhost:8080/cevianer/leiterteam")
      .waitForElementVisible("#app")
      .assert.containsText("h1", "Leiterteam")
      .saveScreenshot("tests/e2e/reports/leiterteam.png")
      .end();
  });

  test("visit laedeli", (browser) => {
    browser
      .init("http://localhost:8080/kontakt")
      .waitForElementVisible("#app")
      .assert.containsText("h1", "Kontakt")
      .saveScreenshot("tests/e2e/reports/kontakt.png")
      .end();
  });

  test("visit a non existing page", (browser) => {
    browser
      .init("http://localhost:8080/non_existing")
      .waitForElementVisible("#app")
      .assert.containsText("h1", "Ups, da ist was schief gegangen")
      .saveScreenshot("tests/e2e/reports/not_found.png")
      .end();
  });
});

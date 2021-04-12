<script lang="ts">
import { ErrorReportingService, AgendaService } from "@/services";
import { Component, Vue } from "vue-property-decorator";
import { AxiosUtil } from "@/utils";
import { Agenda } from "@/types";
import EventList from "@/components/event-list.vue";
import jsPDF from "jspdf";
import "jspdf-autotable";
import axios from "axios";

@Component({
  components: {
    EventList,
  },
})
export default class AgendaView extends Vue {
  private loading = true;
  private error = false;
  private isFull = false;
  private events: Agenda[] = [];
  agendaService: AgendaService = new AgendaService(
    AxiosUtil.getCockpitInstance()
  );
  errorService: ErrorReportingService = new ErrorReportingService();

  async mounted() {
    await this.loadAgenda();
  }

  async loadAgenda() {
    try {
      this.events = await this.agendaService.getEventsAfterDate(
        new Date(Date.now())
      );
      this.error = false;
      this.loading = false;
    } catch (err) {
      this.error = true;
      this.loading = false;
      this.errorService.report(err);
    }
  }

  getEventsForDisplay() {
    if (this.isFull) {
      return this.events;
    } else {
      return this.events.slice(0, 3);
    }
  }

  decodeHTML(html: string) {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }

  async generatePDF() {
    const doc = new jsPDF("portrait", "mm", "a4");
    const pageHeight = 295;

    const logoResp = await axios.get("http://localhost:8080/logo.png", {
      responseType: "arraybuffer",
    });
    const logo =
      "data:image/png;base64," +
      btoa(
        new Uint8Array(logoResp.data).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          ""
        )
      );

    doc.addImage(logo, "PNG", 20, 15, 170, 170 / 5, undefined, "MEDIUM");

    doc.setFontSize(12);
    doc.setFont("Helvetica", "Bold");
    doc.text("Liebe Eltern, liebe Jungschärlerinnen und Jungschärler", 20, 55);

    doc.setFontSize(10);
    doc.setFont("Helvetica", "");
    const introduction = doc.splitTextToSize(
      "Das sind die geplanten Jungschardaten. Wir versuchen, diese Daten einzuhalten, sollte uns dies nicht möglich sein, werden wir Euch rechtzeitig informieren.",
      170
    );
    doc.text(introduction, 20, 65, { lineHeightFactor: 1.3 });

    const header = [["Datum", "Anlass"]];

    const tableData: Array<string[]> = [];
    this.events.forEach((event) => {
      tableData.push([
        event.title,
        this.decodeHTML(event.text.replace(/<\/?[^>]+>/gi, "")),
      ]);
    });

    doc.setFontSize(12);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (doc as any).autoTable({
      headStyles: {
        fillColor: [50, 51, 148],
      },
      head: header,
      body: tableData,
      theme: "grid",
      startY: 75,
      margin: { left: 20, right: 20 },
    });

    doc.setFontSize(10);
    let finalY = (doc as any).previousAutoTable.finalY + 8; // eslint-disable-line @typescript-eslint/no-explicit-any

    if (finalY + 20 > pageHeight) {
      doc.addPage();
      finalY = 20;
    }

    doc.setFont("Helvetica", "Bold");
    doc.text("Abmeldungen:", 20, finalY);
    doc.setFont("Helvetica", "");
    const afterTableText = doc.splitTextToSize(
      "Damit die Gruppenleiter ihr Programm wie geplant durchführen können, bitten wir euch, eure Kinder bei Verhinderungen frühzeitig bei den GruppenleiterInnen abzumelden.\r\nIdealerweise eine Woche vor dem Nachmittag. Danke!",
      170
    );
    doc.text(afterTableText, 20, finalY + 5, { lineHeightFactor: 1.3 });

    const kontaktHeader = [["Funktion", "Kontaktdaten"]];

    const kontaktData: Array<string[]> = [
      ["Gruppenleiter Schleckmäuler", "Seraina Frei v/o Floh, 079 952 70 84"],
      [
        "Gruppenleiter Spartacus",
        "Yannis Bontempi v/o Ayal, 079 932 44 85\r\nSira Hächler v/o Zippora, 075 424 67 11",
      ],
      [
        "Abteilungsleitung",
        "Leah Dellenbach v/o Luna, 076 405 81 18\r\nPatrick Uhlmann v/o Luchs, 078 662 62 72\r\nMichael Frei v/o Jarne, 078 946 84 54",
      ],
    ];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (doc as any).autoTable({
      headStyles: {
        fillColor: [50, 51, 148],
      },
      head: kontaktHeader,
      body: kontaktData,
      theme: "grid",
      startY: finalY + 18,
      margin: { left: 40, right: 40 },
    });

    finalY = (doc as any).previousAutoTable.finalY + 8; // eslint-disable-line @typescript-eslint/no-explicit-any

    if (finalY + 20 > pageHeight) {
      doc.addPage();
      finalY = 20;
    }

    doc.setFont("Helvetica", "Bold");
    doc.text(
      "Wollt ihr mal einem Gschpändli die Jungschi zeigen?:",
      20,
      finalY
    );
    doc.setFont("Helvetica", "");
    const schnuppernText = doc.splitTextToSize(
      "Kein Problem! Gebt uns doch kurz Bescheid, damit wir planen können. Wir freuen uns über jeden neuen Cevianer!",
      170
    );
    doc.text(schnuppernText, 20, finalY + 5, { lineHeightFactor: 1.3 });

    if (finalY + 20 + 30 > pageHeight) {
      doc.addPage();
      finalY = 0;
    }

    doc.setFont("Helvetica", "Bold");
    doc.text("Anschlag:", 20, finalY + 20);
    doc.setFont("Helvetica", "");
    const anschlagText = doc.splitTextToSize(
      "Jeweils ungefähr eine Woche vor den Jungschinachmittagen veröffentlichen wir einen Anschlag mit detaillierten Informationen (z. B. ob die Kinder Z'vieri mitnehmen müssen). Bei speziellen Anlässen erfolgt die Information in der Regel mehrere Wochen vorher.",
      170
    );
    doc.text(anschlagText, 20, finalY + 25, { lineHeightFactor: 1.3 });

    doc.setTextColor(0, 0, 255);
    doc.textWithLink(
      "https://cevi-buro-aarau.ch/cevianer/agenda",
      20,
      finalY + 40,
      {
        url: "https://cevi-buro-aarau.ch/cevianer/agenda",
      }
    );

    if (finalY + 55 > pageHeight) {
      doc.addPage();
      finalY = 20;
    }

    const currentDate = new Date();

    doc.setTextColor(0, 0, 0);
    doc.text(
      "Generiert am: " +
        currentDate.toLocaleDateString("de-CH", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        }) +
        " um " +
        currentDate.toLocaleTimeString("de-CH", {
          hour: "2-digit",
          minute: "2-digit",
        }) +
        " Uhr",
      20,
      finalY + 50
    );

    doc.save(
      currentDate.getFullYear() +
        "-" +
        String(currentDate.getMonth()).padStart(2, "0") +
        "-" +
        String(currentDate.getDate()).padStart(2, "0") +
        "_Cevi_Buchs-Rohr_Aarau_Jungschidaten.pdf"
    );
  }
}
</script>
<template>
  <section class="section">
    <div class="container">
      <h1 class="title is-1">Agenda</h1>

      <div v-if="loading">
        <p>Daten werden geladen.</p>
        <progress class="progress is-small is-primary" max="100">15%</progress>
      </div>

      <div v-else-if="error">
        <div class="notification is-danger">
          Die Agendadaten können monentan nicht abgerufen werden. Bitte
          versuchen Sie es später noch einmal.
        </div>
      </div>

      <div v-else>
        <p class="content">
          Untenstehend sind die nächsten
          {{ this.getEventsForDisplay().length }} Anlässe mit detaillierten
          Informationen aufgeführt.<br />
          <a @click="generatePDF()"
            >Alle geplante Anlässe als PDF herunterladen</a
          >
        </p>
        <event-list
          id="eventlist"
          :events="this.getEventsForDisplay()"
        ></event-list>
        <p v-if="!isFull">
          <a @click="isFull = true">Mehr Anlässe anzeigen</a>
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>

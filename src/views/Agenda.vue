<script>
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";

export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin, listPlugin],
        initialView: "dayGridMonth",
        headerToolbar: {
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,listMonth"
        },
        //eventMouseEnter: this.handleEventMouseEnter,
        events: [
          { title: "Sommerferien", start: "2020-07-04", end: "2020-08-09" },
          { title: "Jungschinachmittag", start: "2020-08-15" },
          { title: "Jungschinachmittag", start: "2020-08-29" },
          { title: "Cevitag", start: "2020-09-12" },
          {
            title: "Pfila Ersatzlager",
            start: "2020-09-19",
            end: "2020-09-20"
          },
          { title: "Herbstferien", start: "2020-09-26", end: "2020-10-11" },
          { title: "Jungschinachmittag", start: "2020-10-17" },
          { title: "Jungschinachmittag", start: "2020-10-24" },
          { title: "Jungschinachmittag", start: "2020-11-14" },
          { title: "Adventswerkstatt", start: "2020-12-05" },
          { title: "Waldweihnacht", start: "2020-12-12" },
          { title: "Winterferien", start: "2020-12-19" }
        ]
      },
      publicPath: process.env.BASE_URL
    };
  },
  methods: {
    //handleEventMouseEnter: function(mouseEnterInfo) {
    //  alert('event mouse enter! ' + mouseEnterInfo.event.title)
    //}
  }
};
</script>
<template>
  <section class="section">
    <div class="container">
      <h1 class="title is-1">Agenda</h1>
      <p class="content">
        Die Anlässe werden jeweils Semesterweise publiziert. Im ersten Semester
        2020 erwarten uns die untenstehenden Aktivitäten. Wenn Sie mit der Maus
        darüberfahren Sehen Sie detaillierte Informationen. Sie können die
        Anlässe auch als
        <a :href="`${publicPath}files/jungschidaten/2020-2Jungschardaten.pdf`"
          >PDF-Datei herunterladen</a
        >.
      </p>
      <FullCalendar :options="calendarOptions" />
    </div>
  </section>
</template>

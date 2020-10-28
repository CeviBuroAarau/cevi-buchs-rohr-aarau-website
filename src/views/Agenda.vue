<script>
export default {
  components: {},
  data() {
    return {
      publicPath: process.env.BASE_URL,
      events: [
        {
          title: "04. Juli 2020 - 09. August 2020",
          text: "Sommerferien",
          date: new Date("2020-07-04"),
        },
        {
          title: "15. August 2020 14:00 - 17:00",
          text: "Regulärer Jungschinachmittag. Weitere Informationen folgen",
          date: new Date("2020-08-15"),
        },
        {
          title: "29. August 2020 14:00 - 17:00",
          text: "Regulärer Jungschinachmittag. Weitere Informationen folgen",
          date: new Date("2020-08-29"),
        },
        {
          title: "12. September 2020 14:00 - 17:00",
          text: "Cevitag. Weitere Informationen folgen",
          date: new Date("2020-09-12"),
        },
        {
          title: "19. September 2020 - 20. September 2020",
          text: "Pfila Ersatzlager",
          date: new Date("2020-09-19"),
        },
        {
          title: "26. September 2020 - 11. Oktober 2020",
          text: "Herbstferien",
          date: new Date("2020-09-26"),
        },
        {
          title: "17. Oktober 2020 14:00 - 17:00",
          text: "Regulärer Jungschinachmittag. Weitere Informationen folgen",
          date: new Date("2020-10-17"),
        },
        {
          title: "24. Oktober 2020 14:00 - 17:00",
          text: "Regulärer Jungschinachmittag. Weitere Informationen folgen",
          date: new Date("2020-10-24"),
        },
        {
          title: "14. November 2020 14:00 - 17:00",
          text: "Adventswerkstatt. Weitere Informationen folgen",
          date: new Date("2020-11-14"),
        },
        {
          title: "05. Dezember 2020 14:00 - 17:00",
          text: "Regulärer Jungschinachmittag. Weitere Informationen folgen",
          date: new Date("2020-12-05"),
        },
        {
          title: "12. Dezember 2020 14:00 - 17:00",
          text: "Waldweihnacht. Weitere Informationen folgen",
          date: new Date("2020-12-12"),
        },
        {
          title: "19. Dezember 2020 14:00 - 17:00",
          text: "Winterferien. Weitere Informationen folgen",
          date: new Date("2020-12-19"),
        },
      ],
    };
  },
  methods: {
    isUpcoming(element) {
      return element.date >= new Date();
    },
  },
};
</script>
<template>
  <section class="section">
    <div class="container">
      <h1 class="title is-1">Agenda</h1>
      <p class="content">Untenstehend sind die nächsten Anlässe aufgeführt.</p>
      <p>
        <a :href="`${publicPath}files/jungschidaten/2020-2Jungschardaten.pdf`"
          >Semesterplan als PDF-Datei öffnen</a
        >.
      </p>

      <div
        class="card agenda-item"
        v-for="(items, itemIndex) in events.filter(isUpcoming)"
        :key="itemIndex"
      >
        <header class="card-header">
          <p class="card-header-title">
            {{ items.title }}
          </p>
        </header>
        <div class="card-content">
          <div class="content">
            {{ items.text }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.agenda-item {
  margin: 0 0 1em 0;
}
</style>

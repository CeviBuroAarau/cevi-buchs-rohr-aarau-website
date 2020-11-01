<template>
  <section class="section">
    <div class="container">
      <h1 class="title is-1">Leiterteam</h1>
      <p class="content">
        Klicke auf das Bild eines Leiters um einen kurzen Steckbrief anzuzeigen.
      </p>

      <div
        class="modal"
        :class="{
          'is-active': showModal,
        }"
      >
        <div class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">{{ activeLeiter.name }}</p>
            <button
              class="delete"
              aria-label="close"
              v-on:click="showModal = false"
            ></button>
          </header>
          <section class="modal-card-body">
            <img
              :src="externalAssetsUri + activeLeiter.file"
              :alt="activeLeiter.alt"
            />
            <table
              class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth"
            >
              <tr>
                <td>Funktion</td>
                <td>{{ activeLeiter.function }}</td>
              </tr>
              <tr>
                <td>Gruppe</td>
                <td>{{ activeLeiter.group }}</td>
              </tr>
              <tr>
                <td>Jahrgang</td>
                <td>{{ activeLeiter.year }}</td>
              </tr>
              <tr>
                <td>Wohnort</td>
                <td>{{ activeLeiter.place }}</td>
              </tr>
              <tr>
                <td>Beruf/Schule</td>
                <td>{{ activeLeiter.profession }}</td>
              </tr>
              <tr>
                <td>Hobbys</td>
                <td>{{ activeLeiter.hobby }}</td>
              </tr>
              <tr>
                <td>In der Jungschi seit</td>
                <td>{{ activeLeiter.inscoutssince }}</td>
              </tr>
              <tr>
                <td>In der Jungschi weil</td>
                <td>{{ activeLeiter.inscoutsbecause }}</td>
              </tr>
              <tr>
                <td>Tollste Cevi Erlebnisse</td>
                <td>{{ activeLeiter.bestexperience }}</td>
              </tr>
            </table>
          </section>
          <footer class="modal-card-foot">
            <button class="button" v-on:click="showModal = false">
              Schliessen
            </button>
          </footer>
        </div>
      </div>

      <h2 class="title is-2">Abteilungsleitung</h2>

      <ul style="display: flex; flex-wrap: wrap">
        <li
          class="leiterlist"
          v-for="(items, itemIndex) in als"
          :key="itemIndex"
          @click="
            activeLeiter = items;
            showModal = true;
          "
        >
          <div class="card" style="width: 160px">
            <header class="card-header is-centered">
              <p class="card-header-title">
                {{ items.name }}
              </p>
            </header>
            <div class="card-image is-centered">
              <img
                width="150"
                :src="externalAssetsUri + items.file"
                :alt="items.alt"
              />
            </div>
            <div class="card-content is-centered">
              {{ items.function }}
            </div>
          </div>
        </li>
      </ul>

      <h2 class="title is-2">Spartacus</h2>

      <ul style="display: flex; flex-wrap: wrap">
        <li
          class="leiterlist"
          v-for="(items, itemIndex) in spartacus"
          :key="itemIndex"
          @click="
            activeLeiter = items;
            showModal = true;
          "
        >
          <div class="card" style="width: 160px">
            <header class="card-header is-centered">
              <p class="card-header-title">
                {{ items.name }}
              </p>
            </header>
            <div class="card-image is-centered">
              <img
                width="150"
                :src="externalAssetsUri + items.file"
                :alt="items.alt"
              />
            </div>
            <div class="card-content is-centered">
              {{ items.function }}
            </div>
          </div>
        </li>
      </ul>

      <h2 class="title is-2">Schleckmäuler</h2>

      <ul style="display: flex; flex-wrap: wrap">
        <li
          class="leiterlist"
          v-for="(items, itemIndex) in schleckmaeuler"
          :key="itemIndex"
          @click="
            activeLeiter = items;
            showModal = true;
          "
        >
          <div class="card" style="width: 160px">
            <header class="card-header is-centered">
              <p class="card-header-title">
                {{ items.name }}
              </p>
            </header>
            <div class="card-image is-centered">
              <img
                width="150"
                :src="externalAssetsUri + items.file"
                :alt="items.alt"
              />
            </div>
            <div class="card-content is-centered">
              {{ items.function }}
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      externalAssetsUri: process.env.VUE_APP_EXTERNAL_ASSETS_URI,
      activeLeiter: {
        alt: "Luna",
        file: "/leiterteam/thumb/06 2019 Zippora.jpg.webp",
        abteilungsfunktion: "al",
        gruppe: "spartacus",
        gruppenfunktion: "leiter",
        function: "Abteilungsleiterin",
        name: "Leah Dellenbach v/o Luna",
        group: "Spartacus",
        year: "1998",
        place: "Aarau",
        profession: "Neue Kantonsschule Aarau",
        hobby: "Lesen, Jungschi, mit Freunden treffen",
        inscoutssince: "ungefähr 2006",
        inscoutsbecause: "es lustig ist mit Gleichgesinnten etwas zu machen",
        bestexperience: "Pfila 2007, Leiteranlässe",
        contact: "luna@cevimail.ch",
      },
      showModal: false,
      als: [
        {
          alt: "Luna",
          file: "/leiterteam/thumb/01 2017-12 Luna.jpg.webp",
          abteilungsfunktion: "al",
          gruppe: "spartacus",
          gruppenfunktion: "leiter",
          function: "Abteilungsleiterin",
          name: "Leah Dellenbach v/o Luna",
          group: "Spartacus",
          year: "1998",
          place: "Aarau",
          profession: "Neue Kantonsschule Aarau",
          hobby: "Lesen, Jungschi, mit Freunden treffen",
          inscoutssince: "ungefähr 2006",
          inscoutsbecause: "es lustig ist mit Gleichgesinnten etwas zu machen",
          bestexperience: "Pfila 2007, Leiteranlässe",
          contact: "luna@cevimail.ch",
        },
        {
          alt: "Luchs",
          file: "/leiterteam/thumb/02 2015-06 Luchs.jpg.webp",
          abteilungsfunktion: "al",
          gruppe: "spartacus",
          gruppenfunktion: "leiter",
          function: "Abteilungsleiter, Betreuung der Homepage",
          name: "Patrick Uhlmann v/o Luchs",
          group: "Spartacus",
          year: "1987",
          place: "Aarau",
          profession: "Softwareingenieur bei ELCA",
          hobby: "Programmieren, Karate, Lesen",
          inscoutssince: "1995",
          inscoutsbecause:
            "es ein guter Ausgleich zum Alltag ist und die Arbeit mit Kindern Spass macht.",
          bestexperience: "Diverse Ausbildungskurse und Geländespiele",
          contact: "luchs@cevimail.ch",
        },
        {
          alt: "Jarne",
          file: "/leiterteam/thumb/03 2019 Jarne.jpg.webp",
          abteilungsfunktion: "al",
          gruppe: "celebrations",
          gruppenfunktion: "leiter",
          function: "Abteilungsleiter",
          name: "Michael Frei v/o Jarne",
          group: "Celebrations",
          year: "1997",
          place: "Buchs",
          profession:
            "Studium zum Bachelor in Elektro- und Informationstechnik",
          hobby: "Jungschi, Judo, Lesen",
          inscoutssince: "ungefähr 2. Klasse",
          inscoutsbecause: "Es Spass macht und geil ist.",
          bestexperience: "Hilfs- Gruppen- und Lagerleiterkurs",
          contact: "jarne@cevimail.ch",
        },
      ],
      spartacus: [
        {
          alt: "Würfel",
          file: "/leiterteam/thumb/07 2017-12 Würfel.jpg.webp",
          abteilungsfunktion: "",
          gruppe: "spartacus",
          gruppenfunktion: "gruppenleiter",
          function: "Gruppenleiter",
          name: "David Scheidegger v/o Würfel",
          group: "Spartacus",
          year: "2000",
          place: "Gipf-Oberfrick",
          profession: "Neue Kantonsschule Aarau",
          hobby: "Cevi!!!!!!",
          inscoutssince: "2008",
          inscoutsbecause: "Es Spass macht ;)",
          bestexperience: "Pfingstlager, Adventslager, Heku",
          contact: "wuerfel@cevimail.ch",
        },
        {
          alt: "Koffein",
          file: "/leiterteam/thumb/08 2017-12 Koffein.jpg.webp",
          abteilungsfunktion: "",
          gruppe: "spartacus",
          gruppenfunktion: "gruppenleiter",
          function: "Gruppenleiter",
          name: "Elias Mejica",
          group: "Spartacus",
          year: "1996",
          place: "Aarau Rohr",
          profession: "Schule",
          hobby: "Tanzen, Zeichnen, Lesen, Jungschi",
          inscoutssince: "39722",
          inscoutsbecause: "Es Fun macht.",
          bestexperience: "Pfila 2011",
          contact: "koffein@cevimail.ch",
        },
        {
          alt: "Luna",
          file: "/leiterteam/thumb/01 2017-12 Luna.jpg.webp",
          abteilungsfunktion: "al",
          gruppe: "spartacus",
          gruppenfunktion: "leiter",
          function: "Abteilungsleiterin",
          name: "Leah Dellenbach v/o Luna",
          group: "Spartacus",
          year: "1998",
          place: "Aarau",
          profession: "Neue Kantonsschule Aarau",
          hobby: "Lesen, Jungschi, mit Freunden treffen",
          inscoutssince: "ungefähr 2006",
          inscoutsbecause: "es lustig ist mit Gleichgesinnten etwas zu machen",
          bestexperience: "Pfila 2007, Leiteranlässe",
          contact: "luna@cevimail.ch",
        },
        {
          alt: "Luchs",
          file: "/leiterteam/thumb/02 2015-06 Luchs.jpg.webp",
          abteilungsfunktion: "al",
          gruppe: "spartacus",
          gruppenfunktion: "leiter",
          function: "Abteilungsleiter, Betreuung der Homepage",
          name: "Patrick Uhlmann v/o Luchs",
          group: "Spartacus",
          year: "1987",
          place: "Aarau",
          profession: "Softwareingenieur bei ELCA",
          hobby: "Programmieren, Karate, Lesen",
          inscoutssince: "1995",
          inscoutsbecause:
            "es ein guter Ausgleich zum Alltag ist und die Arbeit mit Kindern Spass macht.",
          bestexperience: "Diverse Ausbildungskurse und Geländespiele",
          contact: "luchs@cevimail.ch",
        },
        {
          alt: "Indi",
          file: "/leiterteam/thumb/09 2015-06 Indi.jpg.webp",
          abteilungsfunktion: "",
          gruppe: "spartacus",
          gruppenfunktion: "leiter",
          function: "Lagerleitung, Kontakt YMCA International",
          name: "Jonas Haller",
          group: "Spartacus",
          year: "1987",
          place: "Fribourg",
          profession:
            "Energieeffizienz-Ingenieur bei Stromversorger von Fribourg, Neuenburg",
          hobby:
            "Klimawandel/Nachhaltigkeit, Menschenrechte, Sprachen, draussen sein",
          inscoutssince: "ca. 1996",
          inscoutsbecause:
            "... es schön ist, Zeit mit Kindern zu verbringen, und dabei Wissen und Können weiterzugeben. Vor allem auch weil die Welt mehr verantwortungsbewusste junge Leute braucht.",
          bestexperience:
            "Lager, Ausbildungskurse, gute Programme mit frohen Kindern, z. B. Adventslager 2014",
          contact: "indi@cevimail.ch",
        },
        {
          alt: "Wiesel",
          file: "/leiterteam/thumb/11 2017-12 Wiesel.jpg.webp",
          abteilungsfunktion: "",
          gruppe: "spartacus",
          gruppenfunktion: "hilfsleiter",
          function: "Hilfsleiter",
          name: "Lukas Lichter v/o Wiesel",
          group: "Spartacus",
          year: "1996",
          place: "Biberstein",
          profession: "Gelernter Matros der Binnenschifffahrt",
          hobby: "Schwimmen, Unternehmungen mit Freunden und Cevi",
          inscoutssince: "2003",
          inscoutsbecause: "mich mein bester Kolleg dazu begeistert hat",
          bestexperience: "Die jährlichen Pfilas",
          contact: "wiesel@cevimail.ch",
        },
        {
          alt: "Ayal",
          file: "/leiterteam/thumb/10 2018 Ayal.jpg.webp",
          abteilungsfunktion: "material",
          gruppe: "spartacus",
          gruppenfunktion: "hilfsleiter",
          function: "Hilfsleiter",
          name: "Yannis Bontempi",
          group: "Spartacus",
          year: "2004",
          place: "Aarau-Rohr",
          profession: "Bezirksschule",
          hobby: "Jungschar, Unihockey, Gitarre spielen",
          inscoutssince: "2011",
          inscoutsbecause: "...",
          bestexperience: "Alle Lager",
          contact: "ayal@cevimail.ch",
        },
      ],
      schleckmaeuler: [
        {
          alt: "Floh",
          file: "/leiterteam/thumb/04 2015-12 Floh.jpg.webp",
          abteilungsfunktion: "lädeli",
          gruppe: "celebrations",
          gruppenfunktion: "gruppenleiter",
          function: "Gruppenleiterin",
          name: "Seraina Frei v/o Floh",
          group: "Celebrations",
          year: "1999",
          place: "Buchs",
          profession: "Bäckerin in Ausbildung",
          hobby: "Leichtathletik und Volleyball",
          inscoutssince: "Kindergarten",
          inscoutsbecause: "es immer ein tolles Erlebnis ist",
          bestexperience: "Pfila's",
          contact: "floh@cevimail.ch",
        },
        {
          alt: "Jarne",
          file: "/leiterteam/thumb/03 2019 Jarne.jpg.webp",
          abteilungsfunktion: "al",
          gruppe: "celebrations",
          gruppenfunktion: "leiter",
          function: "Abteilungsleiter",
          name: "Michael Frei v/o Jarne",
          group: "Celebrations",
          year: "1997",
          place: "Buchs",
          profession:
            "Studium zum Bachelor in Elektro- und Informationstechnik",
          hobby: "Jungschi, Judo, Lesen",
          inscoutssince: "ungefähr 2. Klasse",
          inscoutsbecause: "Es Spass macht und geil ist.",
          bestexperience: "Hilfs- Gruppen- und Lagerleiterkurs",
          contact: "jarne@cevimail.ch",
        },
        {
          alt: "Elias",
          file: "/leiterteam/thumb/05 2018-04 Elias.jpg.webp",
          abteilungsfunktion: "",
          gruppe: "celebrations",
          gruppenfunktion: "hilfsleiter",
          function: "Hilfsleiter",
          name: "Elias Scheidegger",
          group: "Celebrations",
          year: "2004",
          place: "Gipf-Oberfrick",
          profession: "Bezirksschule",
          hobby: "Jungschi, Klavier spielen, Judo",
          inscoutssince: "ich denken kann",
          inscoutsbecause: "Es Spass macht und man zudem etwas lernt ;D",
          bestexperience: "Alle Lager und Leiterkurse",
          contact: "elias@cevimail.ch",
        },
        {
          alt: "Zippora",
          file: "/leiterteam/thumb/06 2019 Zippora.jpg.webp",
          abteilungsfunktion: "",
          gruppe: "celebrations",
          gruppenfunktion: "hilfsleiter",
          function: "Hilfsleiterin",
          name: "Sira Hächler",
          group: "Celebrations",
          year: "2003",
          place: "Aarau-Rohr",
          profession: "Bezirksschule",
          hobby: "Jungschar, Klettern, Biken, Reiten, Tanzen",
          inscoutssince: "…",
          inscoutsbecause: "es richtig viel Spass macht",
          bestexperience: "Alle Cevilager",
          contact: "zippora@cevimail.ch",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.leiterlist {
  list-style-type: none;
  margin-right: 1em;
}

.modal {
  z-index: 1050; /* headerbar has a z-index of 1001 */
}
</style>
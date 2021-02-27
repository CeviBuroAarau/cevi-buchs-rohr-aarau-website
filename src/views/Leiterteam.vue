<template>
  <section class="section">
    <div class="container">
      <h1 class="title is-1">Leiterteam</h1>
      <p class="content">
        Klicke auf das Bild eines Leiters um einen kurzen Steckbrief anzuzeigen.
      </p>

      <div
        v-if="activeLeiter != null"
        class="modal"
        :class="{
          'is-active': showModal,
        }"
      >
        <div class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">
              {{ activeLeiter.name + " v/o " + activeLeiter.scoutname }}
            </p>
            <button
              class="delete"
              aria-label="close"
              v-on:click="showModal = false"
            ></button>
          </header>
          <section class="modal-card-body">
            <img :src="activeLeiter.file" :alt="activeLeiter.scoutname" />
            <table
              class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth"
              role="presentation"
            >
              <tr>
                <td>Funktion</td>
                <td>{{ activeLeiter.function.join(", ") }}</td>
              </tr>
              <tr>
                <td>Gruppe</td>
                <td>{{ activeLeiter.group }}</td>
              </tr>
              <tr>
                <td>Jahrgang</td>
                <td>{{ activeLeiter.birthyear }}</td>
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
                <td>{{ activeLeiter.recreation }}</td>
              </tr>
              <tr>
                <td>In der Jungschi seit</td>
                <td>{{ activeLeiter.inScoutsSince }}</td>
              </tr>
              <tr>
                <td>In der Jungschi weil</td>
                <td>{{ activeLeiter.inScoutsBecause }}</td>
              </tr>
              <tr>
                <td>Tollste Cevi Erlebnisse</td>
                <td>{{ activeLeiter.bestExperience }}</td>
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

      <ul style="display: flex; flex-wrap: wrap" v-if="this.leiterList != null">
        <li
          class="leiterlist"
          v-for="(items, itemIndex) in leiterList.filter(
            (item) =>
              item.function.indexOf('Abteilungsleiter') > -1 ||
              item.function.indexOf('Abteilungsleiterin') > -1
          )"
          :key="itemIndex"
          @click="
            activeLeiter = items;
            showModal = true;
          "
        >
          <div class="card" style="width: 180px">
            <div class="card-image is-centered">
              <img width="170" :src="items.file" :alt="items.scoutname" />
            </div>
            <div class="card-content is-centered">
              <strong
                >{{ items.name }}<br />
                v/o {{ items.scoutname }}</strong
              >
            </div>
          </div>
        </li>
      </ul>

      <h2 class="title is-2">Spartacus</h2>

      <ul style="display: flex; flex-wrap: wrap" v-if="this.leiterList != null">
        <li
          class="leiterlist"
          v-for="(items, itemIndex) in leiterList.filter(
            (item) => item.group == 'Spartacus'
          )"
          :key="itemIndex"
          @click="
            activeLeiter = items;
            showModal = true;
          "
        >
          <div class="card" style="width: 180px">
            <div class="card-image is-centered">
              <img width="170" :src="items.file" :alt="items.scoutname" />
            </div>
            <div class="card-content is-centered">
              <strong
                >{{ items.name }}<br />
                v/o {{ items.scoutname }}</strong
              ><br />
              {{ items.function.join(", ") }}
            </div>
          </div>
        </li>
      </ul>

      <h2 class="title is-2">Schleckmäuler</h2>

      <ul style="display: flex; flex-wrap: wrap" v-if="this.leiterList != null">
        <li
          class="leiterlist"
          v-for="(items, itemIndex) in leiterList.filter(
            (item) => item.group == 'Schleckmäuler'
          )"
          :key="itemIndex"
          @click="
            activeLeiter = items;
            showModal = true;
          "
        >
          <div class="card" style="width: 180px">
            <div class="card-image is-centered">
              <img width="170" :src="items.file" :alt="items.scoutname" />
            </div>
            <div class="card-content is-centered">
              <strong
                >{{ items.name }}<br />
                v/o {{ items.scoutname }}</strong
              ><br />
              {{ items.function.join(", ") }}
            </div>
          </div>
        </li>
      </ul>

      <h2 class="title is-2">Springer</h2>

      <ul style="display: flex; flex-wrap: wrap" v-if="this.leiterList != null">
        <li
          class="leiterlist"
          v-for="(items, itemIndex) in leiterList.filter(
            (item) => item.group == 'Springer'
          )"
          :key="itemIndex"
          @click="
            activeLeiter = items;
            showModal = true;
          "
        >
          <div class="card" style="width: 180px">
            <div class="card-image is-centered">
              <img width="170" :src="items.file" :alt="items.scoutname" />
            </div>
            <div class="card-content is-centered">
              <strong
                >{{ items.name }}<br />
                v/o {{ items.scoutname }}</strong
              ><br />
              {{ items.function.join(", ") }}
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import ErrorReportingService from "../services/ErrorReportingService";

export default {
  components: {},
  data() {
    return {
      activeLeiter: null,
      showModal: false,
      leiterList: null,
      dataAuthorizationToken:
        process.env.VUE_APP_COCKPIT_DATA_READ_AUTHORIZATION,
    };
  },
  created() {
    this.fetchData();
  },
  watch: {
    $route: "fetchData",
  },
  methods: {
    fetchData() {
      this.events = null;
      this.loading = true;
      this.error = false;

      const instance = axios.create({
        baseURL: process.env.VUE_APP_COCKPIT_API,
        timeout: 10000,
        headers: { "Content-Type": "application/json" },
      });

      instance
        .get("collections/get/Leader", {
          headers: {
            Authorization: "Bearer " + this.dataAuthorizationToken,
          },
        })
        .then((resp) => {
          this.error = false;
          this.loading = false;

          this.leiterList = resp.data.entries.map((leiter) => {
            return {
              scoutname: leiter.scoutname,
              name: leiter.name,
              function: leiter.function,
              group: leiter.group,
              birthyear: leiter.birthyear,
              place: leiter.place,
              profession: leiter.profession,
              recreation: leiter.recreation,
              inScoutsSince: leiter.in_scounts_since,
              inScoutsBecause: leiter.in_scouts_because,
              bestExperience: leiter.best_experiences,
              file: process.env.VUE_APP_COCKPIT_FILES + leiter.image.path,
            };
          });
        })
        .catch((err) => {
          this.error = true;
          this.loading = false;
          const errorReportingService = new ErrorReportingService();
          errorReportingService.report(err);
        });
    },
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

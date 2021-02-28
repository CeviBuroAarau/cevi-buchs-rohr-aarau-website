<script>
import axios from "axios";
import ErrorReportingService from "../services/ErrorReportingService";

export default {
  components: {},
  data() {
    return {
      loading: false,
      error: false,
      events: null,
      eventInfos: null,
      publicPath: process.env.BASE_URL,
      dataAuthorizationToken:
        process.env.VUE_APP_COCKPIT_DATA_READ_AUTHORIZATION,
      showModal: false,
      activeEventInfo: null,
    };
  },
  created() {
    this.fetchData();
  },
  watch: {
    $route: "fetchData",
  },
  methods: {
    isUpcoming(element) {
      return new Date(element.date) >= new Date();
    },
    eventsByDate(date) {
      return this.eventInfos.filter((event) => event.date === date);
    },
    fetchData() {
      this.events = null;
      this.eventInfos = null;
      this.loading = true;
      this.error = false;

      const instance = axios.create({
        baseURL: process.env.VUE_APP_COCKPIT_API,
        timeout: 10000,
        headers: { "Content-Type": "application/json" },
      });

      instance
        .get("collections/get/Agenda", {
          headers: {
            Authorization: "Bearer " + this.dataAuthorizationToken,
          },
        })
        .then((resp) => {
          this.error = false;
          this.loading = false;
          this.events = resp.data.entries;
        })
        .catch((err) => {
          this.error = true;
          this.loading = false;
          const errorReportingService = new ErrorReportingService();
          errorReportingService.report(err);
        });

      instance
        .get("collections/get/EventInfo", {
          headers: {
            Authorization: "Bearer " + this.dataAuthorizationToken,
          },
        })
        .then((resp) => {
          this.error = false;
          this.loading = false;
          this.eventInfos = resp.data.entries
            .map((eventInfo) => {
              return {
                date: eventInfo.date,
                scope: eventInfo.scope,
                text: eventInfo.text,
              };
            })
            .filter(this.isUpcoming);
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
<template>
  <section class="section">
    <div class="container">
      <h1 class="title is-1">Agenda</h1>

      <div
        v-if="activeEventInfo != null"
        class="modal"
        :class="{
          'is-active': showModal,
        }"
      >
        <div class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">
              <span v-if="activeEventInfo.scope == 'section'"
                >Informationen für alle</span
              >
              <span v-if="activeEventInfo.scope == 'group_spartacus'"
                >Informationen für Spartacus</span
              >
              <span v-if="activeEventInfo.scope == 'group_schleckmaeuler'"
                >Informationen für Schleckmäuler</span
              >
            </p>
            <button
              class="delete"
              aria-label="close"
              v-on:click="showModal = false"
            ></button>
          </header>
          <section class="modal-card-body">
            <div v-html="activeEventInfo.text"></div>
          </section>
          <footer class="modal-card-foot">
            <button class="button" v-on:click="showModal = false">
              Schliessen
            </button>
          </footer>
        </div>
      </div>

      <div v-if="loading">
        <p>Daten werden geladen.</p>
        <progress class="progress is-small is-primary" max="100">15%</progress>
      </div>

      <div v-if="error">
        <div class="notification is-danger">
          Die Agendadaten können monentan nicht abgerufen werden. Bitte
          versuchen Sie es später noch einmal.
        </div>
      </div>

      <div v-if="events">
        <p class="content">
          Die Semsterpläne werden jeweils zu Beginn des Jahres veröffentlicht
          und enthalten wenig detaillierte Informationen:
        </p>
        <div class="content">
          <ul>
            <li>
              <a
                :href="`${publicPath}files/jungschidaten/2021-1Jungschardaten.pdf`"
                >Semesterplan (erstes Semester)</a
              >
            </li>
            <li>
              <a
                :href="`${publicPath}files/jungschidaten/2021-2Jungschardaten.pdf`"
                >Semesterplan (zweites Semester)</a
              >
            </li>
          </ul>
        </div>
        <p class="content">
          Untenstehend sind die nächsten 3 Anlässe mit detaillierten
          Informationen aufgeführt.
        </p>
        <div
          class="card agenda-item"
          v-for="(event, eventIndex) in events.filter(isUpcoming).slice(0, 3)"
          :key="eventIndex"
        >
          <header class="card-header">
            <p class="card-header-title">
              {{ event.title }}
            </p>
          </header>
          <div class="card-content">
            <div class="content">
              <p class="content">
                {{ event.text }}
              </p>

              <div v-if="eventsByDate(event.date) != null">
                <p
                  v-for="(info, itemIndex) in eventsByDate(event.date)"
                  :key="itemIndex"
                >
                  <a
                    v-if="info.scope == 'section'"
                    @click="
                      activeEventInfo = info;
                      showModal = true;
                    "
                    >Informationen für alle</a
                  >
                  <a
                    v-if="info.scope == 'group_spartacus'"
                    @click="
                      activeEventInfo = info;
                      showModal = true;
                    "
                    >Informationen für Spartacus</a
                  >
                  <a
                    v-if="info.scope == 'group_schleckmaeuler'"
                    @click="
                      activeEventInfo = info;
                      showModal = true;
                    "
                    >Informationen für Schleckmäuler</a
                  >
                </p>
              </div>
            </div>
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

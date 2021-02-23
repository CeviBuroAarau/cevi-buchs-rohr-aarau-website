<script>
import axios from "axios";
import * as Sentry from "@sentry/vue";

export default {
  components: {},
  data() {
    return {
      loading: false,
      error: false,
      events: null,
      publicPath: process.env.BASE_URL,
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
    isUpcoming(element) {
      return new Date(element.date) >= new Date();
    },
    fetchData() {
      this.events = null;
      this.loading = true;
      this.error = false;

      const instance = axios.create({
        baseURL: "https://backend.cevi-buro-aarau.ch/api",
        timeout: 10000,
        headers: { "Content-Type": "application/json" },
      });

      instance
        .get("/collections/get/Agenda", {
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
          Sentry.captureException(err);
        });
    },
  },
};
</script>
<template>
  <section class="section">
    <div class="container">
      <h1 class="title is-1">Agenda</h1>

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
          v-for="(items, itemIndex) in events.filter(isUpcoming).slice(0, 3)"
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
    </div>
  </section>
</template>

<style scoped lang="scss">
.agenda-item {
  margin: 0 0 1em 0;
}
</style>

<template>
  <section class="section">
    <div class="container">
      <h1 class="title is-1">Aktivitäten</h1>
      <p class="content">
        Unsere Programme sind sehr vielfältig. Neben praktischen Fertigkeiten
        wie Zelte bauen, Feuer entfachen oder der Umgang mit Karte und Kompass
        kommen auch auch Spiel und Spass nicht zu kurz. Bekanntlich sagt ein
        Bild mehr als 1000 Worte. Deshalb untenstehend eine Zusammenstellung
        typischer Aktivitäten unserer Nachmittage.
      </p>

      <div v-if="loading">
        <p>Daten werden geladen.</p>
        <progress class="progress is-small is-primary" max="100">15%</progress>
      </div>

      <div v-if="error">
        <div class="notification is-danger">
          Die Aktivitäten können monentan nicht abgerufen werden. Bitte
          versuchen Sie es später noch einmal.
        </div>
      </div>

      <div v-if="activities">
        <LightGallery
          :images="activities"
          :index="index"
          :disable-scroll="true"
          @close="index = null"
        />
        <ul>
          <li
            class="vue-light-gallery-thumb"
            v-for="(activity, activityIndex) in activities"
            :key="activityIndex"
            @click="index = activityIndex"
          >
            <img :src="activity.thumbUrl" />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.vue-light-gallery-thumb {
  display: inline-block;
  margin: 10px;
  cursor: pointer;
  overflow: hidden;
  border-radius: 3px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.5);
}
</style>

<script>
import { LightGallery } from "vue-light-gallery";
import axios from "axios";

export default {
  components: {
    LightGallery,
  },
  data() {
    return {
      loading: false,
      error: false,
      activities: null,
      index: null,
      externalAssetsUri: process.env.VUE_APP_EXTERNAL_ASSETS_URI,
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
        baseURL: "https://backend.cevi-buro-aarau.ch/api",
        timeout: 10000,
        headers: { "Content-Type": "application/json" },
      });

      instance
        .get("/collections/get/Activities", {
          headers: {
            Authorization: "Bearer 486f18ebe895de87c4f35c58d3db0f",
          },
        })
        .then((resp) => {
          this.error = false;
          this.loading = false;
          this.activities = resp.data.entries.map((activity) => {
            return {
              title: activity.title,
              url: "https://backend.cevi-buro-aarau.ch/" + activity.image.path,
              thumbUrl:
                "https://backend.cevi-buro-aarau.ch/" + activity.thumb.path,
            };
          });
        })
        .catch((err) => {
          this.error = true;
          this.loading = false;
          console.log(err);
        });
    },
  },
};
</script>

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
            <img :src="activity.thumb" :alt="activity.title" />
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

<script lang="ts">
import { LightGallery } from "vue-light-gallery";
import { ActivitiesService, ErrorReportingService } from "@/services";
import { Component, Vue } from "vue-property-decorator";
import { AxiosUtil } from "@/utils";

interface ActivityView {
  title: string;
  url: string;
  thumb: string;
}

@Component({
  components: {
    LightGallery,
  },
})
export default class Aktivitaeten extends Vue {
  private loading = false;
  private error = false;
  private activities: ActivityView[] = [];
  private index: number | null = null;

  mounted() {
    this.activities = [];
    this.loading = true;
    this.error = false;

    const service: ActivitiesService = new ActivitiesService(
      AxiosUtil.getCockpitInstance()
    );
    const errorService: ErrorReportingService = new ErrorReportingService();

    service
      .getActivities()
      .then((activities) => {
        this.error = false;
        this.loading = false;
        this.activities = activities;
      })
      .catch((err) => {
        this.error = true;
        this.loading = false;
        errorService.report(err);
      });
  }
}
</script>

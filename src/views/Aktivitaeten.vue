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

      <div v-else-if="error">
        <div class="notification is-danger">
          Die Aktivitäten können momentan nicht abgerufen werden. Bitte
          versuchen Sie es später noch einmal.
        </div>
      </div>

      <div v-else>
        <div
          v-if="index !== null"
          class="lightbox-overlay"
          @click="index = null"
        >
          <div class="lightbox-content" @click.stop>
            <button class="lightbox-close" @click="index = null">
              &times;
            </button>
            <img :src="activities[index].url" :alt="activities[index].title" />
            <p class="lightbox-title">{{ activities[index].title }}</p>
            <div class="lightbox-nav">
              <button v-if="index > 0" @click="index = index - 1">
                &laquo; Zurück
              </button>
              <button
                v-if="index < activities.length - 1"
                @click="index = index + 1"
              >
                Weiter &raquo;
              </button>
            </div>
          </div>
        </div>

        <ul id="gallery">
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

.lightbox-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
  text-align: center;
}

.lightbox-content img {
  max-width: 100%;
  max-height: 80vh;
}

.lightbox-close {
  position: absolute;
  top: -30px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 30px;
  cursor: pointer;
}

.lightbox-title {
  color: white;
  margin-top: 10px;
}

.lightbox-nav {
  margin-top: 10px;
}

.lightbox-nav button {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid white;
  color: white;
  padding: 5px 15px;
  margin: 0 5px;
  cursor: pointer;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import { ActivitiesService, ErrorReportingService } from "@/services";
import { AxiosUtil } from "@/utils";

interface ActivityView {
  title: string;
  url: string;
  thumb: string;
}

export default defineComponent({
  name: "Aktivitaeten",
  data() {
    return {
      loading: true,
      error: false,
      activities: [] as ActivityView[],
      index: null as number | null,
      service: new ActivitiesService(
        AxiosUtil.getCockpitInstance()
      ) as ActivitiesService,
      errorService: new ErrorReportingService() as ErrorReportingService,
    };
  },
  watch: {
    index(newVal: number | null) {
      if (newVal !== null) {
        window.addEventListener("keydown", this.onKeydown);
      } else {
        window.removeEventListener("keydown", this.onKeydown);
      }
    },
  },
  async mounted(): Promise<void> {
    await this.loadActivities();
  },
  beforeUnmount(): void {
    window.removeEventListener("keydown", this.onKeydown);
  },
  methods: {
    async loadActivities(): Promise<void> {
      try {
        this.activities = await this.service.getActivities();
        this.error = false;
        this.loading = false;
      } catch (err) {
        this.error = true;
        this.loading = false;
        this.errorService.report(err);
      }
    },
    onKeydown(e: KeyboardEvent): void {
      if (this.index === null) return;
      if (e.key === "Escape") {
        this.index = null;
      } else if (e.key === "ArrowLeft" && this.index > 0) {
        this.index = this.index - 1;
      } else if (
        e.key === "ArrowRight" &&
        this.index < this.activities.length - 1
      ) {
        this.index = this.index + 1;
      }
    },
  },
});
</script>

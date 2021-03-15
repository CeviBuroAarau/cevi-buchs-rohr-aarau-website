<template>
  <section class="section">
    <div class="container">
      <h1 class="title is-1">Medien</h1>

      <div v-if="loading">
        <p>Daten werden geladen.</p>
        <progress class="progress is-small is-primary" max="100">15%</progress>
      </div>

      <div v-if="error">
        <div class="notification is-danger">
          Die Medien können monentan nicht abgerufen werden. Bitte versuchen Sie
          es später noch einmal.
        </div>
      </div>

      <p class="content" id="medialist">Die neusten Artikel:</p>
      <media-table :media="this.news"></media-table>
      <p class="content" id="medialist">Historische Dokumente:</p>
      <media-table :media="this.chronics"></media-table>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { MediaService, ErrorReportingService } from "@/services";
import { Media } from "@/types/Media";
import MediaTable from "@/components/media-table.vue";
import { AxiosUtil } from "@/utils";

@Component({
  components: {
    MediaTable,
  },
})
export default class Medien extends Vue {
  private chronics: Media[] = [];
  private news: Media[] = [];
  private loading = false;
  private error = false;

  mounted() {
    this.loading = true;
    this.error = false;

    const service: MediaService = new MediaService(
      AxiosUtil.getCockpitInstance()
    );
    const errorService: ErrorReportingService = new ErrorReportingService();

    service
      .getChronic()
      .then((chronics) => {
        this.error = false;
        this.loading = false;
        this.chronics = chronics;
      })
      .catch(errorService.report);

    service
      .getNews()
      .then((news) => {
        this.error = false;
        this.loading = false;
        this.news = news;
      })
      .catch((err) => {
        this.error = true;
        this.loading = false;
        errorService.report(err);
      });
  }
}
</script>

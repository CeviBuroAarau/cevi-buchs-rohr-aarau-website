<template>
  <section class="section">
    <div class="container">
      <h1 class="title is-1">Medien</h1>

      <div v-if="loading">
        <p>Daten werden geladen.</p>
        <progress class="progress is-small is-primary" max="100">15%</progress>
      </div>
      <div v-else-if="error">
        <div class="notification is-danger">
          Die Medien können monentan nicht abgerufen werden. Bitte versuchen Sie
          es später noch einmal.
        </div>
      </div>
      <div v-else>
        <p class="content" id="medialist">Die neusten Artikel:</p>
        <media-table :media="this.news"></media-table>
        <p class="content" id="chroniclist">Historische Dokumente:</p>
        <media-table :media="this.chronics"></media-table>
      </div>
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
  private loading = true;
  private error = false;
  service: MediaService = new MediaService(AxiosUtil.getCockpitInstance());
  errorService: ErrorReportingService = new ErrorReportingService();

  async mounted(): Promise<void> {
    await this.loadChronics();
    await this.loadNews();
  }

  async loadChronics(): Promise<void> {
    try {
      this.chronics = await this.service.getChronic();
      this.error = false;
      this.loading = false;
    } catch (err) {
      this.errorService.report(err);
      this.error = true;
      this.loading = false;
    }
  }

  async loadNews(): Promise<void> {
    try {
      this.news = await this.service.getNews();
      this.error = false;
      this.loading = false;
    } catch (err) {
      this.errorService.report(err);
      this.error = true;
      this.loading = false;
    }
  }
}
</script>

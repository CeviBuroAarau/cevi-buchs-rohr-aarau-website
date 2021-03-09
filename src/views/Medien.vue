<template>
  <section class="section">
    <div class="container">
      <h1 class="title is-1">Medien</h1>
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

  created() {
    const service: MediaService = new MediaService(
      AxiosUtil.getCockpitInstance()
    );
    const errorService: ErrorReportingService = new ErrorReportingService();

    service
      .getChronic()
      .then((chronics) => {
        this.chronics = chronics;
      })
      .catch(errorService.report);

    service
      .getNews()
      .then((news) => {
        this.news = news;
      })
      .catch(errorService.report);
  }
}
</script>

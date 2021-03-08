<template>
  <section class="section">
    <div class="container">
      <h1 class="title is-1">Album</h1>
      <p class="content">
        Hier findest du aktuelle Bilder der vergangenen Nachmittage.
      </p>

      <div v-if="loading">
        <p>Daten werden geladen.</p>
        <progress class="progress is-small is-primary" max="100">15%</progress>
      </div>

      <div v-if="error">
        <div class="notification is-danger">
          Die Albumdaten können monentan nicht abgerufen werden. Bitte versuchen
          Sie es später noch einmal.
        </div>
      </div>

      <div v-if="albums">
        <LightGallery
          :images="activeAlbum"
          :index="index"
          :disable-scroll="true"
          @close="index = null"
        />

        <ul>
          <li
            class="vue-light-gallery-thumb"
            v-for="(album, albumIndex) in albums"
            :key="albumIndex"
            @click="
              activeAlbum = album.images;
              index = 0;
            "
          >
            <div class="card">
              <div class="card-image">
                <img :src="album.previewImage.url" alt="" />
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">{{ album.title }}</p>
                    <p class="subtitle is-6">{{ album.dateString }}</p>
                  </div>
                </div>
              </div>
            </div>
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
import { AlbumService, ErrorReportingService } from "@/services";
import { Component, Vue } from "vue-property-decorator";
import { AxiosUtil } from "@/utils";
import { Album } from "@/types";

@Component({
  components: {
    LightGallery,
  },
})
export default class AlbumView extends Vue {
  private loading = false;
  private error = false;
  private activeAlbum: Album | null = null;
  private albums: Album[] = [];
  private index: number | null = null;

  mounted() {
    this.albums = [];
    this.loading = true;
    this.error = false;

    const service: AlbumService = new AlbumService(
      AxiosUtil.getCockpitInstance()
    );
    const errorService: ErrorReportingService = new ErrorReportingService();

    service
      .getAlbums()
      .then((albums: Album[]) => {
        this.error = false;
        this.loading = false;
        this.albums = albums;
      })
      .catch((err) => {
        this.error = true;
        this.loading = false;
        errorService.report(err);
      });
  }
}
</script>

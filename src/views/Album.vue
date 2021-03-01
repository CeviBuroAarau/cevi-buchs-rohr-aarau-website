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
            v-for="(albums, albumIndex) in albums"
            :key="albumIndex"
            @click="
              activeAlbum = albums.images;
              index = 0;
            "
          >
            <div class="card">
              <div class="card-image">
                <img :src="albums.preview.url" alt="" />
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">{{ albums.title }}</p>
                    <p class="subtitle is-6">{{ albums.dateString }}</p>
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

<script>
import axios from "axios";
import { LightGallery } from "vue-light-gallery";
import ErrorReportingService from "../services/ErrorReportingService";

export default {
  components: {
    LightGallery,
  },
  data() {
    return {
      loading: false,
      error: false,
      activeAlbum: [],
      albums: null,
      index: null,
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
    formatDate(dateString) {
      const reggie = /(\d{2}).(\d{2}).(\d{4})/,
        [, day, month, year] = reggie.exec(dateString);
      return new Date(year, month - 1, day, 0, 0, 0);
    },
    fetchData() {
      this.albums = null;
      this.loading = true;
      this.error = false;

      const instance = axios.create({
        baseURL: process.env.VUE_APP_COCKPIT_API,
        timeout: 10000,
        headers: { "Content-Type": "application/json" },
      });

      instance
        .get("collections/get/Album", {
          headers: {
            Authorization: "Bearer " + this.dataAuthorizationToken,
          },
        })
        .then((resp) => {
          this.error = false;
          this.loading = false;
          this.albums = resp.data.entries.map((album) => {
            return {
              title: album.title,
              dateString: album.dateString,
              date: this.formatDate(album.date),
              year: album.year,
              images: album.images.map((image) => {
                return {
                  title: image.meta.title,
                  url: process.env.VUE_APP_COCKPIT_FILES + image.path,
                };
              }),
              preview: {
                url:
                  process.env.VUE_APP_COCKPIT_FILES + album.previewImage.path,
              },
            };
          });
          this.albums.sort((first, second) => first.date < second.date);
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

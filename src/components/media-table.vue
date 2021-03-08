<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Media } from "@/types";

@Component
export default class MediaTable extends Vue {
  @Prop({ required: true }) readonly media!: Media[];
}
</script>

<template>
  <table
    class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth"
    aria-describedby="medialist"
    v-if="this.media != null"
  >
    <tr>
      <th scope="col">Datum</th>
      <th scope="col">Artikel</th>
    </tr>
    <tr v-for="(media, mediaIndex) in this.media" :key="mediaIndex">
      <td>{{ media.date | formatDate }}</td>
      <td>
        <div v-html="media.description"></div>
        <br />
        <a :href="media.file">Anschauen</a>
      </td>
    </tr>
  </table>
</template>

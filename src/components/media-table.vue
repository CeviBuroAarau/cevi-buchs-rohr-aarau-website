<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Media } from "@/types";
import { formatDate } from "@/filters/DateFilter";

export default defineComponent({
  name: "MediaTable",
  props: {
    media: {
      type: Array as PropType<Media[]>,
      required: true,
    },
  },
  methods: {
    formatDate(date: Date): string {
      return formatDate(date);
    },
  },
});
</script>

<template>
  <table
    class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth"
    aria-describedby="medialist"
    v-if="media != null"
  >
    <tr>
      <th scope="col">Datum</th>
      <th scope="col">Artikel</th>
    </tr>
    <tr v-for="(media, mediaIndex) in media" :key="mediaIndex">
      <td>{{ formatDate(media.date) }}</td>
      <td>
        <div v-html="media.description"></div>
        <br />
        <a :href="media.file">Anschauen</a>
      </td>
    </tr>
  </table>
</template>

<template>
  <section class="section">
    <div class="container">
      <h1 class="title is-1">Version</h1>
      <p class="content">
        Modus: {{ process.env.NODE_ENV }}<br />
        Version: {{ process.env.VUE_APP_VERSION }}<br />
        Erstellungsdatum: {{ process.env.VUE_APP_DATE }}<br />
        Git Revision: {{ process.env.VUE_APP_REVISION }}
      </p>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Version extends Vue {}
</script>

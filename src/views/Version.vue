<template>
  <section class="section">
    <div class="container">
      <h1 class="title is-1">Version</h1>
      <p class="content">
        Modus: {{ mode }}<br />
        Environment: {{ environment }}<br />
        Version: {{ version }}<br />
        Erstellungsdatum: {{ creationDate }}<br />
        Git Revision: {{ revision }}
      </p>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Version",
  data() {
    return {
      mode: process.env.NODE_ENV,
      environment: process.env.NODE_ENV,
      version: process.env.VUE_APP_VERSION,
      creationDate: process.env.VUE_APP_DATE,
      revision: process.env.VUE_APP_REVISION,
    };
  },
});
</script>

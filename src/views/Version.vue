<template>
  <section class="section">
    <div class="container">
      <h1 class="title is-1">Version</h1>
      <p class="content">
        Modus: {{ this.mode }}<br />
        Environment: {{ this.environment }}<br />
        Version: {{ this.version }}<br />
        Erstellungsdatum: {{ this.creationDate }}<br />
        Git Revision: {{ this.revision }}
      </p>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Version extends Vue {
  private mode = process.env.NODE_ENV;
  private version = process.env.VUE_APP_VERSION;
  private creationDate = process.env.VUE_APP_DATE;
  private revision = process.env.VUE_APP_REVISION;
  private environment = process.env.VUE_APP_SENTRY_ENVIRONMENT;
}
</script>

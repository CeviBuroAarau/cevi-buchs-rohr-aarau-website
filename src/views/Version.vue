<template>
  <section class="section">
    <div class="container">
      <h1 class="title is-1">Version</h1>
      <p class="content">
        Modus: {{ this.environment }}<br />
        Version: {{ this.version }}<br />
        Erstellungsdatum: {{ this.date }}<br />
        Git Revision: {{ this.revision }}
      </p>
    </div>
  </section>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      environment: process.env.NODE_ENV,
      version: process.env.VUE_APP_VERSION,
      revision: process.env.VUE_APP_REVISION,
      date: process.env.VUE_APP_DATE,
    };
  },
};
</script>

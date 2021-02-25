<template>
  <section class="section">
    <div class="container">
      <h1 class="title is-1">Version</h1>
      <p class="content">
        {{ this.version }} erstellt am {{ this.date }} basierend auf der (Revision {{ this.revision }})
      </p>
    </div>
  </section>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      version:
        process.env.VUE_APP_VERSION,
      revision: process.env.VUE_APP_REVISION,
      date: process.env.VUE_APP_DATE
    };
  },
};
</script>
<template>
  <section class="section">
    <div class="container">
      <h1 class="title is-1">Version</h1>
      <p class="content">
        Version der Seite: {{ this.version }}
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
    };
  },
};
</script>
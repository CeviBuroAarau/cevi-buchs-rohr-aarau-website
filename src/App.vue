<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {}
</script>

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

@media print {
  a[href^="http"]:not([href*="cevi-buro-aarau.ch"]):after {
    content: " (" attr(href) ")";
  }

  /* used to hide other content when modals are displayed */
  .noPrint {
    display: none !important;
  }

  /* show modal at the beginning of the screen instead of centered */
  .modal {
    justify-content: flex-start !important;
  }

  .modal-card-head button.delete {
    display: none;
  }

  /* always print borders for tables and make them black */
  table.is-bordered td,
  th {
    border: solid #000 !important;
    border-width: 1px !important;
  }
}
</style>

<style scoped lang="scss">
#app {
  display: flex;
  flex-flow: column;
  height: 100%;
}
</style>

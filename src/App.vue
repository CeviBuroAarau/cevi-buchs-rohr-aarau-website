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
</style>

<style scoped lang="scss">
#app {
  display: flex;
  flex-flow: column;
  height: 100%;
}
</style>

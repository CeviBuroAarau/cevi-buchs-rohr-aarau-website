<script>
import HeaderBar from "@/components/header-bar.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    HeaderBar
  }
};
</script>

<template>
  <div id="app">
    <HeaderBar />
    <router-view />
  </div>
</template>

<style lang="scss"></style>

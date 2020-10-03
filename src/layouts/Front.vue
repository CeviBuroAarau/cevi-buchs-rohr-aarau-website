<template>
  <div class="wrapper">
    <HeaderBar />
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderBar from "@/components/header-bar.vue";

export default {
  name: "FrontLayout",
  data() {
    return {};
  },
  components: {
    HeaderBar
  }
};
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-flow: column;
  height: 100%;
}
</style>

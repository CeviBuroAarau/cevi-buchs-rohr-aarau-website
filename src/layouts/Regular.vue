<template>
  <div class="flex-column-wrapper">
    <HeaderBar />
    <div class="flex-row-wrapper">
      <Navigation />
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBar from "@/components/header-bar.vue";
import Navigation from "@/components/navigation.vue";

export default {
  name: "RegularLayout",
  data() {
    return {};
  },
  components: {
    HeaderBar,
    Navigation
  }
};
</script>

<style scoped lang="scss">
.flex-column-wrapper {
  display: flex;
  flex-flow: column;
  min-height: 100%;
}

.flex-row-wrapper {
  display: flex;
  flex-flow: row;
  height: 100%;
}
</style>

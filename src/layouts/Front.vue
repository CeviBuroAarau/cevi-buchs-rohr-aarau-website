<template>
  <div class="wrapper">
    <HeaderBar @mobileOpenChanged="onMobileOpenChanged" />
    <Home :isMobileMenuOpen="mobileOpen" />
  </div>
</template>

<script>
import HeaderBar from "@/components/header-bar.vue";
import Home from "@/components/home.vue";

export default {
  name: "FrontLayout",
  data() {
    return {
      mobileOpen: false,
    };
  },
  components: {
    HeaderBar,
    Home,
  },
  methods: {
    onMobileOpenChanged(value) {
      this.mobileOpen = value;
    },
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-flow: column;
  height: 100%;
}
</style>

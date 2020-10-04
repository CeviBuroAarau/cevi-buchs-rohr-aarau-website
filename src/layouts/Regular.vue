<template>
  <div class="flex-column-wrapper">
    <HeaderBar @mobileOpenChanged="onMobileOpenChanged" />
    <div class="flex-row-wrapper">
      <Navigation :isMobileMenuOpen="mobileOpen" />
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
    return {
      mobileOpen: false
    };
  },
  components: {
    HeaderBar,
    Navigation
  },
  methods: {
    onMobileOpenChanged(value) {
      this.mobileOpen = value;
    }
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
  flex-grow: 1;
  flex-shrink: 0;
}
</style>

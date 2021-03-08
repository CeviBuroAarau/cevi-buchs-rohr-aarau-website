<template>
  <div class="wrapper">
    <HeaderBar
      @mobileOpenChanged="onMobileOpenChanged"
      :isMobileMenuOpen="mobileOpen"
    />
    <Home
      @mobileOpenChanged="onMobileOpenChanged"
      :isMobileMenuOpen="mobileOpen"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HeaderBar from "@/components/header-bar.vue";
import Home from "@/components/home.vue";

@Component({
  components: {
    HeaderBar,
    Home,
  },
})
export default class FrontLayout extends Vue {
  private mobileOpen = false;

  onMobileOpenChanged(value: boolean) {
    this.mobileOpen = value;
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-flow: column;
  height: 100%;
}
</style>

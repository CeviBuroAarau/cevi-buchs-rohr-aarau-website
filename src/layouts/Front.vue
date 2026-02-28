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
import { defineComponent } from "vue";
import Home from "@/components/home.vue";
import HeaderBar from "@/components/header-bar.vue";

export default defineComponent({
  name: "FrontLayout",
  components: {
    HeaderBar,
    Home,
  },
  data() {
    return {
      mobileOpen: false,
    };
  },
  methods: {
    onMobileOpenChanged(value: boolean): void {
      this.mobileOpen = value;
    },
  },
});
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-flow: column;
  height: 100vh;
}
</style>

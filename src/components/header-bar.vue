<script>
export default {
  name: "HeaderBar",
  components: {},
  data() {
    return {
      mobileOpen: false
    };
  },
  methods: {
    onMobileOpenChanged() {
      this.$emit("mobileOpenChanged", this.mobileOpen);
    }
  }
};
</script>

<template>
  <div class="header">
    <div
      @click="
        mobileOpen = !mobileOpen;
        onMobileOpenChanged();
      "
      class="mobile-menu"
    >
      <font-awesome-icon icon="bars" />
    </div>
    <router-link to="/"
      ><img class="logo" src="@/assets/logo.svg"
    /></router-link>
  </div>
</template>

<style scoped lang="scss">
.header {
  background: white;
  height: 50px;
  border-bottom: 1px solid #000;
}

.header .mobile-menu {
  display: none;
}

.header .logo {
  height: 40px;
  margin: 5px 8px;
}

/* mobile */
@media only screen and (max-width: 768px) {
  .header {
    text-align: right;
  }

  .header .mobile-menu {
    display: block;
    position: absolute;
    left: 10px;
    font-size: 42px;
    line-height: 50px;
  }
}
</style>

<script>
export default {
  name: "HeaderBar",
  components: {},
  data() {
    return {};
  },
  props: {
    isMobileMenuOpen: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onMobileOpenChanged() {
      this.$emit("mobileOpenChanged", !this.isMobileMenuOpen);
    },
  },
};
</script>

<template>
  <div class="header">
    <div @click="onMobileOpenChanged()" class="mobile-menu">
      <font-awesome-icon icon="bars" />
    </div>
    <router-link to="/"
      ><img
        class="logo"
        src="@/assets/logo.svg"
        alt="Cevi Buchs-Rohr Aarau. Logo: rotes Dreieck von blauem Kreis umwoben"
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
    background: white;
    text-align: right;
    position: fixed;
    width: 100%;
    z-index: 1001; /* leaflet has a z-index of 1000 */
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

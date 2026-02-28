<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Navigation",
  props: {
    isMobileMenuOpen: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["mobileOpenChanged"],
  methods: {
    onMobileNaviagation(): void {
      this.$emit("mobileOpenChanged", false);
    },
  },
});
</script>

<template>
  <ul
    class="main-menu"
    :class="{
      'close-mobile-menu': !isMobileMenuOpen,
      'open-mobile-menu': isMobileMenuOpen,
    }"
  >
    <li>
      <router-link to="/">Home</router-link>
    </li>
    <li>
      <router-link to="/interessierte" @click="onMobileNaviagation()"
        >Interessierte</router-link
      >
      <ul>
        <li>
          <router-link
            to="/interessierte/schnuppern"
            @click="onMobileNaviagation()"
            >Schnuppern</router-link
          >
        </li>
        <li>
          <router-link
            to="/interessierte/aktivitaeten"
            @click="onMobileNaviagation()"
            >Aktivitäten</router-link
          >
        </li>
        <li>
          <router-link
            to="/interessierte/cevi_schweiz"
            @click="onMobileNaviagation()"
            >Cevi Schweiz</router-link
          >
        </li>
        <li>
          <router-link
            to="/interessierte/standort"
            @click="onMobileNaviagation()"
            >Standort</router-link
          >
        </li>
        <li>
          <router-link to="/interessierte/medien" @click="onMobileNaviagation()"
            >Medien</router-link
          >
        </li>
        <li>
          <router-link
            to="/interessierte/spenden"
            @click="onMobileNaviagation()"
            >Spenden</router-link
          >
        </li>
      </ul>
    </li>
    <li>
      <router-link to="/cevianer" @click="onMobileNaviagation()"
        >Cevianer/in</router-link
      >
      <ul>
        <li>
          <router-link to="/cevianer/agenda" @click="onMobileNaviagation()"
            >Agenda</router-link
          >
        </li>
        <li>
          <router-link to="/cevianer/album" @click="onMobileNaviagation()"
            >Album</router-link
          >
        </li>
        <li>
          <router-link to="/cevianer/laedeli" @click="onMobileNaviagation()"
            >Lädeli</router-link
          >
        </li>
        <li>
          <router-link to="/cevianer/ausbildung" @click="onMobileNaviagation()"
            >Ausbildung</router-link
          >
        </li>
        <li>
          <router-link to="/cevianer/leiterteam" @click="onMobileNaviagation()"
            >Leiterteam</router-link
          >
        </li>
      </ul>
    </li>
    <li>
      <router-link to="/datenschutzinformation" @click="onMobileNaviagation()"
        >Datenschutzinformation</router-link
      >
    </li>
    <li>
      <router-link to="/kontakt" @click="onMobileNaviagation()"
        >Kontakt</router-link
      >
    </li>
  </ul>
</template>

<style scoped lang="scss">
@media print {
  ul.main-menu {
    display: none;
  }
}

.main-menu {
  flex-shrink: 0;
  width: 33%;
  margin: 0;
  padding: 2em;
  font-weight: bold;
  text-align: left;
  box-sizing: border-box;
  position: relative;
}

.main-menu::after {
  content: "";
  background: url("../assets/navigation/background.webp");
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  opacity: 0.15;
  z-index: -1;
}

.main-menu li {
  list-style: none;
  padding-top: 0.3em;
  padding-bottom: 0.3em;
  border-bottom: 1px solid black;
}

.main-menu ul li {
  font-weight: normal;
  border: none;
  padding-left: 40px;
}

.main-menu a:link,
.main-menu a:visited {
  color: #141412;
  text-decoration: none;
  font-size: 18px;
}

.main-menu a:hover {
  color: #c41333;
}

.main-menu a.router-link-exact-active {
  color: #c41333;
}

/* mobile */
@media only screen and (max-width: 768px) {
  .main-menu {
    flex-shrink: 0;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 2em;
    font-weight: bold;
    text-align: left;
    box-sizing: border-box;
    position: fixed;
    top: 50px;
    bottom: 0;
    background: white;
    z-index: 1;
  }

  .close-mobile-menu {
    display: none;
  }

  .open-mobile-menu {
    display: block;
    /* otherwise it is partially overlapped by the agenda and the map */
    z-index: 1001; /* leaflet has a z-index of 1000 */
  }
}
</style>

<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";

@Component({})
export default class Navigation extends Vue {
  @Prop({ default: false }) isMobileMenuOpen!: boolean;

  @Emit("mobileOpenChanged")
  onMobileNaviagation() {
    return false;
  }
}
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
      <router-link to="/interessierte" v-on:click.native="onMobileNaviagation()"
        >Interessierte</router-link
      >
      <ul>
        <li>
          <router-link
            to="/interessierte/schnuppern"
            v-on:click.native="onMobileNaviagation()"
            >Schnuppern</router-link
          >
        </li>
        <li>
          <router-link
            to="/interessierte/aktivitaeten"
            v-on:click.native="onMobileNaviagation()"
            >Aktivitäten</router-link
          >
        </li>
        <li>
          <router-link
            to="/interessierte/cevi_schweiz"
            v-on:click.native="onMobileNaviagation()"
            >Cevi Schweiz</router-link
          >
        </li>
        <li>
          <router-link
            to="/interessierte/standort"
            v-on:click.native="onMobileNaviagation()"
            >Standort</router-link
          >
        </li>
        <li>
          <router-link
            to="/interessierte/medien"
            v-on:click.native="onMobileNaviagation()"
            >Medien</router-link
          >
        </li>
        <li>
          <router-link
            to="/interessierte/spenden"
            v-on:click.native="onMobileNaviagation()"
            >Spenden</router-link
          >
        </li>
      </ul>
    </li>
    <li>
      <router-link to="/cevianer" v-on:click.native="onMobileNaviagation()"
        >Cevianer/in</router-link
      >
      <ul>
        <li>
          <router-link
            to="/cevianer/agenda"
            v-on:click.native="onMobileNaviagation()"
            >Agenda</router-link
          >
        </li>
        <li>
          <router-link
            to="/cevianer/album"
            v-on:click.native="onMobileNaviagation()"
            >Album</router-link
          >
        </li>
        <li>
          <router-link
            to="/cevianer/laedeli"
            v-on:click.native="onMobileNaviagation()"
            >Lädeli</router-link
          >
        </li>
        <li>
          <router-link
            to="/cevianer/ausbildung"
            v-on:click.native="onMobileNaviagation()"
            >Ausbildung</router-link
          >
        </li>
        <li>
          <router-link
            to="/cevianer/leiterteam"
            v-on:click.native="onMobileNaviagation()"
            >Leiterteam</router-link
          >
        </li>
      </ul>
    </li>
    <li>
      <router-link to="/kontakt" v-on:click.native="onMobileNaviagation()"
        >Kontakt</router-link
      >
    </li>
  </ul>
</template>

<style scoped lang="scss">
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

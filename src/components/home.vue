<template>
  <div class="flex-wrapper">
    <div
      class="background"
      v-bind:style="{
        'background-image': 'url(' + activeBackgroundImage + ')'
      }"
    >
      <img src="@/assets/home/claim.svg" class="claim" />
    </div>
    <div class="nav">
      <div
        class="nav-level1"
        :class="{
          'close-mobile-menu': !isMobileMenuOpen,
          'open-mobile-menu': isMobileMenuOpen
        }"
      >
        <a href="index.html">Hauptmenü</a>
        <ul class="main-menu">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/interessierte">Interessierte</router-link>
            <ul>
              <li>
                <router-link to="/interessierte/schnuppern"
                  >Schnuppern</router-link
                >
              </li>
              <li>
                <router-link to="/interessierte/aktivitaeten"
                  >Aktivitäten</router-link
                >
              </li>
              <li>
                <router-link to="/interessierte/cevi_schweiz"
                  >Cevi Schweiz</router-link
                >
              </li>
              <li>
                <router-link to="/interessierte/standort">Standort</router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link to="/interessierte">Cevianer/in</router-link>
            <ul>
              <li>
                <router-link to="/mitglieder/agenda">Agenda</router-link>
              </li>
              <li>
                <router-link to="/mitglieder/album">Album</router-link>
              </li>
              <li>
                <router-link to="/mitglieder/laedeli">Lädeli</router-link>
              </li>
              <li>
                <router-link to="/mitglieder/ausbildung"
                  >Ausbildung</router-link
                >
              </li>
              <li>
                <router-link to="/mitglieder/leiterteam"
                  >Leiterteam</router-link
                >
              </li>
            </ul>
          </li>
          <li>
            <router-link to="/kontakt">Kontakt</router-link>
          </li>
        </ul>
      </div>
      <div class="nav-level1">
        <router-link to="/interessierte">Interessierte</router-link>
        <ul class="table-menu">
          <li>
            <router-link to="/interessierte/schnuppern">Schnuppern</router-link>
          </li>
          <li>
            <router-link to="/interessierte/aktivitaeten"
              >Aktivitäten</router-link
            >
          </li>
          <li>
            <router-link to="/interessierte/cevi_schweiz"
              >Cevi Schweiz</router-link
            >
          </li>
          <li>
            <router-link to="/interessierte/standort">Standort</router-link>
          </li>
        </ul>
      </div>
      <div class="nav-level1">
        <router-link to="/mitglieder">Cevianer/in</router-link>
        <ul class="table-menu">
          <li>
            <router-link to="/mitglieder/agenda">Agenda</router-link>
          </li>
          <li>
            <router-link to="/mitglieder/album">Album</router-link>
          </li>
          <li>
            <router-link to="/mitglieder/laedeli">Lädeli</router-link>
          </li>
          <li>
            <router-link to="/mitglieder/ausbildung">Ausbildung</router-link>
          </li>
          <li>
            <router-link to="/mitglieder/leiterteam">Leiterteam</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
  data() {
    return {
      activeBackgroundImage: (process.env.VUE_APP_EXTERNAL_ASSETS_URI + "/home/background" +
        Math.floor(Math.random() * (10 - 1 + 1) + 1) +
        ".jpg")
    };
  },
  props: {
    isMobileMenuOpen: {
      type: Boolean,
      default: false
    }
  }
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
.flex-wrapper {
  display: flex;
  flex-flow: column;
  height: 100%;
}

.background {
  flex-grow: 1;
  background-size: cover;
  background-position: center;

  display: flex;
  justify-content: center;
  align-items: center;
}

.background .claim {
  width: 70%;
}

.nav {
  display: flex;
}

/* buttons at the bottom of the screen */
.nav-level1 {
  background: #323394;
  width: 33.33%;
  text-align: center;
  cursor: pointer;
}

.nav-level1:hover {
  background: #fff;
}

.nav-level1 a {
  color: #fff;
  text-transform: uppercase;
  line-height: 40px;
  font-size: 22px;
  text-decoration: none;
}

.nav-level1:hover a {
  color: #141412;
}

/* tabulated menu behind interessierte and cevianer/in */
.nav-level1:hover ul.table-menu {
  display: flex;
}

.nav-level1 ul.table-menu {
  display: none;
  list-style: none;
  top: 50px;
  bottom: 40px;
  flex-flow: row wrap;
  position: absolute;
  background: rgba(255, 255, 255, 0.8);
  width: 33.33%;
  margin: 0;
  padding: 0;
}

.nav-level1 ul.table-menu > li {
  width: 50%;
  border-bottom: 1px solid #000;
  overflow: hidden;
  box-sizing: border-box;
}

.nav-level1 ul.table-menu > li:nth-child(2n + 1) {
  border-right: 1px solid #000;
}

.nav-level1 ul.table-menu li a {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
}

.nav-level1 ul.table-menu li a:hover {
  background: #323394;
  color: #fff;
}

/* main-menu behind Hauptmenü */
.nav-level1 .main-menu {
  display: none;
  top: 50px;
  bottom: 40px;
  position: absolute;
  background: rgba(255, 255, 255, 0.8);
  width: 33.33%;
  margin: 0;
  overflow: auto;
  font-weight: bold;
  text-align: left;
  padding-left: 2em;
  padding-right: 2em;
  box-sizing: border-box;
  padding-top: 1em;
}

.nav-level1 .main-menu li {
  list-style: none;
  padding-left: 40px;
}

.nav-level1:hover .main-menu {
  display: block;
}

.nav-level1 .main-menu ul li {
  font-weight: normal;
  border: none;
}

.nav-level1 .main-menu li {
  border-bottom: 1px solid black;
}

.nav-level1 .main-menu a:link,
.nav-level1 .main-menu a:visited {
  color: #141412;
  text-decoration: none;
  font-size: 18px;
}

.nav-level1 .main-menu a:hover {
  color: #c41333;
}

/* mobile */
@media only screen and (max-width: 768px) {
  .nav-level1:first-child {
    position: absolute;
    top: 50px;
    bottom: 40px;
    width: 70%;
  }

  .close-mobile-menu {
    display: none;
  }

  .open-mobile-menu {
    display: block;
  }

  .nav-level1:first-child > a {
    display: none;
  }

  .nav-level1 .main-menu {
    display: block;
    width: 100%;
    background: white;
    top: 0px;
    bottom: 0px;
  }

  .nav-level1 {
    width: 50%;
  }

  .nav-level1 ul.table-menu {
    width: 50%;
  }
}
</style>

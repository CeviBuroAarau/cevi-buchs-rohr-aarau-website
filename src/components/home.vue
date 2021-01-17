<template>
  <div class="flex-wrapper">
    <div
      class="background"
      v-bind:style="{
        'background-image': 'url(' + activeBackgroundImage + ')',
      }"
    >
      <img src="@/assets/home/claim.svg" class="claim" />
    </div>
    <div class="nav">
      <div
        class="nav-level1"
        :class="{
          'close-mobile-menu': !isMobileMenuOpen,
          'open-mobile-menu': isMobileMenuOpen,
        }"
      >
        <a href="#" class="main_menu_link">Hauptmenü</a>
        <ul class="main-menu">
          <li>
            <router-link to="#">Home</router-link>
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
              <li>
                <router-link to="/interessierte/medien">Medien</router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link to="/interessierte">Cevianer/in</router-link>
            <ul>
              <li>
                <router-link to="/cevianer/agenda">Agenda</router-link>
              </li>
              <li>
                <router-link to="/cevianer/album">Album</router-link>
              </li>
              <li>
                <router-link to="/cevianer/laedeli">Lädeli</router-link>
              </li>
              <li>
                <router-link to="/cevianer/ausbildung">Ausbildung</router-link>
              </li>
              <li>
                <router-link to="/cevianer/leiterteam">Leiterteam</router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link to="/kontakt">Kontakt</router-link>
          </li>
        </ul>
      </div>
      <div class="nav-level1">
        <p class="interessierte_info">
          Ich habe Interesse in den Cevi zu kommen
        </p>
        <router-link
          class="interessierte_link"
          :to="interessierteLinkTo"
          @mouseover.native="onMobileNaviagation()"
          v-on:click.native="onMobileNaviagation()"
          >{{ interessierteLinkText }}</router-link
        >
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
          <li>
            <router-link to="/interessierte/medien">Medien</router-link>
          </li>
        </ul>
      </div>
      <div class="nav-level1">
        <p class="cevianer_info">Ich bin schon dabei</p>
        <router-link
          class="cevianer_link"
          :to="cevianerLinkTo"
          @mouseover.native="onMobileNaviagation()"
          v-on:click.native="onMobileNaviagation()"
          >{{ cevianerLinkText }}</router-link
        >
        <ul class="table-menu">
          <li>
            <router-link to="/cevianer/agenda">Agenda</router-link>
          </li>
          <li>
            <router-link to="/cevianer/album">Album</router-link>
          </li>
          <li>
            <router-link to="/cevianer/laedeli">Lädeli</router-link>
          </li>
          <li>
            <router-link to="/cevianer/ausbildung">Ausbildung</router-link>
          </li>
          <li>
            <router-link to="/cevianer/leiterteam">Leiterteam</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

export default Vue.extend({
  name: "Home",
  data() {
    return {
      activeBackgroundImage:
        process.env.VUE_APP_EXTERNAL_ASSETS_URI +
        "/home/background" +
        Math.floor(Math.random() * (10 - 1 + 1) + 1) +
        ".webp",
      cevianerLinkText: "Cevianer/In",
      interessierteLinkText: "Interessierte",
      cevianerLinkTo: "/cevianer",
      interessierteLinkTo: "/interessierte",
    };
  },
  props: {
    isMobileMenuOpen: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
      this.onResize();
    });
  },
  methods: {
    onMobileNaviagation() {
      this.$emit("mobileOpenChanged", false);
    },
    onResize() {
      if (window.innerWidth <= 768) {
        this.cevianerLinkText = "Mehr Info";
        this.interessierteLinkText = "Mehr Info";
        this.cevianerLinkTo = "/cevianer";
        this.interessierteLinkTo = "/interessierte";
      } else {
        this.cevianerLinkText = "Cevianer/In";
        this.interessierteLinkText = "Interessierte";
        this.cevianerLinkTo = "#";
        this.interessierteLinkTo = "#";
      }
    },
  },
});
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
  background: rgba(0, 0, 0, 0.3);
  width: 33.33%;
  text-align: center;
  cursor: pointer;
}

/* hide the text for the regular view */
.nav-level1 > p {
  display: none;
}

.nav-level1:hover {
  background: #fff;
}

/* menu buttons and link in menu */
.nav-level1 a {
  color: #fff;
  text-transform: uppercase;
  line-height: 36px;
  font-size: 20px;
  text-decoration: none;
}

/* menu buttons  */
.nav-level1 > a {
  background: #323394;
  color: white;
  border: 1px solid darken(#323394, 50%);
  box-shadow: inset 0 -4px 0 0 rgba(0, 0, 0, 0.2);
  display: block;
  text-decoration: underline;
  margin: 2px;
}

.nav-level1 > a:hover {
  background: white;
  color: black;
  border: 1px solid darken(#323394, 50%);
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
  width: 100%;
  margin: 0;
  padding: 0;
  left: 0;
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
  color: black;
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
  width: 100%;
  margin: 0;
  overflow: auto;
  font-weight: bold;
  text-align: left;
  padding-left: 2em;
  padding-right: 2em;
  box-sizing: border-box;
  padding-top: 1em;
  left: 0;
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
    top: 0px;
    bottom: 0px;
    width: 100%;
  }

  .nav-level1 {
    background: rgba(0, 0, 0, 0.5);
    width: 80%;
    text-align: center;
    cursor: pointer;
    padding: 1rem;
  }

  .nav-level1:hover {
    background: rgba(0, 0, 0, 0.5);
    cursor: auto;
  }

  .nav-level1 p {
    color: white;
    font-size: 1.5em;
    font-weight: bold;
    margin-bottom: 1em;
  }

  .nav-level1 > a {
    background: #323394;
    color: white;
    border: 1px solid darken(#323394, 50%);
    padding: 0.5rem;
    display: inline;
    text-decoration: none;
    box-shadow: inset 0 -4px 0 0 rgba(0, 0, 0, 0.2);
  }

  .nav-level1 > a:hover {
    background: white;
    color: black;
    border: 1px solid darken(#323394, 50%);
  }

  .nav-level1:hover a {
    cursor: pointer;
  }

  .nav-level1:hover ul.table-menu {
    display: none;
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

  .claim {
    display: none;
  }

  .nav-level1 > p {
    display: block;
    color: white;
  }

  .nav {
    position: absolute;
    top: 0px;
    padding-top: 50px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  .nav-level1 .main-menu {
    padding-top: 60px;
  }
}
</style>

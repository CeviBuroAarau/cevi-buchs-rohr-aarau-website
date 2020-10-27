<script>
export default {
  name: "Navigation",
  components: {},
  data() {
    return {
      activeBackgroundImage:
        process.env.VUE_APP_EXTERNAL_ASSETS_URI + "/home/background8.jpg",
    };
  },
  props: {
    isMobileMenuOpen: {
      type: Boolean,
      default: false,
    },
  },
};
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
      <router-link to="/interessierte">Interessierte</router-link>
      <ul>
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
    </li>
    <li>
      <router-link to="/cevianer">Cevianer/in</router-link>
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
  background: url("../assets/navigation/background.jpg");
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
}

.main-menu ul li {
  font-weight: normal;
  border: none;
  padding-left: 40px;
}

.main-menu li {
  border-bottom: 1px solid black;
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
    width: 50%;
    margin: 0;
    padding: 2em;
    font-weight: bold;
    text-align: left;
    box-sizing: border-box;
    position: absolute;
    background: white;
    z-index: 1;
  }

  .close-mobile-menu {
    display: none;
  }

  .open-mobile-menu {
    display: block;
    /* otherwise it is partially overlapped by the agenda and the map */
    z-index: 999;
  }
}
</style>

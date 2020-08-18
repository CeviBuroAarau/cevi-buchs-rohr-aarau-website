<script>
export default {
  name: "HeaderBar",
  components: {},
  data() {
    return {
      showNav: false
    };
  }
};
</script>

<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="@/assets/logo.svg" />
      </a>

      <a
        role="button"
        @click="showNav = !showNav"
        :class="{ 'is-active': showNav }"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbar"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbar" class="navbar-menu" :class="{ 'is-active': showNav }">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/">Home</router-link>

        <div class="navbar-item has-dropdown is-hoverable">
          <router-link class="navbar-link" to="/interessierte"
            >Interessierte</router-link
          >

          <div class="navbar-dropdown">
            <router-link class="navbar-item" to="/interessierte/schnuppern"
              >Schnuppern</router-link
            >
            <router-link class="navbar-item" to="/interessierte/aktivitaeten"
              >Aktivitäten</router-link
            >
            <router-link class="navbar-item" to="/interessierte/cevi_schweiz"
              >Cevi Schweiz</router-link
            >
            <router-link class="navbar-item" to="/interessierte/standort"
              >Standort</router-link
            >
          </div>
        </div>

        <div class="navbar-item has-dropdown is-hoverable">
          <router-link class="navbar-link" to="/mitglieder"
            >Mitglieder</router-link
          >

          <div class="navbar-dropdown">
            <router-link class="navbar-item" to="/mitglieder/agenda"
              >Agenda</router-link
            >
            <router-link class="navbar-item" to="/mitglieder/album"
              >Album</router-link
            >
            <router-link class="navbar-item" to="/mitglieder/laedeli"
              >Lädeli</router-link
            >
            <router-link class="navbar-item" to="/mitglieder/ausbildung"
              >Ausbildung</router-link
            >
            <router-link class="navbar-item" to="/mitglieder/leiterteam"
              >Leiterteam</router-link
            >
          </div>
        </div>

        <router-link class="navbar-item" to="/kontakt">Kontakt</router-link>
      </div>
    </div>
  </nav>
</template>

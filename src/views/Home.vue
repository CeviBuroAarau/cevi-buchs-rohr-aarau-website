<template>
  <section class="section">
    <div class="container">
      <h1 class="title">Herzlich Willkommen</h1>
      <h2 class="subtitle">bei der Cevi Jungschar Buchs-Rohr Aarau</h2>
      <p>
        Wir erleben
        <router-link to="/mitglieder/agenda"
          >jeden zweiten Samstag Nachmittag</router-link
        >
        gemeinsam
        <router-link to="/interessierte/aktivitaeten"
          >spannende Erlebnisse in der Natur</router-link
        >. Alle Kinder ab 5 Jahren sind herzlich eingeladen jederzeit kostenlos
        und unverbindlich
        <router-link to="/interessierte/schnuppern">reinschnuppern</router-link
        >.
      </p>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Home extends Vue {}
</script>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class NotFound extends Vue {}
</script>

<template>
  <section class="section">
    <div class="container">
      <h1 class="title is-1">Ups, da ist was schief gegangen</h1>
      <p class="content">
        Leider können wir die aufgerufene Seite nicht finden.
      </p>
    </div>
  </section>
</template>

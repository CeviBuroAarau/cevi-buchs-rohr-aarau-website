<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Leader } from "@/types";

export default defineComponent({
  name: "LeiterDetail",
  props: {
    leiter: {
      type: Object as PropType<Leader>,
      default: null,
    },
  },
  emits: ["onLeiterOpened", "onLeiterClosed"],
  data() {
    return {
      display: false,
    };
  },
  methods: {
    open(): void {
      this.display = true;
      this.$emit("onLeiterOpened");
    },
    close(): void {
      this.display = false;
      this.$emit("onLeiterClosed");
    },
  },
});
</script>

<template>
  <div
    v-if="leiter != null"
    class="modal"
    :class="{
      'is-active': display,
    }"
  >
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">
          {{ leiter.name + " v/o " + leiter.scoutname }}
        </p>
        <button class="delete" aria-label="close" v-on:click="close()"></button>
      </header>
      <section class="modal-card-body">
        <img :src="leiter.file" :alt="leiter.scoutname" />
        <table
          class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth"
          role="presentation"
        >
          <tbody>
            <tr>
              <td>Funktion</td>
              <td>{{ leiter.function.join(", ") }}</td>
            </tr>
            <tr>
              <td>Gruppe</td>
              <td>{{ leiter.group }}</td>
            </tr>
            <tr>
              <td>Jahrgang</td>
              <td>{{ leiter.birthyear }}</td>
            </tr>
            <tr>
              <td>Wohnort</td>
              <td>{{ leiter.place }}</td>
            </tr>
            <tr>
              <td>Beruf/Schule</td>
              <td>{{ leiter.profession }}</td>
            </tr>
            <tr>
              <td>Hobbys</td>
              <td>{{ leiter.recreation }}</td>
            </tr>
            <tr>
              <td>In der Jungschi seit</td>
              <td>{{ leiter.inScoutsSince }}</td>
            </tr>
            <tr>
              <td>In der Jungschi weil</td>
              <td>{{ leiter.inScoutsBecause }}</td>
            </tr>
            <tr>
              <td>Tollste Cevi Erlebnisse</td>
              <td>{{ leiter.bestExperiences }}</td>
            </tr>
          </tbody>
        </table>
      </section>
      <footer class="modal-card-foot">
        <button class="button" v-on:click="close()">Schliessen</button>
      </footer>
    </div>
  </div>
</template>

<style scoped lang="scss">
.modal {
  z-index: 1050; /* headerbar has a z-index of 1001 */
}
</style>

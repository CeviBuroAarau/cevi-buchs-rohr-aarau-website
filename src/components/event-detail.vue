<script lang="ts">
import { defineComponent } from "vue";
import { EventInfo, FormState } from "@/types";

export default defineComponent({
  name: "EventDetail",
  emits: ["onEventOpened", "onEventClosed"],
  data() {
    return {
      eventInfo: null as EventInfo | null,
      state: FormState.NotDisplayed,
      FormState: FormState,
    };
  },
  methods: {
    open(eventInfo: EventInfo): void {
      this.eventInfo = eventInfo;
      this.state = FormState.Displayed;
      this.$emit("onEventOpened");
    },
    close(): void {
      this.state = FormState.NotDisplayed;
      this.$emit("onEventClosed");
    },
  },
});
</script>

<template>
  <div
    v-if="eventInfo != null"
    class="modal"
    :class="{
      'is-active': this.state == FormState.Displayed,
    }"
  >
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">
          <span>Informationen für {{ eventInfo.scope }}</span>
        </p>
        <button class="delete" aria-label="close" v-on:click="close()"></button>
      </header>
      <section class="modal-card-body">
        <div v-html="eventInfo.text"></div>
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

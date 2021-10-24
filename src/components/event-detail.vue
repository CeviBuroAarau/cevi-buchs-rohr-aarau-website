<script lang="ts">
import { Component, Emit, Vue } from "vue-property-decorator";
import { EventInfo, FormState } from "@/types";

@Component({})
export default class EventDetail extends Vue {
  private eventInfo: EventInfo | null = null;
  private state: FormState = FormState.NotDisplayed;
  public FormState = FormState;

  @Emit("onEventOpened")
  public open(eventInfo: EventInfo) {
    this.eventInfo = eventInfo;
    this.state = FormState.Displayed;
  }

  @Emit("onEventClosed")
  public close() {
    this.state = FormState.NotDisplayed;
  }
}
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

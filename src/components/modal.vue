<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Modal extends Vue {
  @Prop({}) title!: string;
  @Prop({}) message!: string;
  @Prop({}) type!: string;

  private display = false;

  public open() {
    this.display = true;
  }

  public close() {
    this.display = false;
  }
}
</script>

<style scoped lang="scss">
.modal {
  z-index: 1050; /* headerbar has a z-index of 1001 */
}
</style>

<template>
  <div
    class="modal"
    :class="{
      'is-active': display,
    }"
  >
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{ title }}</p>
      </header>
      <section class="modal-card-body">
        <div
          class="notification"
          :class="{
            'is-danger': type === 'error',
          }"
        >
          {{ message }}
        </div>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success" v-on:click="close()">OK</button>
      </footer>
    </div>
  </div>
</template>

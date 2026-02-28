<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Modal",
  props: {
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      display: false,
    };
  },
  methods: {
    open(): void {
      this.display = true;
    },
    close(): void {
      this.display = false;
    },
  },
});
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

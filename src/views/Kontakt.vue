<script lang="ts">
import { ErrorReportingService, KontaktService } from "@/services";
import { AxiosUtil } from "@/utils";
import Modal from "@/components/modal.vue";

import { Component, Ref, Vue } from "vue-property-decorator";

@Component({
  components: {
    Modal,
  },
})
export default class Kontakt extends Vue {
  @Ref("successModal") readonly successModal!: Modal;
  @Ref("errorModal") readonly errorModal!: Modal;

  private name = "";
  private email = "";
  private message = "";

  send() {
    const service: KontaktService = new KontaktService(
      AxiosUtil.getCockpitInstance()
    );
    const errorService: ErrorReportingService = new ErrorReportingService();

    service
      .submitForm({
        form: {
          name: this.name,
          email: this.email,
          message: this.message,
        },
      })
      .then(() => {
        this.successModal.open();
        this.name = "";
        this.email = "";
        this.message = "";
      })
      .catch((err) => {
        this.errorModal.open();
        errorService.report(err);
      });
  }
}
</script>

<template>
  <section class="section">
    <div class="container">
      <h1 class="title is-1">Kontakt</h1>
      <div class="content">
        <div class="field">
          <label for="name" class="label">Name</label>
          <div class="control has-icons-left">
            <input
              class="input"
              type="text"
              id="name"
              placeholder=""
              v-model="name"
            />
            <span class="icon is-small is-left">
              <span class="fas fa-user"></span>
            </span>
          </div>
        </div>

        <div class="field">
          <label for="email" class="label">Email</label>
          <div class="control has-icons-left">
            <input
              class="input"
              for="email"
              type="email"
              placeholder=""
              v-model="email"
            />
            <span class="icon is-small is-left">
              <span class="fas fa-envelope"></span>
            </span>
          </div>
        </div>

        <div class="field">
          <label for="message" class="label">Nachricht</label>
          <div class="control">
            <textarea
              for="message"
              class="textarea"
              placeholder=""
              v-model="message"
            ></textarea>
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button
              class="button is-link"
              :disabled="!name || !email || !message"
              v-on:click="send()"
            >
              Nachricht senden
            </button>
          </div>
        </div>
      </div>

      <modal
        title="Danke für die Anfrage"
        message="Wir beantworten Ihre Anfrage in der Regel innert 2 Arbeitstagen."
        ref="successModal"
      ></modal>

      <modal
        title="Anfrage fehlgeschlagen"
        message="Senden des Formulars fehlgeschlagen. Bitte versuchen Sie es später
            nocheinmal."
        type="error"
        ref="errorModal"
      ></modal>
    </div>
  </section>
</template>

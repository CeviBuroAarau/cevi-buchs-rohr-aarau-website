<script lang="ts">
import { defineComponent } from "vue";
import { ErrorReportingService, SchnuppernService } from "@/services";
import { AxiosUtil } from "@/utils";
import { SchnuppernFormState } from "@/types";
import Modal from "@/components/modal.vue";

export default defineComponent({
  name: "SchnuppernForm",
  components: {
    Modal,
  },
  emits: ["onFormOpened", "onFormClosed"],
  data() {
    return {
      state: SchnuppernFormState.NotDisplayed,
      name: "",
      email: "",
      phonenumber: "",
      message: "",
      SchnuppernFormState: SchnuppernFormState,
      service: new SchnuppernService(
        AxiosUtil.getCockpitInstance(),
      ) as SchnuppernService,
      errorService: new ErrorReportingService() as ErrorReportingService,
    };
  },
  methods: {
    async subscribe(): Promise<void> {
      try {
        await this.service.submitForm({
          form: {
            name: this.name,
            email: this.email,
            phonenumber: this.phonenumber,
            message: this.message,
          },
        });
        this.state = SchnuppernFormState.NotDisplayed;
        (this.$refs.successModal as InstanceType<typeof Modal>).open();
        this.name = "";
        this.email = "";
        this.message = "";
      } catch (err) {
        this.state = SchnuppernFormState.NotDisplayed;
        (this.$refs.errorModal as InstanceType<typeof Modal>).open();
        this.errorService.report(err);
      }
    },
    showSubscriptionForm(): void {
      this.state = SchnuppernFormState.Displayed;
      this.$emit("onFormOpened");
    },
    close(): void {
      this.state = SchnuppernFormState.NotDisplayed;
      this.$emit("onFormClosed");
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
  <div>
    <div
      class="modal"
      :class="{
        'is-active': state == SchnuppernFormState.Displayed,
      }"
    >
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Anmelden zum Schnuppern</p>
          <button
            class="delete"
            aria-label="close"
            v-on:click="close()"
          ></button>
        </header>
        <section class="modal-card-body">
          <div class="notification is-info">
            Bitte füllen Sie alle Felder des Formulars aus.
          </div>
          <div class="field">
            <label for="name" class="label">Name</label>
            <div class="control has-icons-left">
              <input
                class="input"
                type="text"
                id="name"
                v-model="name"
                placeholder=""
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
                type="email"
                id="email"
                v-model="email"
                placeholder=""
                value=""
              />
              <span class="icon is-small is-left">
                <span class="fas fa-envelope"></span>
              </span>
            </div>
          </div>

          <div class="field">
            <label for="phonenumber" class="label">Telefonnummer</label>
            <div class="control has-icons-left">
              <input
                class="input"
                type="text"
                id="phonenumer"
                v-model="phonenumber"
                placeholder=""
                value=""
              />
              <span class="icon is-small is-left">
                <span class="fas fa-phone"></span>
              </span>
            </div>
          </div>

          <div class="field">
            <label for="message" class="label"
              >Nachricht (z. B. Anzahl und Alter der Kinder, gewünschtes
              Schnupperdatum)</label
            >
            <div class="control">
              <textarea
                class="textarea"
                id="message"
                v-model="message"
                placeholder=""
              ></textarea>
            </div>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button
            class="button is-success"
            :disabled="!name || !email || !phonenumber || !message"
            v-on:click="subscribe()"
          >
            Anmeldung senden
          </button>
          <button class="button" v-on:click="close()">Abbrechen</button>
        </footer>
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
</template>

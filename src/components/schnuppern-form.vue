<script lang="ts">
import { ErrorReportingService, SchnuppernService } from "@/services";
import { Component, Vue } from "vue-property-decorator";
import { AxiosUtil } from "@/utils";
import { SchnuppernFormState } from "@/types";

@Component
export default class SchnuppernForm extends Vue {
  private state: SchnuppernFormState = SchnuppernFormState.NotDisplayed;
  private name = "";
  private email = "";
  private phonenumber = "";
  private message = "";
  public SchnuppernFormState = SchnuppernFormState;

  subscribe() {
    const service: SchnuppernService = new SchnuppernService(
      AxiosUtil.getCockpitInstance()
    );
    const errorService: ErrorReportingService = new ErrorReportingService();

    service
      .submitForm({
        form: {
          name: this.name,
          email: this.email,
          phonenumber: this.phonenumber,
          message: this.message,
        },
      })
      .then(() => {
        this.state = SchnuppernFormState.Success;
        this.name = "";
        this.email = "";
        this.message = "";
      })
      .catch((err) => {
        this.state = SchnuppernFormState.Error;
        errorService.report(err);
      });
  }

  public showSubscriptionForm() {
    this.state = SchnuppernFormState.Displayed;
  }

  close() {
    this.state = SchnuppernFormState.NotDisplayed;
  }
}
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
            v-on:click="closePopups()"
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
              >Nachricht (z. B. Alter des Kindes, gewünschtes
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

    <div
      class="modal"
      :class="{
        'is-active': state == SchnuppernFormState.Success,
      }"
    >
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Danke für die Anfrage</p>
        </header>
        <section class="modal-card-body">
          Wir beantworten Ihre Anfrage in der Regel innert 2 Arbeitstagen.
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success" v-on:click="close()">OK</button>
        </footer>
      </div>
    </div>

    <div
      class="modal"
      :class="{
        'is-active': state == SchnuppernFormState.Error,
      }"
    >
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Anfrage fehlgeschlagen</p>
        </header>
        <section class="modal-card-body">
          <div class="notification is-danger">
            Senden des Formulars fehlgeschlagen. Bitte versuchen Sie es später
            nocheinmal.
          </div>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success" v-on:click="close()">OK</button>
        </footer>
      </div>
    </div>
  </div>
</template>

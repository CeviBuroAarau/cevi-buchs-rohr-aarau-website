<script lang="ts">
import { ErrorReportingService, KontaktService } from "@/services";
import { AxiosUtil } from "@/utils";

import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Kontakt extends Vue {
  private displaySuccess = false;
  private displayError = false;
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
        this.displayError = false;
        this.displaySuccess = true;
        this.name = "";
        this.email = "";
        this.message = "";
      })
      .catch((err: any) => {
        this.displayError = true;
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

      <div
        class="modal"
        :class="{
          'is-active': displaySuccess,
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
            <button
              class="button is-success"
              v-on:click="displaySuccess = false"
            >
              OK
            </button>
          </footer>
        </div>
      </div>

      <div
        class="modal"
        :class="{
          'is-active': displayError,
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
            <button class="button is-success" v-on:click="displayError = false">
              OK
            </button>
          </footer>
        </div>
      </div>
    </div>
  </section>
</template>

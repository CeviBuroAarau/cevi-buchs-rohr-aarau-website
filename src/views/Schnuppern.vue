<script>
import axios from "axios";

export default {
  components: {},
  data() {
    return {
      displayForm: false,
      displaySuccess: false,
      displayError: false,
      name: "",
      email: "",
      phonenumber: "",
      message: "",
    };
  },
  methods: {
    subscribe() {
      const instance = axios.create({
        baseURL: "https://backend.cevi-buro-aarau.ch/api",
        timeout: 10000,
        headers: { "Content-Type": "application/json" },
      });

      instance
        .post(
          "/forms/submit/join",
          {
            form: {
              name: this.name,
              email: this.email,
              phonenumber: this.phonenumber,
              message: this.message,
            },
          },
          {
            headers: {
              Authorization: "Bearer 1d9b8fc0beb2a3d5ceb254c4b49c02",
            },
          }
        )
        .then(() => {
          this.displayForm = false;
          this.displaySuccess = true;
          this.name = "";
          this.email = "";
          this.message = "";
        })
        .catch((err) => {
          console.log(err);
          this.displayError = true;
        });
    },
  },
};
</script>

<style scoped lang="scss">
.modal {
  z-index: 1050; /* headerbar has a z-index of 1001 */
}
</style>

<template>
  <section class="section">
    <div class="container">
      <h1 class="title is-1">Schnuppern</h1>
      <h2 class="title is-2">Wer sind wir?</h2>
      <p class="content">
        Wir sind ein lokaler Verein, welcher zum drittgrössten Jugendverband der
        Schweiz dem
        <router-link to="/interessierte/cevi_schweiz">Cevi</router-link> gehört.
        Wir möchten Kindern
        <router-link to="/interessierte/aktivitaeten"
          >spannende Erlebnisse in der Natur ermöglichen</router-link
        >, beibringen sorgsam mit der Umwelt umzugehen. Ausserdem unterstützen
        wir Kinder und Jugendliche dabei, ihr Leben sinnvoll zu gestalten und in
        der Gesellschaft Verantwortung zu übernehmen.
      </p>
      <h2 class="title is-2">Wie sind wir aufgebaut?</h2>
      <p class="content">
        Die Kinder werden je nach Alter in Geschlechter-gemischte Gruppen
        eingeteilt, welche von mind. zwei Leitern geleitet wird. Aktuell führen
        wir folgende zwei Gruppen:
      </p>
      <div class="content">
        <ul class="content">
          <li>Kinder von 5-10: Schleckmäuler</li>
          <li>Kinder ab 11 Jahren: Spartacus</li>
        </ul>
      </div>
      <h2 class="title is-2">Wo finden die Nachmittage statt?</h2>
      <p class="content">
        Unser Hauptstandort ist das
        <router-link to="/interessierte/standort"
          >Pfarrhaus Ausserdorf</router-link
        >. Von dort aus gehen wir in der Regel in den nahe gelegenen Buchser
        Wald. Ausnahmsweise kann sich der Besammlungsort ändern. Dies ist
        jeweils in der
        <router-link to="/cevianer/agenda">Agenda</router-link> ersichtlich und
        wird kommuniziert.
      </p>
      <h2 class="title is-2">Was muss ich mitnehmen?</h2>
      <p class="content">
        An einem normalen Nachmittag benötigt das Kind folgendes Material:
      </p>
      <div class="content">
        <ul class="content">
          <li>Ein kleines Getränk</li>
          <li>Etwas kleines zum Essen (Z'vieri)</li>
          <li>Ein Sackmesser</li>
          <li>Dem Wetter angepasste Kleider und Schuhe</li>
        </ul>
      </div>
      <h2 class="title is-2">Wie gewährleisten wir die Sicherheit?</h2>
      <p class="content">
        Undere Gruppenleiter werden in einem von J+S (Jugend und Sport,
        Bundesamt für Sport) anerkannten Kurs ausgebildet. Zusätzlich wird
        dieser durch mind. einen in der Regel aber mehreren weiteren Leiter
        unterstützt, welche ebenfalls den Gruppenleiterkurs oder den
        Hilfsleiterkurs absolviert haben.
      </p>
      <p class="content">
        Wir berücksichtigen bei unseren Aktivitäten Wettervorhersagen (z. B.
        Sturmwarnungen) aber auch Verordnungen der Behörden (z. B. Feuerverbot).
        Die Abteilung verfügt über ein Notfallkonzept und für kleine Notfälle
        ist immer eine Apotheke dabei. Alle Leiter verfügen über Mobiltelefone
        und der Cevi Schweiz betreibt ein Krisen-Telefon zur Unterstützung bei
        Notfällen.
      </p>
      <h2 class="title is-2">Wieviel beträgt der Jahresbeitrag?</h2>
      <p class="content">
        Der Jahresbeitrag beträgt 80 Fr. pro Kind. Bei einem Eintritt im
        laufenden Jahr wird der Beitrag anteilsmässig gekürzt.
      </p>
      <h2 class="title is-2">Anmeldung</h2>
      <p class="content">
        Hast Du Lust vorbeizuschauen? Die ersten zwei Schnuppernachmittage sind
        kostenlos und unverbindlich. Danach kannst Du Dich entscheiden ob Du
        dabei sein möchtest oder nicht.
      </p>
      <button v-on:click="displayForm = true" class="button is-link">
        Anmelden zum Schnuppern
      </button>

      <div
        class="modal"
        :class="{
          'is-active': displayForm,
        }"
      >
        <div class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">Anmelden zum Schnuppern</p>
            <button
              class="delete"
              aria-label="close"
              v-on:click="displayForm = false"
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
                  <i class="fas fa-user"></i>
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
                  <i class="fas fa-envelope"></i>
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
                  <i class="fas fa-phone"></i>
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
            <button class="button" v-on:click="displayForm = false">
              Abbrechen
            </button>
          </footer>
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

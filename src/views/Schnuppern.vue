<script lang="ts">
import { Component, Vue, Ref } from "vue-property-decorator";
import SchnuppernForm from "@/components/schnuppern-form.vue";

@Component({
  components: {
    SchnuppernForm,
  },
})
export default class Schnuppern extends Vue {
  @Ref("schnuppernForm") readonly schnuppernForm!: SchnuppernForm;

  showSubscriptionForm() {
    this.schnuppernForm.showSubscriptionForm();
  }
}
</script>

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
        laufenden Jahr wird der Beitrag anteilsmässig gekürzt. Die ersten zwei
        Schnuppernachmittage sind kostenlos.
      </p>
      <h2 class="title is-2">Anmeldung</h2>
      <p class="content">
        Hast Du Lust vorbeizuschauen? Die ersten zwei Schnuppernachmittage sind
        kostenlos und unverbindlich. Danach kannst Du Dich entscheiden ob Du
        dabei sein möchtest oder nicht.
      </p>
      <button v-on:click="showSubscriptionForm()" class="button is-link">
        Anmelden zum Schnuppern
      </button>
      <schnuppern-form ref="schnuppernForm"></schnuppern-form>
    </div>
  </section>
</template>

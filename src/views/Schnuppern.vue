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
  private isFormDisplayed = false;

  showSubscriptionForm() {
    this.schnuppernForm.showSubscriptionForm();
  }

  onFormOpened() {
    this.isFormDisplayed = true;
  }

  onFormClosed() {
    this.isFormDisplayed = false;
  }
}
</script>

<template>
  <section class="section">
    <schnuppern-form
      @onFormClosed="onFormClosed()"
      @onFormOpened="onFormOpened()"
      ref="schnuppernForm"
    ></schnuppern-form>

    <div class="container" v-bind:class="{ noPrint: isFormDisplayed }">
      <h1 class="title is-1">Schnuppern</h1>

      <h2 class="title is-2">Anmeldung</h2>
      <p class="content">
        Hast Du Lust vorbeizuschauen? Die ersten zwei Schnuppernachmittage sind
        kostenlos und unverbindlich. Danach kannst Du Dich entscheiden ob Du
        dabei sein möchtest oder nicht.
      </p>
      <p class="content">
        <button v-on:click="showSubscriptionForm()" class="button is-link">
          Anmeldeformular anzeigen
        </button>
      </p>
      <p class="content">
        Untenstehend findest du weitere Informationen und Antworten auf häufige
        Fragen.
      </p>

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
      <p class="content">
        Zu diesem Zweck treffen wir uns ca. alle zwei Wochen (Samstag) und
        erleben gemeinsam im Wald einen tollen Nachmittag.
      </p>

      <h2 class="title is-2">Was machen wir?</h2>
      <p class="content">
        Unter
        <router-link to="/interessierte/aktivitaeten">Aktivitäten</router-link>
        findest du eine Zusammenstellung von möglichen Programmelementen.
      </p>
      <p class="content">
        Meistens bildet eine spannende Geschichte den Rahmen. Ein gutes
        Ceviprogramm ist vielfältig: Spielen, die Natur kennenlernen, Feuer
        machen, Erste Hilfe, Basteln, Karten lesen, Theater spielen, Zelte
        aufbauen, Musik machen und vieles mehr kann auf dem Programm stehen.
        Dabei kommen die Kinder und Jugendlichen ganzheitlich zum Zug: mit Kopf
        (nachdenken, lernen), Herz (gemeinsam) und Hand (praktische Tätigkeit)
      </p>

      <h2 class="title is-2">Wie sind wir aufgebaut?</h2>
      <p class="content">
        Die Kinder werden je nach Alter in Geschlechter-gemischte Gruppen
        eingeteilt, welche von mind. zwei Leitern geleitet wird. Dies ermöglicht
        uns altersgerechte Erlebnisse anzubieten. Aktuell führen wir folgende
        drei Gruppen:
      </p>
      <div class="content">
        <ul class="content">
          <li>Kinder von 4-7: Fröschli</li>
          <li>Kinder von 8-10: Schleckmäuler</li>
          <li>Kinder ab 11 Jahren: Spartacus</li>
        </ul>
      </div>
      <p class="content">
        Die Leiter werden in folgende Funktionen aufgeteilt:
      </p>
      <div class="content">
        <ul class="content">
          <li>
            Hilfsleiter (15 - 17 Jahre): Übernehmen einzelne Elemente eines
            Programms. Sie werden dafür in einem regionalen Cevi Kurs
            ausgebildet.
          </li>
          <li>
            Gruppenleiter (ab 18 Jahre): Übernehmen die Verantwortung für ein
            ganzes Nachmittagsprogramm. Sie werden dafür in einem J+S-Kurs
            ausgebildet.
          </li>
          <li>
            Abteilungsleiter (ab 18 Jahren): Übernehmen die Verantwortung für
            das Jahresprogramm und alles was über die Gruppengrenzen hinausgeht
            (z. B. Umsetzung Sicherheitsstandards von Cevi Schweiz)
          </li>
        </ul>
      </div>
      <p class="content">
        Daneben gibt es noch verschiedene andere Aufgaben wie z. B.
        Materialverantwortlicher oder Webseitenbetreuer.
      </p>
      <p class="content">
        Alle Leiter sind ehrenamtlich tätig. Junge sollen junge leiten und ihre
        eigenen Ideen und Vorstellungen einbringen. Sie lernen Schritt für
        Schritt Verantwortung zu übernehmen und entwickeln Ihre Persönlichkeit
        weiter.
      </p>

      <h2 class="title is-2">Was machen wir?</h2>
      <p class="content">
        Unter
        <router-link to="/interessierte/aktivitaeten">Aktivitäten</router-link>
        findest du eine Zusammenstellung von möglichen Programmelementen.
      </p>

      <h2 class="title is-2">Wann treffen wir uns?</h2>
      <p class="content">
        Die regulären Programme finden jeweils samstags von 14:00 - 17:00 Uhr
        statt. In der
        <router-link to="cevianer/agenda">Agenda</router-link> findest du die
        nächsten Termine und jeweils einige Tage vor dem Termin detailliertere
        Informationen pro Gruppe
      </p>

      <h2 class="title is-2">Wo finden die Nachmittage statt?</h2>
      <p class="content">
        Unser Hauptstandort ist das
        <router-link to="/interessierte/standort"
          >Pfarrhaus Ausserdorf</router-link
        >. Von dort aus gehen wir in der Regel in den nahe gelegenen Buchser
        Wald. Ausnahmsweise kann sich der Besammlungsort ändern. Dies ist
        jeweils in der
        <router-link to="/cevianer/agenda">Agenda</router-link> ersichtlich.
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
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Ausbildung extends Vue {}
</script>

<template>
  <section class="section">
    <div class="container">
      <h1 class="title is-1">Ausbildung</h1>
      <div class="content">
        <p class="content">
          Die Ausbildungskurse können grob in 3 Kategorien unterteilt werden:
        </p>
        <ol>
          <li>
            <a href="https://www.jugendundsport.ch/de/home.html">J+S</a>-Kurse
            (z. B. Gruppenleiterkurs (GLK) oder Lagerleiterkurs (LLM)): Dabei
            handelt es sich um Kurse, welche von Jugend und Sport (dem
            Sportförderungsprogramm des Bundesamt für Sport) anerkannt werden.
            Diese befähigen Dich eine Gruppe oder ein Lager zu leiten und haben
            eine offizielle Leiteranerkennung zur Folge. Der Cevi ist der
            Sportart "Lagersport und Trekking" angeschlossen.
          </li>
          <li>
            <a href="https://www.rueblichrut.ch/">Rüeblichrut</a> Kurse: Diese
            Kurse werden vom Kanton Aargau mit dem Thema Gesundheitsförderung
            und Suchtprävention angeboten.
          </li>
          <li>
            Diverse Kurse der Region (z. B. Grundlagenkurs): Diese bereiten Dich
            auf die J+S Kurse vor, haben aber noch keine offizielle
            Leiteranerkennung zur Folge.
          </li>
        </ol>

        <p>
          Die ersten Kurse werden von der Region organisiert:
          <a href="https://cevi-agsoluzg.ch/ausbildung/"
            >Ausbildungsseite der Region</a
          >. Fortgeschrittene Kurse teilweise über Cevi Schweiz:
          <a href="https://www.cevi.ch/kurse/"
            >Ausbildungsseite von Cevi Schweiz</a
          >
        </p>

        <h2 class="title is-2">Typische Laufbahn</h2>
        Hier siehst du die typische Laufbahn eines Cevileiters.
        <ul>
          <li>
            <strong>14 Jahre</strong>: Grundlagenkurs (GKu). Du wirst zum
            Hilfsleiter ausgebildet und kannst fortan bei einer Gruppe als
            Leiter Teilaufgaben übernehmen. Die Verantwortung liegt aber
            weiterhin beim Gruppenleiter.
          </li>
          <li>
            <strong>15 Jahre</strong>: Zwischenmodul 1 (ZM 1). Dort erarbeitest
            du selbstständig erste Programme und lernst die Grundlagen der
            ersten Hilfe.
          </li>
          <li>
            <strong>16 Jahre</strong>: Zwischenmodul 2 (ZM 2). Es bringt Dich in
            den Themen Pioniertechnik, Orientieren sowie Psychologie/Gruppe
            weiter.
          </li>
          <li>
            <strong>18 Jahre</strong>: Gruppenleiterkurs (GLK). Dieser befähigt
            Dich eine eigene Gruppe zu führen. Es ist der erste J+S Kurs.
          </li>
        </ul>

        Je nach Interesse kannst du auch weitere Kurse absolvieren:
        <ul>
          <li>
            Ab 14 Jahre kannst du den Frösch-Up besuchen. Dieser Kurs
            beschäftigt sich mit der Leitung von Gruppen der jüngsten Kinder
            (Fröschli).
          </li>
          <li>
            Ab 17 Jahren kannst du den nationalen Ortsgruppenleiterkurs
            besuchen. Es werden alle wichtigen Elemente für die Leitung einer
            Abteilung vermittelt.
          </li>
          <li>
            Mit 19 Jahren kannst du den Lagerleiterkurs absolvieren. Dieser
            befähigt Dich ein Lager unter J+S anzumelden und durchzuführen.
          </li>
          <li>
            Später: Verschiedene "Kaderkurse" beispielsweise J+S Expertenkurs,
            J+S Coachkurs und J+S Kursleiterkurs.
          </li>
        </ul>

        <h2 class="title is-2">Grundlagenkurs (GKu)</h2>

        <strong>Was ist der Grundlagenkurs?</strong>
        <p>
          Der Grundlagenkurs findet jeweils zweimal im Jahr statt (Frühling und
          Herbst). Er besteht jeweils aus einem Vorweekend (zur Einstimmung in
          den Kurs) und der effektiven Kurswoche. Der Teilnehmerbeitrag beträgt
          in der Regel 300 CHF. Unser Verein verfügt über einen Ausbildungsfonds
          über den wir den Teilnehmerbeitrag auf Antrag zurückerstatten damit
          dieser keine Hürde darstellt.
        </p>

        <strong
          >Mit welchem Alter sollte ich den Grundlagenkurs absolvieren?</strong
        >
        <p>
          Das offizielle Mindestalter ist 14. Es wird dafür jeweils auf den
          Jahrgang geschaut (Jahr in dem man 14 wird) und nicht auf das
          Geburtsdatum. In der Regel ist es auf eigenen Wunsch auch möglich den
          Kurs bereits ein Jahr früher zu absolvieren jedoch unter dem Vorbehalt
          das es nicht zuviele reguläre Anmeldungen hat. Fühlt man sich noch
          nicht bereit kann der Kurs auch ein Jahr später noch absolviert
          werden.
        </p>

        <strong>Wie melde ich mich an?</strong>
        <p>
          Die Kurse werden jeweils nicht von den Abteilungen, sondern von der
          Region durchgeführt. Diese hat eine eigene
          <a href="https://cevi-agsoluzg.ch/ausbildung/">Ausbildungsseite</a>.
          Auf dieser findest du eine Liste der Kurse. Wenn du einen Kurs
          auswählst findest du den Anmeldetalon. Sobald du diesen ausgefüllt und
          eingesendet hast bist du dabei. Hinweis: da der Grundlagenkurs noch
          kein J+S Kurs ist kannst du alle Felder betreffend J+S Coach leer
          lassen.
        </p>

        <h2 class="title is-2">Auffrischung J+S Leiter</h2>

        <p>
          Sobald du einen Gruppen- oder Lagerleiterkurs absolviert hast wirst du
          in der Datenbank des Bundesamt für Sport registriert. Damit du Deine
          Anerkennung behälst musst du regelmässig (alle zwei Jahre)
          Auffrischungskurse besuchen. Du kannst dabei aus verschiedenen
          Angeboten auswählen:
        </p>

        <ul>
          <li>Rüeblichrut Kurs</li>
          <li>
            J+S Wahlmodule zu verschiedenen Themen: Winter, Berg, Kinder- und
            Jugendsport, Waser. Diese sind eher "Fun" orientiert
          </li>
          <li>
            J+S Sicherheitsmodule zu verschiedenen Themen: Winter, Wasser und
            Berg. Diese geben Dir weitere Zulassungen (z. B. Schneetouren).
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

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
            <a href="https://www.jugendundsport.ch/de/home.html">J+S</a>-Kurse:
            Dabei handelt es sich um Kurse, welche von Jugend und Sport (dem
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
            Diverse Kurse der Region: Diese bereiten Dich auf die J+S Kurse vor,
            haben aber noch keine offizielle Leiteranerkennung zur Folge.
          </li>
        </ol>

        <a href="https://cevi-agsoluzg.ch/ausbildung/"
          >Jährlich überarbeitetes Kursprogramm</a
        >

        <h2 class="title is-2">Typische Laufbahn</h2>
        Hier siehst du die typische Laufbahn eines Cevileiters.
        <ul>
          <li>
            Mit 14 Jahre kannst du den Grundlagenkurs absolvieren. Du wirst zum
            Hilfsleiter ausgebildet und kannst fortan bei einer Gruppe als
            Leiter Teilaufgaben übernehmen. Die Verantwortung liegt aber
            weiterhin beim Gruppenleiter. Es findet jeweils im Frühling und im
            Herbst ein Kurs statt.
          </li>
          <li>
            Mit 15 Jahren kannst du das Zwischenmodul 1 absolvieren. Dort
            erarbeitest du selbstständig erste Programme und lernst die
            Grundlagen der ersten Hilfe.
          </li>
          <li>
            Mit 16 Jahren kannst du das Zwischenmodul 2 absolvieren. Es bringt
            Dich in den Themen Pionier, Orientieren sowie Psychologie/Gruppe
            weiter.
          </li>
          <li>
            Mit 18 Jahren kannst du den Gruppenleiterkurs absoliveren. Dieser
            befähigt Dich eine eigene Gruppe zu führen.
          </li>
          <li>
            Mit 19 Jahren kannst du den Lagerleiterkurs absoliveren. Dieser
            befähigt Dich ein Lager unter J+S anzumelden und durchzuführen.
          </li>
        </ul>

        <h2 class="title is-2">Auffrischung J+S Leiter</h2>

        Sobald du einen Gruppen- oder Lagerleiterkurs absolivert hast wirst du
        in der Datenbank des Bundesamt für Sport registriert. Damit du Deine
        Anerkennung behälst musst du regelmässig (alle zwei Jahre)
        Auffrischungskurse besuchen. Du kannst dabei aus verschiedenen Angeboten
        auswählen:

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

        <h2 class="title is-2">Weitere Kurse</h2>
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
            Verschiedene "Kaderkurse": J+S Expertenkurs, J+S Coachkurs und J+S
            Kursleiterkurs
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

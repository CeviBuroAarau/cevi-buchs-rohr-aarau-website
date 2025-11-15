<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Datenschutzinformation extends Vue {}
</script>

<template>
  <section class="section">
    <div class="container">
      <h1 class="title is-1">Datenschutzinformation</h1>
      <h2 class="title is-2">1. Grundsatz</h2>
      <p class="content">
        Der Schutz Ihrer Privatsphäre ist uns ein wichtiges Anliegen. Mit der
        folgenden Datenschutzerklärung erläutern wir Ihnen, welche Personendaten
        wir von Ihnen zu welchem Zweck bearbeiten, wenn Sie unsere Website oder
        Jungscharanlässe besuchen oder Sie Mitglied in unserem Verein sind.
      </p>

      <h2 class="title is-2">2. Verantwortlicher</h2>
      <p class="content">
        Verantwortlich für die Einhaltung der geltenden Datenschutzbestimmungen
        ist der Vorstand respektive die Abteilungsleitung. Bitte verwenden Sie
        für eine Kontaktaufnahme das
        <router-link to="/kontakt">Kontaktformular</router-link> auf der
        Webseite.
      </p>

      <h2 class="title is-2">3. Bearbeitung von Personendaten</h2>
      <p class="content">
        Wir bearbeiten diejenigen Personendaten, die Sie uns zur Verfügung
        stellen zu Vereinszwecken. In diesem Rahmen bearbeiten wir insbesondere
        Angaben, die Sie uns selbst bei der Kontaktaufnahme (beispielsweise per
        Briefpost, E-Mail, Kontaktformular, Social Media oder Telefon), bei der
        Einschreibung als Jungschikind oder Vereinsmitglied freiwillig
        übermitteln.
      </p>
      <p class="content">
        Namentlich werden Ihre Personendaten zu folgenden Zwecken bearbeitet:
      </p>
      <ul>
        <li>
          Abwicklung der Rechnungsstellung und Bezahlung der
          Mitgliedschaftsbeiträge
        </li>
        <li>Führung eines Adressbuchs</li>
        <li>Organisation von Jungscharaktivitäten inklusive Lagern</li>
        <li>Führung der Vereinshistorie</li>
        <li>Anmeldung für Ausbildungskurse</li>
      </ul>
      <p class="content">
        Mit Ausnahme von Gesundheitsdaten bearbeiten wir keine besonders
        schützenswerten Personendaten. Die Gesundheitsdaten werden
        ausschliesslich in Notfällen und nur an behandelnde medizinische
        Fachpersonen und Institutionen weitergegeben.
      </p>

      <h2 class="title is-2">4. Personendaten von Dritten</h2>
      <p class="content">
        Sofern Sie Personendaten von Dritten an uns übermitteln, sind Sie
        verpflichtet, den Datenschutz gegenüber den Dritten zu gewährleisten
        sowie die Richtigkeit der Personendaten sicherzustellen.
      </p>

      <h2 class="title is-2">5. Bearbeitung von Personendaten durch Dritte</h2>
      <p class="content">
        Wir können Personendaten durch beauftragte Dritte bearbeiten lassen oder
        gemeinsam mit Dritten sowie mit Hilfe von Dritten bearbeiten oder an
        Dritte übermitteln. Bei den Dritten handelt es sich um Anbieter, deren
        Leistungen wir in Anspruch nehmen. Wir gewährleisten auch bei solchen
        Dritten einen angemessenen Datenschutz.
      </p>
      <p class="content">
        Ihre Personendaten werden an folgende Personen übermittelt,
        einschliesslich solche im Ausland:
      </p>

      <table>
        <tr>
          <th>Empfänger und Ort</th>
          <th>Bemerkungen</th>
        </tr>
        <tr>
          <td>Puzzle, Schweiz</td>
          <td>Zentrale Mitgliederverwaltung von Cevi Schweiz</td>
        </tr>
        <tr>
          <td>Cyon, Schweiz</td>
          <td>Verwaltung der Domäne, Mailserver</td>
        </tr>
        <tr>
          <td>Azure, Amsterdam Niederlande</td>
          <td>Hosting der Webseite und weiterer Dienste wie z. B. Nextcloud</td>
        </tr>
        <tr>
          <td>Openstreetmap, Amsterdam Niederlande</td>
          <td>Kartenmaterial</td>
        </tr>
        <tr>
          <td>Meta, auf der ganzen Welt</td>
          <td>Facebook, Instagram, Whatsapp</td>
        </tr>
      </table>

      <h2 class="title is-2">6. Datensicherheit</h2>
      <p class="content">
        Wir treffen angemessene und geeignete technische und organisatorische
        Massnahmen, um den Datenschutz und insbesondere die Datensicherheit zu
        gewährleisten.
      </p>

      <h2 class="title is-2">
        7. Nutzung der Webseite (Cookies und Server-Logdateien)
      </h2>
      <p class="content">
        Wir können Cookies für unsere Website verwenden. Sie ermöglichen
        insbesondere, Ihren Browser beim nächsten Besuch unserer Website
        wiederzuerkennen und dadurch beispielsweise die Reichweite unserer
        Website zu messen.
      </p>
      <p class="content">
        Sie können Cookies in Ihren Browser-Einstellungen jederzeit ganz oder
        teilweise deaktivieren sowie löschen.
      </p>
      <p class="content">
        Wir können für jeden Zugriff auf unsere Website nachfolgende Angaben
        erfassen, sofern diese von Ihrem Browser an unsere Server-Infrastruktur
        übermittelt werden oder von unserem Webserver ermittelt werden können:
        Datum und Zeit einschliesslich Zeitzone, IP-Adresse, HTTP-Statuscode,
        Betriebssystem einschliesslich Benutzeroberfläche und Version, Browser
        einschliesslich Sprache und Version, aufgerufene einzelne Unter-Seiten.
      </p>
      <p class="content">
        Wir speichern solche Angaben, die auch Personendaten darstellen können,
        in Server-Logdateien. Die Angaben sind erforderlich, um unser
        Online-Angebot dauerhaft, nutzerfreundlich und zuverlässig bereitstellen
        sowie um die Datensicherheit und damit insbesondere den Schutz von
        Personendaten sicherstellen zu können – auch durch Dritte oder mit Hilfe
        von Dritten.
      </p>

      <h2 class="title is-2">8. Benachrichtigungen und Mitteilungen</h2>
      <p class="content">
        Wir versenden Benachrichtigungen und Mitteilungen wie beispielsweise
        Newsletter per Briefpost, E-Mail, SMS oder Whatsapp.
      </p>
      <p class="content">
        Benachrichtigungen und Mitteilungen können Weblinks oder Zählpixel
        enthalten, die erfassen, ob eine Mitteilung geöffnet wurde und welche
        Weblinks dabei angeklickt wurden. Solche Weblinks und Zählpixel können
        die Nutzung von Benachrichtigungen und Mitteilungen auch personenbezogen
        erfassen. Wir benötigen diese statistische Erfassung der Nutzung für die
        Erfolgs- und Reichweitenmessung.
      </p>

      <h2 class="title is-2">9. Schlussbestimmungen</h2>
      <p class="content">
        Wir können diese Datenschutzerklärung jederzeit anpassen und ergänzen.
        Wir werden über solche Anpassungen und Ergänzungen in geeigneter Form
        informieren, insbesondere durch Veröffentlichung der jeweils aktuellen
        Datenschutzerklärung auf unserer Website.
      </p>
    </div>
  </section>
</template>

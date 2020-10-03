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
        <router-link to="/mitglieder/agenda">Agenda</router-link> ersichtlich
        und wird kommuniziert.
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
        Jede Gruppe wird von mindestens einem in einem Leiter, welcher in einem
        J+S anerkannten Gruppenleiterkurs ausgebildet wurde geleitet. Zusätzlich
        wird dieser durch einen oder mehrere Leiter unterstützt, welche
        ebenfalls den Gruppenleiterkurs oder den Hilfsleiterkurs absolviert
        haben. Wir berücksichtigen bei unseren Aktivitäten Wettervorhersagen (z.
        B. Sturmwarnungen) aber auch Verordnungen der Behörden (z. B.
        Feuerverbot). Alle Leiter verfügen über Mobiltelefone und der Cevi
        Schweiz betreibt ein Krisen-Telefon bei Notfällen.
      </p>
      <h2 class="title is-2">Anmeldung</h2>
      <p class="content">
        Wir freuen uns über eine kurze Anmeldung
      </p>
      <div class="content">
        <div class="field">
          <label class="label">Name</label>
          <div class="control has-icons-left">
            <input class="input" type="text" placeholder="" />
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
          </div>
        </div>

        <div class="field">
          <label class="label">Email</label>
          <div class="control has-icons-left">
            <input class="input" type="email" placeholder="" value="" />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
          </div>
        </div>

        <div class="field">
          <label class="label">Telefonnummer</label>
          <div class="control has-icons-left">
            <input class="input" type="text" placeholder="" value="" />
            <span class="icon is-small is-left">
              <i class="fas fa-phone"></i>
            </span>
          </div>
        </div>

        <div class="field">
          <label class="label">Geburtsdatum des Kindes</label>
          <div class="control has-icons-left">
            <input class="input" type="text" placeholder="" value="" />
            <span class="icon is-small is-left">
              <i class="fas fa-birthday-cake"></i>
            </span>
          </div>
        </div>

        <div class="field">
          <label class="label">Gewünschtes Schnupperdatum</label>
          <div class="control has-icons-left">
            <input class="input" type="text" placeholder="" value="" />
            <span class="icon is-small is-left">
              <i class="fas fa-calendar"></i>
            </span>
          </div>
        </div>

        <div class="field">
          <label class="label">Nachricht</label>
          <div class="control">
            <textarea class="textarea" placeholder=""></textarea>
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link">Anmelden</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

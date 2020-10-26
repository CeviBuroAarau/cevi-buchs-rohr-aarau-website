<template>
  <section class="section">
    <div class="container">
      <h1 class="title is-1">Standort</h1>
      <p class="content">
        Wir werden von der
        <a href="https://www.ref-kirche-buchs-rohr.ch/"
          >reformierten Kirchgemeinde Buchs-Rohr</a
        >
        unterstützt. Daher können wir deren Räumlichkeiten benützen. In der
        Regel starten und enden unsere Nachmittage im Pfarrhaus Ausserdorf.
        Ausnahmsweise kann sich der Besammlungsort ändern. Dies wird jeweils in
        der
        <router-link to="/mitglieder/agenda">Agenda</router-link> kommuniziert.
      </p>
      <h2 class="title is-2">Pfarrhaus Ausserdorf</h2>

      <div style="height: 500px; width: 100%">
        <l-map :zoom="zoom" :center="center">
          <l-tile-layer :url="url" :attribution="attribution" />
          <l-marker :lat-lng="pfarrhaus">
            <l-tooltip>
              <p>Besammlungsort</p>
            </l-tooltip>
          </l-marker>
        </l-map>
      </div>

      <p class="content">
        Das Pfarrhaus ist direkt zwischen dem Alterszentrum Suhrhard und der
        Brücke über die Aaretalstrasse. Die nächste Bushaltestelle Alterszentrum
        ist nur ca. 150 m entfernt.
      </p>
      <p class="content">
        Das Lokal sieht wie folgt aus:<br />
        <img src="@/assets/standort/lokal.jpg" width="800" />
      </p>
    </div>
  </section>
</template>
<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LTooltip } from "vue2-leaflet";
import "leaflet-defaulticon-compatibility";

export default {
  name: "Example",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LTooltip,
  },
  data() {
    return {
      zoom: 16,
      center: latLng(47.392085, 8.084783),
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      pfarrhaus: latLng(47.39246, 8.084986),
    };
  },
};
</script>

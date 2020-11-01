<template>
  <section class="section">
    <div class="container">
      <h1 class="title is-1">Aktivitäten</h1>
      <p class="content">
        Unsere Programme sind sehr vielfältig. Neben praktischen Fertigkeiten
        wie Karten lesen, Feuer entfachen oder Pionierbauten kommt auch Spiel
        und Spass nicht zu kurz. Bekanntlich sagt ein Bild mehr als 1000 Worte.
        Deshalb untenstehend eine Zusammenstellung verschiedener Fotos unserer
        Nachmittage.
      </p>
      <div>
        <LightGallery
          :images="images"
          :index="index"
          :disable-scroll="true"
          @close="index = null"
        />
        <ul>
          <li
            class="vue-light-gallery-thumb"
            v-for="(thumb, thumbIndex) in thumblist"
            :key="thumbIndex"
            @click="index = thumbIndex"
          >
            <img :src="externalAssetsUri + thumb" />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.vue-light-gallery-thumb {
  display: inline-block;
  margin: 10px;
  cursor: pointer;
  overflow: hidden;
  border-radius: 3px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.5);
}
</style>

<script>
import { LightGallery } from "vue-light-gallery";

export default {
  components: {
    LightGallery,
  },
  data() {
    return {
      images: [
        {
          title: "Kochen über dem Feuer",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/aktivitaeten/01Kochen.jpg.webp",
        },
        {
          title: "Brennesseltee",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/aktivitaeten/02Brennesseltee.jpg.webp",
        },
        {
          title: "Ringkampf",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/aktivitaeten/02Kaempfen.jpg.webp",
        },
        {
          title: "Kissenschlacht",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/aktivitaeten/03Kissenschlacht.jpg.webp",
        },
        {
          title: "Zeltbau",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/aktivitaeten/04Zelt.jpg.webp",
        },
        {
          title: "Pfahl spitzen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/aktivitaeten/05Bauen.jpg.webp",
        },
        {
          title: "Wasserschlacht",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/aktivitaeten/06Wasserschlacht.jpg.webp",
        },
        {
          title: "Seilbrücke",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/aktivitaeten/07Seilbruecke.jpg.webp",
        },
        {
          title: "Spiel mit dem Fallschirmtuch",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/aktivitaeten/08Fallschirmtuch.jpg.webp",
        },
        {
          title: "Kekse Essen für Fortgeschrittene",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/aktivitaeten/09EssenvomSeil.jpg.webp",
        },
        {
          title: "Auf Bäume klettern",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/aktivitaeten/10AufBaeumeklettern.jpg.webp",
        },
        {
          title: "Feuer",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/aktivitaeten/10Feuer.jpg.webp",
        },
        {
          title: "Baumhaus",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/aktivitaeten/11Baumhaus.jpg.webp",
        },
        {
          title: "Schoggibananen zum Z'vieri",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/aktivitaeten/12Schoggibananen.jpg.webp",
        },
        {
          title: "Huckepack unterwegs",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/aktivitaeten/13Huckepack.jpg.webp",
        },
        {
          title: "Ratespiel",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/aktivitaeten/15VerbundeneAugen.jpg.webp",
        },
        {
          title: "Tennis mit Militärblachen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/aktivitaeten/16Blachentennis.jpg.webp",
        },
        {
          title: "Menschenpyramide",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/aktivitaeten/17Menschenpyramide.jpg.webp",
        },
        {
          title: "Kommunikation per Morsecode",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/aktivitaeten/18Morsen.jpg.webp",
        },
        {
          title: "Überfälle",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/aktivitaeten/19Gefesselt.jpg.webp",
        },
        {
          title: "Hindernislauf",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/aktivitaeten/20Hindernislauf.jpg.webp",
        },
        {
          title: "Gegenstände finden",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/aktivitaeten/21Leiter.jpg.webp",
        },
        {
          title: "Am Lagerfeuer sitzen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/aktivitaeten/23Lagerfeuer.jpg.webp",
        },
        {
          title: "Kartenlesen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/aktivitaeten/25Kartenlesen.jpg.webp",
        },
        {
          title: "Tisch bauen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/aktivitaeten/27Tisch.jpg.webp",
        },
        {
          title: "Vertrauen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/aktivitaeten/28Blind.jpg.webp",
        },
        {
          title: "Harassenklettern",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/aktivitaeten/30Harassenklettern.jpg.webp",
        },
        {
          title: "Pfeilbogenschiessen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/aktivitaeten/30Pfeilbogen.jpg.webp",
        },
        {
          title: "Schlangenbrot zum Z'vieri",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/aktivitaeten/30Schlangenbrot.jpg.webp",
        },
        {
          title: "Holz sägen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/aktivitaeten/31Saegen.jpg.webp",
        },
        {
          title: "Spass mit Wasser",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/aktivitaeten/31Schlauch.jpg.webp",
        },
        {
          title: "Auf Bäume klettern",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/aktivitaeten/32Baumklettern.jpg.webp",
        },
        {
          title: "Zweikämpfe",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/aktivitaeten/32Kaempfen.jpg.webp",
        },
        {
          title: "Schminken",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/aktivitaeten/33Logo.jpg.webp",
        },
        {
          title: "Festessen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/aktivitaeten/34Festessen.jpg.webp",
        },
        {
          title: "Bilder malen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/aktivitaeten/35Cevibild.jpg.webp",
        },
        {
          title: "Kerzenziehen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/aktivitaeten/40Kerzenziehen.jpg.webp",
        },
        {
          title: "Grosse Lagerbauten",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/aktivitaeten/41Lagerbauten.jpg.webp",
        },
        {
          title: "Bänkli",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/aktivitaeten/42Lagerbauten.jpg.webp",
        },
        {
          title: "Flüsse überqueren",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/aktivitaeten/43Seilbruecke.jpg.webp",
        },
        {
          title: "Abseilen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/aktivitaeten/44Abseilen.jpg.webp",
        },
        {
          title: "Entführungen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/aktivitaeten/45Aufseilen.jpg.webp",
        },
        {
          title: "Schneesport",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/aktivitaeten/50Schneesport.jpg.webp",
        },
        {
          title: "Hamburger Essen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/aktivitaeten/60Hamburger.jpg.webp",
        },
        {
          title: "Pfosten verbinden",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/aktivitaeten/61Bauen.jpg.webp",
        },
        {
          title: "Schätze ausgraben",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/aktivitaeten/62Schatzsuche.jpg.webp",
        },
        {
          title: "Zeltebauen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/aktivitaeten/63Zeltbau.jpg.webp",
        },
        {
          title: "Seilziehen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/aktivitaeten/64Seilziehen.jpg.webp",
        },
        {
          title: "Gefangen nehmen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/aktivitaeten/65Flucht.jpg.webp",
        },
        {
          title: "Geschirr abwaschen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/aktivitaeten/66Abwasch.jpg.webp",
        },
        {
          title: "Ballone steigen lassen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/aktivitaeten/67Ballonesteigen.jpg.webp",
        },
        {
          title: "Steine spielen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/aktivitaeten/68Steine.jpg.webp",
        },
        {
          title: "Grosses Leiterlispiel",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/aktivitaeten/70Leiterspiel.jpg.webp",
        },
        {
          title: "8er Nomad bauen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/aktivitaeten/71Nomad.jpg.webp",
        },
        {
          title: "Schlafen im Stroh",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/aktivitaeten/72SchlafenimStroh.jpg.webp",
        },
        {
          title: "Spielen im Heu",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/aktivitaeten/73SpielenimHeu.jpg.webp",
        },
        {
          title: "Basteln",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/aktivitaeten/74Basteln.jpg.webp",
        },
        {
          title: "Mit dem Schiff reisen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/aktivitaeten/75Schiff.jpg.webp",
        },
        {
          title: "Zusammenhalten",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/aktivitaeten/76Gefesselt.jpg.webp",
        },
        {
          title: "Kinder auf Bäume ziehen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/aktivitaeten/77Hochziehen.jpg.webp",
        },
        {
          title: "Berliner bauen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/aktivitaeten/78Berliner.jpg.webp",
        },
        {
          title: "Durch Blachenschläuche kriechen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/aktivitaeten/79Blachenschlauch.jpg.webp",
        },
      ],
      thumblist: [
        "/aktivitaeten/thumb/01Kochen.jpg.webp",
        "/aktivitaeten/thumb/02Brennesseltee.jpg.webp",
        "/aktivitaeten/thumb/02Kaempfen.jpg.webp",
        "/aktivitaeten/thumb/03Kissenschlacht.jpg.webp",
        "/aktivitaeten/thumb/04Zelt.jpg.webp",
        "/aktivitaeten/thumb/05Bauen.jpg.webp",
        "/aktivitaeten/thumb/06Wasserschlacht.jpg.webp",
        "/aktivitaeten/thumb/07Seilbruecke.jpg.webp",
        "/aktivitaeten/thumb/08Fallschirmtuch.jpg.webp",
        "/aktivitaeten/thumb/09EssenvomSeil.jpg.webp",
        "/aktivitaeten/thumb/10AufBaeumeklettern.jpg.webp",
        "/aktivitaeten/thumb/10Feuer.jpg.webp",
        "/aktivitaeten/thumb/11Baumhaus.jpg.webp",
        "/aktivitaeten/thumb/12Schoggibananen.jpg.webp",
        "/aktivitaeten/thumb/13Huckepack.jpg.webp",
        "/aktivitaeten/thumb/15VerbundeneAugen.jpg.webp",
        "/aktivitaeten/thumb/16Blachentennis.jpg.webp",
        "/aktivitaeten/thumb/17Menschenpyramide.jpg.webp",
        "/aktivitaeten/thumb/18Morsen.jpg.webp",
        "/aktivitaeten/thumb/19Gefesselt.jpg.webp",
        "/aktivitaeten/thumb/20Hindernislauf.jpg.webp",
        "/aktivitaeten/thumb/21Leiter.jpg.webp",
        "/aktivitaeten/thumb/23Lagerfeuer.jpg.webp",
        "/aktivitaeten/thumb/25Kartenlesen.jpg.webp",
        "/aktivitaeten/thumb/27Tisch.jpg.webp",
        "/aktivitaeten/thumb/28Blind.jpg.webp",
        "/aktivitaeten/thumb/30Harassenklettern.jpg.webp",
        "/aktivitaeten/thumb/30Pfeilbogen.jpg.webp",
        "/aktivitaeten/thumb/30Schlangenbrot.jpg.webp",
        "/aktivitaeten/thumb/31Saegen.jpg.webp",
        "/aktivitaeten/thumb/31Schlauch.jpg.webp",
        "/aktivitaeten/thumb/32Baumklettern.jpg.webp",
        "/aktivitaeten/thumb/32Kaempfen.jpg.webp",
        "/aktivitaeten/thumb/33Logo.jpg.webp",
        "/aktivitaeten/thumb/34Festessen.jpg.webp",
        "/aktivitaeten/thumb/35Cevibild.jpg.webp",
        "/aktivitaeten/thumb/40Kerzenziehen.jpg.webp",
        "/aktivitaeten/thumb/41Lagerbauten.jpg.webp",
        "/aktivitaeten/thumb/42Lagerbauten.jpg.webp",
        "/aktivitaeten/thumb/43Seilbruecke.jpg.webp",
        "/aktivitaeten/thumb/44Abseilen.jpg.webp",
        "/aktivitaeten/thumb/45Aufseilen.jpg.webp",
        "/aktivitaeten/thumb/50Schneesport.jpg.webp",
        "/aktivitaeten/thumb/60Hamburger.jpg.webp",
        "/aktivitaeten/thumb/61Bauen.jpg.webp",
        "/aktivitaeten/thumb/62Schatzsuche.jpg.webp",
        "/aktivitaeten/thumb/63Zeltbau.jpg.webp",
        "/aktivitaeten/thumb/64Seilziehen.jpg.webp",
        "/aktivitaeten/thumb/65Flucht.jpg.webp",
        "/aktivitaeten/thumb/66Abwasch.jpg.webp",
        "/aktivitaeten/thumb/67Ballonesteigen.jpg.webp",
        "/aktivitaeten/thumb/68Steine.jpg.webp",
        "/aktivitaeten/thumb/70Leiterspiel.jpg.webp",
        "/aktivitaeten/thumb/71Nomad.jpg.webp",
        "/aktivitaeten/thumb/72SchlafenimStroh.jpg.webp",
        "/aktivitaeten/thumb/73SpielenimHeu.jpg.webp",
        "/aktivitaeten/thumb/74Basteln.jpg.webp",
        "/aktivitaeten/thumb/75Schiff.jpg.webp",
        "/aktivitaeten/thumb/76Gefesselt.jpg.webp",
        "/aktivitaeten/thumb/77Hochziehen.jpg.webp",
        "/aktivitaeten/thumb/78Berliner.jpg.webp",
        "/aktivitaeten/thumb/79Blachenschlauch.jpg.webp",
      ],
      index: null,
      externalAssetsUri: process.env.VUE_APP_EXTERNAL_ASSETS_URI,
    };
  },
};
</script>

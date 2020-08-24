<template>
  <section class="section">
    <div class="container">
      <h1 class="title">Aktivitäten</h1>
      <p class="content">
        Unsere Programme sind sehr vielfältig. Neben praktischen Fertigkeiten wie Karten lesen, Feuer entfachen oder Pionierbauten kommt auch Spiel und Spass nicht zu kurz. Bekanntlich sagt ein Bild mehr als 1000 Worte. Deshalb untenstehend eine Zusammenstellung verschiedener Fotos unserer Nachmittage.
      </p>
      <div>
        <LightGallery
          :images="images"
          :index="index"
          :disable-scroll="true"
          @close="index = null"
        />
        <ul>
          <li class="vue-light-gallery-thumb"
            v-for="(thumb, thumbIndex) in [
              require('@/assets/aktivitaeten/thumb/01Kochen.jpg.webp'),
              require('@/assets/aktivitaeten/thumb/02Brennesseltee.jpg.webp'),
              require('@/assets/aktivitaeten/thumb/02Kaempfen.jpg.webp'),
              require('@/assets/aktivitaeten/thumb/03Kissenschlacht.jpg.webp'),
              require('@/assets/aktivitaeten/thumb/04Zelt.jpg.webp'),
              require('@/assets/aktivitaeten/thumb/05Bauen.jpg.webp'),
              require('@/assets/aktivitaeten/thumb/06Wasserschlacht.jpg.webp'),
              require('@/assets/aktivitaeten/thumb/07Seilbruecke.jpg.webp'),
              require('@/assets/aktivitaeten/thumb/08Fallschirmtuch.jpg.webp'),
              require('@/assets/aktivitaeten/thumb/09EssenvomSeil.jpg.webp'),
              require('@/assets/aktivitaeten/thumb/10AufBaeumeklettern.jpg.webp'),
              require('@/assets/aktivitaeten/thumb/10Feuer.jpg.webp'),
              require('@/assets/aktivitaeten/thumb/11Baumhaus.jpg.webp'),
              require('@/assets/aktivitaeten/thumb/12Schoggibananen.jpg.webp'),
              require('@/assets/aktivitaeten/thumb/13Huckepack.jpg.webp'),
              require('@/assets/aktivitaeten/thumb/15VerbundeneAugen.jpg.webp'),
              require('@/assets/aktivitaeten/thumb/16Blachentennis.jpg.webp'),
              require('@/assets/aktivitaeten/thumb/17Menschenpyramide.jpg.webp'),
              require('@/assets/aktivitaeten/thumb/18Morsen.jpg.webp'),
              require('@/assets/aktivitaeten/thumb/19Gefesselt.jpg.webp'),
              require('@/assets/aktivitaeten/thumb/20Hindernislauf.jpg.webp'),
              require('@/assets/aktivitaeten/thumb/21Leiter.jpg.webp'),
              require('@/assets/aktivitaeten/thumb/23Lagerfeuer.jpg.webp'),
              require('@/assets/aktivitaeten/thumb/25Kartenlesen.jpg.webp'),
              require('@/assets/aktivitaeten/thumb/27Tisch.jpg.webp'),
              require('@/assets/aktivitaeten/thumb/28Blind.jpg.webp'),
              require('@/assets/aktivitaeten/thumb/30Harassenklettern.jpg.webp'),
              require('@/assets/aktivitaeten/thumb/30Pfeilbogen.jpg.webp'),
              require('@/assets/aktivitaeten/thumb/30Schlangenbrot.jpg.webp'),
              require('@/assets/aktivitaeten/thumb/31Saegen.jpg.webp'),
              require('@/assets/aktivitaeten/thumb/31Schlauch.jpg.webp'),
              require('@/assets/aktivitaeten/thumb/32Baumklettern.jpg.webp'),
              require('@/assets/aktivitaeten/thumb/32Kaempfen.jpg.webp'),
              require('@/assets/aktivitaeten/thumb/33Logo.jpg.webp'),
              require('@/assets/aktivitaeten/thumb/34Festessen.jpg.webp'),
              require('@/assets/aktivitaeten/thumb/35Cevibild.jpg.webp'),
              require('@/assets/aktivitaeten/thumb/40Kerzenziehen.jpg.webp'),
              require('@/assets/aktivitaeten/thumb/41Lagerbauten.jpg.webp'),
              require('@/assets/aktivitaeten/thumb/42Lagerbauten.jpg.webp'),
              require('@/assets/aktivitaeten/thumb/43Seilbruecke.jpg.webp'),
              require('@/assets/aktivitaeten/thumb/44Abseilen.jpg.webp'),
              require('@/assets/aktivitaeten/thumb/45Aufseilen.jpg.webp'),
              require('@/assets/aktivitaeten/thumb/50Schneesport.jpg.webp'),
              require('@/assets/aktivitaeten/thumb/60Hamburger.jpg.webp'),
              require('@/assets/aktivitaeten/thumb/61Bauen.jpg.webp'),
              require('@/assets/aktivitaeten/thumb/62Schatzsuche.jpg.webp'),
              require('@/assets/aktivitaeten/thumb/63Zeltbau.jpg.webp'),
              require('@/assets/aktivitaeten/thumb/64Seilziehen.jpg.webp'),
              require('@/assets/aktivitaeten/thumb/65Flucht.jpg.webp'),
              require('@/assets/aktivitaeten/thumb/66Abwasch.jpg.webp'),
              require('@/assets/aktivitaeten/thumb/67Ballonesteigen.jpg.webp'),
              require('@/assets/aktivitaeten/thumb/68Steine.jpg.webp'),
              require('@/assets/aktivitaeten/thumb/70Leiterspiel.jpg.webp'),
              require('@/assets/aktivitaeten/thumb/71Nomad.jpg.webp'),
              require('@/assets/aktivitaeten/thumb/72SchlafenimStroh.jpg.webp'),
              require('@/assets/aktivitaeten/thumb/73SpielenimHeu.jpg.webp'),
              require('@/assets/aktivitaeten/thumb/74Basteln.jpg.webp'),
              require('@/assets/aktivitaeten/thumb/75Schiff.jpg.webp'),
              require('@/assets/aktivitaeten/thumb/76Gefesselt.jpg.webp'),
              require('@/assets/aktivitaeten/thumb/77Hochziehen.jpg.webp'),
              require('@/assets/aktivitaeten/thumb/78Berliner.jpg.webp'),
              require('@/assets/aktivitaeten/thumb/79Blachenschlauch.jpg.webp'),
            ]"
            :key="thumbIndex"
            @click="index = thumbIndex"
          >
            <img :src="thumb">
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>


<style lang="scss">
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
  import Vue from 'vue';
  import { LightGallery } from 'vue-light-gallery';

  export default {
    components: {
      LightGallery,
    },
    data() {
      return {
        images: [
          { title:'Kochen über dem Feuer', url: require('@/assets/aktivitaeten/01Kochen.jpg.webp') },
          { title:'Brennesseltee', url: require('@/assets/aktivitaeten/02Brennesseltee.jpg.webp') },
          { title:'Ringkampf', url: require('@/assets/aktivitaeten/02Kaempfen.jpg.webp') },
          { title:'Kissenschlacht', url: require('@/assets/aktivitaeten/03Kissenschlacht.jpg.webp') },
          { title:'Zeltbau', url: require('@/assets/aktivitaeten/04Zelt.jpg.webp') },
          { title:'Pfahl spitzen', url: require('@/assets/aktivitaeten/05Bauen.jpg.webp') },
          { title:'Wasserschlacht', url: require('@/assets/aktivitaeten/06Wasserschlacht.jpg.webp') },
          { title:'Seilbrücke', url: require('@/assets/aktivitaeten/07Seilbruecke.jpg.webp') },
          { title:'Spiel mit dem Fallschirmtuch', url: require('@/assets/aktivitaeten/08Fallschirmtuch.jpg.webp') },
          { title:'Kekse Essen für Fortgeschrittene', url: require('@/assets/aktivitaeten/09EssenvomSeil.jpg.webp') },
          { title:'Auf Bäume klettern', url: require('@/assets/aktivitaeten/10AufBaeumeklettern.jpg.webp') },
          { title:'Feuer', url: require('@/assets/aktivitaeten/10Feuer.jpg.webp') },
          { title:'Baumhaus', url: require('@/assets/aktivitaeten/11Baumhaus.jpg.webp') },
          { title:'Schoggibananen zum Z\'vieri', url: require('@/assets/aktivitaeten/12Schoggibananen.jpg.webp') },
          { title:'Huckepack unterwegs', url: require('@/assets/aktivitaeten/13Huckepack.jpg.webp') },
          { title:'Ratespiel', url: require('@/assets/aktivitaeten/15VerbundeneAugen.jpg.webp') },
          { title:'Tennis mit Militärblachen', url: require('@/assets/aktivitaeten/16Blachentennis.jpg.webp') },
          { title:'Menschenpyramide', url: require('@/assets/aktivitaeten/17Menschenpyramide.jpg.webp') },
          { title:'Kommunikation per Morsecode', url: require('@/assets/aktivitaeten/18Morsen.jpg.webp') },
          { title:'Überfälle', url: require('@/assets/aktivitaeten/19Gefesselt.jpg.webp') },
          { title:'Hindernislauf', url: require('@/assets/aktivitaeten/20Hindernislauf.jpg.webp') },
          { title:'Gegenstände finden', url: require('@/assets/aktivitaeten/21Leiter.jpg.webp') },
          { title:'Am Lagerfeuer sitzen', url: require('@/assets/aktivitaeten/23Lagerfeuer.jpg.webp') },
          { title:'Kartenlesen', url: require('@/assets/aktivitaeten/25Kartenlesen.jpg.webp') },
          { title:'Tisch bauen', url: require('@/assets/aktivitaeten/27Tisch.jpg.webp') },
          { title:'Vertrauen', url: require('@/assets/aktivitaeten/28Blind.jpg.webp') },
          { title:'Harassenklettern', url: require('@/assets/aktivitaeten/30Harassenklettern.jpg.webp') },
          { title:'Pfeilbogenschiessen', url: require('@/assets/aktivitaeten/30Pfeilbogen.jpg.webp') },
          { title:'Schlangenbrot zum Z\'vieri', url: require('@/assets/aktivitaeten/30Schlangenbrot.jpg.webp') },
          { title:'Holz sägen', url: require('@/assets/aktivitaeten/31Saegen.jpg.webp') },
          { title:'Spass mit Wasser', url: require('@/assets/aktivitaeten/31Schlauch.jpg.webp') },
          { title:'Auf Bäume klettern', url: require('@/assets/aktivitaeten/32Baumklettern.jpg.webp') },
          { title:'Zweikämpfe', url: require('@/assets/aktivitaeten/32Kaempfen.jpg.webp') },
          { title:'Schminken', url: require('@/assets/aktivitaeten/33Logo.jpg.webp') },
          { title:'Festessen', url: require('@/assets/aktivitaeten/34Festessen.jpg.webp') },
          { title:'Bilder malen', url: require('@/assets/aktivitaeten/35Cevibild.jpg.webp') },
          { title:'Kerzenziehen', url: require('@/assets/aktivitaeten/40Kerzenziehen.jpg.webp') },
          { title:'Grosse Lagerbauten', url: require('@/assets/aktivitaeten/41Lagerbauten.jpg.webp') },
          { title:'Bänkli', url: require('@/assets/aktivitaeten/42Lagerbauten.jpg.webp') },
          { title:'Flüsse überqueren', url: require('@/assets/aktivitaeten/43Seilbruecke.jpg.webp') },
          { title:'Abseilen', url: require('@/assets/aktivitaeten/44Abseilen.jpg.webp') },
          { title:'Entführungen', url: require('@/assets/aktivitaeten/45Aufseilen.jpg.webp') },
          { title:'Schneesport', url: require('@/assets/aktivitaeten/50Schneesport.jpg.webp') },
          { title:'Hamburger Essen', url: require('@/assets/aktivitaeten/60Hamburger.jpg.webp') },
          { title:'Pfosten verbinden', url: require('@/assets/aktivitaeten/61Bauen.jpg.webp') },
          { title:'Schätze ausgraben', url: require('@/assets/aktivitaeten/62Schatzsuche.jpg.webp') },
          { title:'Zeltebauen', url: require('@/assets/aktivitaeten/63Zeltbau.jpg.webp') },
          { title:'Seilziehen', url: require('@/assets/aktivitaeten/64Seilziehen.jpg.webp') },
          { title:'Gefangen nehmen', url: require('@/assets/aktivitaeten/65Flucht.jpg.webp') },
          { title:'Geschirr abwaschen', url: require('@/assets/aktivitaeten/66Abwasch.jpg.webp') },
          { title:'Ballone steigen lassen', url: require('@/assets/aktivitaeten/67Ballonesteigen.jpg.webp') },
          { title:'Steine spielen', url: require('@/assets/aktivitaeten/68Steine.jpg.webp') },
          { title:'Grosses Leiterlispiel', url: require('@/assets/aktivitaeten/70Leiterspiel.jpg.webp') },
          { title:'8er Nomad bauen', url: require('@/assets/aktivitaeten/71Nomad.jpg.webp') },
          { title:'Schlafen im Stroh', url: require('@/assets/aktivitaeten/72SchlafenimStroh.jpg.webp') },
          { title:'Spielen im Heu', url: require('@/assets/aktivitaeten/73SpielenimHeu.jpg.webp') },
          { title:'Basteln', url: require('@/assets/aktivitaeten/74Basteln.jpg.webp') },
          { title:'Mit dem Schiff reisen', url: require('@/assets/aktivitaeten/75Schiff.jpg.webp') },
          { title:'Zusammenhalten', url: require('@/assets/aktivitaeten/76Gefesselt.jpg.webp') },
          { title:'Kinder auf Bäume ziehen', url: require('@/assets/aktivitaeten/77Hochziehen.jpg.webp') },
          { title:'Berliner bauen', url: require('@/assets/aktivitaeten/78Berliner.jpg.webp') },
          { title:'Durch Blachenschläuche kriechen', url: require('@/assets/aktivitaeten/79Blachenschlauch.jpg.webp') },
        ],
        index: null,
      };
    },
  };
</script>
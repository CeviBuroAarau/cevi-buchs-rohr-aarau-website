<template>
  <section class="section">
    <div class="container">
      <h1 class="title is-1">Album</h1>
      <p class="content">
        Unsere Programme sind sehr vielfältig. Neben praktischen Fertigkeiten
        wie Karten lesen, Feuer entfachen oder Pionierbauten kommt auch Spiel
        und Spass nicht zu kurz. Bekanntlich sagt ein Bild mehr als 1000 Worte.
        Deshalb untenstehend eine Zusammenstellung verschiedener Fotos unserer
        Nachmittage.
      </p>
      <div>
        <LightGallery
          :images="activeAlbum"
          :index="index"
          :disable-scroll="true"
          @close="index = null"
        />
        <h2 class="subtitle is-2">2015</h2>
        <ul>
          <li
            class="vue-light-gallery-thumb"
            v-for="(albums, albumIndex) in [
              {
                year: '2015',
                dateString: '2015',
                title: 'Diverse Bilder',
                preview:
                  externalAssetsUri +
                  '/album/thumb/cover/2015-diverse.jpg.webp',
                images: diverse2015
              },
              {
                year: '2015',
                dateString: '10. Januar 2015',
                title: 'Schoggi Frey',
                preview:
                  externalAssetsUri +
                  '/album/thumb/cover/2015-schoggi-frey.jpg.webp',
                images: schoggifrey2015
              },
              {
                year: '2015',
                dateString: '23. - 25. Mai 2015',
                title: 'Pfila',
                preview:
                  externalAssetsUri + '/album/thumb/cover/2015-pfila.jpg.webp',
                images: pfila2015
              },
              {
                year: '2015',
                dateString: '16. - 18. Oktober 2015',
                title: 'JOTA',
                preview:
                  externalAssetsUri + '/album/thumb/cover/2015-jota.jpg.webp',
                images: jota2015
              },
              {
                year: '2015',
                dateString: '19. Dezember 2015',
                title: 'Waldweihnacht',
                preview:
                  externalAssetsUri +
                  '/album/thumb/cover/2015-waldweihnacht.jpg.webp',
                images: waldweihnacht2015
              }
            ]"
            :key="albumIndex"
            @click="
              activeAlbum = albums.images;
              index = 0;
            "
          >
            <div class="card">
              <div class="card-image">
                <img :src="albums.preview" />
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">{{ albums.title }}</p>
                    <p class="subtitle is-6">{{ albums.dateString }}</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>

        <h2 class="subtitle is-2">2016</h2>
        <ul>
          <li
            class="vue-light-gallery-thumb"
            v-for="(albums, albumIndex) in [
              {
                year: '2016',
                dateString: '2016',
                title: 'Diverse',
                preview:
                  externalAssetsUri +
                  '/album/thumb/cover/2016-diverse.jpg.webp',
                images: diverse2016
              },
              {
                year: '2016',
                dateString: '01. Januar 2016',
                title: 'Schnee auf dem Benkerjoch',
                preview:
                  externalAssetsUri + '/album/thumb/cover/2016-schnee.jpg.webp',
                images: schnee2016
              },
              {
                year: '2016',
                dateString: '23. Januar 2016',
                title: 'Bank und Tisch bauen',
                preview:
                  externalAssetsUri +
                  '/album/thumb/cover/2016-bank-und-tisch-bauen.jpg.webp',
                images: bankUndTischBauen2016
              },
              {
                year: '2016',
                dateString: '14. - 16. Mai 2016',
                title: 'Pfila',
                preview:
                  externalAssetsUri + '/album/thumb/cover/2016-pfila.jpg.webp',
                images: pfila2016
              },
              {
                year: '2016',
                dateString: '11. September 2016',
                title: 'Ehemaligentreffen',
                preview:
                  externalAssetsUri +
                  '/album/thumb/cover/2016-ehemaligentreffen.jpg.webp',
                images: ehemaligentreffen2016
              },
              {
                year: '2016',
                dateString: '01. - 02. Oktober 2016',
                title: 'Jubiläumslager',
                preview:
                  externalAssetsUri +
                  '/album/thumb/cover/2016-jubilaeumslager.jpg.webp',
                images: jubilaeumslager2016
              }
            ]"
            :key="albumIndex"
            @click="
              activeAlbum = albums.images;
              index = 0;
            "
          >
            <div class="card">
              <div class="card-image">
                <img :src="albums.preview" />
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">{{ albums.title }}</p>
                    <p class="subtitle is-6">{{ albums.dateString }}</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>

        <h2 class="subtitle is-2">2017</h2>
        <ul>
          <li
            class="vue-light-gallery-thumb"
            v-for="(albums, albumIndex) in [
              {
                year: '2017',
                dateString: '2017',
                title: 'Diverse',
                preview:
                  externalAssetsUri +
                  '/album/thumb/cover/2017-diverse.jpg.webp',
                images: diverse2017
              },
              {
                year: '2017',
                dateString: '02. - 07. Oktober 2017',
                title: 'HELA',
                preview:
                  externalAssetsUri + '/album/thumb/cover/2017-hela.jpg.webp',
                images: hela2017
              }
            ]"
            :key="albumIndex"
            @click="
              activeAlbum = albums.images;
              index = 0;
            "
          >
            <div class="card">
              <div class="card-image">
                <img :src="albums.preview" />
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">{{ albums.title }}</p>
                    <p class="subtitle is-6">{{ albums.dateString }}</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>

        <h2 class="subtitle is-2">2018</h2>
        <ul>
          <li
            class="vue-light-gallery-thumb"
            v-for="(albums, albumIndex) in [
              {
                year: '2018',
                dateString: '2018',
                title: 'Diverse',
                preview:
                  externalAssetsUri +
                  '/album/thumb/cover/2018-diverse.jpg.webp',
                images: diverse2018
              }
            ]"
            :key="albumIndex"
            @click="
              activeAlbum = albums.images;
              index = 0;
            "
          >
            <div class="card">
              <div class="card-image">
                <img :src="albums.preview" />
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">{{ albums.title }}</p>
                    <p class="subtitle is-6">{{ albums.dateString }}</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>

        <h2 class="subtitle is-2">2019</h2>
        <ul>
          <li
            class="vue-light-gallery-thumb"
            v-for="(albums, albumIndex) in [
              {
                year: '2019',
                dateString: '2019',
                title: 'Diverse',
                preview:
                  externalAssetsUri +
                  '/album/thumb/cover/2019-diverse.jpg.webp',
                images: diverse2019
              },
              {
                year: '2019',
                dateString: '25. Mai 2019',
                title: 'Taufe Caroline und Silvan',
                preview:
                  externalAssetsUri +
                  '/album/thumb/cover/2019-taufe-caroline-und-silvan.jpg.webp',
                images: taufeCarolineUndSilvan2019
              },
              {
                year: '2019',
                dateString: '13. Juli 2019',
                title: 'Ferienpass',
                preview:
                  externalAssetsUri +
                  '/album/thumb/cover/2019-ferienpass.jpg.webp',
                images: ferienpass2019
              },
              {
                year: '2019',
                dateString: '17. August 2019',
                title: 'Wilder Westen',
                preview:
                  externalAssetsUri +
                  '/album/thumb/cover/2019-wilder-westen.jpg.webp',
                images: wilderWesten2019
              },
              {
                year: '2019',
                dateString: '26. Oktober 2019',
                title: 'Verbandstrefftag in Entfelden',
                preview:
                  externalAssetsUri +
                  '/album/thumb/cover/2019-verbandstrefftag.jpg.webp',
                images: verbandstrefftag2019
              },
              {
                year: '2019',
                dateString: '14. Dezember 2019',
                title: 'Waldweihnacht',
                preview:
                  externalAssetsUri +
                  '/album/thumb/cover/2019-waldweihnacht.jpg.webp',
                images: waldweihnacht2019
              }
            ]"
            :key="albumIndex"
            @click="
              activeAlbum = albums.images;
              index = 0;
            "
          >
            <div class="card">
              <div class="card-image">
                <img :src="albums.preview" />
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">{{ albums.title }}</p>
                    <p class="subtitle is-6">{{ albums.dateString }}</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>

        <h2 class="subtitle is-2">2020</h2>
        <ul>
          <li
            class="vue-light-gallery-thumb"
            v-for="(albums, albumIndex) in [
              {
                year: '2020',
                dateString: '2020',
                title: 'Diverse',
                preview:
                  externalAssetsUri +
                  '/album/thumb/cover/2020-diverse.jpg.webp',
                images: diverse2020
              },
              {
                year: '2020',
                dateString: '11. Januar 2020',
                title: 'Ausgrabungen',
                preview:
                  externalAssetsUri +
                  '/album/thumb/cover/2020-ausgrabung.jpg.webp',
                images: ausgrabungen2020
              },
              {
                year: '2020',
                dateString: '18. Januar 2020',
                title: '8er Nomad und Römer',
                preview:
                  externalAssetsUri +
                  '/album/thumb/cover/2020-8ernomad-roemer.jpg.webp',
                images: nomadRoemer2020
              },
              {
                year: '2020',
                dateString: '16. Februar 2020',
                title: 'Hütte flicken und Schiff',
                preview:
                  externalAssetsUri +
                  '/album/thumb/cover/2020-huette-flicken-schiff.jpg.webp',
                images: huetteFlickenSchiff2020
              },
              {
                year: '2020',
                dateString: '29. August 2020',
                title: 'Zirkus',
                preview:
                  externalAssetsUri + '/album/thumb/cover/2020-zirkus.jpg.webp',
                images: zirkus2020
              }
            ]"
            :key="albumIndex"
            @click="
              activeAlbum = albums.images;
              index = 0;
            "
          >
            <div class="card">
              <div class="card-image">
                <img :src="albums.preview" />
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">{{ albums.title }}</p>
                    <p class="subtitle is-6">{{ albums.dateString }}</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { LightGallery } from "vue-light-gallery";

export default {
  components: {
    LightGallery
  },
  data() {
    return {
      activeAlbum: [],
      diverse2015: [
        {
          title: "21.02 - Kochen über dem Feuer",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-diverse/2015-02-21 1455 Waldläufer.jpg.webp"
        },
        {
          title: "21.02 - Schoggicreme mit Doppelrahm",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-diverse/2015-02-21 162824 Waldläufer.jpg.webp"
        },
        {
          title: "21.02 - Kochen über dem Feuer",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-diverse/2015-02-21 162949 Waldläufer.jpg.webp"
        },
        {
          title: "21.02 - Schoggicreme mit Doppelrahm",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-diverse/2015-02-21 162953 Waldläufer.jpg.webp"
        },
        {
          title: "21.02 - Schoggicreme mit Doppelrahm",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-diverse/2015-02-21 163022 Waldläufer.jpg.webp"
        },
        {
          title: "14.03 - Büchsenwerfen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-diverse/2015-03-14 1338.jpg.webp"
        },
        {
          title: "14.03 - Schoggibananen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-diverse/2015-03-14 1520.jpg.webp"
        },
        {
          title: "25.04 - Gotthardzelt",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-diverse/2015-04-25 155952 Mit Gotthard.jpg.webp"
        },
        {
          title: "25.04 - Knoten üben",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-diverse/2015-04-25 160008 Mit Gotthard.jpg.webp"
        },
        {
          title: "25.04 - Cervelats über dem Feuer",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-diverse/2015-04-25 161445 Mit Gotthard.jpg.webp"
        },
        {
          title: "06.06 - König",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-diverse/2015-06-06 161800 Kolibri.jpg.webp"
        },
        {
          title: "20.06 - Einsatz am Jugendfest in Buchs",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-diverse/2015-06-20 141902 Cevi am Jugendfest in Buchs.jpg.webp"
        },
        {
          title: "16.08 - Z'vieri",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-diverse/2015-08-16 162807.jpg.webp"
        },
        {
          title: "29.08 - Bachwanderung in Küttigen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-diverse/2015-08-29 1447 Bachwanderung.jpg.webp"
        },
        {
          title: "29.08 Bachwanderung",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-diverse/2015-08-29 1455 Bachwanderung.jpg.webp"
        },
        {
          title: "12.09 - Hamburger",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-diverse/2015-09-12 1437.jpg.webp"
        },
        {
          title: "12.09 - Schoggifondue",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-diverse/2015-09-12 160746 050.jpg.webp"
        },
        {
          title: "24.10 - Kartenlesen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-diverse/2015-10-24 1445 Kekse essen, Seilbrücke bauen.jpg.webp"
        },
        {
          title: "24.10 - Gruppenbild mit Indianern",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-diverse/2015-10-24 151327 Kekse essen, Seilbrücke bauen.jpg.webp"
        },
        {
          title: "24.10 - Kekse essen von der Schnur",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-diverse/2015-10-24 1527 Kekse essen, Seilbrücke bauen.jpg.webp"
        },
        {
          title: "24.10 - Seilbrücke",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-diverse/2015-10-24 1627 Kekse essen, Seilbrücke bauen.jpg.webp"
        },
        {
          title: "07.11 - Auf einen Baum klettern",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-diverse/2015-11-07 1425 Baum klettern, Feuern.jpg.webp"
        },
        {
          title: "07.11 - Grosses Feuer hinter dem Zelt",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-diverse/2015-11-07 1626 Baum klettern, Feuern.jpg.webp"
        },
        {
          title: "07.11 - Kochen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-diverse/2015-11-07 1634 Baum klettern, Feuern 2.jpg.webp"
        },
        {
          title: "07.11 - Gemütlicher Sitz auf altem Baum",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-diverse/2015-11-07 1634 Baum klettern, Feuern.jpg.webp"
        },
        {
          title: "07.11 - Heissluftballon basteln",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-diverse/2015-11-07 1640 06 Ballon bauen.jpg.webp"
        },
        {
          title: "07.11 - Heissluftballon steigen lassen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-diverse/2015-11-07 1713 Baum klettern, Feuern.jpg.webp"
        },
        {
          title: "14.11 - Verkleidet",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-diverse/2015-11-14 155946 161.jpg.webp"
        },
        {
          title: "14.11 - Schlangenbrot",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-diverse/2015-11-14 160759 163.jpg.webp"
        },
        {
          title: "15.11 - 3 Gauner",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-diverse/2015-11-15.jpg.webp"
        },
        {
          title: "06.12 - Kerzenziehen bei der Schoggi Frey",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-diverse/2015-12-06 124721 Kerzenziehen Schoggi Frey.jpg.webp"
        },
        {
          title: "13.12 - Kerzenziehen bei Schoggi Frey",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-diverse/2015-12-13 140201 Kerzenziehen Schoggi Frey.jpg.webp"
        }
      ],
      jota2015: [
        {
          title: "Namensschilder basteln",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-jota/2015-10-16 2211.jpg.webp"
        },
        {
          title: "Namensschilder basteln",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-jota/2015-10-16 2211 Pic2.jpg.webp"
        },
        {
          title: "Namensschilder basteln",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-jota/2015-10-16 2318 1 Pic2.jpg.webp"
        },
        {
          title: "Fertiges Namensschild",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-jota/2015-10-16 2323 1.jpg.webp"
        },
        {
          title: "Schaltung prüfen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-jota/2015-10-16.jpg.webp"
        },
        {
          title: "Die Gränicher Namensschilder",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-jota/2015-10-17 0140 1.jpg.webp"
        },
        {
          title: "Erste Kontakte werden aufgebaut",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-jota/2015-10-17 0147 1 Pic1.jpg.webp"
        },
        {
          title: "Allgemeine Informationen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-jota/2015-10-17 022443.jpg.webp"
        },
        {
          title: "Werwölfle",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-jota/2015-10-17 0322.jpg.webp"
        },
        {
          title: "Dessert",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-jota/2015-10-17 085835.jpg.webp"
        },
        {
          title: "Dessert",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-jota/2015-10-17 0944 Pic1.jpg.webp"
        },
        {
          title: "Antenne und Funkwagen auf dem Parkplatz",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-jota/2015-10-17 0949.jpg.webp"
        },
        {
          title: "Suche nach den Füchsen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-jota/2015-10-17 1134 Pic2.jpg.webp"
        },
        {
          title: "Skypekonferenz",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-jota/2015-10-17 1208.jpg.webp"
        },
        {
          title: "Skypekonferenz",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-jota/2015-10-17 1516 1.jpg.webp"
        },
        {
          title: "Spätes Mittagessen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-jota/2015-10-17 1516 Pic1.jpg.webp"
        },
        {
          title: "Werwöfle",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-jota/2015-10-17 1555.jpg.webp"
        },
        {
          title: "Berliner",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-jota/2015-10-17.jpg.webp"
        },
        {
          title: "Z'nacht am Feuer",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-jota/2015-10-18 0122.jpg.webp"
        },
        {
          title: "Gruppenfoto",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-jota/2015-10-18 0151.jpg.webp"
        },
        {
          title: "Computerspiele",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-jota/2015-10-18 1014.jpg.webp"
        },
        {
          title: "Aus dem Funkwagen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-jota/2015-10-18 1121.jpg.webp"
        },
        {
          title: "Im Funkwagen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-jota/2015-10-18 125520.jpg.webp"
        },
        {
          title: "Unterstützung beim Löten",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-jota/2015-10-18 1304.jpg.webp"
        },
        {
          title: "Schoggifondue",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-jota/2015-10-18 1340.jpg.webp"
        },
        {
          title: "Gruppenfoto",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-jota/2015-10-18 1539.jpg.webp"
        },
        {
          title: "Ballon starten",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-jota/2015-10-18 1555.jpg.webp"
        },
        {
          title: "Ballon fliegt",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-jota/2015-10-18 1616 Pic1.jpg.webp"
        },
        {
          title: "Unsere Kontakte",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-jota/2015-10-18 1618.jpg.webp"
        },
        {
          title: "Weltkugeln basteln",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-jota/2015-10-18 1738 Pic2.jpg.webp"
        }
      ],
      pfila2015: [
        {
          title: "Im fliegenden Zelt",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-pfila/2015-05-23 144711.jpg.webp"
        },
        {
          title: "Das fliegende Zelt",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-pfila/2015-05-23 150056.jpg.webp"
        },
        {
          title: "Unser Lagerplatz",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-pfila/2015-05-23 1528.jpg.webp"
        },
        {
          title: "kurze Pause",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-pfila/2015-05-24 081633.jpg.webp"
        },
        {
          title: "Bienenstock",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-pfila/2015-05-24 0946.jpg.webp"
        },
        {
          title: "Unsere Spielwiese",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-pfila/2015-05-24 0947.jpg.webp"
        },
        {
          title: "Der Leiterspatz",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-pfila/2015-05-24 100937.jpg.webp"
        },
        {
          title: "Kochen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-pfila/2015-05-24 121718.jpg.webp"
        },
        {
          title: "Stöckle spielen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-pfila/2015-05-24 121723.jpg.webp"
        },
        {
          title: "Lagerabzeichen basteln",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-pfila/2015-05-24 121725.jpg.webp"
        },
        {
          title: "Stock schnitzen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-pfila/2015-05-24 121728.jpg.webp"
        },
        {
          title: "Das Mittagessen ruft",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-pfila/2015-05-24 121738.jpg.webp"
        },
        {
          title: "Es wird alles vorbereitet für das Mittagessen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-pfila/2015-05-24 121742.jpg.webp"
        },
        {
          title: "Stöckle",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-pfila/2015-05-24 130453.jpg.webp"
        },
        {
          title: "Dessert wird geliefert",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-pfila/2015-05-24 130457.jpg.webp"
        },
        {
          title: "Die Forscher erzählen...",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-pfila/2015-05-24.jpg.webp"
        },
        {
          title: "Unsere Wasserstation",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-pfila/2015-05-25 Pic3.jpg.webp"
        }
      ],
      schoggifrey2015: [
        {
          title: "Schoggi Frey",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-schoggi-frey/2015-01-10 15200.jpg.webp"
        },
        {
          title: "Eingang",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-schoggi-frey/2015-01-10 152034.jpg.webp"
        },
        {
          title: "Wir dürfen unsere eigene Schoggi produzieren",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-schoggi-frey/2015-01-10 155600.jpg.webp"
        },
        {
          title: "Wir dürfen unsere eigene Schoggi produzieren",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-schoggi-frey/2015-01-10 155606.jpg.webp"
        },
        {
          title: "Zwischendurch wird auch etwas geschlemmert",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-schoggi-frey/2015-01-10 155615.jpg.webp"
        },
        {
          title: "Unsere Kollektion – Teil 1",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-schoggi-frey/2015-01-10 155931.jpg.webp"
        },
        {
          title: "Unsere Kollektion – Teil 2",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-schoggi-frey/2015-01-10 155932.jpg.webp"
        },
        {
          title: "Interaktives Spiel",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-schoggi-frey/2015-01-10 162328.jpg.webp"
        },
        {
          title: "Mmh das Schoggi Fliessband",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-schoggi-frey/2015-01-10 162811.jpg.webp"
        },
        {
          title: "Als Schoggi verkleidet",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-schoggi-frey/2015-01-10 163848.jpg.webp"
        },
        {
          title: "Als Schoggi verkleidet",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-schoggi-frey/2015-01-10 Pic1.jpg.webp"
        },
        {
          title: "Als Schoggi verkleidet",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-schoggi-frey/2015-01-10 Pic2.jpg.webp"
        },
        {
          title: "Twin Look",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-schoggi-frey/2015-01-10 Pic5.jpg.webp"
        },
        {
          title: "Der Kakaowald",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-schoggi-frey/2015-01-10 Pic6.jpg.webp"
        },
        {
          title: "Eigenes Schoggicover",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-schoggi-frey/2015-01-10 Pic7.jpg.webp"
        }
      ],
      waldweihnacht2015: [
        {
          title: "Besammlung",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-waldweihnacht/2015-12-19 1713 Pic1.jpg.webp"
        },
        {
          title: "Mit Fackeln geht es in den Wald",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-waldweihnacht/2015-12-19 1713 Pic2.jpg.webp"
        },
        {
          title: "Kerzenweg",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-waldweihnacht/2015-12-19 1733 Waldweihnacht.jpg.webp"
        },
        {
          title: "Ablauf des Abends erklären",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-waldweihnacht/2015-12-19 1741.jpg.webp"
        },
        {
          title: "Kochen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-waldweihnacht/2015-12-19 1757 Pic3.jpg.webp"
        },
        {
          title: "Der Samichlaus sammelt die Geschenke ein",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-waldweihnacht/2015-12-19 1800 Pic1.jpg.webp"
        },
        {
          title: "Abschluss im warmen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-waldweihnacht/2015-12-19 1845 Pic1.jpg.webp"
        },
        {
          title: "Guetzli und Kaffee",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-waldweihnacht/2015-12-19 1846 Pic1.jpg.webp"
        },
        {
          title: "Guetzli und Kaffee",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-waldweihnacht/2015-12-19 1846 Pic2.jpg.webp"
        },
        {
          title: "Guetzli und Kaffee",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-waldweihnacht/2015-12-19 1847.jpg.webp"
        },
        {
          title: "Guetzli und Kaffee",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-waldweihnacht/2015-12-19 1854.jpg.webp"
        },
        {
          title: "Guetzli und Kaffee",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-waldweihnacht/2015-12-19 1854 Pic1.jpg.webp"
        },
        {
          title: "Kein Kaffee für die Kinder ;D",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-waldweihnacht/2015-12-19 1855.jpg.webp"
        },
        {
          title: "Leiter bedienen das Buffet",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-waldweihnacht/2015-12-19 1855 Pic3.jpg.webp"
        },
        {
          title: "Sirup für die Kinder",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-waldweihnacht/2015-12-19 1857.jpg.webp"
        },
        {
          title: "Guetzli und Kaffee",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-waldweihnacht/2015-12-19 1923 Pic1.jpg.webp"
        },
        {
          title: "Kindertisch",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-waldweihnacht/2015-12-19 1923 Pic2.jpg.webp"
        },
        {
          title: "Gleich wird es laut...",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-waldweihnacht/2015-12-19 1924 Pic1.jpg.webp"
        },
        {
          title: "Bereit für die Übergabe",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-waldweihnacht/2015-12-19 1929.jpg.webp"
        },
        {
          title: "Zipora wird zur Knapin geschlagen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-waldweihnacht/2015-12-19 1932 Pic2.jpg.webp"
        },
        {
          title: "und erhält die Urkunde",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2015/2015-waldweihnacht/2015-12-19 1932 Pic4.jpg.webp"
        }
      ],
      bankUndTischBauen2016: [
        {
          title: "Achtung Schwertransport",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-bank-und-tisch-bauen/2016-01-23 1035 Pic2.jpg.webp"
        },
        {
          title: "Die Bäume sind noch etwas lang",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-bank-und-tisch-bauen/2016-01-23 1040.jpg.webp"
        },
        {
          title: "Feuer für das Z'vieri",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-bank-und-tisch-bauen/2016-01-23 1224.jpg.webp"
        },
        {
          title: "das viele Arbeiten macht durstig",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-bank-und-tisch-bauen/2016-01-23 1234 Pic2.jpg.webp"
        },
        {
          title: "Z'vieri vorbereiten",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-bank-und-tisch-bauen/2016-01-23 1246.jpg.webp"
        },
        {
          title: "Spiessli auf dem Grill",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-bank-und-tisch-bauen/2016-01-23 1253.jpg.webp"
        },
        {
          title: "damit man weiss wer wir sind",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-bank-und-tisch-bauen/2016-01-23 1346.jpg.webp"
        },
        {
          title: "Kreisbünde sind das Fundament für unser Bänkli",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-bank-und-tisch-bauen/2016-01-23 1346 Pic4.jpg.webp"
        },
        {
          title: "die ersten Ergebnisse lassen sich sehen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-bank-und-tisch-bauen/2016-01-23 1416 Pic1.jpg.webp"
        },
        {
          title: "aber wir brauchen auch eine Tischplatte",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-bank-und-tisch-bauen/2016-01-23 1515.jpg.webp"
        },
        {
          title: "zwei Bänkli und eine Tischplatte fertig",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-bank-und-tisch-bauen/2016-01-23 1522 Pic1.jpg.webp"
        },
        {
          title: "was man mit dem Russ aus dem Feuer alles machen kann...",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-bank-und-tisch-bauen/2016-01-23 1527 Pic2.jpg.webp"
        },
        {
          title: "Gruppenfoto zum Abschluss",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-bank-und-tisch-bauen/2016-01-23 1530 Pic1.jpg.webp"
        }
      ],
      diverse2016: [
        {
          title: "12.03 - Basteln",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-diverse/2016-03-12 144718 Üben für Gelehrtenprüfung.jpg.webp"
        },
        {
          title: "19.03 - Basteln",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-diverse/2016-03-19 144906 Postenlauf, Netz, Döner.jpg.webp"
        },
        {
          title: "Besuch vom Osterhasen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-diverse/2016-03-19 152000 Postenlauf, Netz, Döner.jpg.webp"
        },
        {
          title: "19.03 - Fliegender Teppich",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-diverse/2016-03-19 152829 Indi Postenlauf, Netz, Döner.jpg.webp"
        },
        {
          title: "19.03 - Vorbereitungen für Dürüm",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-diverse/2016-03-19 155415 Indi Postenlauf, Netz, Döner.jpg.webp"
        },
        {
          title: "02.04 - Schoggibananen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-diverse/2016-04-02 164250.jpg.webp"
        },
        {
          title: "30.04 - Bewertungsblätter verteilen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-diverse/2016-04-30 1442.jpg.webp"
        },
        {
          title: "30.04 - Zeltbau",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-diverse/2016-04-30 1451.jpg.webp"
        },
        {
          title: "30.04 - Z'vieri",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-diverse/2016-04-30 160149.jpg.webp"
        },
        {
          title: "30.04 - Huckepack",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-diverse/2016-04-30 1625.jpg.webp"
        },
        {
          title: "30.04 - Neue Mode",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-diverse/2016-04-30 1642.jpg.webp"
        },
        {
          title: "30.04 - Feuer entfachen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-diverse/2016-04-30 1703 Pic1.jpg.webp"
        },
        {
          title: "Wer im Glaushaus sitzt sollte nicht mit Steinen werfen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-diverse/2016-05-28 161731 Schnitzeljagd.jpg.webp"
        },
        {
          title: "04.06 - Seilbrücke am Kolibrinachmittag",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-diverse/2016-06-04 1504 Pic4 Kolibri.jpg.webp"
        },
        {
          title: "04.06 - Kolibrinachmittag",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-diverse/2016-06-04 1601 Kolibri.jpg.webp"
        },
        {
          title: "25.06 - Zelt inklusive Garage",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-diverse/2016-06-25 144850 Ideen Workshop.jpg.webp"
        },
        {
          title: "20.08 - British Bulldog",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-diverse/2016-08-20 1526 British Bulldog, Seilziehen Prank.jpg.webp"
        },
        {
          title: "20.08 - British Bulldog",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-diverse/2016-08-20 1527 British Bulldog, Seilziehen Prank.jpg.webp"
        },
        {
          title: "20.08 - Z'vieri",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-diverse/2016-08-20 1646 British Bulldog, Seilziehen Prank.jpg.webp"
        },
        {
          title: "20.08 - Virtuelles Seilziehen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-diverse/2016-08-20 1700 British Bulldog, Seilziehen Prank.jpg.webp"
        },
        {
          title: "27.08 - Gefesselter Phönix",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-diverse/2016-08-27 144847 Fesselspiele.jpg.webp"
        },
        {
          title: "27.08 - Wieder aufgestellt",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-diverse/2016-08-27 144933 Fesselspiele.jpg.webp"
        },
        {
          title: "27.08 - Gefesselt im Dreierpack",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-diverse/2016-08-27 145620 Fesselspiele.jpg.webp"
        },
        {
          title: "27.08 - Versuchen zu fliehen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-diverse/2016-08-27 145937 Fesselspiele.jpg.webp"
        },
        {
          title: "10.09 - Besammlung",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-diverse/2016-09-10 1521 Schnuppernachmittag.jpg.webp"
        },
        {
          title: "10.09 -Schoggicreme",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-diverse/2016-09-10 1731 Pic3 Schnuppernachmittag.jpg.webp"
        },
        {
          title: "20.11 - Bücherstudium",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-diverse/2016-11-20 Pic1.jpg.webp"
        },
        {
          title: "03.12 - Kerzenziehen mal anderst",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-diverse/2016-12-03 1737 Pic2.jpg.webp"
        },
        {
          title: "03.12 - Endresultat",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-diverse/2016-12-03 1926.jpg.webp"
        },
        {
          title: "17.12 - Waldweihnacht",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-diverse/2016-12-17 2144 Waldweihnacht.jpg.webp"
        },
        {
          title: "17.12 - Gegenstände suchen anhand von Pfeiffsignalen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-diverse/2016-12-17 2146 Pic1 Waldweihnacht.jpg.webp"
        },
        {
          title: "17.12 - Hier sind bereits viele Gegenstände gefunden",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-diverse/2016-12-17 2148 Waldweihnacht.jpg.webp"
        },
        {
          title: "17.12 - Singen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-diverse/2016-12-17 2246 Waldweihnacht.jpg.webp"
        },
        {
          title: "17.12 - Essensausgabe",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-diverse/2016-12-17 2255 Waldweihnacht.jpg.webp"
        },
        {
          title: "17.12 - Eintopf",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-diverse/2016-12-17 2257 Pic1 Waldweihnacht.jpg.webp"
        }
      ],
      ehemaligentreffen2016: [
        {
          title: "Das Buffet",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-ehemaligentreffen/2016-09-11 100836.jpg.webp"
        },
        {
          title: "Herrliche Fleisch/Käseplatten",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-ehemaligentreffen/2016-09-11 100837.jpg.webp"
        },
        {
          title: "Alles ist bereit",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-ehemaligentreffen/2016-09-11 100845.jpg.webp"
        },
        {
          title: "Die ersten Ehemaligen kommen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-ehemaligentreffen/2016-09-11 100859.jpg.webp"
        },
        {
          title: "Gemütliches Sitzen am Tisch",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-ehemaligentreffen/2016-09-11 105126.jpg.webp"
        },
        {
          title: "Die aktiven Leiter verteilen sich",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-ehemaligentreffen/2016-09-11 105135.jpg.webp"
        },
        {
          title: "Die aktiven Leiter verteilen sich",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-ehemaligentreffen/2016-09-11 105140.jpg.webp"
        },
        {
          title: "Steckbriefe werden ausgefüllt",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-ehemaligentreffen/2016-09-11 130543.jpg.webp"
        },
        {
          title: "Der Saal ist gut gefüllt",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-ehemaligentreffen/2016-09-11 130544.jpg.webp"
        },
        {
          title: "Vorne werden alte Bilder gezeigt",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-ehemaligentreffen/2016-09-11 130545.jpg.webp"
        },
        {
          title: "Alte Fotobücher studieren",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-ehemaligentreffen/2016-09-11 130546.jpg.webp"
        },
        {
          title: "Alte Fotobücher studieren",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-ehemaligentreffen/2016-09-11 130547.jpg.webp"
        },
        {
          title: "Alte Fotobücher studieren",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-ehemaligentreffen/2016-09-11 130548.jpg.webp"
        },
        {
          title: "Die letzten Reste verteilt",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-ehemaligentreffen/2016-09-11 151607 Löi.jpg.webp"
        }
      ],
      jubilaeumslager2016: [
        {
          title: "Zugfahrt nach Lenzburg",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-jubilaeumslager/2016-10-01 1049.jpg.webp"
        },
        {
          title: "Zugfahrt nach Lenzburg",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-jubilaeumslager/2016-10-01 1049 Pic1.jpg.webp"
        },
        {
          title: "Gruppe 1",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-jubilaeumslager/2016-10-01 105000 Pic2.jpg.webp"
        },
        {
          title: "Gruppe 2",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-jubilaeumslager/2016-10-01 110600.jpg.webp"
        },
        {
          title: "Katze überrascht",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-jubilaeumslager/2016-10-01 110910.jpg.webp"
        },
        {
          title: "Ankunft im Schloss Lenzburg",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-jubilaeumslager/2016-10-01 115540.jpg.webp"
        },
        {
          title: "Posten im Schlosspark",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-jubilaeumslager/2016-10-01 123142.jpg.webp"
        },
        {
          title: "Wasserspiele",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-jubilaeumslager/2016-10-01 134533.jpg.webp"
        },
        {
          title: "Räuber und Poli",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-jubilaeumslager/2016-10-01 140913.jpg.webp"
        },
        {
          title: "Das Gefängnis",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-jubilaeumslager/2016-10-01 142305.jpg.webp"
        },
        {
          title: "Reh erlegt",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-jubilaeumslager/2016-10-01 144757.jpg.webp"
        },
        {
          title: "Wildschwein erlegt",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-jubilaeumslager/2016-10-01 144801.jpg.webp"
        },
        {
          title: "Wir üben das Pfeilbogenschiessen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-jubilaeumslager/2016-10-01 150913.jpg.webp"
        },
        {
          title: "Pfeilbogenschiessen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-jubilaeumslager/2016-10-01 153600.jpg.webp"
        },
        {
          title: "Wildschwein erneut erlegt",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-jubilaeumslager/2016-10-01 160356.jpg.webp"
        },
        {
          title: "Unser Quartier im Bunker",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-jubilaeumslager/2016-10-01 185223.jpg.webp"
        },
        {
          title: "Mit tollem Aufenthaltsraum",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-jubilaeumslager/2016-10-01 185237.jpg.webp"
        },
        {
          title: "Vorbereitungen Jubiläumsschild",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-jubilaeumslager/2016-10-01 190655.jpg.webp"
        },
        {
          title: "Besuch im Naturama",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-jubilaeumslager/2016-10-02 102527.jpg.webp"
        },
        {
          title: "Jahresringe zählen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-jubilaeumslager/2016-10-02 102548.jpg.webp"
        },
        {
          title: "Wasser durch die Kapillaren blasen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-jubilaeumslager/2016-10-02 111032.jpg.webp"
        },
        {
          title: "Wettsägen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-jubilaeumslager/2016-10-02 112113.jpg.webp"
        },
        {
          title: "Wettsägen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-jubilaeumslager/2016-10-02 112130.jpg.webp"
        },
        {
          title: "Loch ausheben für das Jubiläumsschild",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-jubilaeumslager/2016-10-02 141825.jpg.webp"
        },
        {
          title: "Der Baum ist gepflanzt und das Schild gesetzt",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-jubilaeumslager/2016-10-02 143800 Pic1.jpg.webp"
        }
      ],
      pfila2016: [
        {
          title: "Die Fricker",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-pfila/2016-05-14 0943.jpg.webp"
        },
        {
          title: "Einführung in das Lagerthema",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-pfila/2016-05-14 0955.jpg.webp"
        },
        {
          title: "Majestix",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-pfila/2016-05-14 1000.jpg.webp"
        },
        {
          title: "Autostopp",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-pfila/2016-05-14 1029.jpg.webp"
        },
        {
          title: "Autostopp zum Zweiten",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-pfila/2016-05-14 1030.jpg.webp"
        },
        {
          title: "Wanderung zum Lagerplatz",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-pfila/2016-05-14 1101.jpg.webp"
        },
        {
          title: "Majestix begrüsst uns im Dorf",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-pfila/2016-05-14 1209.jpg.webp"
        },
        {
          title: "Z'vieri nach der Wanderung",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-pfila/2016-05-14 1211.jpg.webp"
        },
        {
          title: "Spezielle Begrüssungstechnik",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-pfila/2016-05-14 1514.jpg.webp"
        },
        {
          title: "Feuerholz beschaffen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-pfila/2016-05-14 1523.jpg.webp"
        },
        {
          title: 'Die Jungs möchten ein "spezielles Zelt"',
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-pfila/2016-05-14 1548.jpg.webp"
        },
        {
          title: "Scheint alles gut zu klappen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-pfila/2016-05-14 1648.jpg.webp"
        },
        {
          title: "Ob das wohl gut kommt...",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-pfila/2016-05-14 1651.jpg.webp"
        },
        {
          title: "Eine Szene aus dem Lager",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-pfila/2016-05-14 1654 Pic1.jpg.webp"
        },
        {
          title: "Erste Vorbereitungen für die Hamburger",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-pfila/2016-05-14 1705.jpg.webp"
        },
        {
          title: "Lagerfahne",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-pfila/2016-05-14 1705 Pic1.jpg.webp"
        },
        {
          title: "Die Fleischfabrik ist angelaufen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-pfila/2016-05-14 1808 Pic1.jpg.webp"
        },
        {
          title: "Die Kinder warten bereits sehnsüchtig auf das Abendessen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-pfila/2016-05-14 1810.jpg.webp"
        },
        {
          title: "Unsere fertige Lagerfahne",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-pfila/2016-05-14 1815.jpg.webp"
        },
        {
          title: "Die Küche läuft",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-pfila/2016-05-14 1840.jpg.webp"
        },
        {
          title: "Lagerabzeichen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-pfila/2016-05-14 1903.jpg.webp"
        },
        {
          title: "Waschstrasse",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-pfila/2016-05-14 2024.jpg.webp"
        },
        {
          title: "Nachtspiel gegen einen Stein",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-pfila/2016-05-15 0016.jpg.webp"
        },
        {
          title: "Phönix traf auf Pfadi",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-pfila/2016-05-15 0054 Pic2.jpg.webp"
        },
        {
          title: "Taufe von Phönix",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-pfila/2016-05-15 0105.jpg.webp"
        },
        {
          title: "Hindernisparcours",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-pfila/2016-05-15 1143.jpg.webp"
        },
        {
          title: "Z'mittag",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-pfila/2016-05-15 1519 Pic1.jpg.webp"
        },
        {
          title: "Ortsschild Genf",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-pfila/2016-05-15 1653.jpg.webp"
        },
        {
          title: "Ortsschild Rom",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-pfila/2016-05-15 1653 Pic1.jpg.webp"
        },
        {
          title: "Ortsschild Avenion",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-pfila/2016-05-15 1654.jpg.webp"
        },
        {
          title: "Ortsschild Lucdunum",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-pfila/2016-05-15 1654 Pic1.jpg.webp"
        },
        {
          title: "Ortsschild Arelate",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-pfila/2016-05-15 1654 Pic2.jpg.webp"
        },
        {
          title: "Ortsschild Lovsnnensivm",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-pfila/2016-05-15 1654 Pic3.jpg.webp"
        },
        {
          title: "Das Spinnennetz",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-pfila/2016-05-15 1734.jpg.webp"
        },
        {
          title: "Zaubertrank",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-pfila/2016-05-15 1741 Pic1.jpg.webp"
        },
        {
          title: "Asterix nach Zaubertrank",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-pfila/2016-05-15 1745.jpg.webp"
        },
        {
          title: "Der Sänger verlor seine Haare",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-pfila/2016-05-15 1752.jpg.webp"
        },
        {
          title: "Spielplatz",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-pfila/2016-05-15 1757 Pic1.jpg.webp"
        },
        {
          title: "Unterwegs mit dem Schiff",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-pfila/2016-05-15 1802 Pic3.jpg.webp"
        },
        {
          title: "Bereitmachen für den Kampf",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-pfila/2016-05-15 1814.jpg.webp"
        },
        {
          title: "Die endlosen Treppen der Bürokratie",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-pfila/2016-05-15 1816.jpg.webp"
        },
        {
          title: "... es geht immer weiter ...",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-pfila/2016-05-15 1820.jpg.webp"
        },
        {
          title: "Fleischschacht",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-pfila/2016-05-15 2024.jpg.webp"
        },
        {
          title: "Abend ums Lagerfeuer",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-pfila/2016-05-15 2054.jpg.webp"
        },
        {
          title: "Majestix begrüsst die Eltern",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-pfila/2016-05-16 1249.jpg.webp"
        },
        {
          title: "Jarne in Gewalt der Pfadi",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-pfila/2016-05-16 Jarne wurde entführt.jpg.webp"
        },
        {
          title: "Tschi-Ei-Ei als Abschluss",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-pfila/Zbinden (1).jpg.webp"
        }
      ],
      schnee2016: [
        {
          title: "kleine Schneeballschlacht",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-schnee/2016-01-16 1356.jpg.webp"
        },
        {
          title: "Achtung Schnee",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-schnee/2016-01-16 1356 Pic1.jpg.webp"
        },
        {
          title: "hüggeln",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-schnee/2016-01-16 1357.jpg.webp"
        },
        {
          title: "neue Bahn durch den Tiefschnee",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-schnee/2016-01-16 1406.jpg.webp"
        },
        {
          title: "Aus Abfallsäcken improvisierte Schlitten",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-schnee/2016-01-16 1425.jpg.webp"
        },
        {
          title: "3er Bob",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-schnee/2016-01-16 1432 Pic1.jpg.webp"
        },
        {
          title: "Kann auch rückwärts gefahren werden",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-schnee/2016-01-16 1434 Pic4.jpg.webp"
        },
        {
          title: "Auf der Seite wird mit Schneebällen geworfen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-schnee/2016-01-16 1435.jpg.webp"
        },
        {
          title: "auch das hochlaufen gehört dazu",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-schnee/2016-01-16 1435 Pic4.jpg.webp"
        },
        {
          title: "zwischendurch müssen die Säcke nachgefüllt werden",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-schnee/2016-01-16 1440 Pic1.jpg.webp"
        },
        {
          title: "wir sind nicht die einzigen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-schnee/2016-01-16 1442.jpg.webp"
        },
        {
          title: "Winterwunderland Benkerjoch",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-schnee/2016-01-16 1443 Pic2.jpg.webp"
        },
        {
          title: "eine kleine Schanze kann nicht schaden",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-schnee/2016-01-16 1449 Pic1.jpg.webp"
        },
        {
          title: "erster Test",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-schnee/2016-01-16 1455.jpg.webp"
        },
        {
          title: "die Schanz funktioniert",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-schnee/2016-01-16 1514.jpg.webp"
        },
        {
          title: "hoch hinaus",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-schnee/2016-01-16 1516.jpg.webp"
        },
        {
          title: "auch rückwärts",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-schnee/2016-01-16 1517.jpg.webp"
        },
        {
          title: "extra fürs Foto wurde der Himmel blau",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-schnee/2016-01-16 1524.jpg.webp"
        },
        {
          title: "mit etwas Übung springt es immer weiter",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2016/2016-schnee/2016-01-16 1525.jpg.webp"
        }
      ],
      diverse2017: [
        {
          title: "25.02 - Basteln am Kolibrinachmittag",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2017/2017-diverse/2017-02-25 152253 Kolibri Kolibri.jpg.webp"
        },
        {
          title: "25.02 - Auch die Vierbeiner werden begrüsst",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2017/2017-diverse/2017-02-25 152432 Kolibri Kolibri.jpg.webp"
        },
        {
          title: "04.03 - Schaukel",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2017/2017-diverse/2017-03-04 1418 Pic2.jpg.webp"
        },
        {
          title: "04.03 - Leckere Würste",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2017/2017-diverse/2017-03-04 1523.jpg.webp"
        },
        {
          title: "01.04 - Zeltbau",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2017/2017-diverse/2017-04-01 143422 Zelt, Schnitzeljagd, 1. April.jpg.webp"
        },
        {
          title: "01.04 - Schnee im April?",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2017/2017-diverse/2017-04-01 153026 Zelt, Schnitzeljagd, 1. April.jpg.webp"
        },
        {
          title: "06.05 - Verkleiden",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2017/2017-diverse/2017-05-06 152536 Verkleiden und Feuern.jpg.webp"
        },
        {
          title: "03.06 - An der Aare",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2017/2017-diverse/2017-06-03 161645 An Aare.jpg.webp"
        },
        {
          title: "24.06 - Tag der offenen Tür Kirchgemeinde",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2017/2017-diverse/2017-06-24 154632 Tag der Offenen Tür.jpg.webp"
        },
        {
          title: "24.06 - Kubb",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2017/2017-diverse/2017-06-24 162051 Tag der Offenen Tür.jpg.webp"
        },
        {
          title: "19.08 - Orientieren rund um den Jubiläumsbaum",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2017/2017-diverse/2017-08-19 1651 Reparatur Jubiläumsbaum2 Brillen-Logo-Foto.jpg.webp"
        },
        {
          title: "20.08 - Wettbewerb zu den Cevi Brillen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2017/2017-diverse/2017-08-20 1425 Pic2 Brillen-Logo-Foto.jpg.webp"
        },
        {
          title: "20.08 - Vorbereitungen mit dem Cevi Logo",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2017/2017-diverse/2017-08-20 1435 Pic1 Brillen-Logo-Foto.jpg.webp"
        },
        {
          title: "20.08 - Unser Foto",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2017/2017-diverse/2017-08-20 1534 Brillen-Logo-Foto.jpg.webp"
        },
        {
          title: "20.08 - Feines Z'vieri nach getaner Arbeit",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2017/2017-diverse/2017-08-20 1556 Pic2 Brillen-Logo-Foto.jpg.webp"
        },
        {
          title: "11.11 - Mal ein anderes Zelt",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2017/2017-diverse/2017-11-11 1554 Raclette.jpg.webp"
        },
        {
          title: "11.11 - Racletteplausch",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2017/2017-diverse/2017-11-11 1555 Raclette.jpg.webp"
        },
        {
          title: "25.11 - Gemeinsames Programm mit der Cevi Schönenwerd",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2017/2017-diverse/2017-11-25 1436 Gemeinsames Programm mit Cevi Schönenwerd.jpg.webp"
        },
        {
          title: "Die Kasse muss geknackt werden",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2017/2017-diverse/2017-11-25 154347 Gemeinsames Programm mit Cevi Schönenwerd.jpg.webp"
        }
      ],
      hela2017: [
        {
          title: "Besammlung",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2017/2017-hela/2017-10-02 1424 IMG_3470.jpg.webp"
        },
        {
          title: "Seuchenschutzkommando",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2017/2017-hela/2017-10-02 1700 IMG_3494.jpg.webp"
        },
        {
          title: "Übermitteln mit Morsefahnen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2017/2017-hela/2017-10-02 1700 IMG_3496.jpg.webp"
        },
        {
          title: "Lagerabzeichen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2017/2017-hela/2017-10-03 1456 IMG_4842.jpg.webp"
        },
        {
          title: "Hindernisparcours",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2017/2017-hela/2017-10-03 1507 IMG_4852.jpg.webp"
        },
        {
          title: "Blinzelspiel",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2017/2017-hela/2017-10-04 1045 IMG_4900.jpg.webp"
        },
        {
          title: "Hoch hinaus auf der Wanderung",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2017/2017-hela/2017-10-04 1106 IMG_4907.jpg.webp"
        },
        {
          title: "Auf dem Männlichen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2017/2017-hela/2017-10-04 1113 IMG_4932.jpg.webp"
        },
        {
          title: "Wanderung auf der kleinen Scheidegg",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2017/2017-hela/2017-10-04 1435 IMG_4969.jpg.webp"
        },
        {
          title: "Sägen für das Abendessen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2017/2017-hela/2017-10-04 1736 IMG_4974.jpg.webp"
        },
        {
          title: "Schwedisches Kubb",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2017/2017-hela/2017-10-05 1037 IMG_4982.jpg.webp"
        },
        {
          title: "Blachen Volleyball",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2017/2017-hela/2017-10-05 1041 IMG_4990.jpg.webp"
        },
        {
          title: "Tennisball balancieren",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2017/2017-hela/2017-10-05 1042 IMG_4996.jpg.webp"
        },
        {
          title: "Malou in Action",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2017/2017-hela/2017-10-05 1118 IMG_5157.jpg.webp"
        },
        {
          title: "Langsam wird der Turm hoch",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2017/2017-hela/2017-10-05 1138 IMG_5161.jpg.webp"
        },
        {
          title: "Karte zusammensetzen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2017/2017-hela/2017-10-05 1225 IMG_5195.jpg.webp"
        },
        {
          title: "Herrliche Herbststimmung",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2017/2017-hela/2017-10-05 1240 IMG_5216.jpg.webp"
        },
        {
          title: "Verfolgung dunkler Gestalten",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2017/2017-hela/2017-10-05 1244 IMG_5244.jpg.webp"
        },
        {
          title: "Zeltbau",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2017/2017-hela/2017-10-05 1512 IMG_5259.jpg.webp"
        },
        {
          title: "Knöpfe",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2017/2017-hela/2017-10-05 1516 IMG_5263.jpg.webp"
        },
        {
          title: "Pfosten fangen mit dem Lasso",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2017/2017-hela/2017-10-05 1536 IMG_5273.jpg.webp"
        },
        {
          title: "Da ist jemand müde",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2017/2017-hela/2017-10-05 1545 IMG_5286.jpg.webp"
        },
        {
          title: "Sportblock",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2017/2017-hela/2017-10-05 1959 IMG_5307.jpg.webp"
        },
        {
          title: "Grosses Geburtstagskind",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2017/2017-hela/2017-10-06 0916 IMG_5339.jpg.webp"
        },
        {
          title: "Erhält ein Feuerwehrauto",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2017/2017-hela/2017-10-06 0952 IMG_5345.jpg.webp"
        },
        {
          title: "Lagerabzeichen basteln",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2017/2017-hela/2017-10-06 1209 IMG_5364.jpg.webp"
        },
        {
          title: "viele Lagerabzeichen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2017/2017-hela/2017-10-06 1257 IMG_5374.jpg.webp"
        },
        {
          title: "HELA T-Shirts",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2017/2017-hela/2017-10-06 1257 IMG_5375.jpg.webp"
        },
        {
          title: "",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2017/2017-hela/2017-10-06 1508 IMG_5396.jpg.webp"
        },
        {
          title: "Ein Berliner",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2017/2017-hela/2017-10-06 1608 IMG_5406.jpg.webp"
        },
        {
          title: "Sportblock",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2017/2017-hela/2017-10-06 1650 IMG_5419.jpg.webp"
        },
        {
          title: "Wir geraten in eine Zollkontrolle",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2017/2017-hela/2017-10-06 1657 IMG_3513.jpg.webp"
        },
        {
          title: "Müssen uns durchschmuggeln",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2017/2017-hela/2017-10-06 1658 IMG_3514.jpg.webp"
        },
        {
          title: "Vierbeiniger Besuch",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2017/2017-hela/2017-10-06 1700 IMG_5433.jpg.webp"
        },
        {
          title: "Durchsuchung",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2017/2017-hela/2017-10-06 1706 IMG_3533.jpg.webp"
        },
        {
          title: "Zweiter Zollposten",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2017/2017-hela/2017-10-06 1709 IMG_3539.jpg.webp"
        },
        {
          title: "Blachenschlauch",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2017/2017-hela/2017-10-06 1713 IMG_3555.jpg.webp"
        },
        {
          title: "Abendfitness",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2017/2017-hela/2017-10-06 1713 IMG_5434.jpg.webp"
        },
        {
          title: "Training mit dem Zoll",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2017/2017-hela/2017-10-06 1730 IMG_3593.jpg.webp"
        },
        {
          title: "Überfall",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2017/2017-hela/2017-10-06 1747 IMG_3627.jpg.webp"
        },
        {
          title: "Abschluss Gruppenfoto",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2017/2017-hela/2017-10-07 1338 IMG_5462.jpg.webp"
        }
      ],
      diverse2018: [
        {
          title: "17.02 - Schneeschuhlager in Le Sentier",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2018/2018-diverse/2018-02-17 224108 Schneeschuhlager Le Sentier.jpg.webp"
        },
        {
          title: "18.02 - Schoggi Fondue im Zug",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2018/2018-diverse/2018-02-18 165153 Schneeschuhlager Le Sentier.jpg.webp"
        },
        {
          title: "24.02 - Auf der Keba",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2018/2018-diverse/2018-02-24 151306 Keba.jpg.webp"
        },
        {
          title: "24.02 - Kunstwerke im Wald",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2018/2018-diverse/2018-02-24 165250 Keba.jpg.webp"
        },
        {
          title: "24.02 - Besichtigung der Kunstwerke",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2018/2018-diverse/2018-02-24 165335 Keba.jpg.webp"
        },
        {
          title: "24.03 - Omelette mit selber gepflücktem Bärlauch",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2018/2018-diverse/2018-03-24 155401.jpg.webp"
        },
        {
          title: "12.05 - Eingangsmauer zu unserem Lagerplatz",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2018/2018-diverse/2018-05-12 172804.jpg.webp"
        },
        {
          title: "19.05 - Feuerstelle neu mit Topfhalter",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2018/2018-diverse/2018-05-19 153817.jpg.webp"
        },
        {
          title: "16.06 - Bananen pflücken vom Baum",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2018/2018-diverse/2018-06-16 151420 Klettern und Bananen.jpg.webp"
        },
        {
          title: "16.06 - Nach der harten Arbeit folgt der Lohn",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2018/2018-diverse/2018-06-16 160354 Indi Klettern und Bananen.jpg.webp"
        },
        {
          title: "16.06 - Wir essen mit selbergebastelten Löffeln",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2018/2018-diverse/2018-06-16 160424 Klettern und Bananen.jpg.webp"
        },
        {
          title: "30.06 - Sirup ausschenken am Jugendfest",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2018/2018-diverse/2018-06-30 1320 Jugendfest.jpg.webp"
        },
        {
          title: "30.06 - Grosser Andrang",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2018/2018-diverse/2018-06-30 1505 Pic1 Jugendfest.jpg.webp"
        },
        {
          title: "18.08 - Reparatur von Tisch und Bank",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2018/2018-diverse/2018-08-18 1634 Tisch Gruppenplatz.jpg.webp"
        },
        {
          title: '20.10 - Erweiterungsbau mit "Dach"',
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2018/2018-diverse/2018-10-20 151717.jpg.webp"
        },
        {
          title: "27.10 - Tag der offenen Jugendräume - unser Bild",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2018/2018-diverse/2018-10-27 1333 Tag der offenen Jugendräume.jpg.webp"
        },
        {
          title: "27.10 - Spiele mit dem Fallschirmtuch",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2018/2018-diverse/2018-10-27 1408 Tag der offenen Jugendräume.jpg.webp"
        },
        {
          title: "27.10 - Unihockey",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2018/2018-diverse/2018-10-27 1541 Tag der offenen Jugendräume.jpg.webp"
        },
        {
          title: "15.12 - Gemütliches Feuer",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2018/2018-diverse/2018-12-15 182736 Waldweihnacht.jpg.webp"
        },
        {
          title: "",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2018/2018-diverse/2018-12-15 182747 Waldweihnacht.jpg.webp"
        },
        {
          title: "15.12 - Unser Weihnachtsbaum",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2018/2018-diverse/2018-12-15 183159 Waldweihnacht.jpg.webp"
        },
        {
          title: "15.12 - Gemütliches Beisamensein",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2018/2018-diverse/2018-12-15 183214 Waldweihnacht.jpg.webp"
        }
      ],
      diverse2019: [
        {
          title: "23.02 - Vor unserem Unterstand",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-diverse/2019-02-23 1444 IMG_20190223_144430 Cevi-Nachmittag Knappenprüfung.jpg.webp"
        },
        {
          title: "23.02 - Posten 3 Knotenkunde",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-diverse/2019-02-23 1444 IMG_20190223_144437 Cevi-Nachmittag Knappenprüfung.jpg.webp"
        },
        {
          title: "23.02 - Z'vieri",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-diverse/2019-02-23 1536 IMG_20190223_153624 Cevi-Nachmittag Knappenprüfung.jpg.webp"
        },
        {
          title: "23.02 - Posten 5 Unsere Abteilung",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-diverse/2019-02-23 1607 IMG_20190223_160751 Cevi-Nachmittag Knappenprüfung.jpg.webp"
        },
        {
          title: "23.02 - Posten 2 Feuer machen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-diverse/2019-02-23 1608 IMG_20190223_160850x Cevi-Nachmittag Knappenprüfung.jpg.webp"
        },
        {
          title: "09.03 - Zeltbau",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-diverse/2019-03-09 1446 IMG_20190309_144646.jpg.webp"
        },
        {
          title: "09.03 - Popcorn",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-diverse/2019-03-09 1540 IMG_20190309_154002.jpg.webp"
        },
        {
          title: "09.03 - Popcorn fassen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-diverse/2019-03-09 1556 IMG_20190309_155641.jpg.webp"
        },
        {
          title: "30.03 - Unterstützung am Putztag",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-diverse/2019-03-30 IMG-20190330-WA0002 Patrick Putztag Buchs Grüne.jpg.webp"
        },
        {
          title: "08.06 - Umgefallener Baum",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-diverse/2019-06-08 1451 IMG_20190608_145113 Bauen.jpg.webp"
        },
        {
          title: "08.06 - Suche nach verschiedenen Souvenirs",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-diverse/2019-06-08 1607 IMG_20190608_160717 Bauen.jpg.webp"
        },
        {
          title: "29.06 - Sommerfest Vorspeise",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-diverse/2019-06-29 1125 Buscheta Sommerfest.jpg.webp"
        },
        {
          title: "29.06 - Sommerfest Kuchen in Orange",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-diverse/2019-06-29 1125 Kuchen in Orangen Sommerfest.jpg.webp"
        },
        {
          title: "29.06 - Feuer",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-diverse/2019-06-29 1126 Feuer Sommerfest.jpg.webp"
        },
        {
          title: "29.06 - Vorbereitungen für den Hauptgang",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-diverse/2019-06-29 1126 Vorbereitungen Spiessli Sommerfest.jpg.webp"
        }
      ],
      ferienpass2019: [
        {
          title: "Begrüssung",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-ferienpass/2019-07-13 0902 DSC_2956.jpg.webp"
        },
        {
          title: "Eine ganze Schar Kinder meldet sich zum Dienst",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-ferienpass/2019-07-13 0905 DSC_2970.jpg.webp"
        },
        {
          title: "Entwürfe für die Fahne",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-ferienpass/2019-07-13 0915 DSC_2973.jpg.webp"
        },
        {
          title: "Piratenfahne gestalten",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-ferienpass/2019-07-13 0935 DSC_2975.jpg.webp"
        },
        {
          title: "Piratenfahne gestalten",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-ferienpass/2019-07-13 0935 DSC_2982.jpg.webp"
        },
        {
          title: "Ein richtiger Pirat benötigt eine Augenklappe",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-ferienpass/2019-07-13 0939 DSC_2990.jpg.webp"
        },
        {
          title: "Mit Seilschiffen machen wir uns auf den Weg",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-ferienpass/2019-07-13 1038 DSC_3009.jpg.webp"
        },
        {
          title: "Zweites Schiff",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-ferienpass/2019-07-13 1038 DSC_3010.jpg.webp"
        },
        {
          title: "Drittes Schiff",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-ferienpass/2019-07-13 1048 DSC_3026.jpg.webp"
        },
        {
          title: "Eine Flaschenpost wurde gefunden",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-ferienpass/2019-07-13 1049 DSC_3039.jpg.webp"
        },
        {
          title: "Zwei Schiffe kollidieren",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-ferienpass/2019-07-13 1050 DSC_3057.jpg.webp"
        },
        {
          title: "Das Mittagessen wird vorbereitet",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-ferienpass/2019-07-13 1107 DSC_3107.jpg.webp"
        },
        {
          title: "Essensausgabe",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-ferienpass/2019-07-13 1127 DSC_3132.jpg.webp"
        },
        {
          title: "Schiff 1 am Essen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-ferienpass/2019-07-13 1130 DSC_3134.jpg.webp"
        },
        {
          title: "Schiff 2 am Essen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-ferienpass/2019-07-13 1130 DSC_3135.jpg.webp"
        },
        {
          title: "Schiff 3 am Essen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-ferienpass/2019-07-13 1130 DSC_3136.jpg.webp"
        },
        {
          title: "Die ganze Mannschaft",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-ferienpass/2019-07-13 1134 IMG_20190713_123445.jpg.webp"
        },
        {
          title: "Wir versuchen den Schatz zu öffnen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-ferienpass/2019-07-13 1156 DSC_3143.jpg.webp"
        },
        {
          title: "Kampf gegen das Unkraut",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-ferienpass/2019-07-13 1226 DSC_3168.jpg.webp"
        },
        {
          title: "Mit dem Kompass unterwegs",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-ferienpass/2019-07-13 1233 DSCN8466.jpg.webp"
        },
        {
          title:
            "Mit den gefundenen Schlüsseln versuchen wir den Schatz zu knacken",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-ferienpass/2019-07-13 1257 DSC_3213.jpg.webp"
        },
        {
          title: "Karte entziffern",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-ferienpass/2019-07-13 1304 DSC_3219.jpg.webp"
        },
        {
          title: "der Schatz (Schoggibananen) gefällt",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-ferienpass/2019-07-13 1401 DSC_3267.jpg.webp"
        },
        {
          title: "Wir erkunden die nähere Umgebung",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-ferienpass/2019-07-13 1416 DSC_3287.jpg.webp"
        },
        {
          title: "Und finden eine Rutschbahn",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-ferienpass/2019-07-13 1427 DSC_3331.jpg.webp"
        }
      ],
      taufeCarolineUndSilvan2019: [
        {
          title: "Jack Sparrow wurde entführt",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-taufe-caroline-und-silvan/2019-05-25 1333 DSCN7426.jpg.webp"
        },
        {
          title: "Merida hat es auch erwischt",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-taufe-caroline-und-silvan/2019-05-25 1337 IMG_20190525_143748.jpg.webp"
        },
        {
          title: "Mutprobe für Merida",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-taufe-caroline-und-silvan/2019-05-25 1342 DSCN7434.jpg.webp"
        },
        {
          title: "und Jack Sparrow",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-taufe-caroline-und-silvan/2019-05-25 1344 DSCN7436.jpg.webp"
        },
        {
          title: "der das Getränk wohl nicht mag ;D",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-taufe-caroline-und-silvan/2019-05-25 1350 DSCN7447.jpg.webp"
        },
        {
          title: "die anderen haben uns gefunden",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-taufe-caroline-und-silvan/2019-05-25 1354 DSCN7451.jpg.webp"
        },
        {
          title: "Jack Sparrow findet seinen Namen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-taufe-caroline-und-silvan/2019-05-25 1356 DSCN7454.jpg.webp"
        },
        {
          title: "und ist wohl froh wieder runter zu kommen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-taufe-caroline-und-silvan/2019-05-25 1356 DSCN7455.jpg.webp"
        },
        {
          title: "Feines Schlangenbrot",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-taufe-caroline-und-silvan/2019-05-25 1507 DSCN7493.jpg.webp"
        },
        {
          title: "Man kämpft um die beste/bequemste Position",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-taufe-caroline-und-silvan/2019-05-25 1508 DSCN7498.jpg.webp"
        },
        {
          title: "Mhm fein",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-taufe-caroline-und-silvan/2019-05-25 1519 DSCN7505.jpg.webp"
        },
        {
          title: "die Zecken im Dickicht sieht man nicht",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-taufe-caroline-und-silvan/2019-05-25 1605 DSCN7528.jpg.webp"
        }
      ],
      wilderWesten2019: [
        {
          title: "Steine versteckt",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-wilder-westen/2019-08-17 1344 P1050563.jpg.webp"
        },
        {
          title: "Steine sichtbar",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-wilder-westen/2019-08-17 1344 P1050566.jpg.webp"
        },
        {
          title: "Anschleichen zu den Siedlern",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-wilder-westen/2019-08-17 1359 P1050571.jpg.webp"
        },
        {
          title: "Siedler schauen sich um",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-wilder-westen/2019-08-17 1403 P1050573.jpg.webp"
        },
        {
          title: "Indianer wird zu den Schienen transportiert",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-wilder-westen/2019-08-17 1415 P1050596.jpg.webp"
        },
        {
          title: "Indianer wird auf die Schienen gelegt",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-wilder-westen/2019-08-17 1418 P1050596.jpg.webp"
        },
        {
          title: "Duell",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-wilder-westen/2019-08-17 1423 P1050600.jpg.webp"
        },
        {
          title: "Opfer des Duells",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-wilder-westen/2019-08-17 1437 P1050609.jpg.webp"
        },
        {
          title: "Siedler und Häuptling können sich einigen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-wilder-westen/2019-08-17 1445 P1050617.jpg.webp"
        },
        {
          title: "Popcorn",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-wilder-westen/2019-08-17 1510 P1050619.jpg.webp"
        },
        {
          title: "Popcorn",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-wilder-westen/2019-08-17 1510 P1050620.jpg.webp"
        },
        {
          title: "Rauchzeichen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-wilder-westen/2019-08-17 1545 P1050628.jpg.webp"
        }
      ],
      verbandstrefftag2019: [
        {
          title: "Begrüssung",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-verbandstrefftag/2019-10-26 1047 IMG_20191026_104742.jpg.webp"
        },
        {
          title: "Wurmlochball",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-verbandstrefftag/2019-10-26 1207 IMG_20191026_120748.jpg.webp"
        },
        {
          title: "Wurmlochball",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-verbandstrefftag/2019-10-26 1208 IMG_20191026_120801.jpg.webp"
        },
        {
          title: "bereitmachen für die nächste Runde …",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-verbandstrefftag/2019-10-26 1208 IMG_20191026_120808.jpg.webp"
        },
        {
          title: "… und los",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-verbandstrefftag/2019-10-26 1208 IMG_20191026_120815.jpg.webp"
        },
        {
          title: "Kampf in der Mitte",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-verbandstrefftag/2019-10-26 1338 IMG_0079.jpg.webp"
        },
        {
          title: "und Punkt",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-verbandstrefftag/2019-10-26 1350 IMG_0134.jpg.webp"
        },
        {
          title: "Start des Finale",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-verbandstrefftag/2019-10-26 1513 IMG_20191026_151308.jpg.webp"
        },
        {
          title: "die zwei Teams",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-verbandstrefftag/2019-10-26 1517 IMG_20191026_151718.jpg.webp"
        },
        {
          title: "Final im Gang",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-verbandstrefftag/2019-10-26 1522 IMG_20191026_152223.jpg.webp"
        },
        {
          title: "Preisverleihung",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-verbandstrefftag/2019-10-26 1531 IMG_20191026_153154.jpg.webp"
        },
        {
          title: "Preisverleihung",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-verbandstrefftag/2019-10-26 1534 IMG_20191026_153408.jpg.webp"
        },
        {
          title: "Preisverleihung",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-verbandstrefftag/2019-10-26 1536 IMG_20191026_153650.jpg.webp"
        },
        {
          title: "Die Sieger am jubeln",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-verbandstrefftag/2019-10-26 1539 IMG_20191026_153927.jpg.webp"
        }
      ],
      waldweihnacht2019: [
        {
          title: "Guetzlimaschine",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-waldweihnacht/2019-12-14 1619 IMG_20191214_161945.jpg.webp"
        },
        {
          title: "Casino",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-waldweihnacht/2019-12-14 1736 IMG_20191214_173631.jpg.webp"
        },
        {
          title: "Börse",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-waldweihnacht/2019-12-14 1736 IMG_20191214_173645.jpg.webp"
        },
        {
          title: "Der Dealer",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-waldweihnacht/2019-12-14 1744 IMG_20191214_174457.jpg.webp"
        },
        {
          title: "Geländespiel",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-waldweihnacht/2019-12-14 1759 IMG_20191214_175903.jpg.webp"
        },
        {
          title: "Gemütlich im Pfarrhaus",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-waldweihnacht/2019-12-14 1903 IMG_20191214_190349.jpg.webp"
        },
        {
          title: "Gemütlich im Pfarrhaus",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-waldweihnacht/2019-12-14 1903 IMG_20191214_190353.jpg.webp"
        },
        {
          title: "Geschenke verteilen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2019/2019-waldweihnacht/2019-12-14 1905 IMG_20191214_190518.jpg.webp"
        }
      ],
      ausgrabungen2020: [
        {
          title: "Spiel",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-ausgrabung/2020-01-11 1503 P1070285.jpg.webp"
        },
        {
          title: "Basteln",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-ausgrabung/2020-01-11 1520 P1070289.jpg.webp"
        },
        {
          title: "Basteln",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-ausgrabung/2020-01-11 1520 P1070290.jpg.webp"
        },
        {
          title: "Basteln",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-ausgrabung/2020-01-11 1520 P1070291.jpg.webp"
        },
        {
          title: "Die Hütte",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-ausgrabung/2020-01-11 1530 P1070292.jpg.webp"
        },
        {
          title: "Lernen für den Hilfsleiterkurs",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-ausgrabung/2020-01-11 1544 P1070295.jpg.webp"
        },
        {
          title: "Feuerstelle freilegen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-ausgrabung/2020-01-11 1544 P1070296.jpg.webp"
        },
        {
          title: "Neue Feuerstelle ausheben",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-ausgrabung/2020-01-11 1544 P1070298.jpg.webp"
        },
        {
          title: "Neue Feuerstelle ausheben",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-ausgrabung/2020-01-11 1610 P1070301.jpg.webp"
        },
        {
          title: "Neue Feuerstelle ausheben",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-ausgrabung/2020-01-11 1610 P1070302.jpg.webp"
        },
        {
          title: "Neue Feuerstelle ausheben",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-ausgrabung/2020-01-11 1611 P1070306.jpg.webp"
        },
        {
          title: "Hamburger",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-ausgrabung/2020-01-11 1720 P1070308.jpg.webp"
        },
        {
          title: "Hamburger",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-ausgrabung/2020-01-11 1720 P1070309.jpg.webp"
        },
        {
          title: "Die neue Feuerstelle ist fertig",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-ausgrabung/2020-01-11 1720 P1070310.jpg.webp"
        }
      ],
      nomadRoemer2020: [
        {
          title: "",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-8ernomad-roemer/2020-01-18 1510 P1070315.jpg.webp"
        },
        {
          title: "8er Nomad aufstellen in zwei Gruppen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-8ernomad-roemer/2020-01-18 1525 P1070317.jpg.webp"
        },
        {
          title: "8er Nomad aufstellen in zwei Gruppen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-8ernomad-roemer/2020-01-18 1526 P1070319.jpg.webp"
        },
        {
          title: "Die kleinen schleichen sich an",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-8ernomad-roemer/2020-01-18 1526 P1070320.jpg.webp"
        },
        {
          title: "Der Römer bewacht die Festung",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-8ernomad-roemer/2020-01-18 1526 P1070321.jpg.webp"
        },
        {
          title: "8er Nomadbau im Gang",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-8ernomad-roemer/2020-01-18 1528 P1070330.jpg.webp"
        },
        {
          title: "Die kleinen schleichen sich an",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-8ernomad-roemer/2020-01-18 1530 P1070340.jpg.webp"
        },
        {
          title: "Die kleinen schleichen sich an",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-8ernomad-roemer/2020-01-18 1532 P1070343.jpg.webp"
        },
        {
          title: "Die kleinen schleichen sich an",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-8ernomad-roemer/2020-01-18 1533 P1070346.jpg.webp"
        },
        {
          title: "Kampf gegen den Römer",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-8ernomad-roemer/2020-01-18 1533 P1070349.jpg.webp"
        },
        {
          title: "Der Römer ergibt sich",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-8ernomad-roemer/2020-01-18 1533 P1070352.jpg.webp"
        },
        {
          title: "Er wird entwaffnet",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-8ernomad-roemer/2020-01-18 1533 P1070353.jpg.webp"
        },
        {
          title: "Nun ist er auf der Seite der Kleinen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-8ernomad-roemer/2020-01-18 1534 P1070360.jpg.webp"
        },
        {
          title: "Gruppe 1 hat fertig geknöpft und beginnt mit dem Aufstellen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-8ernomad-roemer/2020-01-18 1546 P1070363.jpg.webp"
        },
        {
          title: "Gruppe 2 ist noch am Knöpfen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-8ernomad-roemer/2020-01-18 1546 P1070369.jpg.webp"
        },
        {
          title: "Gruppe 1 hat einen Vorsprung",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-8ernomad-roemer/2020-01-18 1549 P1070370.jpg.webp"
        },
        {
          title: "Gruppe 2 ist noch am Knöpfen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-8ernomad-roemer/2020-01-18 1550 P1070373.jpg.webp"
        },
        {
          title: "Langsam ist das Zelt klar erkennbar",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-8ernomad-roemer/2020-01-18 1550 P1070374.jpg.webp"
        },
        {
          title: "Herring",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-8ernomad-roemer/2020-01-18 1551 P1070379.jpg.webp"
        },
        {
          title: "",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-8ernomad-roemer/2020-01-18 1552 P1070382.jpg.webp"
        },
        {
          title: "Hier ein Direktvergleich",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-8ernomad-roemer/2020-01-18 1602 P1070386.jpg.webp"
        },
        {
          title: "Gruppe 1 ist fertig und macht es sich gemütlich",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-8ernomad-roemer/2020-01-18 1604 P1070391.jpg.webp"
        },
        {
          title: "Gruppe 2 ist auch bald fertig",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-8ernomad-roemer/2020-01-18 1609 P1070393.jpg.webp"
        },
        {
          title: "und kann es isch auch gemütlich machen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-8ernomad-roemer/2020-01-18 1613 P1070395.jpg.webp"
        },
        {
          title: "Hindernisparcours",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-8ernomad-roemer/2020-01-18 1633 P1070397.jpg.webp"
        },
        {
          title: "",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-8ernomad-roemer/2020-01-18 1651 P1070400.jpg.webp"
        },
        {
          title: "Z›vieri im Zelt",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-8ernomad-roemer/2020-01-18 1709 P1070405.jpg.webp"
        },
        {
          title: "Z›vieri im Zelt",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-8ernomad-roemer/2020-01-18 1710 P1070406.jpg.webp"
        }
      ],
      zirkus2020: [
        {
          title: "Die Akrobaten",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-zirkus/2020-08-29 1654 P1080097.jpg.webp"
        },
        {
          title: "Die Akrobaten",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-zirkus/2020-08-29 1654 P1080098.jpg.webp"
        },
        {
          title: "Die Akrobaten",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-zirkus/2020-08-29 1654 P1080099.jpg.webp"
        },
        {
          title: "Die Akrobaten",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-zirkus/2020-08-29 1655 P1080102.jpg.webp"
        },
        {
          title: "Die Akrobaten",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-zirkus/2020-08-29 1657 P1080109.jpg.webp"
        },
        {
          title: "Die Zauberer",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-zirkus/2020-08-29 1659 P1080112.jpg.webp"
        },
        {
          title: "Die Clowns",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-zirkus/2020-08-29 1700 P1080115.jpg.webp"
        },
        {
          title: "Das Publikum",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-zirkus/2020-08-29 1701 P1080118.jpg.webp"
        },
        {
          title: "Das Publikum",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-zirkus/2020-08-29 1702 P1080123.jpg.webp"
        },
        {
          title: "Zaubertrink draussen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-zirkus/2020-08-29 1708 P1080126.jpg.webp"
        },
        {
          title: "Zaubertrink draussen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-zirkus/2020-08-29 1711 P1080131.jpg.webp"
        },
        {
          title: "Zaubertrink draussen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-zirkus/2020-08-29 1714 P1080134.jpg.webp"
        }
      ],
      diverse2020: [
        {
          title: "09.02 - Leiterevent Krimitrail",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-diverse/2020-02-09 DSC_0000101.jpg.webp"
        },
        {
          title: "09.02 – Fondueplausch",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-diverse/2020-02-09 DSC_0000126.jpg.webp"
        },
        {
          title: "09.02 – Fondueplausch",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-diverse/2020-02-09 DSC_0000128.jpg.webp"
        },
        {
          title: "29.02 – Hütte",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-diverse/2020-02-29 DSC_0000163.jpg.webp"
        },
        {
          title: "29.02 – Z›vieri",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-diverse/2020-02-29 DSC_0000164.jpg.webp"
        },
        {
          title: "29.02 – Hütte",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-diverse/2020-02-29 DSC_0000165.jpg.webp"
        },
        {
          title: "29.02 – Hütte",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-diverse/2020-02-29 DSC_0000171.jpg.webp"
        },
        {
          title: "15.04 – Regalbau Materiallager",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-diverse/2020-04-15 Regalbau4.jpg.webp"
        },
        {
          title: "15.04 – Garage putzen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-diverse/2020-04-15 Regalbau6.jpg.webp"
        },
        {
          title: "13.06 – Schiff fahren",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-diverse/2020-06-13 Cevi Nachmittag.jpg.webp"
        },
        {
          title: "26.07 – Logo montieren",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-diverse/2020-07-26 1729 Logo Garage.jpg.webp"
        },
        {
          title: "15.08 - Sicherheitskleidung bevor mit Farbe hantiert wird",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-diverse/2020-08-15 at 18.30.172.jpg.webp"
        },
        {
          title: "15.08",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-diverse/2020-08-15 at 18.32.21.jpg.webp"
        },
        {
          title: "15.08 – Die neuste Mode",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-diverse/2020-08-15 at 18.41.26.jpg.webp"
        },
        {
          title: "15.08 – Kreis um 2er First",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-diverse/2020-08-15 at 18.41.273.jpg.webp"
        },
        {
          title: "15.08 – 2er First",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-diverse/2020-08-15 at 18.41.27.jpg.webp"
        },
        {
          title: "15.08 – Die Gruppenabzeichen der Kleinen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-diverse/2020-08-15 at 18.44.25.jpg.webp"
        },
        {
          title: "15.08 – Mauer aus Blachen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-diverse/2020-08-15 at 18.44.26.jpg.webp"
        },
        {
          title: "29.08 - Zvieri in Rapperswil",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-diverse/2020-08-29 1545 P1080081.jpg.webp"
        },
        {
          title: "29.08 – Velotour",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-diverse/2020-08-29 1636 P1080093.jpg.webp"
        }
      ],
      huetteFlickenSchiff2020: [
        {
          title: "Material fassen für die Grossen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-huette-flicken-schiff/2020-02-16 DSC_0000134.jpg.webp"
        },
        {
          title: "Spiele für die Kleinen",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-huette-flicken-schiff/2020-02-16 DSC_0000136.jpg.webp"
        },
        {
          title: "",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-huette-flicken-schiff/2020-02-16 DSC_0000145.jpg.webp"
        },
        {
          title: "Tannenzapfen in der Feuerstelle",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-huette-flicken-schiff/2020-02-16 DSC_0000149.jpg.webp"
        },
        {
          title: "Tannenzapfenschlacht",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-huette-flicken-schiff/2020-02-16 DSC_0000150.jpg.webp"
        },
        {
          title: "Schiff",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-huette-flicken-schiff/2020-02-16 IMG-20200216-WA0006.jpg.webp"
        },
        {
          title: "Schiff",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-huette-flicken-schiff/2020-02-16 IMG-20200216-WA0008.jpg.webp"
        },
        {
          title: "Arbeiten an der Hütte",
          url:
            process.env.VUE_APP_EXTERNAL_ASSETS_URI +
            "/album/2020/2020-huette-flicken-schiff/2020-02-16 IMG-20200216-WA0016.jpg.webp"
        }
      ],
      index: null,
      externalAssetsUri: process.env.VUE_APP_EXTERNAL_ASSETS_URI
    };
  }
};
</script>

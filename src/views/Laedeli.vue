<template>
  <section class="section">
    <div class="container">
      <h1 class="title is-1">Lädeli</h1>
      <p class="content">
        Im Cevilädeli führen wir eine Auswahl von interessanten Artikel für
        Jungschärler. Einen Teil der Artikel haben wir auf Lager. Andere
        bestellen wir bei Bedarf. Mit dem untenstehenden Formular können Sie
        Bestellungen übers Internet tätigen. Sie können aber natürlich auch nach
        einem Jungschinachmittag direkt bei uns vorbeikommen. Bei einigen
        Artikeln werden weitere Informationen angezeigt wenn sich der Mauszeiger
        über dem Bild befindet.
      </p>
      <h2 class="subtitle is-2">Reguläre Artikel</h2>
      <ul>
        <li
          class="vue-light-gallery-thumb"
          v-for="(items, itemIndex) in [
            {
              category: 'regular',
              file:
                externalAssetsUri +
                '/laedeli/thumb/haupt_01_cevi_hemd.jpg.webp',
              name: 'Jungscharhemd Kinder',
              description: 'Verfügbare Grössen 140, 152, 164',
              price: '54.9',
            },
            {
              category: 'regular',
              file:
                externalAssetsUri +
                '/laedeli/thumb/haupt_02_cevi_hemd_erwachsene.jpg.webp',
              name: 'Jungscharhemd Erwachsene',
              description: 'Verfügbare Grössen S, M, L, XL, 2XL',
              price: '62.9',
            },
            {
              category: 'regular',
              file:
                externalAssetsUri +
                '/laedeli/thumb/haupt_03_kravattenring.jpg.webp',
              name: 'Krawattenring',
              description: '',
              price: '4.9',
            },
            {
              category: 'regular',
              file:
                externalAssetsUri +
                '/laedeli/thumb/haupt_04_cevi_schweiz_kravatte.jpg.webp',
              name: 'Krawatte Schweiz',
              description: '',
              price: '35.9',
            },
            {
              category: 'regular',
              file:
                externalAssetsUri +
                '/laedeli/thumb/haupt_05_abzeichen_YMCA.jpg.webp',
              name: 'Abzeichen YMCA Scouting Jungschar',
              description: '',
              price: '3.9',
            },
            {
              category: 'regular',
              file:
                externalAssetsUri +
                '/laedeli/thumb/haupt_06_abzeichen_weltbund_neu.jpg.webp',
              name: 'Abzeichen CVJM Weltbund blau/gelb ',
              description: '',
              price: '2.9',
            },
            {
              category: 'regular',
              file:
                externalAssetsUri +
                '/laedeli/thumb/haupt_07_abzeichen_hugenottenkreuz.jpg.webp',
              name: 'Abzeichen Mädchen Hugenottenkreuz blau/gelb',
              description: '',
              price: '3.9',
            },
            {
              category: 'regular',
              file:
                externalAssetsUri +
                '/laedeli/thumb/haupt_08_abzeichen_kreuz_im_schild.jpg.webp',
              name: 'Abzeichen Buben Kreuz im Schild blau/gelb',
              description: '',
              price: '2.5',
            },
            {
              category: 'regular',
              file:
                externalAssetsUri +
                '/laedeli/thumb/haupt_09_abzeichen_kreuz_im_schild_al.jpg.webp',
              name: 'Abzeichen Buben Kreuz im Schild blau/rot',
              description: '',
              price: '2.5',
            },
            {
              category: 'regular',
              file:
                externalAssetsUri +
                '/laedeli/thumb/haupt_10_abzeichen_abteilungsleiter.jpg.webp',
              name: 'Abzeichen Buben Abteilungsleiter',
              description: '',
              price: '3.7',
            },
            {
              category: 'regular',
              file:
                externalAssetsUri +
                '/laedeli/thumb/haupt_11_abzeichen_abteilungsleiterin.jpg.webp',
              name: 'Abzeichen Mädchen Abteilungsleiterin',
              description: '',
              price: '3.7',
            },
            {
              category: 'regular',
              file:
                externalAssetsUri +
                '/laedeli/thumb/haupt_12_abzeichen_gruppenleiter.jpg.webp',
              name: 'Abzeichen Buben Gruppenleiter',
              description: '',
              price: '3.7',
            },
            {
              category: 'regular',
              file:
                externalAssetsUri +
                '/laedeli/thumb/haupt_13_abzeichen_gruppenleiterin.jpg.webp',
              name: 'Abzeichen Mädchen Gruppenleiterin',
              description: '',
              price: '3.7',
            },
            {
              category: 'regular',
              file:
                externalAssetsUri +
                '/laedeli/thumb/haupt_14_abzeichen_lagerleiter.jpg.webp',
              name: 'Abzeichen Buben Lagerleiter',
              description: '',
              price: '3.7',
            },
            {
              category: 'regular',
              file:
                externalAssetsUri +
                '/laedeli/thumb/haupt_15_abzeichen_lagerleiterin.jpg.webp',
              name: 'Abzeichen Mädchen Lagerleiterin',
              description: '',
              price: '3.7',
            },
            {
              category: 'regular',
              file:
                externalAssetsUri +
                '/laedeli/thumb/haupt_16_abzeichen_materialchef.jpg.webp',
              name: 'Abzeichen Buben Materialchef',
              description: '',
              price: '3.7',
            },
            {
              category: 'regular',
              file:
                externalAssetsUri +
                '/laedeli/thumb/haupt_17_abzeichen_materialchefin.jpg.webp',
              name: 'Abzeichen Mädchen Materialchefin',
              description: '',
              price: '3.7',
            },
            {
              category: 'regular',
              file:
                externalAssetsUri +
                '/laedeli/thumb/haupt_20_funktionsabzeichen_erstehilfe.jpg.webp',
              name: 'Pionierabzeichen Erste Hilfe',
              description: '',
              price: '3.9',
            },
            {
              category: 'regular',
              file:
                externalAssetsUri +
                '/laedeli/thumb/haupt_21_funktionsabzeichen_karte.jpg.webp',
              name: 'Pionierabzeichen Schätzen und Messen',
              description: '',
              price: '3.9',
            },
            {
              category: 'regular',
              file:
                externalAssetsUri +
                '/laedeli/thumb/haupt_22_funktionsabzeichen_knoten.jpg.webp',
              name: 'Pionierabzeichen Seil und Knoten',
              description: '',
              price: '3.9',
            },
            {
              category: 'regular',
              file:
                externalAssetsUri +
                '/laedeli/thumb/haupt_23_funktionsabzeichen_kochen.jpg.webp',
              name: 'Pionierabzeichen Kochen im Freien',
              description: '',
              price: '3.9',
            },
            {
              category: 'regular',
              file:
                externalAssetsUri +
                '/laedeli/thumb/haupt_24_funktionsabzeichen_musik.jpg.webp',
              name: 'Pionierabzeichen Singen und Musizieren',
              description: '',
              price: '3.9',
            },
            {
              category: 'regular',
              file:
                externalAssetsUri +
                '/laedeli/thumb/haupt_25_funktionsabzeichen_natur.jpg.webp',
              name: 'Pionierabzeichen Natur',
              description: '',
              price: '3.9',
            },
            {
              category: 'regular',
              file:
                externalAssetsUri +
                '/laedeli/thumb/haupt_26_funktionsabzeichen_schaetzen.jpg.webp',
              name: 'Pionierabzeichen Schätzen und Messen',
              description: '',
              price: '3.9',
            },
            {
              category: 'regular',
              file:
                externalAssetsUri +
                '/laedeli/thumb/haupt_27_funktionsabzeichen_uebermitteln.jpg.webp',
              name: 'Pionierabzeichen Übermitteln',
              description: '',
              price: '3.9',
            },
          ]"
          :key="itemIndex"
        >
          <div class="card">
            <header class="card-header">
              <p class="card-header-title is-centered">
                {{ items.name }}
              </p>
            </header>
            <div class="card-image">
              <img :src="items.file" />
            </div>
            <div class="card-content">
              <div class="content">
                {{ items.price }} CHF<br />
                {{ items.description }}
              </div>
            </div>
          </div>
        </li>
      </ul>

      <h2 class="subtitle is-2">Restposten</h2>
      <ul>
        <li
          class="vue-light-gallery-thumb"
          v-for="(items, itemIndex) in [
            {
              category: 'remainder',
              file:
                externalAssetsUri +
                '/laedeli/thumb/rest_abzeichen_J_und_S.jpg.webp',
              name: 'Abzeichen J+S',
              description: 'Noch 27 Stück',
              price: '2',
            },
            {
              category: 'remainder',
              file:
                externalAssetsUri +
                '/laedeli/thumb/rest_abzeichen_weltbund.jpg.webp',
              name: 'Abzeichen Weltbund schwarz',
              description: 'Noch 1 Stück',
              price: '2.5',
            },
            {
              category: 'remainder',
              file: externalAssetsUri + '/laedeli/thumb/rest_badetuch.jpg.webp',
              name: 'Badetuch',
              description: 'Noch 3 Stück. 85% Polyester, 15% Nylon',
              price: '29.9',
            },
            {
              category: 'remainder',
              file:
                externalAssetsUri + '/laedeli/thumb/rest_brieftasche.jpg.webp',
              name: 'Brieftasche',
              description: 'Noch 2 Stück',
              price: '10',
            },
            {
              category: 'remainder',
              file:
                externalAssetsUri + '/laedeli/thumb/rest_feuerzeug.jpg.webp',
              name: 'Feuerzeug',
              description: 'Noch 2 Stück',
              price: '4',
            },
            {
              category: 'remainder',
              file: externalAssetsUri + '/laedeli/thumb/rest_flasche.jpg.webp',
              name: 'Trinkflasche',
              description: 'Noch 4 Stück',
              price: '10',
            },
            {
              category: 'remainder',
              file:
                externalAssetsUri + '/laedeli/thumb/rest_frisbee_gelb.jpg.webp',
              name: 'Frisbee gelb',
              description: 'Noch 1 Stück',
              price: '5',
            },
            {
              category: 'remainder',
              file:
                externalAssetsUri + '/laedeli/thumb/rest_frisbee_rot.jpg.webp',
              name: 'Frisbee rot',
              description: 'Noch 1 Stück',
              price: '5',
            },
            {
              category: 'remainder',
              file:
                externalAssetsUri + '/laedeli/thumb/rest_haarbuerste.jpg.webp',
              name: 'Haarbürste',
              description: 'Noch 6 Stück',
              price: '4',
            },
            {
              category: 'remainder',
              file:
                externalAssetsUri + '/laedeli/thumb/rest_handschuhe.jpg.webp',
              name: 'Handschuhe',
              description: 'Noch 1 Stück Grösse S',
              price: '15',
            },
            {
              category: 'remainder',
              file:
                externalAssetsUri + '/laedeli/thumb/rest_jasskarten.jpg.webp',
              name: 'Jasskarten',
              description: 'Noch 1 Stück',
              price: '12.9',
            },
            {
              category: 'remainder',
              file: externalAssetsUri + '/laedeli/thumb/rest_kappe.jpg.webp',
              name: 'Kappe',
              description: 'Noch 1 Stück',
              price: '19.9',
            },
            {
              category: 'remainder',
              file:
                externalAssetsUri +
                '/laedeli/thumb/rest_kleber_cevi_coca_cola.jpg.webp',
              name: 'Stocker Coca Cola',
              description: 'Noch 28 Stück',
              price: '1',
            },
            {
              category: 'remainder',
              file:
                externalAssetsUri +
                '/laedeli/thumb/rest_kleber_cevi_froeschli.jpg.webp',
              name: 'Sticker Fröschli',
              description: 'Noch 2 Stück',
              price: '1.6',
            },
            {
              category: 'remainder',
              file:
                externalAssetsUri +
                '/laedeli/thumb/rest_kleber_cevi_gross.jpg.webp',
              name: 'Sticker Cevi gross',
              description: 'Noch 48 Stück',
              price: '1.6',
            },
            {
              category: 'remainder',
              file:
                externalAssetsUri +
                '/laedeli/thumb/rest_kleber_cevi_small.jpg.webp',
              name: 'Sticker klein',
              description: 'Noch 21 Stück',
              price: '0.5',
            },
            {
              category: 'remainder',
              file:
                externalAssetsUri +
                '/laedeli/thumb/rest_kleber_i_love_cevi.jpg.webp',
              name: 'Sticker I love Cevi',
              description: 'Noch 36 Stück',
              price: '1',
            },
            {
              category: 'remainder',
              file: externalAssetsUri + '/laedeli/thumb/rest_lagerbau.jpg.webp',
              name: 'Lagerbau Buch',
              description: 'Noch 4 Stück, Ausgabe 1998',
              price: '10',
            },
            {
              category: 'remainder',
              file:
                externalAssetsUri + '/laedeli/thumb/rest_lagerbau_alt.jpg.webp',
              name: 'Lagerbau Buch alt',
              description: 'Noch 1 Stück, Ausgabe 1991',
              price: '10',
            },
            {
              category: 'remainder',
              file:
                externalAssetsUri + '/laedeli/thumb/rest_laserpointer.jpg.webp',
              name: 'Laserpointer',
              description: 'Noch 5 Stück, ohne Batterien',
              price: '5',
            },
            {
              category: 'remainder',
              file: externalAssetsUri + '/laedeli/thumb/rest_lineal.jpg.webp',
              name: 'Lineal',
              description: 'Noch 10 Stück, 16cm',
              price: '1',
            },
            {
              category: 'remainder',
              file:
                externalAssetsUri +
                '/laedeli/thumb/rest_pin_cevi_mini.jpg.webp',
              name: 'Pin Cevi',
              description: 'Noch 2 Stück',
              price: '0.5',
            },
            {
              category: 'remainder',
              file:
                externalAssetsUri + '/laedeli/thumb/rest_pin_kreuz.jpg.webp',
              name: 'Pin Kreuz',
              description: 'Noch 1 Stück',
              price: '0.5',
            },
            {
              category: 'remainder',
              file:
                externalAssetsUri + '/laedeli/thumb/rest_pin_weltbund.jpg.webp',
              name: 'Pin Weltbund',
              description: 'Noch 1 Stück',
              price: '0.5',
            },
            {
              category: 'remainder',
              file:
                externalAssetsUri +
                '/laedeli/thumb/rest_pin_weltbund_neu.jpg.webp',
              name: 'Pin Weltbund farbig',
              description: 'Noch 2 Stück',
              price: '0.5',
            },
            {
              category: 'remainder',
              file: externalAssetsUri + '/laedeli/thumb/rest_pin_ymca.jpg.webp',
              name: 'Pin YMCA',
              description: 'Noch 15 Stück',
              price: '0.5',
            },
            {
              category: 'remainder',
              file:
                externalAssetsUri +
                '/laedeli/thumb/rest_sackmesser_geoeffnet.jpg.webp',
              name: 'Sackmesser',
              description: 'Noch 5 Stück',
              price: '19.9',
            },
            {
              category: 'remainder',
              file:
                externalAssetsUri +
                '/laedeli/thumb/rest_sackmesserkette.jpg.webp',
              name: 'Sackmesserkette',
              description: 'Noch 2 Stück',
              price: '4',
            },
            {
              category: 'remainder',
              file: externalAssetsUri + '/laedeli/thumb/rest_socken.jpg.webp',
              name: 'Socken',
              description: 'Noch 1 Stück',
              price: '3',
            },
            {
              category: 'remainder',
              file: externalAssetsUri + '/laedeli/thumb/rest_tipy.jpg.webp',
              name: 'TipY',
              description: 'Noch 1 Stück, 2. Auglage 2002',
              price: '14.9',
            },
            {
              category: 'remainder',
              file:
                externalAssetsUri +
                '/laedeli/thumb/rest_traegershirt_aarau.jpg.webp',
              name: 'Trägershirt Aarau',
              description: '3 Stück S, 2 Stück XXS, 2 Stück XS',
              price: '25',
            },
            {
              category: 'remainder',
              file:
                externalAssetsUri +
                '/laedeli/thumb/rest_t_shirt_aarau.jpg.webp',
              name: 'T-Shirt Aarau',
              description: '2 Stück M, 4 Stück XS, 4 Stück S',
              price: '25',
            },
            {
              category: 'remainder',
              file:
                externalAssetsUri + '/laedeli/thumb/rest_t_shirt_alt.jpg.webp',
              name: 'T-Shirt alt',
              description: 'Noch 1 L',
              price: '15',
            },
            {
              category: 'remainder',
              file:
                externalAssetsUri +
                '/laedeli/thumb/rest_t_shirt_buchs_rohr.jpg.webp',
              name: 'T-shirt Buchs-Rohr',
              description: '1 Stück XS',
              price: '25',
            },
            {
              category: 'remainder',
              file:
                externalAssetsUri + '/laedeli/thumb/rest_t_shirt_grau.jpg.webp',
              name: 'T-Shirt grau',
              description: '20 Stück XL, 9 Stück M, 28 Stück L',
              price: '15',
            },
            {
              category: 'remainder',
              file:
                externalAssetsUri +
                '/laedeli/thumb/rest_t_shirt_weiss.jpg.webp',
              name: 'T-Shirt weiss',
              description: '1 Stück L',
              price: '15',
            },
            {
              category: 'remainder',
              file:
                externalAssetsUri + '/laedeli/thumb/rest_zahnbuerste.jpg.webp',
              name: 'Zahnbürste',
              description: 'Noch 2 Stück',
              price: '3',
            },
            {
              category: 'remainder',
              file: externalAssetsUri + '/laedeli/thumb/rest_zippo.jpg.webp',
              name: 'Zippo',
              description: 'Noch 2 Stück',
              price: '39.9',
            },
          ]"
          :key="itemIndex"
        >
          <div class="card">
            <header class="card-header">
              <p class="card-header-title is-centered">
                {{ items.name }}
              </p>
            </header>
            <div class="card-image">
              <img :src="items.file" />
            </div>
            <div class="card-content">
              <div class="content">
                {{ items.price }} CHF<br />
                {{ items.description }}
              </div>
            </div>
          </div>
        </li>
      </ul>

      <h2 class="title is-2">Bestellformular</h2>
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
          <label class="label">Welche Artikel möchten Sie bestellen?</label>
          <div class="control">
            <textarea class="textarea" placeholder=""></textarea>
          </div>
        </div>

        <div class="field">
          <label class="label"
            >Wünschen Sie eine Lieferung oder Abholung?</label
          >

          <div class="control">
            <label class="radio">
              <input type="radio" name="delivery" />
              Lieferung
            </label>
            <br />
            <label class="radio">
              <input type="radio" name="delivery" />
              Abholung
            </label>
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
          <label class="label"
            >Wie lautet Ihre Adresse (notwendig bei Lieferung)?</label
          >
          <div class="control">
            <textarea class="textarea" placeholder=""></textarea>
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
            <button class="button is-link">Bestellen</button>
          </div>
        </div>
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
export default {
  components: {},
  data() {
    return {
      externalAssetsUri: process.env.VUE_APP_EXTERNAL_ASSETS_URI,
    };
  },
};
</script>

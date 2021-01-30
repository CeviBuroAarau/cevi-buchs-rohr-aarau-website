<template>
  <section class="section">
    <div class="container">
      <h1 class="title is-1">Lädeli</h1>
      <p class="content">
        Im Cevilädeli führen wir eine Auswahl von interessanten Artikel für
        Jungschärler. Einen Teil der Artikel haben wir auf Lager. Andere
        bestellen wir bei Bedarf. Mit dem untenstehenden Formular können Sie
        Bestellungen übers Internet tätigen. Sie können aber natürlich auch nach
        einem Jungschinachmittag direkt bei uns vorbeikommen.
      </p>
      <h2 class="subtitle is-2">Reguläre Artikel</h2>
      <ul>
        <li
          class="vue-light-gallery-thumb"
          v-for="(items, itemIndex) in articleList.filter(
            (item) => item.category == 'Reguläre Artikel'
          )"
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
          v-for="(items, itemIndex) in articleList.filter(
            (item) => item.category == 'Restposten'
          )"
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

      <button v-on:click="displayForm = true" class="button is-link">
        Bestellformular öffnen
      </button>

      <div
        class="modal"
        :class="{
          'is-active': displayForm,
        }"
      >
        <div class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">Bestellformular</p>
            <button
              class="delete"
              aria-label="close"
              v-on:click="displayForm = false"
            ></button>
          </header>
          <section class="modal-card-body">
            <div class="notification is-info">
              Bitte füllen Sie alle Felder des Formulars aus.
            </div>

            <div class="field">
              <label for="name" class="label">Name</label>
              <div class="control has-icons-left">
                <input
                  class="input"
                  id="name"
                  type="text"
                  v-model="name"
                  placeholder=""
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </div>
            </div>

            <div class="field">
              <label for="articles" class="label"
                >Welche Artikel möchten Sie bestellen?</label
              >
              <div class="control">
                <textarea
                  id="articles"
                  class="textarea"
                  v-model="articles"
                  placeholder=""
                ></textarea>
              </div>
            </div>

            <div class="field">
              <label class="label"
                >Wünschen Sie eine Lieferung oder Abholung?</label
              >

              <div class="control">
                <label for="delivery" class="radio">
                  <input
                    type="radio"
                    id="delivery"
                    name="deliveryMethod"
                    value="Lieferung"
                    v-model="deliveryMethod"
                  />
                  Lieferung
                </label>
                <br />
                <label for="abholung" class="radio">
                  <input
                    type="radio"
                    id="abholung"
                    name="deliveryMethod"
                    value="Abholung"
                    v-model="deliveryMethod"
                  />
                  Abholung
                </label>
              </div>
            </div>

            <div class="field">
              <label for="email" class="label">Email</label>
              <div class="control has-icons-left">
                <input
                  class="input"
                  id="email"
                  type="email"
                  v-model="email"
                  placeholder=""
                  value=""
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
              </div>
            </div>

            <div class="field">
              <label for="adress" class="label"
                >Wie lautet Ihre Adresse (notwendig bei Lieferung)?</label
              >
              <div class="control">
                <textarea
                  id="adress"
                  class="textarea"
                  v-model="adress"
                  placeholder=""
                ></textarea>
              </div>
            </div>
          </section>
          <footer class="modal-card-foot">
            <button
              class="button is-success"
              :disabled="
                !name ||
                !email ||
                !articles ||
                !deliveryMethod ||
                (deliveryMethod == 'Lieferung' && !adress)
              "
              v-on:click="order()"
            >
              Bestellung senden
            </button>
            <button class="button" v-on:click="displayForm = false">
              Abbrechen
            </button>
          </footer>
        </div>
      </div>

      <div
        class="modal"
        :class="{
          'is-active': displaySuccess,
        }"
      >
        <div class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">Danke für die Bestellung</p>
          </header>
          <section class="modal-card-body">
            Wir behandeln Ihre Bestellung in der Regel innert 5 Arbeitstagen.
          </section>
          <footer class="modal-card-foot">
            <button
              class="button is-success"
              v-on:click="displaySuccess = false"
            >
              OK
            </button>
          </footer>
        </div>
      </div>

      <div
        class="modal"
        :class="{
          'is-active': displayError,
        }"
      >
        <div class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">Bestellung fehlgeschlagen</p>
          </header>
          <section class="modal-card-body">
            <div class="notification is-danger">
              Senden des Formulars fehlgeschlagen. Bitte versuchen Sie es später
              nocheinmal.
            </div>
          </section>
          <footer class="modal-card-foot">
            <button class="button is-success" v-on:click="displayError = false">
              OK
            </button>
          </footer>
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

.modal {
  z-index: 1050; /* headerbar has a z-index of 1001 */
}
</style>

<script>
import axios from "axios";

export default {
  components: {},
  data() {
    return {
      externalAssetsUri: process.env.VUE_APP_EXTERNAL_ASSETS_URI,
      displayForm: false,
      displayError: false,
      displaySuccess: false,
      errormessage: "",
      name: "",
      email: "",
      articles: "",
      adress: "",
      deliveryMethod: "",
      articleList: null,
    };
  },
  created() {
    this.fetchData();
  },
  watch: {
    $route: "fetchData",
  },
  methods: {
    order() {
      const instance = axios.create({
        baseURL: "https://backend.cevi-buro-aarau.ch/api",
        timeout: 10000,
        headers: { "Content-Type": "application/json" },
      });

      instance
        .post(
          "/forms/submit/shoporder",
          {
            form: {
              name: this.name,
              email: this.email,
              articles: this.articles,
              deliveryMethod: this.deliveryMethod,
              adress: this.adress,
            },
          },
          {
            headers: {
              Authorization: "Bearer 1d9b8fc0beb2a3d5ceb254c4b49c02",
            },
          }
        )
        .then(() => {
          this.displayForm = false;
          this.displaySuccess = true;
          this.name = "";
          this.email = "";
          this.articles = "";
          this.deliveryMethod = "";
          this.adress = "";
        })
        .catch((err) => {
          console.log(err);
          this.displayError = true;
        });
    },
    fetchData() {
      this.events = null;
      this.loading = true;
      this.error = false;

      const instance = axios.create({
        baseURL: "https://backend.cevi-buro-aarau.ch/api",
        timeout: 10000,
        headers: { "Content-Type": "application/json" },
      });

      instance
        .get("/collections/get/Shop", {
          headers: {
            Authorization: "Bearer 486f18ebe895de87c4f35c58d3db0f",
          },
        })
        .then((resp) => {
          this.error = false;
          this.loading = false;

          this.articleList = resp.data.entries.map((article) => {
            return {
              category: article.category,
              file: "https://backend.cevi-buro-aarau.ch/" + article.image.path,
              name: article.name,
              description: article.description,
              price: article.price,
            };
          });
        })
        .catch((err) => {
          this.error = true;
          this.loading = false;
          console.log(err);
        });
    },
  },
};
</script>

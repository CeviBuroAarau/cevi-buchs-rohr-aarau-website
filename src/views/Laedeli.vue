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

      <div v-if="loading">
        <p>Daten werden geladen.</p>
        <progress class="progress is-small is-primary" max="100">15%</progress>
      </div>

      <div v-if="error">
        <div class="notification is-danger">
          Die Artikel können monentan nicht abgerufen werden. Bitte versuchen
          Sie es später noch einmal.
        </div>
      </div>

      <h2 class="subtitle is-2">Reguläre Artikel</h2>
      <ul v-if="this.articleList != null">
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
              <img :src="items.file" alt="" />
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
      <ul v-if="this.articleList != null">
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
              <img :src="items.file" alt="" />
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
                  <span class="fas fa-user"></span>
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
                  <span class="fas fa-envelope"></span>
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

      <modal
        title="Danke für die Bestellung"
        message="Wir behandeln Ihre Bestellung in der Regel innert 5 Arbeitstagen."
        ref="successModal"
      ></modal>

      <modal
        title="Bestellung fehlgeschlagen"
        message="Senden des Formulars fehlgeschlagen. Bitte versuchen Sie es später
            nocheinmal."
        type="error"
        ref="errorModal"
      ></modal>
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

<script lang="ts">
import { ErrorReportingService, ShopService } from "@/services";
import { Component, Ref, Vue } from "vue-property-decorator";
import { AxiosUtil } from "@/utils";
import { Article } from "@/types";
import Modal from "@/components/modal.vue";

@Component({
  components: {
    Modal,
  },
})
export default class Laedeli extends Vue {
  @Ref("successModal") readonly successModal!: Modal;
  @Ref("errorModal") readonly errorModal!: Modal;

  private displayForm = false;
  private errormessage = "";
  private error = false;
  private loading = false;
  private name = "";
  private email = "";
  private articles = "";
  private adress = "";
  private deliveryMethod = "";
  private articleList: Article[] = [];

  mounted() {
    const service: ShopService = new ShopService(
      AxiosUtil.getCockpitInstance()
    );
    const errorService: ErrorReportingService = new ErrorReportingService();

    this.articleList = [];
    this.loading = true;
    this.error = false;

    service
      .getArticles()
      .then((articles: Article[]) => {
        this.error = false;
        this.loading = false;
        this.articleList = articles;
      })
      .catch((err) => {
        this.error = true;
        this.loading = false;
        errorService.report(err);
      });
  }

  order() {
    const service: ShopService = new ShopService(
      AxiosUtil.getCockpitInstance()
    );
    const errorService: ErrorReportingService = new ErrorReportingService();

    service
      .submitForm({
        form: {
          name: this.name,
          email: this.email,
          articles: this.articles,
          deliveryMethod: this.deliveryMethod,
          adress: this.adress,
        },
      })
      .then(() => {
        this.displayForm = false;
        this.successModal.open();
        this.name = "";
        this.email = "";
        this.articles = "";
        this.deliveryMethod = "";
        this.adress = "";
      })
      .catch((err) => {
        this.displayForm = false;
        this.errorModal.open();
        errorService.report(err);
      });
  }
}
</script>

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

      <article-list
        :articles="
          articleList.filter((item) => item.category == 'Reguläre Artikel')
        "
      ></article-list>

      <h2 class="subtitle is-2">Restposten</h2>
      <article-list
        :articles="articleList.filter((item) => item.category == 'Restposten')"
      ></article-list>

      <button v-on:click="showForm()" class="button is-link">
        Bestellformular öffnen
      </button>
      <laedeli-form ref="laedeliForm"></laedeli-form>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>

<script lang="ts">
import { ErrorReportingService, ShopService } from "@/services";
import { Component, Ref, Vue } from "vue-property-decorator";
import { AxiosUtil } from "@/utils";
import { Article } from "@/types";
import ArticleList from "@/components/article-list.vue";
import LaedeliForm from "@/components/laedeli-form.vue";

@Component({
  components: {
    ArticleList,
    LaedeliForm,
  },
})
export default class Laedeli extends Vue {
  @Ref("laedeliForm") readonly laedeliForm!: LaedeliForm;

  private error = false;
  private loading = false;
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

  showForm() {
    this.laedeliForm.showForm();
  }
}
</script>

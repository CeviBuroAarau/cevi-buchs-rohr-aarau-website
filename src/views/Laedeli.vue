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

      <p class="content">
        <button v-on:click="showForm()" class="button is-link">
          Bestellformular öffnen
        </button>
      </p>
      <laedeli-form
        ref="laedeliForm"
        @onFormOpened="onFormOpened()"
        @onFormClosed="onFormClosed()"
      ></laedeli-form>

      <div class="container" v-bind:class="{ noPrint: isFormOpen }">
        <div v-if="loading">
          <p>Daten werden geladen.</p>
          <progress class="progress is-small is-primary" max="100">
            15%
          </progress>
        </div>

        <div v-else-if="error">
          <div class="notification is-danger">
            Die Artikel können momentan nicht abgerufen werden. Bitte versuchen
            Sie es später noch einmal.
          </div>
        </div>

        <div v-else id="articles">
          <h2 class="subtitle is-2">Reguläre Artikel</h2>

          <article-list
            :articles="
              articleList.filter((item) => item.category == 'Reguläre Artikel')
            "
          ></article-list>

          <h2 class="subtitle is-2">Restposten</h2>
          <article-list
            :articles="
              articleList.filter((item) => item.category == 'Restposten')
            "
          ></article-list>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>

<script lang="ts">
import { defineComponent } from "vue";
import { ErrorReportingService, ShopService } from "@/services";
import { AxiosUtil } from "@/utils";
import { Article } from "@/types";
import ArticleList from "@/components/article-list.vue";
import LaedeliForm from "@/components/laedeli-form.vue";

export default defineComponent({
  name: "Laedeli",
  components: {
    ArticleList,
    LaedeliForm,
  },
  data() {
    return {
      error: false,
      loading: true,
      articleList: [] as Article[],
      service: new ShopService(AxiosUtil.getCockpitInstance()) as ShopService,
      errorService: new ErrorReportingService() as ErrorReportingService,
      isFormOpen: false,
    };
  },
  async mounted(): Promise<void> {
    await this.loadArticles();
  },
  methods: {
    async loadArticles(): Promise<void> {
      try {
        this.articleList = await this.service.getArticles();
        this.error = false;
        this.loading = false;
      } catch (err) {
        this.error = true;
        this.loading = false;
        this.errorService.report(err);
      }
    },
    showForm(): void {
      (this.$refs.laedeliForm as InstanceType<typeof LaedeliForm>).showForm();
    },
    onFormOpened(): void {
      this.isFormOpen = true;
    },
    onFormClosed(): void {
      this.isFormOpen = false;
    },
  },
});
</script>

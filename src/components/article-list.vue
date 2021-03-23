<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Article } from "@/types";
import LeiterDetail from "@/components/leiter-detail.vue";

@Component({
  components: {
    LeiterDetail,
  },
})
export default class ArticleList extends Vue {
  @Prop({}) readonly articles!: Article[];
}
</script>

<template>
  <ul v-if="this.articles != null">
    <li
      class="vue-light-gallery-thumb"
      v-for="(article, itemIndex) in articles"
      :key="itemIndex"
    >
      <div class="card">
        <header class="card-header">
          <p class="card-header-title is-centered">
            {{ article.name }}
          </p>
        </header>
        <div class="card-image">
          <img :src="article.file" alt="" />
        </div>
        <div class="card-content">
          <div class="content">
            {{ article.price }} CHF<br />
            {{ article.description }}
          </div>
        </div>
      </div>
    </li>
  </ul>
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

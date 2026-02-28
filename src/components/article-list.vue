<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Article } from "@/types";

export default defineComponent({
  name: "ArticleList",
  props: {
    articles: {
      type: Array as PropType<Article[]>,
      required: true,
    },
  },
});
</script>

<template>
  <ul v-if="articles != null">
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

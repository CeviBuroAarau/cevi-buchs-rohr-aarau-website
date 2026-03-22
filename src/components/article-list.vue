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
  <ul v-if="articles != null" class="article-grid">
    <li
      v-for="(article, itemIndex) in articles"
      :key="itemIndex"
      class="article-item"
    >
      <div class="card">
        <header class="card-header">
          <p class="card-header-title is-centered">
            {{ article.name }}
          </p>
        </header>
        <div class="card-image">
          <img :src="article.file" :alt="article.name" />
        </div>
        <div class="card-content">
          <p class="price-tag">{{ article.price }} CHF</p>
          <p class="description">{{ article.description }}</p>
        </div>
      </div>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.article-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.25rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.article-item {
  .card {
    height: 100%;
    display: flex;
    flex-direction: column;
    cursor: pointer;
  }

  .card-image {
    flex-shrink: 0;
    height: 180px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      padding: 0.5rem;
    }
  }

  .card-content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 0.75rem 1rem;
    gap: 0.4rem;
  }

  .price-tag {
    font-size: 1.1rem;
    font-weight: 700;
    color: #2e7d32;
    background: #e8f5e9;
    padding: 0.2rem 0.75rem;
    border-radius: 999px;
    white-space: nowrap;
  }

  .description {
    font-size: 0.875rem;
    color: #555;
    margin: 0;
  }
}
</style>

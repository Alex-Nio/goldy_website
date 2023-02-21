<template>
  <article :id="id" class="article">
    <a @click.prevent class="article-container" :href="link">
      <div class="article-container__image">
        <img :src="require(`@/${image}`)" alt="article-image" />
      </div>
      <div class="article-container__publication-date">
        <span>{{ publicationDate }}</span>
      </div>
      <div class="article-container__text">
        <p>{{ text }}</p>
      </div>
    </a>
  </article>
</template>

<script>
export default {
  props: ["image", "publicationDate", "text", "link", "id"],
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/imports.scss";
.article-container {
  &:hover {
    opacity: 1;
  }

  &__image {
    margin-bottom: 20px;
  }

  &__publication-date {
    @include fs($ff_I, 14px, $secondary, 400);
    margin-bottom: 12px;
  }

  &__text {
    @include fs($ff_I, 16px, $primary, 500);
    line-height: 150%;
  }
}

.article {
  @include tr-fast;
  &:hover {
    padding: 10px;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
    @include tr;
  }
}
</style>

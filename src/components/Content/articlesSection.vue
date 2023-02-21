<template>
  <section id="articles-section">
    <div class="articles">
      <div class="articles__inner">
        <div class="articles-header">
          <div class="articles-header__row">
            <h3 class="articles-header__title">{{ title }}</h3>
          </div>
          <div class="articles-header__row">
            <a @click.prevent class="articles-header__link" href="#">
              {{ linkName }}
              <img src="@/assets/img/icons/slider-arrow.svg" alt="icon" />
            </a>
          </div>
        </div>
        <div class="articles-grid">
          <article-item
            v-for="(article, id) in articles"
            :key="id"
            :image="article.image"
            :publicationDate="article.publicationDate"
            :text="article.text"
            :id="id"
            :link="article.link"
          ></article-item>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import articleItem from "@/components/Articles/articleItem";
export default {
  data() {
    return {
      title: "Статьи",
      linkName: "читать все",
      articles: [
        {
          image: "assets/img/articles/article1.jpg",
          publicationDate: "21 сентября 2021",
          text: "Обручальные кольца: тренды 2021",
          link: "#",
        },
        {
          image: "assets/img/articles/article2.jpg",
          publicationDate: "25 сентября 2021",
          text: "Главные ювелирные тренды года",
          link: "#",
        },
        {
          image: "assets/img/articles/article3.jpg",
          publicationDate: "21 сентября 2021",
          text: "Жемчуг: 7 малоизвестных фактов о культовом украшении",
          link: "#",
        },
        {
          image: "assets/img/articles/article4.jpg",
          publicationDate: "21 сентября 2021",
          text: "Как отличить золото от подделки: 10 практических советов",
          link: "#",
        },
      ],
    };
  },
  components: {
    articleItem,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/imports.scss";

.articles {
  width: 100%;
  &__inner {
    width: 100%;
    margin-top: 120px;
  }
}

.articles-header {
  @include fdcjsb_aic;
  width: 100%;
  &__row {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  &__title {
    width: 100%;
    @include fs($ff_P, 40px, $primary, 400);
  }

  &__link {
    @include fdrjsb_aic;
    @include fs($ff_I, 14px, $primary, 500);
    text-transform: uppercase;
    width: max-content;

    & img {
      width: 26px;
      height: 14px;
      margin-left: 12px;
      transform: scale(-1, 1);
    }
  }
}
.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(310px, 310px));
  grid-gap: 20px;
  justify-content: center;
  margin-top: 40px;
}
</style>

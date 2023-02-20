<template>
  <section id="day-product">
    <div class="wrapper">
      <div class="goldy-day-product">
        <div class="goldy-day-product__inner">
          <div class="goldy-day-product__content">
            <h2 class="section-title goldy-day-product__title">Товар дня</h2>
            <day-product-slider :dpData="dpData"></day-product-slider>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import dayProductSlider from "@/components/DayProduct/dayProductSlider";
export default {
  data() {
    return {
      dpData: [
        {
          badges: [
            { type: "new", name: "new" },
            { type: "hit", name: "хит" },
            { type: "sale", name: "sale" },
          ],
          vendor: "1012076",
          currentRate: "4,2",
          currentPrice: "22 000 ₽",
          discount: "22 000 ₽",
          label: "-45%",
          description: "Кольцо из золота с бриллиантами",
          colors: [
            { active: "gray" },
            { active: "gold" },
            { active: "orange" },
            { outOfOrder: "mint" },
          ],
          previewImages: [
            { 0: "assets/img/dayProduct/slide1.png" },
            { 1: "assets/img/dayProduct/slide1.png" },
            { 2: "assets/img/dayProduct/slide1.png" },
          ],
          sizes: [
            { active: "16,5" },
            { active: "17,5" },
            { active: "18,5" },
            { active: "19" },
            { active: "19,5" },
            { active: "19,5" },
            { active: "18,5" },
            { active: "19" },
            { outOfOrder: "16,5" },
            { outOfOrder: "19,5" },
          ],
          deadline: "29.02.2023",
        },
        {
          badges: [
            { type: "new", name: "new" },
            { type: "hit", name: "хит" },
            { type: "sale", name: "sale" },
          ],
          vendor: "1012076",
          currentRate: "4,2",
          currentPrice: "22 000 ₽",
          discount: "22 000 ₽",
          label: "-45%",
          description: "Кольцо из золота с бриллиантами",
          colors: [
            { active: "gray" },
            { active: "gold" },
            { active: "orange" },
            { outOfOrder: "mint" },
          ],
          previewImages: [
            { 0: "assets/img/dayProduct/slide1.png" },
            { 1: "assets/img/dayProduct/slide1.png" },
            { 2: "assets/img/dayProduct/slide1.png" },
          ],
          sizes: [
            { active: "16,5" },
            { active: "17,5" },
            { active: "18,5" },
            { active: "19" },
            { active: "19,5" },
            { active: "19,5" },
            { active: "18,5" },
            { active: "19" },
            { outOfOrder: "16,5" },
            { outOfOrder: "19,5" },
          ],
          deadline: "29.02.2023",
        },
        {
          badges: [
            { type: "new", name: "new" },
            { type: "hit", name: "хит" },
            { type: "sale", name: "sale" },
          ],
          vendor: "1012076",
          currentRate: "4,2",
          currentPrice: "22 000 ₽",
          discount: "22 000 ₽",
          label: "-45%",
          description: "Кольцо из золота с бриллиантами",
          colors: [
            { active: "gray" },
            { active: "gold" },
            { active: "orange" },
            { outOfOrder: "mint" },
          ],
          previewImages: [
            { 0: "assets/img/dayProduct/slide1.png" },
            { 1: "assets/img/dayProduct/slide1.png" },
            { 2: "assets/img/dayProduct/slide1.png" },
          ],
          sizes: [
            { active: "16,5" },
            { active: "17,5" },
            { active: "18,5" },
            { active: "19" },
            { active: "19,5" },
            { active: "19,5" },
            { active: "18,5" },
            { active: "19" },
            { outOfOrder: "16,5" },
            { outOfOrder: "19,5" },
          ],
          deadline: "29.02.2023",
        },
        {
          badges: [
            { type: "new", name: "new" },
            { type: "hit", name: "хит" },
            { type: "sale", name: "sale" },
          ],
          vendor: "1012076",
          currentRate: "4,2",
          currentPrice: "22 000 ₽",
          discount: "22 000 ₽",
          label: "-45%",
          description: "Кольцо из золота с бриллиантами",
          colors: [
            { active: "gray" },
            { active: "gold" },
            { active: "orange" },
            { outOfOrder: "mint" },
          ],
          previewImages: [
            { 0: "assets/img/dayProduct/slide1.png" },
            { 1: "assets/img/dayProduct/slide1.png" },
            { 2: "assets/img/dayProduct/slide1.png" },
          ],
          sizes: [
            { active: "16,5" },
            { active: "17,5" },
            { active: "18,5" },
            { active: "19" },
            { active: "19,5" },
            { active: "19,5" },
            { active: "18,5" },
            { active: "19" },
            { outOfOrder: "16,5" },
            { outOfOrder: "19,5" },
          ],
          deadline: "29.02.2023",
        },
        {
          badges: [
            { type: "new", name: "new" },
            { type: "hit", name: "хит" },
            { type: "sale", name: "sale" },
          ],
          vendor: "1012076",
          currentRate: "4,2",
          currentPrice: "22 000 ₽",
          discount: "22 000 ₽",
          label: "-45%",
          description: "Кольцо из золота с бриллиантами",
          colors: [
            { active: "gray" },
            { active: "gold" },
            { active: "orange" },
            { outOfOrder: "mint" },
          ],
          previewImages: [
            { 0: "assets/img/dayProduct/slide1.png" },
            { 1: "assets/img/dayProduct/slide1.png" },
            { 2: "assets/img/dayProduct/slide1.png" },
          ],
          sizes: [
            { active: "16,5" },
            { active: "17,5" },
            { active: "18,5" },
            { active: "19" },
            { active: "19,5" },
            { active: "19,5" },
            { active: "18,5" },
            { active: "19" },
            { outOfOrder: "16,5" },
            { outOfOrder: "19,5" },
          ],
          deadline: "29.02.2023",
        },
        {
          badges: [
            { type: "new", name: "new" },
            { type: "hit", name: "хит" },
            { type: "sale", name: "sale" },
          ],
          vendor: "1012076",
          currentRate: "4,2",
          currentPrice: "22 000 ₽",
          discount: "22 000 ₽",
          label: "-45%",
          description: "Кольцо из золота с бриллиантами",
          colors: [
            { active: "gray" },
            { active: "gold" },
            { active: "orange" },
            { outOfOrder: "mint" },
          ],
          previewImages: [
            { 0: "assets/img/dayProduct/slide1.png" },
            { 1: "assets/img/dayProduct/slide1.png" },
            { 2: "assets/img/dayProduct/slide1.png" },
          ],
          sizes: [
            { active: "16,5" },
            { active: "17,5" },
            { active: "18,5" },
            { active: "19" },
            { active: "19,5" },
            { active: "19,5" },
            { active: "18,5" },
            { active: "19" },
            { outOfOrder: "16,5" },
            { outOfOrder: "19,5" },
          ],
          deadline: "29.02.2023",
        },
      ],
    };
  },
  components: {
    dayProductSlider,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/imports.scss";
.goldy-day-product {
  &__inner {
    margin-top: 113px;
  }

  &__content {
  }

  &__title {
    @include fs($ff_P, 40px, $primary, 400);
    margin-bottom: 40px;
  }
}
</style>

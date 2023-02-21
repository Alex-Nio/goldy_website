<template>
  <main>
    <main-slider></main-slider>
    <popular-products></popular-products>
    <sale-out></sale-out>
    <banners-section></banners-section>
    <day-product></day-product>
    <articles-section></articles-section>
  </main>
  <div style="height: 100vh" class="devider"></div>
</template>

<script>
import mainSlider from "@/components/Content/mainSlider";
import popularProducts from "@/components/Content/popularProducts";
import saleOut from "@/components/Content/saleOut";
import bannersSection from "@/components/Content/bannersSection";
import dayProduct from "@/components/Content/dayProduct";
import articlesSection from "@/components/Content/articlesSection";
export default {
  components: {
    mainSlider,
    popularProducts,
    saleOut,
    bannersSection,
    dayProduct,
    articlesSection,
  },
};
</script>

<style lang="scss">
.goldy-container {
  margin-top: 20px;
}
</style>

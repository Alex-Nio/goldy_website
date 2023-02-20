<template>
  <main-slider></main-slider>
  <popular-products></popular-products>
  <sale-out></sale-out>
  <banners-section></banners-section>
  <div style="height: 100vh" class="devider"></div>
</template>

<script>
import mainSlider from "@/components/Content/mainSlider";
import popularProducts from "@/components/Content/popularProducts";
import saleOut from "@/components/Content/saleOut";
import bannersSection from "@/components/Content/bannersSection";
export default {
  components: {
    mainSlider,
    popularProducts,
    saleOut,
    bannersSection,
  },
};
</script>

<style lang="scss">
.goldy-container {
  margin-top: 20px;
}
</style>

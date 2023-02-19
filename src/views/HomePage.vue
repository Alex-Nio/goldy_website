<template>
  <main-slider></main-slider>
  <popular-products></popular-products>
  <sale-out></sale-out>
  <div style="height: 100vh" class="devider"></div>
</template>

<script>
import mainSlider from "@/components/Content/mainSlider";
import popularProducts from "@/components/Content/popularProducts";
import saleOut from "@/components/Content/saleOut";
export default {
  components: {
    mainSlider,
    popularProducts,
    saleOut,
  },
};
</script>

<style lang="scss">
.goldy-container {
  margin-top: 20px;
}
</style>

<template>
  <main-slider></main-slider>
  <popular-products></popular-products>
  <div style="height: 100vh" class="devider"></div>
</template>

<script>
import mainSlider from "@/components/Content/mainSlider";
import popularProducts from "@/components/Content/popularProducts";
export default {
  components: {
    mainSlider,
    popularProducts,
  },
};
</script>

<style lang="scss">
.goldy-container {
  margin-top: 20px;
}
</style>

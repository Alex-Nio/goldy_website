<template>
  <div class="sale-tab__navigation">
    <button
      ref="PrevBtn"
      @click="prev"
      class="swiper-button-prev navigation__prev"
    ></button>
    <button
      ref="NextBtn"
      @click="next"
      class="swiper-button-next navigation__next"
    ></button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/imports.scss";
.sale-tab__navigation {
  position: relative;
  width: 116px;
  height: 54px;
}

.sale-tab {
  &__navigation {
  }
}

.navigation {
  &__prev {
    left: 0;
  }

  &__next {
    right: 0;
  }
}
</style>

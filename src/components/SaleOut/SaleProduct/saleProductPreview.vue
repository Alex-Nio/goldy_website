<template>
  <div class="sale-product-variants">
    <div @mouseenter="setActiveBullet($event)" class="sale-product-variants__variant">
      <img src="@/assets/img/sale/sale-product1.png" alt="sale-product" />
    </div>
    <div @mouseenter="setActiveBullet($event)" class="sale-product-variants__variant">
      <img src="@/assets/img/sale/sale-product2.png" alt="sale-product" />
    </div>
    <div @mouseenter="setActiveBullet($event)" class="sale-product-variants__variant">
      <img src="@/assets/img/sale/sale-product3.png" alt="sale-product" />
    </div>
    <!-- pagination -->
    <div class="variants-pagination">
      <div class="variants-pagination__bullet active"></div>
      <div class="variants-pagination__bullet"></div>
      <div class="variants-pagination__bullet"></div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    setActiveBullet(event) {
      const variants = event.target.parentNode.children;
      const bullets = event.target.parentNode.lastElementChild.children;
      let variantsArr = Object.values(variants);
      let bulletsArr = Object.values(bullets);
      let current;

      bulletsArr.forEach((bullet) => {
        bullet.classList.remove("active");
      });

      variantsArr.forEach((variant) => {
        if (variant === event.target) {
          current = variantsArr.indexOf(variant);
        }
      });

      bulletsArr[current].classList.add("active");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/imports.scss";
.sale-product-variants {
  display: flex;
  flex: 1 0 calc(100% / 3);
  height: 200px;
  min-width: 200px;
  position: relative;

  &__variant {
    height: 200px;
    width: 100%;

    &:first-child img {
      display: block;
    }

    & img {
      display: none;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      z-index: -1;
      opacity: 1;
      transition: all 0.3s linear;
    }

    &:hover {
      & img {
        display: block;
        opacity: 1;
        transition: all 0.3s linear;
      }
    }
  }
}

.variants-pagination {
  @include fdrjc_aic;
  width: 100%;
  height: 8px;
  position: absolute;
  bottom: 6px;

  &__bullet {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: 1px solid $primary;
    background-color: transparent;
    margin: 0 4px;
    @include tr;

    &.active {
      background-color: $primary;
      @include tr;
    }
  }
}
</style>

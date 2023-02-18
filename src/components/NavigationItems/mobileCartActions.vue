<template>
  <div class="mobile-cart-actions">
    <ul class="mobile-cart-actions__list">
      <li
        v-for="(item, i) in cartActionsItems"
        :key="item"
        class="mobile-cart-actions__list-item"
      >
        <a :class="cartActionsItems[i]['dafaultClass']" href="#">
          <img
            :src="require(`@/${cartActionsItems[i]['iconSrc']}`)"
            :alt="cartActionsItems[i]['altTag']"
          />
          <span class="counter" v-if="'faivoritesCounter' in cartActionsItems[i]">
            {{ cartActionsItems[i]["faivoritesCounter"] }}
          </span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["cartActionsItems"],
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/imports.scss";
.mobile-cart-actions {
  width: 100%;
  @include fdrje_aic;
  &__list {
    @include fdrjsb_aic;
    display: none;
  }

  &__list-item {
    &:nth-child(1) {
      margin-right: 2px;
    }
  }
}

.favorites-counter {
  position: relative;

  & > span {
    position: absolute;
    display: inline-flex;
    justify-content: center;
    top: 9px;
    right: -28px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 100%;
    color: #ffffff;
    z-index: 3;

    &:before {
      position: absolute;
      content: "";
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 19px;
      height: 18px;
      background-color: #e46942;
      border-radius: 50%;
      z-index: -1;
    }
  }
}

.g-burger-btn {
  display: none;
  margin: 0 0 0 28px;
  width: 20px;
  height: 20px;
  background-color: transparent;
  background: url("@/assets/img/icons/burger-menu.svg") no-repeat center / contain;
  cursor: pointer;

  &.active {
    background: url("@/assets/img/icons/close-icon.svg") no-repeat center / contain;
  }
}
</style>

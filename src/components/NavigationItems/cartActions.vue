<template>
  <div class="cart-actions">
    <ul class="cart-actions__list">
      <li
        v-for="(item, i) in cartActionsItems"
        :key="item"
        class="cart-actions__list-item"
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
      <li class="cart-actions__list-item">
        <button
          @click.stop="mobileMenuToggle"
          class="g-burger-btn"
          :class="{ active: burgerOpen }"
        ></button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["cartActionsItems", "burgerOpen"],
  data() {
    return {};
  },
  methods: {
    mobileMenuToggle() {
      this.$emit("mobileMenuToggle");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/imports.scss";
.cart-actions {
  width: 100%;
  @include fdrje_aic;
  &__list {
    @include fdrjsb_aic;
  }

  &__list-item {
    &:nth-child(1) {
      margin-right: 2px;
    }

    &:nth-child(2) {
      margin: 0 28px;
    }
  }
}

.favorites-counter {
  position: relative;

  & > span {
    position: absolute;
    top: -5px;
    right: -8px;
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

@media screen and (max-width: 991px) {
  .g-burger-btn {
    display: block;
  }
}

@media screen and (max-width: 620px) {
  .cart-actions__list-item:not(:last-child) {
    display: none;
  }

  .g-burger-btn {
    margin-left: 0;
  }
}
</style>

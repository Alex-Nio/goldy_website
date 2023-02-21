<template>
  <header
    id="header"
    class="goldy-header"
    :class="{ 'on-scroll': headerScrolling }"
    @click.stop
  >
    <div class="goldy-header__content">
      <div class="content-top">
        <div class="content-top__item">
          <location-select></location-select>
        </div>
        <div class="content-top__item">
          <phone-link :phoneNumber="phoneNumber"></phone-link>
        </div>
        <div class="content-top__item">
          <main-logo></main-logo>
        </div>
        <div class="content-top__item">
          <signup-actions :signupButtons="signupButtons"></signup-actions>
        </div>
        <div class="content-top__item">
          <cart-actions
            @mobileMenuToggle="mobileMenuToggle"
            :cartActionsItems="cartActionsItems"
            :burgerOpen="burgerOpen"
          ></cart-actions>
        </div>
      </div>
      <div class="content-bottom">
        <nav class="goldy-navigation">
          <ul class="goldy-navigation__list">
            <li class="goldy-navigation__list-item"><a href="#">Каталог</a></li>
            <li class="goldy-navigation__list-item"><a href="#">Акции</a></li>
            <li class="goldy-navigation__list-item"><a href="#">Бренды</a></li>
            <li class="goldy-navigation__list-item"><a href="#">Магазины</a></li>
            <li class="goldy-navigation__list-item"><a href="#">О нас</a></li>
            <li class="goldy-navigation__list-item"><a href="#">Доставка и оплата</a></li>
            <li class="goldy-navigation__list-item"><a href="#">Статьи</a></li>
          </ul>
          <div class="goldy-search">
            <label for="g-search">
              <input
                type="search"
                id="g-search"
                name="g-search"
                placeholder="Поиск по сайту"
              />
            </label>
          </div>
          <div class="goldy-mobile-signup">
            <signup-actions
              class="mobile-signup-btns"
              :signupButtons="signupButtons"
            ></signup-actions>
          </div>
        </nav>
      </div>
    </div>
    <transition
      mode="in-out"
      enter-active-class="animate__animated animate__fadeInUp"
      leave-active-class="animate__animated animate__fadeOutDown"
    >
      <mobile-menu
        :phoneNumber="phoneNumber"
        :signupButtons="signupButtons"
        :cartActionsItems="cartActionsItems"
      ></mobile-menu>
    </transition>
    <transition
      mode="in-out"
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <mobile-menu-navigation :menuActive="menuActive"></mobile-menu-navigation>
    </transition>
  </header>
</template>

<script>
import MainLogo from "@/components/UI/mainLogo";
import phoneLink from "@/components/UI/phoneLink";
import locationSelect from "@/components/UI/locationSelect";
import signupActions from "@/components/NavigationItems/signupActions";
import cartActions from "@/components/NavigationItems/cartActions";
import mobileMenu from "@/components/NavigationItems/mobileMenu";
import mobileMenuNavigation from "@/components/NavigationItems/mobileMenuNavigation";

export default {
  props: ["burgerOpen", "menuActive", "headerScrolling"],
  data() {
    return {
      phoneNumber: "8 800 785-25-35",
      signupButtons: ["Вход", "Регистрация"],
      cartActionsItems: [
        {
          dafaultClass: "favorites-item favorites-counter",
          iconSrc: "assets/img/icons/heart-icon.svg",
          altTag: "favorites",
          faivoritesCounter: 23,
        },
        {
          dafaultClass: "favorites-item chart-item",
          iconSrc: "assets/img/icons/chart-icon.svg",
          altTag: "chart",
        },
        {
          dafaultClass: "favorites-item cart-item",
          iconSrc: "assets/img/icons/bag-icon.svg",
          altTag: "cart",
        },
      ],
    };
  },
  components: {
    MainLogo,
    phoneLink,
    locationSelect,
    signupActions,
    cartActions,
    mobileMenu,
    mobileMenuNavigation,
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

.goldy-header {
  position: relative;
  margin-top: 30px;
  background-color: $white;
  z-index: 50;
  &__content {
    @include fdcjc_aic;
  }

  &.on-scroll {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0 20px;
    margin-top: 0;
    background-color: $white;
    z-index: 60;

    & .goldy-header__content {
      max-width: 1300px;
      margin: 0 auto;
    }

    & .goldy-navigation {
      padding: 10px 50px;
      transition: padding 0.3s linear;
    }

    & .goldy-header__content {
      padding: 30px 0 15px 0;
    }

    & .goldy-search {
      &:before {
        display: none;
      }
    }
  }
}

.content-top {
  @include fdr;
  width: 100%;
  &__item {
    @include fdcjc_ais;
    width: 100%;

    &:nth-child(1) {
      @include fdrjs_aic;
      max-width: 206px;
    }

    &:nth-child(3) {
      align-items: center;
    }

    &:nth-child(5) {
      max-width: 180px;
    }
  }
}

.content-bottom {
  width: 100%;
}
.goldy-navigation {
  @include fdrjsb_aic;
  width: 100%;
  margin-top: 12px;
  padding: 24px 50px;
  background-color: #f8f8f8;
  transition: padding 0.3s linear;
  &__list {
    @include fdrjs_aic;
    width: 100%;
    max-width: 850px;
  }

  &__list-item {
    text-transform: uppercase;
    padding: 0 5px;
    margin: 0 auto;
    height: 100%;

    &:first-child {
      margin-left: 0;
      padding-left: 0;
    }
    &:last-child {
      margin-right: 5px;
    }
  }
}

// Search
.goldy-search {
  position: relative;
  padding-left: 32px;
  margin-right: 35px;

  & input {
    border: none;
    outline: none;
    background-color: transparent;
  }

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: -24px;
    height: 100%;
    min-height: 62px;
    border-left: 1px solid #f0f0f0;
    transform: translateY(-50%);
  }

  &:after {
    position: absolute;
    content: "";
    top: 50%;
    left: 0;
    width: 20px;
    height: 20px;
    transform: translateY(-50%);
    background: url("@/assets/img/icons/search-icon.svg") no-repeat center / 20px 20px;
  }

  & input[type="search"]::placeholder {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
  }
}

.goldy-mobile-signup,
.mobile-signup-btns {
  display: none;
}

@media screen and (max-width: 1200px) {
  .goldy-navigation__list {
    margin-right: 20px;
  }
  .goldy-search {
    margin-right: 0;
  }
}

// Media for burger menu
@media screen and (max-width: 991px) {
  .goldy-navigation__list {
    display: none;
  }

  .goldy-navigation {
    justify-content: flex-end;
  }

  .content-top__item:nth-child(1),
  .content-top__item:nth-child(2),
  .content-top__item:nth-child(4) {
    display: none;
  }

  .content-top__item:nth-child(3) {
    width: 100%;
  }

  .goldy-search {
    width: 100%;
    max-width: 100%;

    &:before {
      display: none;
    }
  }
}

@media screen and (max-width: 620px) {
  .goldy-mobile-signup,
  .mobile-signup-btns {
    display: flex;
  }
  .content-top__item:nth-child(5) {
    width: 20px;
    max-width: 20px;
  }
}
@media screen and (max-width: 480px) {
  .mobile-signup-btns {
    display: none;
  }

  .goldy-search label > input {
    width: 100%;
    max-width: 100%;
  }
}
</style>

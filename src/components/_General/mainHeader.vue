<template>
  <header id="header" class="goldy-header">
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
          <cart-actions :cartActionsItems="cartActionsItems"></cart-actions>
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
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import MainLogo from "@/components/UI/mainLogo";
import phoneLink from "@/components/UI/phoneLink";
import locationSelect from "@/components/UI/locationSelect";
import signupActions from "@/components/NavigationItems/signupActions";
import cartActions from "@/components/NavigationItems/cartActions";

export default {
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
          dafaultClass: "favorites-item",
          iconSrc: "assets/img/icons/chart-icon.svg",
          altTag: "chart",
        },
        {
          dafaultClass: "favorites-item",
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
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/imports.scss";

.goldy-header {
  position: relative;
  margin-top: 30px;
  z-index: 50;
  &__content {
    @include fdcjc_aic;
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

// Header Bottom
.content-bottom {
  width: 100%;
}
.goldy-navigation {
  @include fdrjsb_aic;
  width: 100%;
  margin-top: 12px;
  padding: 24px 50px;
  background-color: #f8f8f8;
  &__list {
    @include fdrjs_aic;
    width: 100%;
    max-width: 850px;
    // padding: 0 25px;
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

// Media for burger menu
@media screen and (max-width: 991px) {
  .goldy-navigation__list {
    display: none;
  }

  .goldy-navigation {
    justify-content: flex-end;
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
</style>

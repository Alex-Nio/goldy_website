<template>
  <div class="mobile-menu">
    <div class="goldy-mobile-menu">
      <div class="goldy-mobile-menu__inner">
        <div class="m-menu">
          <ul class="m-menu__list">
            <li class="m-menu__item">
              <div class="user-signup">
                <img src="@/assets/img/icons/login-icon.svg" alt="Signup" />
              </div>
            </li>
            <li class="m-menu__item">
              <signup-actions :signupButtons="signupButtons"></signup-actions>
            </li>
            <li class="m-menu__item">
              <location-select></location-select>
            </li>
            <li class="m-menu__item">
              <phone-link :phoneNumber="phoneNumber"></phone-link>
            </li>
            <li class="m-menu__item">
              <mobile-cart-actions
                :cartActionsItems="cartActionsItems"
              ></mobile-cart-actions>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import phoneLink from "@/components/UI/phoneLink";
import locationSelect from "@/components/UI/locationSelect";
import signupActions from "@/components/NavigationItems/signupActions";
import mobileCartActions from "@/components/NavigationItems/mobileCartActions";
export default {
  props: ["signupButtons", "phoneNumber", "cartActionsItems"],
  components: {
    phoneLink,
    locationSelect,
    signupActions,
    mobileCartActions,
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/imports.scss";
.mobile-menu {
  display: none;
  position: fixed;
  height: 32px;
  right: 0;
  width: 100%;
  background-color: $white;
  box-shadow: 0px 4px 2px -3px rgba(34, 60, 80, 0.1);
  z-index: 70;
}

.goldy-mobile-menu {
  width: 100%;
  padding: 0 40px;
}

.m-menu {
  width: 100%;
  &__list {
    @include fdrjsb_aic;
  }

  &__item {
    margin: 5px 0;

    & .phone-link {
      margin-left: 0;
    }

    & .signup-actions {
      justify-content: flex-start;
    }

    & .location-select {
      margin: 0;

      & ul {
        z-index: 61;
      }
    }
  }
}

.m-menu__item:nth-child(1) {
  display: none;
}

.m-menu__item:last-child {
  display: none;
}

@media screen and (max-width: 991px) {
  .mobile-menu {
    display: flex;
    width: 100%;
  }
}

@media screen and (max-width: 620px) {
  .mobile-menu {
    & .selector .label-title {
      display: none;
    }
  }

  .m-menu__item:last-child {
    display: flex;
  }

  .m-menu__item .location-select {
    max-width: 46px;
    min-width: 46px;
    height: 46px;
  }

  .phone-link {
    & span {
      display: none;
    }
  }

  .m-menu__item .mobile-cart-actions__list {
    display: flex;
  }

  .m-menu__item .phone-link {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 46px;
    min-width: 46px;
    height: 46px;
    margin: 0;
  }

  .mobile-menu {
    position: fixed;
    height: 100px;
    top: unset;
    bottom: 0;
    background-color: $other;

    & .goldy-mobile-menu,
    .goldy-mobile-menu__inner,
    .m-menu,
    .m-menu__list {
      height: 100%;
    }

    & .m-menu__list {
      height: 100%;
      width: 100%;
    }

    .goldy-mobile-menu__inner {
      padding: 0 20px;
    }
  }

  .m-menu__item .location-select ul {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .m-menu__item .location-select .label,
  .m-menu__item .location-select .selector {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }

  .m-menu__item .location-select .selector .label img,
  .m-menu__item .phone-link img {
    width: 32px;
    height: 32px;
  }

  .m-menu__list {
    justify-content: center;
  }

  .m-menu__item {
    margin: 0px 5px;
  }

  .mobile-cart-actions__list-item {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 46px;
    min-width: 46px;
    height: 46px;

    & * img {
      max-width: 32px;
      min-width: 32px;
      height: 32px;
    }
  }

  .m-menu__item .favorites-counter > span {
    top: 0px;
    right: -5px;
  }

  .m-menu__item .signup-actions {
    display: none;
  }

  .m-menu__item:nth-child(2) {
    display: none;
  }

  .mobile-cart-actions__list-item:nth-child(2) {
    margin: 0 10px;
  }

  .user-signup {
    @include fdrjc_aic;
    max-width: 46px;
    min-width: 46px;
    height: 46px;

    & img {
      max-width: 40px;
      min-width: 40px;
      height: 40px;
    }
  }
}

@media screen and (max-width: 480px) {
  .m-menu__item:nth-child(1) {
    display: flex;
  }
}

@media screen and (max-width: 375px) {
  .mobile-cart-actions__list-item,
  .m-menu__item .location-select,
  .user-signup,
  .m-menu__item .phone-link {
    max-width: 32px;
    min-width: 32px;
    height: 32px;
  }
}
</style>

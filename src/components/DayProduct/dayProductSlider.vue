<template>
  <div class="dp-slider">
    <div class="dp-slider__content">
      <div class="dp-slider__navigation">
        <button
          ref="PrevBtn"
          @click="prev"
          class="dp-slider__navigation-btn swiper-button-prev navigation__prev"
        ></button>
        <button
          ref="NextBtn"
          @click="next"
          class="dp-slider__navigation-btn swiper-button-next navigation__next"
        ></button>
      </div>
      <swiper
        :modules="modules"
        @swiper="swiper = $event"
        @slideChange="onSlideChange"
        :speed="sliderOptions.autoplay.speed"
        :grabCursor="sliderOptions.grabCursor"
        :spaceBetween="sliderOptions.spaceBetweenSlides"
        :loop="sliderOptions.loop"
        :autoplay="false"
        :freemode="sliderOptions.freeMode"
        :slidesPerView="sliderOptions.slidesPerView"
        :navigation="sliderOptions.navigation"
        :preloadImages="sliderOptions.preloadImages"
        :lazy="sliderOptions.lazy"
        :breakpoints="sliderOptions.breakpoints"
        class="dp-slider-slider"
      >
        <!-- Big Slide -->
        <swiper-slide v-for="(item, i) in dpData" :key="i" class="dp-slider-slider__item">
          <!-- Small slide -->
          <preview-slider
            :previewImages="item.previewImages"
            :badges="item.badges"
          ></preview-slider>
          <form class="dp-details">
            <div class="dp-details__inner">
              <!-- rating -->
              <div class="dp-rating">
                <!-- stars -->
                <div class="dp-rating__rates">
                  <span class="rate-item rate-item--filled"></span>
                  <span class="rate-item rate-item--filled"></span>
                  <span class="rate-item rate-item--filled"></span>
                  <span class="rate-item rate-item--filled"></span>
                  <span class="rate-item rate-item--default"></span>
                </div>
                <span class="current-rate">{{ item.currentRate }}</span>
              </div>
              <div class="dp-name">
                <p>{{ item.description }}</p>
              </div>
              <div class="dp-vendor-code">
                <span>??????????????: {{ item.vendor }}</span>
              </div>
              <!-- Timer row -->
              <div class="dp-details__row">
                <!-- prices -->
                <div class="dp-prices dp-details__prices">
                  <div class="dp-prices__current">{{ item.currentPrice }}</div>
                  <div class="dp-prices__discount">{{ item.discount }}</div>
                  <div class="dp-prices__label">{{ item.label }}</div>
                </div>
                <!-- timer -->
                <deadline-timer :deadline="item.deadline"></deadline-timer>
              </div>
              <!-- Colors -->
              <div class="dp-colors">
                <p class="dp-colors__title">????????</p>
                <div class="dp-colors__bullets">
                  <label for="color" class="bullet-item bullet-item--gray">
                    <input type="checkbox" />
                  </label>
                  <label for="color" class="bullet-item bullet-item--gold">
                    <input type="checkbox" />
                  </label>
                  <label for="color" class="bullet-item bullet-item--orange">
                    <input type="checkbox" />
                  </label>
                  <label for="color" class="bullet-item bullet-item--mint">
                    <input disabled type="checkbox" />
                  </label>
                </div>
              </div>
              <!-- Sizes -->
              <div class="dp-sizes">
                <!-- top-row -->
                <div class="dp-sizes__top">
                  <p class="dp-sizes__title">????????????</p>
                  <div class="dp-info">
                    <span class="dp-info__label">?</span>
                    <div class="dp-info__text">
                      <p>
                        ???????????????????????????????????????????? ???????????? ???????????????? ?????????????? ????????????????????????????????
                        ???????????????????????????????? ?????????????????????? ??????????????.
                      </p>
                    </div>
                  </div>
                </div>
                <!-- bottom-row -->
                <div class="dp-sizes__bottom">
                  <div class="dp-sizes__blocks">
                    <label v-for="(size, i) in item.sizes" :key="i" class="size-checkbox">
                      <div v-if="size['active']">
                        <input type="checkbox" />
                        <span class="checkmark">{{ size["active"] }}</span>
                      </div>
                      <div v-else>
                        <input type="checkbox" disabled />
                        <span class="checkmark">{{ size["outOfOrder"] }}</span>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <!-- BUTTONS -->
              <div class="dp-actions">
                <div class="dp-actions__btns">
                  <button class="g-btn g-btn-dark cart-btn">?? ??????????????</button>
                  <button
                    type="submit"
                    class="g-btn g-btn-light oneclick-buy-btn submit-btn"
                  >
                    ???????????? ?? 1 ????????
                  </button>
                </div>
                <div class="dp-actions__btns">
                  <div class="dp-actions-field">
                    <button @click.prevent="setActive($event)" class="field-btn">
                      <img
                        src="@/assets/img/icons/add-to-fav-icon.svg"
                        alt="icon"
                      />??????????????????
                    </button>
                  </div>
                  <div class="dp-actions-field">
                    <img src="@/assets/img/icons/compare-icon.svg" alt="icon" />
                    <button
                      @click.prevent="showDefaultPopup('compare')"
                      class="field-btn compare-btn"
                    >
                      ????????????????
                    </button>
                  </div>
                  <div class="dp-actions-field">
                    <img src="@/assets/img/icons/share-icon.svg" alt="icon" />
                    <button
                      @click.prevent="showDefaultPopup('share')"
                      class="field-btn share-btn"
                    >
                      ????????????????????
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import previewSlider from "@/components/DayProduct/previewSlider";
import deadlineTimer from "@/components/UI/dedlineTimer";
export default {
  props: ["dpData"],
  data() {
    return {
      onSwiper: (swiper) => {
        if (swiper.activeIndex == 0) {
          this.$refs.PrevBtn.classList.add("fade");
        }
      },
      onSlideChange: (swiper) => {
        if (swiper.activeIndex == 0) {
          this.$refs.PrevBtn.classList.add("fade");
        }

        if (swiper.activeIndex > 0 && swiper.activeIndex < swiper.slides.length - 1) {
          this.$refs.PrevBtn.classList.remove("fade");
          this.$refs.NextBtn.classList.remove("fade");
        }

        if (swiper.activeIndex == swiper.slides.length - 1) {
          this.$refs.NextBtn.classList.add("fade");
        }
      },
      sliderOptions: {
        slidesPerView: 1,
        spaceBetweenSlides: 0,
        preloadImages: false,
        grabCursor: true,
        loop: false,
        lazy: false,
        freeMode: false,
        autoplay: {
          speed: 850,
          autoplay: true,
          delay: 10000,
          pauseOnMouseEnter: true,
        },
        Navigation: {
          nextEl: this.$refs.NextBtn,
          prevEl: this.$refs.PrevBtn,
        },
      },
    };
  },
  methods: {
    next() {
      this.swiper.slideNext();
    },

    prev() {
      this.swiper.slidePrev();
    },

    setActive(event) {
      event.target.classList.toggle("active");
    },

    showDefaultPopup(name) {
      this.$emit("showDefaultPopup", name);
    },
  },
  components: {
    Swiper,
    SwiperSlide,
    previewSlider,
    deadlineTimer,
  },
  setup() {
    return {
      modules: [Navigation, Autoplay],
    };
  },
  mounted() {
    this.onSwiper(this.swiper);
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/imports.scss";
.dp-slider {
  @include fdrjsb_aic;
  position: relative;

  &__content {
    @include fdrjs_aic;
    width: 100%;
    flex: 1 0 calc(100% / 2);
  }

  &__navigation {
    position: absolute;
    top: -94px;
    right: 0;
    width: 116px;
    height: 54px;

    & .navigation__prev {
      left: 0;
    }
    & .navigation__next {
      right: 0;
    }

    & .navigation__prev,
    & .navigation__next {
      &.fade {
        opacity: 0.2;
      }
    }
  }
}

.dp-slider__navigation-btn {
  background-color: $white;
}

.dp-slider-slider {
  width: 100%;
  &__item {
    display: flex;
    height: 100%;
  }
}

.dp-details {
  width: 100%;
  margin-left: auto;
  &__inner {
    @include fdcjs_ais;
    width: 100%;
    max-width: 640px;
    padding: 0 5px;
    cursor: default;
  }
}
.dp-rating {
  @include fdr;
  width: 100%;
  &__rates {
    @include fdrjs_aic;
  }
}
.rate-item {
  width: 17px;
  height: 17px;
  margin: 0 3px;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  &--default {
    background: url("@/assets/img/icons/default-rate-icon.svg") no-repeat center / contain;
  }

  &--filled {
    background: url("@/assets/img/icons/filled-rate-icon.svg") no-repeat center / contain;
  }
}

.current-rate {
  @include fs($ff_I, 14px, $primary, 400);
  margin-left: 10px;
  margin-top: 3px;
}
.dp-name {
  @include fs($ff_P, 32px, $primary, 400);
  margin: 24px 0 20px 0;
}
.dp-vendor-code {
  @include fs($ff_I, 14px, $secondary, 400);
}
.dp-details {
  &__row {
    @include fdrjs_aic;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 5px;
    margin-bottom: 20px;
    position: relative;

    &:after {
      content: "";
      position: absolute;
      bottom: -20px;
      left: 0;
      width: 100%;
      border-bottom: 1px solid #f0f0f0;
    }
  }
}
.dp-prices {
  @include fdrjs_aic;
  display: inline-flex;

  &__current {
    @include fs($ff_I, 22px, $primary, 400);
    margin-right: 16px;
    min-width: fit-content;
  }

  &__discount {
    @include fs($ff_I, 14px, $secondary, 400);
    text-decoration: line-through;
    margin-right: 16px;
    min-width: fit-content;
  }

  &__label {
    @include fs($ff_I, 16px, $white, 500);
    padding: 4px 11px 4px 12px;
    margin-bottom: 4px;
    border-radius: 15px;
    background-color: #e24b33;
    min-width: fit-content;
    cursor: default;
  }
}

.dp-colors {
  width: 100%;
  margin: 30px 0;

  &__title {
    @include fs($ff_I, 12px, $primary, 600);
    margin-bottom: 16px;
  }
  &__bullets {
    & label {
      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
.bullet-item {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  min-width: 32px;
  min-height: 32px;
  margin: 0 8px;

  &--gray {
    & input[type="checkbox"] {
      background-color: #d9d9d9;
    }
  }

  &--gold {
    & input[type="checkbox"] {
      background-color: #f1cb7e;
    }
  }

  &--orange {
    & input[type="checkbox"] {
      background-color: #ea8c48;
    }
  }

  &--mint {
    & input[type="checkbox"] {
      background-color: #a7e492;
    }
  }

  & input[type="checkbox"] {
    position: relative;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    -o-appearance: none;
    outline: none;
    cursor: pointer;

    &:before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      border: 1px solid #dadada;
      transform: translate(-50%, -50%);
      z-index: -1;
    }

    &:checked {
      &:before {
        border: 1px solid $primary;
      }
    }

    &:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }

    &:hover {
      &:before {
        border: 1px solid $primary;
      }
    }
  }
}
.dp-sizes {
  width: 100%;
  &__title {
    @include fs($ff_I, 12px, $primary, 600);
    text-transform: uppercase;
    margin-right: 8px;
  }
  &__top {
    @include fdrjs_aic;
    width: 100%;
  }

  &__bottom {
    margin-top: 14px;
    margin-bottom: 40px;
  }

  &__blocks {
    width: 100%;
  }
}
.dp-info {
  position: relative;

  &__text {
    display: none;
  }

  &__label {
    @include fs($ff_I, 12px, $primary, 600);
    cursor: pointer;
    background-color: #f0f0f0;
    padding: 3px 5px 3px 6px;
    border-radius: 50%;
    @include tr;
    cursor: help;
  }

  &:hover {
    & span {
      background-color: #d3d3d3;
      @include tr;
    }

    & .dp-info__text {
      display: flex;
      position: absolute;
      top: -138px;
      left: 50%;
      transform: translateX(-50%);
      padding: 24px;
      background-color: $white;
      box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
      animation: fadeIn 0.5s linear;
      z-index: 10;

      &::after {
        content: "";
        width: 8px;
        height: 8px;
        background-color: $white;
        position: absolute;
        bottom: -4px;
        left: 50%;
        transform: translateX(-50%) rotate(-45deg);
      }
    }
  }
}

.dp-info span:hover {
  & .dp-info__text {
    display: flex;
  }
}

.size-checkbox {
  display: inline-block;
  vertical-align: middle;
  position: relative;
  width: 100%;
  max-width: 52px;
  height: 32px;
  margin: 0 5px;

  cursor: pointer;
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  .checkmark {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 52px;
    min-width: 52px;
    height: 32px;
    padding: 0 10px;
    border: 1px solid #dadada;
    background-color: white;
    color: $primary;
    transition: all 0.2s;
    &::before {
      content: "";
      display: block;
      position: absolute;
      top: 5px;
      left: 5px;
      width: 20px;
      height: 20px;
      border-radius: 3px;
      transition: all 0.2s;
    }

    &:hover {
      border: 1px solid $primary;
    }
  }
  input:checked ~ .checkmark {
    background-color: $primary;
    color: $white;
  }
  input:disabled ~ .checkmark {
    opacity: 0.3;
    cursor: not-allowed;
  }
  .checkmark {
    width: calc(50px + 10px * (length("19,2") - 3));
  }
}

.dp-actions {
  @include fdrjs_ais;
  flex-wrap: wrap;
  width: 100%;
  &__btns {
    @include fdcjs_ais;

    & > button {
      margin-bottom: 10px;
    }

    &:first-child {
      margin-right: 39px;
    }
  }
}

.dp-actions-field {
  @include fdrjs_aic;
  margin-bottom: 10px;

  & img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
}
.field-btn {
  @include fdrjs_aic;
  @include fs($ff_I, 14px, $primary, 300);
  cursor: pointer;

  &:hover {
    color: #979797;
    @include tr;

    & img {
      filter: brightness(0) saturate(100%) invert(57%) sepia(1%) saturate(957%)
        hue-rotate(317deg) brightness(105%) contrast(90%);
    }
  }

  &.active {
    & img {
      filter: brightness(0) saturate(100%) invert(32%) sepia(58%) saturate(3871%)
        hue-rotate(349deg) brightness(99%) contrast(78%);
    }
  }
}

.cart-btn,
.oneclick-buy-btn {
  width: 100%;
  min-width: 400px;
  max-width: 400px;
}

@media screen and (max-width: 991px) {
  .dp-slider-slider__item {
    flex-direction: column;
  }

  .dp-preview-slider {
    display: flex;
    justify-content: center;
  }

  .dp-details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

@media screen and (max-width: 668px) {
  .dp-sizes__blocks label {
    margin-bottom: 5px;
  }

  .dp-actions__btns {
    margin-right: 0;
  }
}

@media screen and (max-width: 601px) {
  .dp-details__prices {
    margin-bottom: 10px;
  }

  .cart-btn,
  .oneclick-buy-btn {
    min-width: auto;
  }
}

@media screen and (max-width: 380px) {
  .dp-slider__navigation {
    width: 80px;
  }
  .dp-slider__navigation .navigation__prev {
    width: 30px;
  }
}
</style>

<template>
  <section id="discount-section">
    <div class="wrapper">
      <swiper
        :modules="modules"
        @swiper="swiper = $event"
        :loop="sliderOptions.loop"
        :speed="sliderOptions.autoplay.speed"
        :autoplay="sliderOptions.autoplay.autoplay"
        :freemode="sliderOptions.freeMode"
        :slidesPerView="sliderOptions.slidesPerView"
        :navigation="sliderOptions.navigation"
        :preloadImages="sliderOptions.preloadImages"
        :lazy="sliderOptions.lazy"
        pagination
        class="goldy-main-slider"
      >
        <!-- Slide -->
        <swiper-slide class="goldy-main-slider__slide">
          <div class="goldy-slide">
            <div class="goldy-slide__inner">
              <div class="goldy-slide__discount">
                <span class="goldy-slide__discount--small">Суперскидка до 60%</span>
                <span class="goldy-slide__discount--large">НА БРИЛЛИАНТЫ</span>
                <button class="g-btn g-btn-dark g-btn--small">Подробнее</button>
              </div>
              <div class="goldy-slide__image">
                <img src="@/assets/img/slider/slide1.png" alt="Slide image" />
              </div>
            </div>
          </div>
        </swiper-slide>
        <!-- Slide -->
        <swiper-slide class="goldy-main-slider__slide">
          <div class="goldy-slide">
            <div class="goldy-slide__inner">
              <div class="goldy-slide__discount">
                <span class="goldy-slide__discount--small">Суперскидка до 60%</span>
                <span class="goldy-slide__discount--large">НА БРИЛЛИАНТЫ</span>
                <button class="g-btn g-btn-dark g-btn--small">Подробнее</button>
              </div>
              <div class="goldy-slide__image">
                <img src="@/assets/img/slider/slide1.png" alt="Slide image" />
              </div>
            </div>
          </div>
        </swiper-slide>
        <!-- Slide -->
        <swiper-slide class="goldy-main-slider__slide">
          <div class="goldy-slide">
            <div class="goldy-slide__inner">
              <div class="goldy-slide__discount">
                <span class="goldy-slide__discount--small">Суперскидка до 60%</span>
                <span class="goldy-slide__discount--large">НА БРИЛЛИАНТЫ</span>
                <button class="g-btn g-btn-dark g-btn--small">Подробнее</button>
              </div>
              <div class="goldy-slide__image">
                <img src="@/assets/img/slider/slide1.png" alt="Slide image" />
              </div>
            </div>
          </div>
        </swiper-slide>
        <div class="goldy-slider-navigation">
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
      </swiper>
    </div>
  </section>
</template>
<script>
// import Swiper core and required modules
import { Navigation, Pagination, A11y } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Import Swiper styles
export default {
  data() {
    return {
      sliderOptions: {
        slidesPerView: 1,
        preloadImages: false,
        lazy: true,
        freeMode: true,
        autoplay: {
          speed: 350,
          autoplay: true,
        },
        loop: true,
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
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation, Pagination, A11y],
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/imports.scss";

.goldy-main-slider {
  height: 100%;
  min-height: 560px;
  max-height: 560px;
  background-color: #f8f8f8;
  margin-top: 20px;
}

.goldy-main-slider__slide {
  display: flex;
  align-items: center;
  height: 100%;
  min-height: 560px;
  background: url("@/assets/img/slider/slider-bg-image.svg") no-repeat -15px 20px / contain;
}

.goldy-slide {
  width: 100%;
  &__inner {
    @include fdrjsb_aic;
    margin-bottom: 3px;
  }

  &__discount {
    @include fdcjs_ais;
    @include fs($ff_P, 20px, $primary, 400);
    margin-left: 126px;
    min-width: 491px;
  }

  &__discount--large {
    @include fs($ff_P, 50px, $primary, 400);
    margin: 30px 0 54px 0;
  }
}

.goldy-slide__image {
  margin-right: 35px;
}

.swiper-horizontal > .swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal,
.swiper-pagination-custom,
.swiper-pagination-fraction {
  bottom: 24px;
}

.swiper-pagination-bullet-active {
  background: var(--swiper-pagination-color, #303030);
}

.swiper-pagination-bullet:not(.swiper-pagination-bullet-active) {
  background: transparent;
  box-shadow: 0px 0px 0px 1px #000 inset;
  opacity: 1;
}

.swiper-button-prev,
.swiper-button-next {
  background-color: transparent;
  &:after {
    display: none;
  }
}

.navigation {
  &__prev {
    left: 24px;
  }

  &__next {
    right: 24px;
  }
}

@media screen and (max-width: 920px) {
  .goldy-slide__inner {
    flex-direction: column-reverse;
  }

  .goldy-slide__image {
    max-width: 200px;
    margin: 0 0 20px 0;
  }

  .goldy-slide__discount {
    margin: 0 auto;
    align-items: center;
  }
}

@media screen and (max-width: 678px) {
  .goldy-slide__image {
    max-width: 140px;
  }
}

@media screen and (max-width: 620px) {
  .goldy-slide__discount {
    min-width: 100%;
  }
  .goldy-slide__discount--large {
    font-size: 34px;
  }
}

@media screen and (max-width: 386px) {
  .goldy-slide__discount--large {
    font-size: 24px;
  }

  .goldy-slider-navigation {
    display: none;
  }
}
</style>

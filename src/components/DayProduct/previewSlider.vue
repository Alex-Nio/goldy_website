<template>
  <div class="dp-preview-slider">
    <div class="dp-preview-slider__content">
      <swiper
        :modules="modules"
        @swiper="swiper = $event"
        :speed="sliderOptions.autoplay.speed"
        :grabCursor="sliderOptions.grabCursor"
        :spaceBetween="sliderOptions.spaceBetweenSlides"
        :loop="sliderOptions.loop"
        :autoplay="sliderOptions.autoplay.autoplay"
        :freemode="sliderOptions.freeMode"
        :slidesPerView="sliderOptions.slidesPerView"
        :navigation="sliderOptions.navigation"
        :preloadImages="sliderOptions.preloadImages"
        :lazy="sliderOptions.lazy"
        :breakpoints="sliderOptions.breakpoints"
        class="dp-preview-slider-slider"
      >
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
        <swiper-slide
          v-for="(item, i) in previewImages"
          :key="i"
          class="dp-preview-slider-slider__item"
        >
          <div v-if="badges" class="badges">
            <span
              v-for="badge in badges"
              :key="badge"
              class="badge"
              :class="`badge--${badge.type}`"
            >
              {{ badge.name }}
            </span>
          </div>
          <img :src="require(`@/${item[i]}`)" alt="" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
export default {
  props: ["previewImages", "badges"],
  data() {
    return {
      sliderOptions: {
        slidesPerView: 1,
        spaceBetweenSlides: 0,
        preloadImages: false,
        grabCursor: true,
        loop: false,
        lazy: false,
        freeMode: true,
        autoplay: {
          speed: 350,
          autoplay: false,
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
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/imports.scss";
.dp-preview-slider {
  width: 100%;
  &__content {
    position: relative;
    width: 100%;
    max-width: 500px;
  }

  &__navigation {
    position: absolute;
    width: 100%;
  }
}

.badges {
  @include fdrjs_aic;
  position: absolute;
  top: 16px;
  left: 24px;
  z-index: 10;
}
.badge {
  @include fs($ff_I, 13px, $white, 500);
  text-transform: capitalize;
  margin: 0 2px;
  padding: 4px 11px 4px 12px;
  border-radius: 15px;
  cursor: pointer;
  @include tr-default;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  &--sale {
    background-color: $sale;

    @include baze-hover($sale);
  }

  &--hit {
    background-color: $hit;

    @include baze-hover($hit);
  }

  &--new {
    background-color: $new;

    @include baze-hover($new);
  }
}

.navigation {
  &__prev,
  &__next {
    background-color: transparent;
    border: none;

    &:hover {
      background-color: transparent;
    }

    &:before {
      content: "";
      position: absolute;
      top: 50%;
      width: 10px;
      height: 10px;
      background: url("") no-repeat center;
      transition: all 0.3s linear;
      border-top: 2px solid #303030;
      border-left: 2px solid #303030;
    }
  }

  &__prev {
    transform: rotate(-45deg);
  }

  &__next {
    transform: rotate(45deg);
  }
}

.dp-preview-slider-slider {
  width: 100%;
  max-width: 500px;
  &__item {
  }
}
</style>

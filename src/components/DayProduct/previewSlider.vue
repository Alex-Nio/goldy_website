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
        navigation
        :preloadImages="sliderOptions.preloadImages"
        :lazy="sliderOptions.lazy"
        :breakpoints="sliderOptions.breakpoints"
        class="dp-preview-slider-slider"
      >
        <swiper-slide
          v-for="(item, i) in previewImages"
          :key="i"
          class="dp-preview-slider-slider__item"
        >
          <p>{{ item }}</p>
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
  props: ["previewImages"],
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
.dp-preview-slider {
  width: 500px;
  height: 500px;
  &__content {
    position: relative;
  }

  &__navigation {
    position: absolute;
    width: 100%;
  }

  &__navigation-btn {
  }
}

// .navigation {
//   &__prev {
//   }

//   &__next {
//   }
// }

.dp-preview-slider-slider {
  width: 500px;
  height: 500px;
  &__item {
  }
}
</style>

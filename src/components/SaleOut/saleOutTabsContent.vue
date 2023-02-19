<template>
  <div class="sale-tab">
    <div class="sale-tab__content">
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
        class="sale-tab-slider"
      >
        <!-- Slide -->
        <swiper-slide
          v-for="(item, i) in tabsData.items"
          :key="i"
          class="sale-tab-slider__item"
        >
          <div class="sale-product" :class="{ active: active }">
            <div v-if="item.badges" class="badges">
              <span
                v-for="badge in item.badges"
                :key="badge"
                class="badge"
                :class="`badge--${badge.type}`"
              >
                {{ badge.name }}
              </span>
            </div>
            <div class="sale-product__actions">
              <button
                class="sale-product__action add-to-fav"
                @click="toggleClass($event)"
              >
                <img src="@/assets/img/icons/add-to-fav-icon.svg" alt="icon" />
              </button>
              <button class="sale-product__action show-preview">
                <img src="@/assets/img/icons/show-preview-icon.svg" alt="icon" />
              </button>
            </div>

            <div class="sale-product__top" @click.prevent.stop>
              <sale-product-preview></sale-product-preview>
            </div>

            <div class="sale-product__bottom">
              <div class="sale-prices">
                <div v-if="item.currentPrice" class="sale-prices__current">
                  {{ item.currentPrice }}
                </div>
                <div v-if="item.discount" class="sale-prices__discount">
                  {{ item.discount }}
                </div>
                <div v-if="item.label" class="sale-prices__label">{{ item.label }}</div>
              </div>
              <div class="sale-product__description">
                <p>{{ item.description }}</p>
              </div>

              <div class="sale-options">
                <material-select @click.stop="switchHeight"></material-select>
                <size-select @click.stop="switchHeight"></size-select>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
// import Swiper core and required modules
import { Navigation } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import SaleProductPreview from "@/components/SaleOut/SaleProduct/saleProductPreview";
import materialSelect from "@/components/UI/materialSelect";
import sizeSelect from "@/components/UI/sizeSelect";
export default {
  props: ["activeTab", "tabsData"],
  data() {
    return {
      active: false,
      sliderOptions: {
        slidesPerView: 4,
        spaceBetweenSlides: 20,
        preloadImages: false,
        grabCursor: true,
        loop: true,
        lazy: false,
        freeMode: true,
        autoplay: {
          speed: 350,
          autoplay: true,
        },
        Navigation: {
          nextEl: this.$refs.NextBtn,
          prevEl: this.$refs.PrevBtn,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          670: {
            slidesPerView: 2,
          },
          990: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
          2156: {
            slidesPerView: 5,
          },
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

    paginationToggle() {
      console.log("entered");
    },

    toggleClass(event) {
      event.target.parentElement.classList.toggle("active");
    },

    switchHeight() {
      this.active = !this.active;
    },
  },
  components: {
    Swiper,
    SwiperSlide,
    SaleProductPreview,
    materialSelect,
    sizeSelect,
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/imports.scss";
.sale-tab {
  width: 100%;
  &__content {
    margin-top: 50px;
  }
}
.sale-tab-slider {
  width: 100%;

  &__item {
    position: relative;
    height: 100%;
    min-height: 370px;
    width: 100%;
    background-color: $white;
    border: 1px solid #f0f0f0;
  }
}
.sale-product {
  @include fdcje_aic;
  height: 100%;
  min-height: 370px;
  width: 100%;
  max-width: 310px;
  min-width: 310px;
  padding: 16px 20px 26px 24px;

  &.active {
    // Высота настраивается в зависимости от высоты ul в селекте
    margin-bottom: 150px;
  }

  &:hover {
    & .sale-options {
      display: flex;
    }
  }

  &__actions {
    @include fdcjc_aic;
    position: absolute;
    top: 16px;
    right: 20px;
  }

  &__action {
    &:first-child {
      margin-bottom: 10px;
    }

    &:hover {
      cursor: pointer;
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

  &__top {
    @include fdcjs_aic;
    margin: auto 0;
  }

  &__bottom {
    @include fdcjc_ais;
  }

  &__description {
    @include fs($ff_I, 14px, $primary, 400);
    line-height: 160%;
    margin-top: 16px;
  }
}
.badges {
  @include fdrjs_aic;
  position: absolute;
  top: 16px;
  left: 24px;
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

.sale-prices {
  @include fdrjsb_aic;
  width: 100%;

  &__current {
    @include fs($ff_I, 18px, $primary, 600);
  }

  &__discount {
    @include fs($ff_I, 14px, $secondary, 400);
    text-decoration: line-through;
    margin-right: auto;
    margin-left: 8px;
  }

  &__label {
    @include fs($ff_I, 16px, $white, 500);
    text-transform: capitalize;
    margin: 0 2px;
    padding: 4px 11px 4px 12px;
    border-radius: 15px;
    background-color: $label;
    cursor: default;
  }
}

.sale-options {
  @include fdcjc_aic;
  display: none;
  margin-top: 24px;
  animation: fadeIn 0.4s linear;

  & > div:first-child {
    margin-bottom: 10px;
    z-index: 120;
  }
}
</style>

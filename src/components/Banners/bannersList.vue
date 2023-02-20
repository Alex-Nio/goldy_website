<template>
  <ul class="goldy-banners__list">
    <li
      v-for="(banner, i) in banners"
      :key="i"
      class="goldy-banner"
      :class="banner.classMix"
    >
      <h3 class="goldy-banner-title" v-html="banner.title"></h3>
      <div class="goldy-banner-sticker" :style="{ backgroundColor: banner.stickerColor }">
        <span class="goldy-banner-sticker__prefix">{{ banner.prefix }}</span>
        <span class="goldy-banner-sticker__discount">-{{ banner.discount }}%</span>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["banners"],
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/imports.scss";
.goldy-banners {
  &__list {
    display: grid;
    grid: 1fr / repeat(auto-fill, minmax(290px, 420px));
    justify-content: center;
    grid-gap: 20px;

    & * li,
    span {
      cursor: default;
    }
  }
}
.goldy-banner {
  position: relative;
  @include fdcjc_ais;
  width: 100%;
  max-width: 420px;
  height: 100%;
  min-height: 290px;

  &--first {
    background: url("@/assets/img/slider/slider-bg-image.svg") no-repeat -90px 25px / contain,
      url("@/assets/img/banners/decor-image1.png") no-repeat 248px -7px / contain;
  }

  &--second {
    background: url("@/assets/img/slider/slider-bg-image.svg") no-repeat -90px 25px / contain,
      url("@/assets/img/banners/decor-image2.png") no-repeat 248px -7px / contain;
  }

  &--third {
    background: url("@/assets/img/slider/slider-bg-image.svg") no-repeat -90px 25px / contain,
      url("@/assets/img/banners/decor-image3.png") no-repeat 248px -7px / contain;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    background-color: #f8f8f8;
    z-index: -1;
  }
}
.goldy-banner-title {
  @include fs($ff_I, 20px, $primary, 600);
  line-height: 160%;
  text-transform: uppercase;
  max-width: 220px;
  margin: 0 26px 22px 26px;
}
.goldy-banner-sticker {
  position: relative;
  width: 100%;
  max-width: 194px;
  padding: 7px 27px 7px 26px;
  &__prefix {
    @include fs($ff_I, 24px, $white, 600);
    line-height: 160%;
  }

  &__discount {
    position: absolute;
    top: 50%;
    right: 27px;
    transform: translateY(-50%);
    @include fs($ff_I, 36px, $white, 600);
    line-height: 160%;
  }
}
</style>

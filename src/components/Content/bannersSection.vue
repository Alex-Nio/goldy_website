<template>
  <section id="banners">
    <div class="wrapper">
      <div class="goldy-banners">
        <div class="goldy-banners__inner">
          <div class="goldy-banners__content">
            <banners-list :banners="banners"></banners-list>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import bannersList from "@/components/Banners/bannersList";
export default {
  data() {
    return {
      banners: [
        {
          title: "Скидки<br/>на&nbsp;все украшения с&nbsp;бриллиантами",
          prefix: "До",
          discount: "50",
          stickerColor: "#43807F",
          classMix: "goldy-banner--first",
        },
        {
          title: "Скидки<br/>на&nbsp;кольца и&nbsp;браслеты",
          prefix: "До",
          discount: "40",
          stickerColor: "#E24B33",
          classMix: "goldy-banner--second",
        },
        {
          title: "Cнижение цен на&nbsp;обручальные кольца",
          prefix: "До",
          discount: "60",
          stickerColor: "#E1A661",
          classMix: "goldy-banner--third",
        },
      ],
    };
  },
  components: {
    bannersList,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/imports.scss";
.goldy-banners {
  width: 100%;
  &__inner {
    width: 100%;
  }

  &__content {
    width: 100%;
  }
}

@media screen and (max-width: 461px) {
  #banners {
    display: none;
  }
}
</style>

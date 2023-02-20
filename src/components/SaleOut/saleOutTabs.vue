<template>
  <div class="sale-out-tabs" @click="showCategories">
    <div class="mobile-tabs-trigger">Категории</div>
    <ul ref="categories" class="sale-out-tabs__list">
      <li
        v-for="(tab, i) in tabs"
        :key="tab"
        @click="setActiveIndex(i)"
        class="sale-out-tabs__list-item"
        :class="{ active: activeTab === i }"
      >
        {{ tab.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["tabs", "activeTab"],
  methods: {
    setActiveIndex(index) {
      this.$emit("setActiveIndex", index);
    },

    showCategories() {
      this.$refs.categories.classList.toggle("active");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/imports.scss";
.sale-out-tabs {
  &__list {
    @include fdrjs_aic;
    margin-top: 24px;
  }

  &__list-item {
    @include fs($ff_I, 14px, $primary, 400);
    padding: 13px 30px;
    background-color: $tab-default;
    border-radius: 21px;
    margin: 0 4px;
    cursor: pointer;
    @include tr-default;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      background-color: $tab-hover;
      @include tr-default;
    }

    &:active {
      background-color: $tab-active;
    }

    &.active {
      color: $white;
      background-color: $tab-active;
      @include tr-default;
    }
  }
}

.mobile-tabs-trigger {
  display: none;
  font-family: "Prata";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  text-decoration: underline;
}

@media screen and (max-width: 678px) {
  .sale-out-tabs__list {
    @include fdcjs_ais;
    display: none;
    & > li {
      margin: 10px 0;
    }
    &.active {
      display: flex;
      margin: 0 0 20px 0;
      animation: slideInLeft 0.3s linear, fadeIn 0.3s linear;
    }
  }

  .mobile-tabs-trigger {
    display: flex;
    margin: 50px 0;
    font-size: 2rem;
    cursor: pointer;

    &:hover {
      color: $secondary;
    }
  }
}
</style>

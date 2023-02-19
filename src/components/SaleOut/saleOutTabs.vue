<template>
  <div class="sale-out-tabs">
    <ul class="sale-out-tabs__list">
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
</style>

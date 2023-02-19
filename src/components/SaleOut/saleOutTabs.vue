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
    @include fdrjc_aic;
    font-size: 3rem;
    margin-top: 100px;
  }

  &__list-item {
    margin: 0 20px;
  }
}
</style>

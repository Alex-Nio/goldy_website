<template>
  <div class="full-wrapper">
    <div class="goldy-container">
      <main-nav></main-nav>
      <router-view />
    </div>
  </div>
</template>

<script>
import mainNav from "@/components/_General/mainNav";
export default {
  components: {
    mainNav,
  },
};
</script>

<style lang="scss"></style>

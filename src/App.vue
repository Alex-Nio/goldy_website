<template>
  <div class="full-wrapper">
    <div class="goldy-container">
      <main-header></main-header>
      <router-view />
    </div>
  </div>
</template>

<script>
import mainHeader from "@/components/_General/mainHeader";
export default {
  components: {
    mainHeader,
  },
};
</script>

<style lang="scss"></style>

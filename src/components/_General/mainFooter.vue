<template>
  <footer>
    <div class="footer">
      <div class="footer__container">Footer</div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/imports.scss";
.footer {
  width: 100%;
  height: 100%;
  min-height: 320px;
  background-color: $primary;

  &__container {
    @include fdrjc_aic;
    width: 100%;
    height: 100%;
    min-height: 320px;
    max-width: 1340px;
    margin: 0 auto;
    padding: 0 20px;
    text-align: center;
    font-size: 4rem;
    color: $white;
  }
}
</style>

<template>
  <nav v-if="menuActive" class="m-menu-navigation">
    <ul class="m-menu-navigation__list">
      <li class="m-menu-navigation__list-item"><a href="#">Каталог</a></li>
      <li class="m-menu-navigation__list-item"><a href="#">Акции</a></li>
      <li class="m-menu-navigation__list-item"><a href="#">Бренды</a></li>
      <li class="m-menu-navigation__list-item"><a href="#">Магазины</a></li>
      <li class="m-menu-navigation__list-item"><a href="#">О нас</a></li>
      <li class="m-menu-navigation__list-item">
        <a href="#">Доставка и оплата</a>
      </li>
      <li class="m-menu-navigation__list-item"><a href="#">Статьи</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ["menuActive"],
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/imports.scss";
.m-menu-navigation {
  @include fdcjc_aic;
  width: 100%;
  height: 80.4vh;
  background-color: $white;
  position: fixed;
  margin-top: 32px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 40px;
  background: rgba(67, 66, 66, 0.659);
  box-shadow: 0 4px 30px rgba(61, 60, 60, 0.1);
  backdrop-filter: blur(12.3px);
  -webkit-backdrop-filter: blur(12.3px);

  &__list {
    display: grid;
    grid-template-rows: repeat(1, 1fr); /* 2 строки */
    grid-template-columns: repeat(1, 1fr); /* 7 колонок */
    grid-row-gap: 5px;
    padding: 10px 0;
    margin-top: -20px;
  }

  &__list-item {
    @include fs($ff_I, 24px, $white, 400);
    text-align: center;
    margin: 4px 0;
  }
}

@media screen and (max-width: 620px) {
  .m-menu-navigation {
    height: 71.4vh;
    margin-top: 0;
  }
}
</style>

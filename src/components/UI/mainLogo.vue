<template>
  <div class="goldy-logo">
    <router-link tag="a" to="/" class="goldy-logo__inner">
      <img src="@/assets/img/main-logo.svg" alt="Logo" />
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.goldy-logo {
  text-align: center;
  width: 100%;
  max-width: 183px;
  min-width: 183px;
  height: 52px;
  margin-top: -19px;
  margin-right: 21px;
  &__inner {
    display: flex;
    flex-direction: column;
    text-transform: capitalize;

    & span:nth-child(1) {
      color: #e1a661;
    }

    & p {
      font-family: "Prata", sans-serif;
      font-weight: 400;
      font-size: 32px;
      line-height: 100%;
      color: #303030;
    }

    & span:nth-child(2) {
      font-family: "Roboto Condensed";
      font-style: normal;
      text-transform: none;
      font-weight: 300;
      font-size: 14px;
      line-height: 100%;
      letter-spacing: 0.27em;
      color: #919191;
    }
  }
}

@media screen and (max-width: 991px) {
  .goldy-logo {
    margin-right: 0;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>

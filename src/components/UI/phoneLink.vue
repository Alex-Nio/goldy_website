<template>
  <a class="phone-link" :href="'tel:' + phoneNumber.replace(/[- ]/g, '')">
    <img src="@/assets/img/icons/phone-icon.svg" alt="phone" />
    <span>{{ phoneNumber }}</span>
  </a>
</template>

<script>
export default {
  props: ["phoneNumber"],
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/imports.scss";
.phone-link {
  display: inline-flex;
  width: 100%;
  min-width: 141px;
  margin-left: 14px;
  margin-top: 2px;
  max-width: calc(100% - 14px);
  text-decoration: none;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  font-family: $ff_I;
  color: #303030;
  transition: all 0.3s linear;

  & img {
    width: 16px;
    height: 16px;
    transition: all 0.3s linear;
  }

  & span {
    margin-left: 10px;
    margin-top: 2px;
  }

  &:hover .phone-icon {
    color: #303030;
    opacity: 0.5;
    transition: all 0.3s linear;
  }

  &:hover img {
    opacity: 0.5;
    transition: all 0.3s linear;
  }
}

@media screen and (max-width: 991px) {
  
}
</style>

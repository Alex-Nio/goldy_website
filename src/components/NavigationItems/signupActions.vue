<template>
  <div class="signup-actions">
    <button @click.prevent="showPopup($event)" class="login-action-btn" id="login">
      {{ signupButtons[0] }}
    </button>
    <button @click.prevent="showPopup($event)" class="signup-action-btn" id="signup">
      {{ signupButtons[1] }}
    </button>
  </div>
</template>

<script>
export default {
  props: ["signupButtons"],
  methods: {
    showPopup(e) {
      this.$emit("showPopup", e);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/imports.scss";
.signup-actions {
  position: relative;
  width: 100%;
  @include fdrje_aic;

  & > button {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    background-color: transparent;
    padding: 0 5px;
    transition: all 0.3s linear;

    &:hover {
      cursor: pointer;
      opacity: 0.5;
      transition: all 0.3s linear;
    }
  }
  & button:nth-child(1) {
    position: relative;
    &::before {
      position: absolute;
      content: "";
      top: 60%;
      left: 48px;
      height: 10px;
      border-right: 1px solid #303030;
      transform: translateY(-50%);
    }
  }
  & button:nth-child(2) {
    margin-left: 10px;
  }
}

@media screen and (max-width: 991px) {
}
</style>

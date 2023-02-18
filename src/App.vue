<template>
  <div class="full-wrapper" @click="mobileMenuClose">
    <div class="goldy-container">
      <main-header
        :headerScrolling="headerScrolling"
        :burgerOpen="burgerOpen"
        :menuActive="menuActive"
        @mobileMenuToggle="mobileMenuToggle"
      ></main-header>
      <router-view />
    </div>
  </div>
</template>

<script>
import mainHeader from "@/components/_General/mainHeader";

export default {
  data() {
    return {
      menuActive: false,
      burgerOpen: false,
      headerScrolling: false,
    };
  },
  components: {
    mainHeader,
  },
  methods: {
    mobileMenuToggle() {
      this.menuActive = !this.menuActive;
      this.burgerOpen = !this.burgerOpen;
      const body = document.querySelector("body");
      body.classList.toggle("locked");
      console.log("click");
    },
    mobileMenuClose() {
      this.menuActive = false;
      this.burgerOpen = false;
    },
    handleScroll() {
      if (this.lastPosition > window.scrollY && this.limitPosition < window.scrollY) {
        this.headerScrolling = true;
      } else if (this.limitPosition > 0) {
        this.headerScrolling = false;
      }

      if (this.lastPosition == 0) {
        this.headerScrolling = true;
      }

      this.lastPosition = window.scrollY;

      if (this.lastPosition === 0) {
        this.headerScrolling = false;
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.lastPosition = window.scrollY;
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="scss"></style>

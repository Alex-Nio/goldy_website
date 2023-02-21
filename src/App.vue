<template>
  <div class="full-wrapper" @click="mobileMenuClose">
    <div class="goldy-container" @click="defaultPopupToggle">
      <main-header
        :headerScrolling="headerScrolling"
        :burgerOpen="burgerOpen"
        :menuActive="menuActive"
        @mobileMenuToggle="mobileMenuToggle"
        @showPopup.stop="showPopup"
        @showDefaultPopup.stop="showDefaultPopup"
      ></main-header>
      <router-view />
    </div>
    <register-popup
      :trigger="trigger"
      v-if="popupOpen"
      v-click-outside="popupToggle"
    ></register-popup>
    <default-popup
      :defaultPopupTrigger="defaultPopupTrigger"
      v-if="defaultPopupOpen"
    ></default-popup>
  </div>
  <main-footer></main-footer>
</template>

<script>
import mainHeader from "@/components/_General/mainHeader";
import mainFooter from "@/components/_General/mainFooter";
import registerPopup from "@/components/_General/registerPopup";
import defaultPopup from "@/components/_General/dafaultPopup";

export default {
  data() {
    return {
      menuActive: false,
      burgerOpen: false,
      headerScrolling: false,
      lastPosition: null,
      limitPosition: 0,
      popupOpen: false,
      defaultPopupOpen: false,
      defaultPopupTrigger: "presentation",
    };
  },
  components: {
    mainHeader,
    mainFooter,
    registerPopup,
    defaultPopup,
  },
  methods: {
    mobileMenuToggle() {
      this.menuActive = !this.menuActive;
      this.burgerOpen = !this.burgerOpen;
      const body = document.querySelector("body");
      body.classList.toggle("locked");
    },

    mobileMenuClose() {
      this.menuActive = false;
      this.burgerOpen = false;
    },

    handleScroll() {
      if (this.lastPosition > window.scrollY && this.limitPosition < window.scrollY) {
        this.headerScrolling = true;
      } else if (this.limitPosition > 130) {
        this.headerScrolling = false;
      }

      if (this.lastPosition == 0) {
        this.headerScrolling = true;
      }

      this.lastPosition = window.scrollY;

      if (this.lastPosition === 0) {
        this.headerScrolling = false;
      }

      if (window.scrollY >= document.body.scrollHeight - 1000) {
        this.showPresentationPopup("presentation");
      } else {
        this.defaultPopupToggle();
      }
    },

    showPresentationPopup(trigger) {
      this.defaultPopupTrigger = trigger;
      this.defaultPopupOpen = true;
    },

    showPopup(event) {
      this.popupOpen = true;
      this.trigger = event.target.id;
    },

    popupToggle() {
      this.popupOpen = false;
    },

    defaultPopupToggle() {
      this.defaultPopupOpen = false;
    },

    showDefaultPopup(event) {
      this.defaultPopupTrigger = event.target.alt;
      this.defaultPopupOpen = true;
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

<template>
  <div class="dp-timer">
    <div class="dp-timer__hours">
      <div class="hours-counter">{{ hours }}</div>
      <div class="hours-text">часов</div>
    </div>
    <div class="dp-timer__minutes">
      <div class="minutes-counter">{{ minutes }}</div>
      <div class="minutes-text">минут</div>
    </div>
    <div class="dp-timer__seconds">
      <div class="seconds-counter">{{ seconds }}</div>
      <div class="seconds-text">секунд</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["deadline"],
  data() {
    return {
      timerId: null,
      timeRemaining: { hours: 0, minutes: 0, seconds: 0 },
    };
  },
  computed: {
    hours() {
      return this.formatNumber(this.timeRemaining.hours);
    },
    minutes() {
      return this.formatNumber(this.timeRemaining.minutes);
    },
    seconds() {
      return this.formatNumber(this.timeRemaining.seconds);
    },
  },
  methods: {
    startTimer() {
      this.timerId = setInterval(() => {
        let deadlineParts = this.deadline.split(".");
        let deadline = new Date(
          Number(deadlineParts[2]), // Год
          Number(deadlineParts[1]) - 1, // Месяц (нумерация месяцев начинается с 0)
          Number(deadlineParts[0]) // День
        );
        // let now = new Date(Date.now() + new Date().getTimezoneOffset() * 60000); // текущее время в UTC
        // let timeDiff = deadline.getTime() - now.getTime();
        let now = new Date(); // текущее время пользователя
        let timeDiff = deadline.getTime() - now.getTime();

        if (timeDiff <= 0) {
          this.timeRemaining = { hours: 0, minutes: 0, seconds: 0 };
          this.stopTimer();
          return;
        }

        const seconds = Math.floor((timeDiff / 1000) % 60);
        const minutes = Math.floor((timeDiff / 1000 / 60) % 60);
        const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
        this.timeRemaining = { hours, minutes, seconds };
      }, 1000);
    },

    stopTimer() {
      clearInterval(this.timerId);
    },
    formatNumber(number) {
      return number.toString().padStart(2, "0");
    },
  },
  created() {
    const deadlineParts = this.deadline.split(".");
    const deadline = new Date(
      Number(deadlineParts[2]), // Год
      Number(deadlineParts[1]) - 1, // Месяц (нумерация месяцев начинается с 0)
      Number(deadlineParts[0]) // День
    );
    // const now = new Date(Date.now() + new Date().getTimezoneOffset() * 60000); // текущее время в UTC
    // const timeDiff = deadline.getTime() - now.getTime();
    let now = new Date(); // текущее время пользователя
    let timeDiff = deadline.getTime() - now.getTime();

    const seconds = Math.floor((timeDiff / 1000) % 60);
    const minutes = Math.floor((timeDiff / 1000 / 60) % 60);
    const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
    this.timeRemaining = { hours, minutes, seconds };
    this.startTimer();
  },
  beforeDestroy() {
    this.stopTimer();
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/imports.scss";
.dp-timer {
  position: relative;
  @include fdrjs_aic;
  padding: 12px 14px;
  background-color: #f5f5f5;
  margin: 0 auto;
  &__hours,
  &__minutes,
  &__seconds {
    @include fdcjc_aic;
    border: 1px solid #d0d0d0;
    margin: 0 10px;
    padding: 6px 10px 5px 10px;
    width: 100%;
    height: 40px;
    min-width: 52px;
    max-width: 52px;
  }

  &::before,
  &::after {
    content: ":";
    position: absolute;
    color: $black;
    font-size: 16px;
    font-weight: bold;
    top: 48%;
    transform: translateY(-50%);
    animation: fadeIn s ease-in-out infinite;
  }

  &::before {
    left: 74px;
  }
  &::after {
    right: 74px;
  }

  & div:first-child {
    margin-left: 0;
  }

  & div:last-child {
    margin-right: 0;
  }
}

.hours-counter,
.minutes-counter,
.seconds-counter {
  @include fs($ff_I, 16px, $primary, 700);
  margin-bottom: 2px;
}
.hours-text,
.minutes-text,
.seconds-text {
  @include fs($ff_I, 11px, $primary, 300);
  text-transform: lowercase;
}

.seconds-counter {
  animation: fadeOut 1s ease-in-out infinite;
}
</style>

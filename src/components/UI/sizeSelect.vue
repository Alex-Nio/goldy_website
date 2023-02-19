<template>
  <div class="material-select" :data-value="value" :data-list="list">
    <div class="selector" @click="toggle()">
      <div class="material-label">
        <span class="material-label-title" :class="{ active: visible }">{{
          "Размер: " + value
        }}</span>
      </div>
      <div :class="{ hidden: !visible, visible }">
        <ul>
          <li
            :key="item"
            :class="{ current: item === value }"
            v-for="item in list"
            @click="select(item)"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "material-select",
  data() {
    return {
      value: "16",
      list: ["16", "17", "18"],
      visible: false,
    };
  },
  methods: {
    toggle() {
      this.visible = !this.visible;
    },
    select(option) {
      this.value = option;
    },
  },
};
</script>

<style lang="scss" scoped>
.material-select {
  display: flex;
  align-items: center;
  width: 100%;
  min-width: 262px;
  height: 40px;
  background-color: #f0f0f0;

  transition: all 0.3s linear;

  &:hover {
    .location-icon,
    .arrow {
      color: #303030;
      opacity: 0.5;
      transition: all 0.3s linear;
    }
  }
  .selector {
    cursor: pointer;
    background: transparent;
    position: relative;
    width: 100%;
    z-index: 1;

    .material-label {
      display: flex;
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 100%;
      color: #303030;
      padding: 9px 45px 9px 16px;
      width: 100%;

      & img {
        width: 12px;
        height: 16px;
        margin-left: 1px;
        margin-top: 1px;
        transition: all 0.3s linear;
      }

      &:hover img {
        opacity: 0.5;
        transition: all 0.3s linear;
      }
    }
  }
  ul {
    width: 100%;
    // max-width: 197px;
    // min-width: 197px;
    list-style-type: none;
    padding: 24px 0;
    margin-top: 3px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    color: #303030;
    position: absolute;
    z-index: 15;
    background: #fff;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
  }
  li {
    padding: 9px 30px 9px 24px;
    color: #303030;
    &:hover {
      background: #fafafa;
    }
  }
  .current {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 155px;
      width: 10px;
      height: 7px;
      transform: translateY(-50%);
      background: url("@/assets/img/icons/selected-arrow-icon.svg") no-repeat center
        center / 10px 7px;
    }
  }
  .hidden {
    visibility: hidden;
  }
  .visible {
    visibility: visible;
    animation: fadeIn 0.8s linear;
  }
}

.material-label-title {
  position: relative;
  width: 100%;
  &::after {
    content: "";
    position: absolute;
    top: 56%;
    right: -17px;
    width: 10px;
    height: 7px;
    transform: translateY(-50%);
    background: url("@/assets/img/icons/arrow-icon.svg") no-repeat center center / 10px
      7px;
    transition: all 0.3s linear;
  }

  &.active {
    &::after {
      transform: translateY(-50%) scale(1, -1);
      transition: all 0.3s linear;
    }
  }
}
</style>

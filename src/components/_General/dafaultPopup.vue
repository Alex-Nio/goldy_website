<template>
  <div v-if="defaultPopupTrigger === 'cart'" class="popup">
    <div class="popup-content">
      <h3 class="popup-content__title">Корзина</h3>
      <div class="popup-container">
        <div class="popup-container__top">
          <div class="popup-container__row">
            <p class="popup-container__text">Ваша корзина</p>
          </div>
        </div>
        <div class="popup-container__center">
          <div class="popup-container__row">
            <ul class="presentation-list">
              <li class="presentation-list__item">
                <strong>Вёрстка:</strong> Александр Ильин
              </li>
              <li class="presentation-list__item">
                <a href="https://github.com/Alex-Nio/goldy_website">Github проекта</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="popup-container__bottom">
          <div class="popup-container__row">
            <div class="contacts">
              <p class="contacts__title"><strong>Мои контакты:</strong></p>

              <ul class="contacts-list">
                <li class="contacts-list__item">
                  <a href="https://ai-webdev.ru">Мой сайт</a>
                </li>
                <li class="contacts-list__item">
                  <a href="https://github.com/Alex-Nio">GitHub</a>
                </li>
                <li class="contacts-list__item">
                  <a href="https://t.me/eterfox">Телеграм</a>
                </li>
                <li class="contacts-list__item">
                  <a href="mailto:volpenio@gmail.com">Почта</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="defaultPopupTrigger === 'chart'" class="popup">
    <div class="popup-content">
      <h3 class="popup-content__title">Сравнение товаров</h3>
      <div class="popup-container">
        <div class="popup-container__top">
          <div class="popup-container__row">
            <p class="popup-container__text">Товары</p>
          </div>
        </div>
        <div class="popup-container__center">
          <div class="popup-container__row">
            <ul class="presentation-list">
              <li class="presentation-list__item">
                <strong>Вёрстка:</strong> Александр Ильин
              </li>
              <li class="presentation-list__item">
                <a href="https://github.com/Alex-Nio/goldy_website">Github проекта</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="popup-container__bottom">
          <div class="popup-container__row">
            <div class="contacts">
              <p class="contacts__title"><strong>Мои контакты:</strong></p>

              <ul class="contacts-list">
                <li class="contacts-list__item">
                  <a href="https://ai-webdev.ru">Мой сайт</a>
                </li>
                <li class="contacts-list__item">
                  <a href="https://github.com/Alex-Nio">GitHub</a>
                </li>
                <li class="contacts-list__item">
                  <a href="https://t.me/eterfox">Телеграм</a>
                </li>
                <li class="contacts-list__item">
                  <a href="mailto:volpenio@gmail.com">Почта</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="defaultPopupTrigger === 'favorites'" class="popup">
    <div class="popup-content">
      <h3 class="popup-content__title">Избранное</h3>
      <div class="popup-container">
        <div class="popup-container__top">
          <div class="popup-container__row">
            <p class="popup-container__text">Товары</p>
          </div>
        </div>
        <div class="popup-container__center">
          <div class="popup-container__row">
            <ul class="presentation-list">
              <li class="presentation-list__item">
                <strong>Вёрстка:</strong> Александр Ильин
              </li>
              <li class="presentation-list__item">
                <a href="https://github.com/Alex-Nio/goldy_website">Github проекта</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="popup-container__bottom">
          <div class="popup-container__row">
            <div class="contacts">
              <p class="contacts__title"><strong>Мои контакты:</strong></p>

              <ul class="contacts-list">
                <li class="contacts-list__item">
                  <a href="https://ai-webdev.ru">Мой сайт</a>
                </li>
                <li class="contacts-list__item">
                  <a href="https://github.com/Alex-Nio">GitHub</a>
                </li>
                <li class="contacts-list__item">
                  <a href="https://t.me/eterfox">Телеграм</a>
                </li>
                <li class="contacts-list__item">
                  <a href="mailto:volpenio@gmail.com">Почта</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="defaultPopupTrigger === 'presentation'" class="popup">
    <div class="popup-content">
      <h3 style="font-size: 1.8rem" class="popup-content__title">
        © Наша работа — это безусловная любовь.
      </h3>
      <div class="popup-container">
        <div style="text-align: left" class="popup-container__top">
          <div class="popup-container__row">
            <p class="popup-container__text"></p>
            <p class="popup-container__text">
              Работа всех остальных в&nbsp;нашей жизни&nbsp;&mdash; нажимать на&nbsp;наши
              кнопки.
            </p>
          </div>
        </div>
        <div class="popup-container__center">
          <div class="popup-container__row">
            <ul class="presentation-list">
              <li class="presentation-list__item">
                <strong>Вёрстка:</strong> Александр Ильин
              </li>
              <li class="presentation-list__item">
                <a href="https://github.com/Alex-Nio/goldy_website">Github проекта</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="popup-container__bottom">
          <div class="popup-container__row">
            <div class="contacts">
              <p class="contacts__title"><strong>Мои контакты:</strong></p>

              <ul class="contacts-list">
                <li class="contacts-list__item">
                  <a href="https://ai-webdev.ru">Мой сайт</a>
                </li>
                <li class="contacts-list__item">
                  <a href="https://github.com/Alex-Nio">GitHub</a>
                </li>
                <li class="contacts-list__item">
                  <a href="https://t.me/eterfox">Телеграм</a>
                </li>
                <li class="contacts-list__item">
                  <a href="mailto:volpenio@gmail.com">Почта</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["defaultPopupTrigger"],
  mounted() {
    console.log(this.defaultPopupTrigger);
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/imports.scss";

.popup {
  position: fixed;
  top: 40vh;
  left: 50%;
  height: 300px;
  transform: translate(-50%, -50%) !important;
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  padding: 0 20px;
  z-index: 15;
  animation: fadeIn 0.3s linear;
}

.popup-content {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 3rem;
  font-family: $ff_I;
  background-color: #fff;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.5);

  & p,
  li,
  span {
    cursor: default;
  }

  &__title {
    font-size: 4rem;
    line-height: 180%;
    text-align: center;
  }
}

.popup-container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 20px 20px 0 20px;
  height: 100%;

  &__top {
    display: flex;
    flex-shrink: 1;
  }

  &__center {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    height: 100%;
  }

  &__bottom {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }

  &__row {
    width: 100%;
    padding: 5px 0;
  }

  &__text {
    font-size: 1.8rem;
    line-height: 100%;
  }
}

.presentation-list {
  padding: 10px 0;
  &__item {
    font-size: 1.8rem;
    line-height: 140%;
    margin: 10px 0;
    text-align: right;

    & a {
      text-decoration: underline;
    }

    &:first-child {
      margin-bottom: 10px;
    }

    &:nth-child(2) {
      font-size: 2rem;
    }
  }
}

.contacts {
  &__title {
    font-size: 1.8rem;
    line-height: 140%;
  }
}
.contacts-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 10px 0;
  margin-top: 30px;

  &__item {
    font-size: 1.6rem;
    margin: 10px 10px;

    &:hover {
      color: blue;
    }

    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }
}
</style>

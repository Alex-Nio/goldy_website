<template>
  <div>
    <div v-if="trigger === 'signup'" id="register-popup" class="popup">
      <div class="popup-content">
        <div class="sign-title">
          <h3>Регистрация</h3>
        </div>
        <form class="sign-form" action="/">
          <div class="form-row">
            <label for="name">
              <span>Ваш логин или email</span><span class="required">*</span>
            </label>
            <input id="name" class="login-input" type="text" required />
          </div>
          <div class="form-row">
            <label for="password">
              <span>Пароль</span><span class="required">*</span>
            </label>
            <input id="password" class="password-input" type="text" required />
          </div>
          <div class="form-actions">
            <button
              @click.prevent="showSignPopup"
              class="reg-btn submit-btn"
              type="submit"
            >
              Зарегистрироваться
            </button>
            <div class="actions-devider">
              <span>или</span>
            </div>
            <a class="reg-btn show-register show-popup" href="#register-popup">Войти</a>
          </div>
        </form>
      </div>
    </div>
    <div v-if="openSignForm" id="sign-popup" class="popup">
      <div class="popup-content">
        <div class="sign-title">
          <h3>Регистрация</h3>
        </div>
        <form class="sign-form" action="/">
          <div class="form-row">
            <label for="name">
              <span>Ваш логин или email</span><span class="required">*</span>
            </label>
            <input id="name" class="login-input" type="text" required />
          </div>
          <div class="form-row">
            <label for="password">
              <span>Пароль</span><span class="required">*</span>
            </label>
            <input id="password" class="password-input" type="text" required />
          </div>
          <div class="form-row checkbox-field">
            <label for="">
              <input type="checkbox" />
              <span>Запомнить</span>
            </label>
            <span>Забыли пароль?</span>
          </div>
          <div class="form-actions">
            <button type="submit" @click.prevent class="reg-btn submit-btn">Войти</button>
            <div class="actions-devider">
              <span>или</span>
            </div>
            <a @click.prevent class="reg-btn show-register show-popup" href="#sign-popup"
              >Создать аккаунт</a
            >
          </div>
        </form>
      </div>
    </div>
    <div v-else-if="trigger === 'login'" id="sign-popup" class="popup">
      <div class="popup-content">
        <div class="sign-title">
          <h3>Войти</h3>
        </div>
        <form class="sign-form" action="/">
          <div class="form-row">
            <label for="name">
              <span>Ваш логин или email</span><span class="required">*</span>
            </label>
            <input id="name" class="login-input" type="text" required />
          </div>
          <div class="form-row">
            <label for="password">
              <span>Пароль</span><span class="required">*</span>
            </label>
            <input id="password" class="password-input" type="text" required />
          </div>
          <div class="form-row checkbox-field">
            <label for="">
              <input type="checkbox" />
              <span>Запомнить</span>
            </label>
            <span>Забыли пароль?</span>
          </div>
          <div class="form-actions">
            <button type="submit" @click.prevent class="reg-btn submit-btn">Войти</button>
            <div class="actions-devider">
              <span>или</span>
            </div>
            <a @click.prevent class="reg-btn show-register show-popup" href="#sign-popup"
              >Создать аккаунт</a
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["trigger"],
  data() {
    return {
      openSignForm: false,
    };
  },
  methods: {
    showSignPopup() {
      this.openSignForm = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) !important;
  width: 30%;
  max-width: 340px;
  margin: 0 auto;
  z-index: 15;
  animation: fadeIn 0.3s linear;
}

.popup-content {
  position: relative;
  display: block;
  padding: 3rem;
  background-color: #fff;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.5);
}

.sign-title {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 2.6rem;
  color: #282828;
  text-align: center;
  padding-bottom: 2.5rem;
}

.sign-form {
  font-size: 1.4rem;
  color: #282828;
}

.form-row {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.form-row label {
  display: block;
  padding: 0.6rem 0 0.8rem 0;
}

.login-input,
.password-input {
  height: 40px;
  width: 100%;
  border: 1px solid #bfbfbf;
  padding: 1rem;
  transition: border 0.5s ease;
}
.login-input:focus,
.password-input:focus {
  border: 1px solid #dc9814;
  transition: border 0.3s ease;
}

.required {
  vertical-align: top;
  margin: 0.3rem;
  color: #bfbfbf;
}

.checkbox-field {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.form-actions {
  margin: 2rem 0;
}

.submit-btn {
  font-size: 1.4rem;
  background-color: #282828;
  color: #fff;
  background-position: 1% 50%;
  background-size: 300% 300%;
  transition: all 0.5s ease;
  border: 1px solid transparent;
}
.submit-btn:hover {
  color: #282828;
  border: 1px solid #282828;
  background-position: 99% 50%;
  background-image: linear-gradient(
    270deg,
    rgba(255, 255, 255, 0.9),
    rgba(255, 255, 255, 0.9),
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0)
  );
}

.actions-devider {
  position: relative;
  padding: 1rem 0;
  text-align: center;
}
.actions-devider span {
  position: relative;
  display: inline-block;
  font-size: 1.6rem;
  line-height: 1;
  color: #282828;
  padding: 0 19px;
  text-transform: lowercase;
  background: #fff;
  z-index: 10;
}
.actions-devider:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  display: block;
  width: 100%;
  height: 1px;
  background: #ccc;
}

.show-register {
  font-size: 1.4rem;
  border: 1px solid #bfbfbf;
  color: #282828;
  background-position: 1% 50%;
  background-size: 300% 300%;
  transition: all 0.5s ease;
}
.show-register:hover {
  color: #fff;
  border: 1px solid #282828;
  background-position: 99% 50%;
  background-image: linear-gradient(
    270deg,
    rgba(0, 0, 0, 0.9),
    rgba(0, 0, 0, 0.9),
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0)
  );
}

.reg-btn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem 2rem;
  cursor: pointer;
  transition: all 0.5s ease-out;
}
</style>

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { clickOutside } from "./assets/directives/globalDirectives";
import "animate.css";
import "./assets/scss/main.scss";

const app = createApp(App);

app.directive("clickOutside", clickOutside);
app.use(router).mount("#app");

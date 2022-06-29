import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import tooltip from "./directives/tooltip.js";
import "./assets/css/tooltip.css";

const app = createApp(App)

app.use(router)
app.directive("tooltip", tooltip);

app.mount('#app')
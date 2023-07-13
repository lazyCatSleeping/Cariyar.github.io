import { createApp } from 'vue';
// 引入路由
import router from "./router/index.js";
// 引入ElementUI
import ElementPlus from "element-plus";
import App from './App.vue';

const app = createApp(App);
// 使用
app.use(router);
app.use(ElementPlus);
app.mount('#app');

import { createApp } from 'vue';
// 引入路由
import router from "./router/index.js";
// 引入vuex
import store from "./store"

// 引入ElementUI
import ElementPlus from "element-plus";
import App from './App.vue';

const app = createApp(App);
/* 使用 */
// 使用路由
app.use(router);
// 使用vuex
app.use(store);
// 使用elementPlus
app.use(ElementPlus);
// 挂载
app.mount('#app');

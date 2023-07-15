// 引入创建vuex的模块
import { createStore } from 'vuex'

// 引入导航相关的vuex模块
import nav from './nav'

// 创建并暴露vuex
export default createStore({
	modules:{
		nav
	}
});
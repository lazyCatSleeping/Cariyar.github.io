// 引入vue-router
import {createRouter, createWebHashHistory} from "vue-router"

import BlogIndex from "../components/content/main/BlogIndex";
import BlogResume from "../components/content/main/BlogResume"
import BlogBlog from "../components/content/main/BlogBlog"

export default createRouter({
	history: createWebHashHistory(),
	routes: [{
		path: "/resume",
		name: "resume",
		component: BlogResume
	}, {
		path: "/blog",
		name: "blog",
		component: BlogBlog
	}, {
		path: "/:catchAll(.*)",
		// path: "/:pathMatch(.*)",
		// path: "/:pathMatch(.*)*",
		name:"home",
		component: BlogIndex
	}]
})
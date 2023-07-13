<template>
    <ElMenu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
		router
        @select="handleSelect"
    >
        <ElMenuItem index="1" route="/home" default-active>首页</ElMenuItem>
        <ElMenuItem index="2" route="/resume">简历</ElMenuItem>
        <ElMenuItem index="3" route="/blog">文章</ElMenuItem>
        <ElMenuItem index="4" route="/project">项目样例</ElMenuItem>
    </ElMenu>
</template>

<script>
import { ref } from "vue";
import { ElMenu } from "element-plus";
export default {
    name: "BlogHeader",
    components: {
        ElMenu,
    },
    mounted(){
        let matchRoute = ()=>{
            // this.activeIndex = 
        }
        matchRoute();
    },
    data() {
        return {
            activeIndex: ref("1"),
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
			this.activeIndex = ref(key);
        },
    },
};
</script>

<style>
</style>
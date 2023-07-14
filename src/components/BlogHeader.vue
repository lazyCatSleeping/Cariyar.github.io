<template>
    <ElMenu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        router
        @select="handleSelect"
    >
        <ElMenuItem
            v-for="item in menu"
            :index="item.index"
            :route="item.to"
            :key="item.id"
            default-active
        >
            {{ item.name }}
        </ElMenuItem>
        <!-- <ElMenuItem index="1" route="/home" default-active>首页</ElMenuItem>
        <ElMenuItem index="2" route="/resume">简历</ElMenuItem>
        <ElMenuItem index="3" route="/blog">文章</ElMenuItem>
        <ElMenuItem index="4" route="/project">项目样例</ElMenuItem> -->
    </ElMenu>
</template>

<script>
import { onMounted, reactive, ref } from "vue";
import { ElMenu } from "element-plus";
import axios from "axios";
export default {
    name: "BlogHeader",
    components: {
        ElMenu,
    },
    setup() {
        /* data */
        // 顶部导航初始化
        let activeIndex = ref("1"),
            menu = reactive([]);

        /* methods */
        // 切换导航高亮
        const handleSelect = (key, keyPath) => {
            console.log(key, keyPath);
            this.activeIndex = ref(key);
        };

        // 生命周期钩子
        onMounted(() => {
            let matchRoute = () => {
                let loc = history.state.current;
                console.log(loc);
                axios({
                    method: "get",
                    url: "/blogserve/nav/header",
                }).then((res)=>{
                    let newMenu = reactive( res.data );
                    Object.assign(menu, newMenu);
                    res.data.forEach(element => {
                        if(element.name === loc){
                            activeIndex = ref(element.index);
                        }
                    });
                },(err) => {
                    console.log(err);
                })
            };
            matchRoute();
        });

        return {
            // data
            activeIndex,
            menu,

            // method
            handleSelect,
        };
    },
};
</script>

<style>
</style>
<template>
    <ElMenu
        :default-active="defaultActive"
        class="el-menu-demo"
        mode="horizontal"
        router
    >
        <ElMenuItem
            v-for="item in menu"
            :index="item.index"
            :route="item.to"
            :key="item.id"
            @click="changeHeader"
        >
            {{ item.name }}
        </ElMenuItem>
    </ElMenu>
</template>

<script>
import { onBeforeMount, onMounted, reactive, ref } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { ElMenu } from "element-plus";

import axios from "axios";

export default {
    name: "BlogHeader",
    components: {
        ElMenu,
    },
    setup() {
        const store = useStore(),
            route = useRoute();
        /* data */
        // 顶部导航初始化
        let menu = reactive([]),
            defaultActive = ref();

        /* methods */
        const changeHeader = (item) => {
            store.commit("changeShowNavList", menu[item.index - 1].showNavList);
        };

        // 生命周期钩子
        onBeforeMount(() => {
            let matchRoute = () => {
                axios({
                    method: "get",
                    url: "/blogserve/nav/header",
                }).then(
                    (res) => {
                        try {
                            let newMenu = reactive(res.data);
                            Object.assign(menu, newMenu);
                            if (route.path !== "/")
                                newMenu.forEach((element) => {
                                    if (element.to == route.path) {
                                        defaultActive.value = element.index;

                                        console.log(element.showNavList);
                                        store.commit(
                                            "changeShowNavList",
                                            element.showNavList
                                        );
                                    }
                                });
							else 
								defaultActive.value ="1";
                        } catch (error) {
                            console.error(error);
                        }
                    },
                    (err) => {
                        console.error(err);
                    }
                );
            };
            matchRoute();
        });
        onMounted(() => {});

        return {
            // data
            menu,
            defaultActive,

            // method
            changeHeader,
        };
    },
};
</script>

<style>
</style>
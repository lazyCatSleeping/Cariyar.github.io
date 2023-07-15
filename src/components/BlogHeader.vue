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
        >
            {{ item.name }}
        </ElMenuItem>
    </ElMenu>
</template>

<script>
import { onBeforeMount, onMounted, reactive, ref,  } from "vue";
import { ElMenu } from "element-plus";
import axios from "axios";
import store from '@/store';
export default {
    name: "BlogHeader",
    components: {
        ElMenu,
    },
    setup() {
        /* data */
        // 顶部导航初始化
        let menu = reactive([]),
            defaultActive = ref();

        /* methods */


        // 生命周期钩子
        onBeforeMount(() => {
            let matchRoute = () => {
                axios.get("/blogserve/nav/header").then(
                    (res) => {
                        let newMenu = reactive(res.data);
                        Object.assign(menu, newMenu);
                        newMenu.forEach(element => {
                            if(element.to == history.state.current){
                                defaultActive.value = element.index;
                            }
                        });
                    }
                ).catch((err) => {
                    console.error(err);
                });
            };
            matchRoute();
        });
        onMounted(() => {
        });

        return {
            // data
            menu,
            defaultActive

            // method
        };
    },
};
</script>

<style>
</style>
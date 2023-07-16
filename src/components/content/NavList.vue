<template>
    <ElMenu class="el-menu-vertical-demo" :default-active="defaultActive">
        <div v-for="el in menu" :key="el.id">
            <ElMenuItem v-if="el.menu === undefined" :index="el.index">
                {{ el.name }}
            </ElMenuItem>
            <ElSubMenu v-else :index="el.index">
                <template #title>
                    <span>
                        {{ el.name }}
                    </span>
                </template>
                <ElMenuItemGroup>
                    <ElMenuItem
                        v-for="subEl in el.menu"
                        :key="subEl.id"
                        :index="subEl.index"
                    >
                        {{ subEl.name }}
                    </ElMenuItem>
                </ElMenuItemGroup>
            </ElSubMenu>
        </div>
    </ElMenu>
</template>

<script>
import { ref, reactive, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { ElMenu } from "element-plus";
import axios from "axios";
export default {
    name: "NavList",
    components: {
        ElMenu,
    },
    setup() {
        // data
        // 默认
        let defaultActive = ref();
        const menu = reactive([]),
            route = useRoute();

        // methods
        // 获取侧边导航栏的请求
        let getNavList = function () {
            if (route.path)
                axios({
                    method: "get",
                    url: "/blogserve/nav" + route.path,
                }).then(
                    (res) => {
                        try {
                            let newMenu = reactive(res.data);
                            // 将旧菜单清空
                            menu.length = 0;
                            // 将新数据的对象复制到menu中
                            Object.assign(menu, newMenu);
                            if (res.data.length != 0) {
                                defaultActive.value = res.data[0].menu
                                    ? "1-1"
                                    : "1";
                            }
                        } catch (error) {
							console.log(`promise: ${error}` ) 
						}
                    },
                    (err) => {
                        console.warn(err);
                    }
                );
        };

        onMounted(() => {
            // 获取侧边导航栏
            getNavList();
        });
        // 监听路由变化
        watch(
            () => route.path,
            () => {
                // 当路由变化时，重新加载侧边导航栏
                getNavList();
            }
        );

        return {
            // data
            defaultActive,
            menu,

            // methods
        };
    },
};
</script>

<style>
</style>
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
import { ref,reactive } from "vue";
import { ElMenu } from "element-plus";
import { useRouter } from "vue-router";
// import axios from "axios";
export default {
    name: "NavList",
    components: {
        ElMenu,
    },
    mounted() {
        let router = useRouter();
        console.log(router);
        // axios({
        //     method: "post",
        // });
    },
    data() {
        return {
            defaultActive: ref("1"),
            menu: reactive([
                {
                    name: "1",
                    id: 1,
                    index: "1",
                },
                {
                    name: "2",
                    id: 2,
                    index: "2",
                    menu: [
                        {
                            name: "2-1",
                            id: 21,
                            index: "2-1",
                        },
                        {
                            name: "2-2",
                            id: 22,
                            index: "2-2",
                        },
                    ],
                },
            ]),
        };
    },
};
</script>

<style>
</style>
<template>
    <!-- 
        该组件用于展示项目中所用的个人相关的技术、个人工作难点、工作成果等 
    -->
    <!-- 循环并显示项目详情信息，包括个人相关的技术、个人工作难点、工作成功 -->
    <div v-for="(d, i) in detail" :key="i" :id="i">
        <div>{{ d.title }}</div>
        <div v-for="c in d.children" :key="c.id" :id="c.id">
            <!-- 
                如果是Object类型，提取子标题和数组信息 
                如果不是Object类型，那么是String类型，直接显示即可
            -->
            <div v-if="c instanceof Object">{{ c.subTitle }}：{{ c.children }}</div>
            <div v-else>
                {{ c }}
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";
export default {
    name: "ProjectDetail",
    props: {
        // 获取传入的项目ID
        projectId: {
            type: Number,
            required: true,
        },
    },
    setup(props) {
        /* 初始化 */
        // 存放详情
        let detail = ref();

        /* 自定义函数 */
        // 获取项目详情
        let getProjectDetail = () => {
            axios({
                method: "get",
                url: "/blogserve/resume/projectDetail/" + props.projectId,
            }).then(
                (res) => {
                    console.log(res);
                    detail.value = res.data;
                },
                (err) => {
                    console.error(err);
                }
            );
        };

        /* 挂载后执行 */
        onMounted(() => {
            getProjectDetail();
        });

        return {
            detail,
        };
    },
};
</script>

<style></style>

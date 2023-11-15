<template>
    <!-- 该组件用于展示就职公司历程 -->
    {{ companyName }}
    <ul>
        <li v-for="detail in companyData" :key="detail.id" :id="detail.id">
            {{ detail.title }}：{{ detail.content }}
        </li>
    </ul>

    <project-info :companyId="companyId"></project-info>
</template>

<script>
import { onMounted, ref } from "vue";
import ProjectInfo from "./ProjectInfo.vue";
import axios from "axios";

export default {
    name: "CompanyDetail",
    components: {
        ProjectInfo,
    },
    props: {
        companyName: {
            type: String,
            required: true,
        },
        companyId: {
            type: Number,
            required: true,
        },
    },
    setup(props) {
        /* 初始化 */
        // 存放公司信息
        let companyData = ref();

        /* 自定义函数 */
        // 获取公司信息
        let getCompanyData = () => {
            axios({
                method: "get",
                url: "/blogserve/resume/response/" + props.companyId,
            }).then(
                (res) => {
                    companyData.value = res.data;
                },
                (err) => {
                    console.error(err);
                }
            );
        };

        /* 挂载后 */
        onMounted(() => {
            getCompanyData();
        });

        return {
            companyData,
        };
    },
};
</script>

<style>
</style>
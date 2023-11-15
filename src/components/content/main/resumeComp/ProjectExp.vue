<template>
    <!-- 
        该组件用于展示简历的任职公司、项目经验等
     -->
    <resume-title :resumeTitle="title"></resume-title>
    <div v-if="loadCompFlag">
        <!-- 请求完成后再加载CompanyDetail组件 -->
        <company-detail
            v-for="comp in company"
            :key="comp.id"
            :id="comp.id"
            :companyName="comp.name"
            :companyId="comp.id"
        ></company-detail>
    </div>
</template>

<script>
import { onMounted, reactive, ref } from "vue";
import axios from "axios";

import ResumeTitle from "./ResumeTitle.vue";
import CompanyDetail from "./CompanyDetail.vue";

export default {
    name: "ProjectExp",
    components: {
        ResumeTitle,
        CompanyDetail,
    },
    setup() {
        /* 初始化数据 */
        // 存放传入ResumeTitle的数据
        let title = ref();
        // 存放就职公司信息
        let company = reactive([]);
        // 是否挂载CompanyDetail的标志
        let loadCompFlag = ref(false);

        /* 自定义函数 */
        // 获取就职公司信息
        let getProjectExp = () => {
            // 发送请求并获取信息
            axios({
                method: "get",
                url: "/blogserve/resume/company",
            }).then(
                // 请求成功
                (res) => {
                    let data = res.data;
                    title.value = "就职公司";
                    Object.assign(company, reactive(data));
                    // 加载CompanyDetail组件
                    loadCompFlag.value = true;
                },
                // 请求失败
                (err) => {
                    console.error(err);
                }
            );
        };

        /* 挂载后执行函数 */
        onMounted(() => {
            getProjectExp();
        });

        return {
            title,
            company,
            loadCompFlag,
        };
    },
};
</script>

<style>
</style>
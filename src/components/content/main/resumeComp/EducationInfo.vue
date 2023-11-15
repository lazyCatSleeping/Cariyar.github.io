<template>
    <!-- 该组件为个人教育经历 -->
    <resume-title :resumeTitle="title"></resume-title>
    <div>
        <ul v-for="(edu, index) in eduArr" :key="index" :id="i">
            <li>{{ edu.startTime }} ~ {{ edu.endTime }}</li>
            <li>{{ edu.uni }}</li>
            <li>{{ edu.professional }}</li>
            <!-- <li>{{ edu.qualify }}</li> -->
            <!-- <li>{{ edu.degree }}</li> -->
        </ul>
    </div>
</template>

<script>
import { ref, onMounted, reactive } from "vue";

import axios from "axios";

import ResumeTitle from "./ResumeTitle.vue";

export default {
    name: "EducationInfo",
    components: {
        ResumeTitle,
    },
    setup() {
        /* 数据初始化 */
        // 标题
        let title = ref(),
        // 存放数据
            eduArr = reactive([]);

        /* 自定义函数 */
        // 获取教育经历
        let getEducationInfo = () => {
            axios({
                method: "get",
                url: "/blogserve/resume/education",
            }).then(
                (res) => {
                    let data = res.data;
                    Object.assign(eduArr, reactive(data.data));
                    title.value = data.title;
                },
                (err) => {
                    console.log(err);
                }
            );
        };

        /* 挂载后 */
        onMounted(() => {
            getEducationInfo();
        });

        return {
            title,
            eduArr,
        };
    },
};
</script>

<style></style>
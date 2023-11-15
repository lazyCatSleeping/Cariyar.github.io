<template>
    <!-- 
        该组件为项目的一些基本信息，包括：
        项目名、个人所扮演的工作角色、项目存续时间、项目描述
        引入项目详情——个人所做的工作
    -->
    <div v-for="p in projectData" :key="p.id" :id="p.id">
        <div class="project-title">{{ p.name }}</div>
        <div class="project-job">{{ p.job }}</div>
        <div class="project-time">{{ p.startTime }} ~ {{ p.endTime }}</div>
        <div class="project-description">{{ p.description }}</div>
        <div v-if="detailFlag">
            <project-detail :projectId="p.id"></project-detail>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { onMounted, ref } from "vue";
import ProjectDetail from "./ProjectDetail.vue";
export default {
    name: "ProjectInfo",
    components: {
        ProjectDetail,
    },
    props: {
        // 接收传入的companyId（公司id）并获取对应的项目
        companyId: {
            type: Number,
            required: true,
        },
    },
    setup(props) {
        /* 初始化数据资料 */
        // 用于判断是否请求完成的标记，以免组件ProjectDetail获取不到projectId
        let detailFlag = ref(false);
        // 存放项目信息以供显示
        let projectData = ref();

        /* 自定义函数 */
        // 根据companyId获取项目信息
        const getProjectInfo = () => {
            axios({
                method: "get",
                url: "/blogserve/resume/project/" + props.companyId,
            }).then(
                (res) => {
                    // 存放接收到的数据
                    projectData.value = res.data;
                    // 请求完成，加载ProjectDetail组件
                    detailFlag.value = true;
                },
                (err) => {
                    console.error(err);
                }
            );
        };

        /* 挂载后执行 */
        onMounted(() => {
            getProjectInfo();
        });
        // 挂载的数据
        return {
            projectData,
            detailFlag,

            onMounted,
        };
    },
};
</script>

<style>
</style>
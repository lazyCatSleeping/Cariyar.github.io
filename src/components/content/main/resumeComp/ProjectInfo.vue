<template>
    <div v-if="detailFlag">
        <div v-for="p in projectData" :key="p.id" :id="p.id">
            <div class="project-title">{{p.name}}</div>
            <div class="project-job">{{p.job}}</div>
            <div class="project-time">{{p.startTime}} ~ {{p.endTime}}</div>
            <div class="project-description">{{p.description}}</div>
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
        companyId: {
            type: Number,
            required: true,
        },
    },
    setup(props) {
        let detailFlag = ref(false);
        let projectData = ref();
        const getProjectInfo = () => {
            axios({
                method: "get",
                url: "/blogserve/resume/project/" + props.companyId,
            }).then(
                (res) => {
                    console.log(res);
                    projectData.value = res.data;
                    detailFlag.value = true;
                },
                (err) => {
                    console.error(err);
                }
            );
        };
        onMounted(() => {
            getProjectInfo();
        });
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
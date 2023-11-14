<template>
    <resume-title :resumeTitle="title"></resume-title>
    <div>
        <ul v-for="(edu, index) in eduArr" :key="index" :id="i">
            <li>{{ edu.time }}</li>
            <li>{{ edu.uni }}</li>
            <li>{{ edu.professional }}</li>
            <li>{{ edu.qualify }}</li>
            <li>{{ edu.degree }}</li>
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
        let title = ref(),
            eduArr = reactive([]);

        let getEducationInfo = () => {
            axios({
                method: "get",
                url: "/blogserve/resume/education",
            }).then(
                (res) => {
                    let data = res.data;
                    Object.assign(eduArr, reactive( data.data ));
                    title.value = data.title;
                },
                (err) => {
                    console.log(err);
                }
            );
        };

        onMounted(() => {
            getEducationInfo();
        });

        return {
            title,
            eduArr
        };
    },
};
</script>

<style>
</style>
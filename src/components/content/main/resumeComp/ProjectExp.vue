<template>
    <resume-title :resumeTitle="title"></resume-title>
    <company-detail v-for="(companyName, index) in company" :key="index" :id="index" :companyName="companyName"></company-detail>
</template>

<script>
import { onMounted, reactive, ref } from 'vue'
import axios from 'axios';

import ResumeTitle from './ResumeTitle.vue'
import CompanyDetail from './CompanyDetail.vue';

export default {
    name: "ProjectExp",
    components: {
        ResumeTitle,
        CompanyDetail
    },
    setup(){
        let title = ref("");
        let company = reactive({});
        let getProjectExp = () => {
            axios({
                method: "get",
                url: "/blogserve/resume/company"
            }).then(res => {
                let data = res.data;
                title.value = data.title;
                company = Object.assign(company, reactive(data.data));
            }, err => {
                console.error(err)
            })
        }

        onMounted(() => {
            getProjectExp();
        })

        return {
            title,
            company
        }
    }
}
</script>

<style>

</style>
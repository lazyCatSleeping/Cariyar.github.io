<template>
    <resume-title :resumeTitle="title"></resume-title>
    <div v-if="loadCompFlag">
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
        let title = ref();
        let company = reactive([]);
        let loadCompFlag = ref(false);
        let getProjectExp = async() => {
            await axios({
                method: "get",
                url: "/blogserve/resume/company",
            }).then(
                (res) => {
                    let data = res.data;
                    title.value = "任职公司";
                    Object.assign(company, reactive(data));
                    loadCompFlag.value = true;
                },
                (err) => {
                    console.error(err);
                }
            );
        };

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
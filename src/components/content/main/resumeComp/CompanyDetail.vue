<template>
    {{ companyName }}
    <ul>
        <li v-for="detail in companyData" :key="detail.id" :id="detail.id">
            {{detail.title}}：{{detail.content}}
        </li>
    </ul>

    <project-detail :companyId="companyId"></project-detail>
</template>

<script>
import { onMounted, ref } from "vue";
import ProjectDetail from "./ProjectDetail.vue";
import axios from "axios";

export default {
    name: "CompanyDetail",
    components: {
        ProjectDetail,
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
    setup(props){
        let companyData = ref();
        let getCompanyData = ()=>{
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
        }
        
        onMounted(() => {
            getCompanyData()
        })

        return {
            companyData
        }
    }
};
</script>

<style>
</style>
<template>
    <div v-for="(d, i) in detail" :key="i" :id="i">
        <div>{{ d.title }}</div>
        <div v-for="c in d.children" :key="c.id" :id="c.id">
            <div v-if="c instanceof Object">
                {{ c.subTitle }}：{{ c.children }}
            </div>
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
        projectId: {
            type: Number,
            required: true,
        },
    },
    setup(props) {
        let detail = ref();
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
        onMounted(() => {
            getProjectDetail();
        });

        return {
            detail,
        };
    },
};
</script>

<style>
</style>
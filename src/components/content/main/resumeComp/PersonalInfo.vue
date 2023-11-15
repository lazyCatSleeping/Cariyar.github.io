<template>
    <resume-title :resumeTitle="title"></resume-title>
    <div>
        <ul>
            <li>{{ name }}</li>
            <li>{{ age }}</li>
            <li>{{ phone }}</li>
            <li>{{ email }}</li>
        </ul>
        <ul>
            <li v-for="b in blog" :key="b.id">{{ b.name }}: <a href="{{b.url}}">{{ b.url }}</a></li>
        </ul>
    </div>
</template>

<script>
import { onMounted, ref } from "vue";

import axios from "axios";

import { ResumeTitle } from "./ResumeTitle";
export default {
    name: "PersonalInfo",
    components: {
        ResumeTitle,
    },
    setup() {
        let title = ref(),
            name = ref(),
            age = ref(),
            phone = ref(),
            email = ref(),
            blog = ref();

        let getPersonalInfo = async () => {
            await axios({
                method: "get",
                url: "/blogserve/resume/personalInfo",
            }).then(
                (res) => {
                    let data = res.data;

                    title.value = data.title;
                    name.value = data.name;
                    age.value = data.age;
                    phone.value = data.mobile;
                    email.value = data.email;
                    blog.value = data.blog;
                },
                (err) => {
                    console.log(err);
                }
            );
        };
        onMounted(() => {
            getPersonalInfo();
        });

        return {
            title,
            name,
            age,
            phone,
            email,
            blog,
        };
    },
};
</script>

<style>
</style>
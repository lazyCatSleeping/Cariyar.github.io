<template>
    <!-- 该组件为个人信息资料 -->
    <resume-title :resumeTitle="title"></resume-title>
    <div>
        <ul>
            <li>{{ name }}</li>
            <li>{{ age }}</li>
            <li>{{ phone }}</li>
            <li>{{ email }}</li>
        </ul>
        <!-- 博客地址 -->
        <ul>
            <li v-for="b in blog" :key="b.id">
                {{ b.name }}: <a href="{{b.url}}">{{ b.url }}</a>
            </li>
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
        /* 数据初始化 */
        // 标题
        let title = ref(),
        // 姓名
            name = ref(),
            // 年龄
            age = ref(),
            // 手机
            phone = ref(),
            // 电子邮箱
            email = ref(),
            // 博客
            blog = ref();

        /* 自定义函数 */
        // 获取个人信息
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
                    // 其实是对象数组，但是ref自己在内部会转为reactive
                    blog.value = data.blog;
                },
                (err) => {
                    console.log(err);
                }
            );
        };

        /* 挂载后执行 */
        onMounted(() => {
            getPersonalInfo();
        });

        /* 组件所需的数据及对应的数据绑定 */
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
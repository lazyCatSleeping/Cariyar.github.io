<template>
    <!-- 
        该组件用于标记简历页的标题
    -->
    <div>{{ resumeTitle }}</div>
</template>

<script>
export default {
    name: "ResumeTitle",
    props: {
        // 接收传入的标题并显示文字
        resumeTitle: {
            type: String,
            default: "",
        },
    },
};
</script>

<style>
</style>
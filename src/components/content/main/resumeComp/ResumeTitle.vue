<template>
    <div>{{resumeTitle}}
    </div>
</template>

<script>
export default {
    name: "ResumeTitle",
    props:{
        resumeTitle: {
            type: String,
            default: ""
        }
    }
}
</script>

<style>

</style>
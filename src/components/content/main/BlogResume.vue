<template>
    <div class="resume">
        <div class="resume-div">
            <personal-info></personal-info>
        </div>
        <div class="resume-div">
            <education-info></education-info>
        </div>
        <div class="resume-div">
            <project-exp></project-exp>
        </div>
    </div>
</template>

<script>
import PersonalInfo from "./resumeComp/PersonalInfo";
import EducationInfo from "./resumeComp/EducationInfo";
import ProjectExp from "./resumeComp/ProjectExp";

export default {
    name: "BlogResume",
    components:{
        PersonalInfo,
        EducationInfo,
        ProjectExp
    },
};
</script>

<style>
.resume-div {
    margin-top: 2em;
}
</style>
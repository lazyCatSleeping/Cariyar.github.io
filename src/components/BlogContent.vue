<template>
    <div class="blog-content">
        <div class="blog-nav-list" v-show="showNavList">
            <NavList />
        </div>
        <div class="blog-router-view">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import NavList from "./content/NavList";
export default {
    name: "BlogContent",
    components: {
        NavList,
    },
    data(){
        return {
            showNavList: true
        }
    },
    beforeRouteEnter(to, from, next){
        // let noNavList = ["/home","/"];
        console.log(to, from);

        next();

    }
};
</script>

<style>
.blog-content{
	display: flex;
}
.blog-nav-list {
    width: 30%;
}
.blog-router-view {
    width: 63%;
}
</style>
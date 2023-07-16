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
import { computed } from "vue";
import { useStore } from "vuex";
import NavList from "./content/NavList";

export default {
    name: "BlogContent",
    components: {
        NavList,
    },
    setup() {
        const store = useStore();
        const showNavList = computed(() => store.state.nav.showNavList);
        return {
            showNavList,
        };
    },
};
</script>

<style>
.blog-content {
    display: flex;
}
.blog-nav-list {
    width: 30%;
}
.blog-router-view {
    width: 100vw;
}
</style>
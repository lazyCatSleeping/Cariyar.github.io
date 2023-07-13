<template>
	<BlogHeader/>
	<BlogContent/>
	<BlogFooter/>
</template>

<script>
import BlogContent from "./components/BlogContent";
import BlogHeader from "./components/BlogHeader";
import BlogFooter from "./components/BlogFooter";

export default {
	name: "App",
	components: {
		BlogContent,
		BlogHeader,
		BlogFooter
	},
};
</script>

<style>
</style>

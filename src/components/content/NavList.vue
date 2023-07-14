<template>
	<ElMenu class="el-menu-vertical-demo" 
		:default-active="defaultActive"
		@open="handleOpen"
		@close="handleClose"
	>
		<div v-for="el in menu" :key="el.id">
			<ElMenuItem v-if="el.menu === undefined" :index="el.index">
				{{ el.name }}
			</ElMenuItem>
			<ElSubMenu v-else :index="el.index">
				<template #title>
					<span>
						{{ el.name }}
					</span>
				</template>
				<ElMenuItemGroup>
					<ElMenuItem
						v-for="subEl in el.menu"
						:key="subEl.id"
						:index="subEl.index"
					>
						{{ subEl.name }}
					</ElMenuItem>
				</ElMenuItemGroup>
			</ElSubMenu>
		</div>
	</ElMenu>
</template>

<script>
import { ref, reactive, onMounted } from "vue";
import { ElMenu } from "element-plus";
import axios from "axios";
export default {
	name: "NavList",
	components: {
		ElMenu,
	},
	setup() {
		// data
		let defaultActive = ref("1");
		const menu = reactive([]);
		
		// methods
		const handleOpen = (key, keyPath) => {
			console.log(key, keyPath);
		};
		const handleClose = (key, keyPath) => {
			console.log(key, keyPath);
		};

		onMounted(() => {
			let loc = history.state.current;
			axios({
				method: "get",
				url: "/blogserve/nav" + loc,
			}).then(
				(res) => {
					console.log(res.data);
					let newMenu = reactive(res.data);
					Object.assign(menu, newMenu);
				},
				(err) => {
					console.log(err);
				}
			);

		})
		
		return {
			// data
			defaultActive,
			menu,

			// methods
			handleOpen,
			handleClose
		}
	}
};
</script>

<style>
</style>
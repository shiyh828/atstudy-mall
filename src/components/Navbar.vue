<template>
	<div>
		<router-link to="/">首页</router-link>
		<router-link to="/login">您好！请登录</router-link>

	</div>
</template>

<script>
	import {
		mapState
	} from 'vuex'

	export default {
		computed: {
			// 将 仓库中的state状态数据 映射 到本地Vue实例中 computed 计算属性
			...mapState(["website"])
		}
	}
</script>

<style>
</style>

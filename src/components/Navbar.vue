<template>
	<div class="bg-gray">
		<div class="container py-1 px-2 text-xs d-flex align-items-center">
			<router-link to="/home" @click="nav_click(0)" :class="{'text-red':common.nav_index == 0,'text-muted':common.nav_index != 0}" 
				class="px-4 text-lg mr-auto text-decoration-none text-hover-red hand">
				学掌门商城
			</router-link>
			<router-link to="/login" @click="nav_click(1)" :class="{'text-red':common.nav_index == 1,'text-muted':common.nav_index != 1}"
				class="px-2 border-right-dark line-height-12 text-decoration-none text-hover-red">
				你好，请登录
			</router-link>
			<router-link to="/regist" @click="nav_click(2)" :class="{'text-red':common.nav_index == 2,'text-muted':common.nav_index != 2}"
				class="px-2 border-right-dark line-height-12 text-decoration-none text-hover-red">
				免费注册
			</router-link>
			<router-link to="/order" @click="nav_click(3)" :class="{'text-red':common.nav_index == 3,'text-muted':common.nav_index != 3}"
				class="px-2 border-right-dark line-height-12 text-decoration-none text-hover-red">
				我的订单
			</router-link>
			<router-link to="/vip" @click="nav_click(4)" :class="{'text-red':common.nav_index == 4,'text-muted':common.nav_index != 4}"
				class="px-2 border-right-dark line-height-12 text-decoration-none text-hover-red">
				我的会员
			</router-link>
			<router-link to="/address" @click="nav_click(5)" :class="{'text-red':common.nav_index == 5,'text-muted':common.nav_index != 5}"
				class="px-2 border-right-dark line-height-12 text-decoration-none text-hover-red">
				收货信息
			</router-link>
			<router-link to="/customer" @click="nav_click(6)" :class="{'text-red':common.nav_index == 6,'text-muted':common.nav_index != 6}"
				class="px-2 border-right-dark line-height-12 text-decoration-none text-hover-red">
				客户服务
			</router-link>
			<router-link to="/website" @click="nav_click(7)" :class="{'text-red':common.nav_index == 7,'text-muted':common.nav_index != 7}"
				class="px-2 border-right-dark line-height-12 text-decoration-none text-hover-red">
				网站导航
			</router-link>
			<router-link to="/atstudy" @click="nav_click(8)" :class="{'text-red':common.nav_index == 8,'text-muted':common.nav_index != 8}"
				class="px-2 text-decoration-none text-hover-red">
				手机学掌门
			</router-link>

		</div>

	</div>
</template>

<script>
	import {
		mapState
	} from 'vuex'

	export default {
		computed: {
			// 将 仓库中的state状态数据 映射 到本地Vue实例中 computed 计算属性
			...mapState(["common"])
		},
		methods:{
			nav_click(index){
				this.common.nav_index = index;
			}
		}
	}
</script>

<style>
</style>

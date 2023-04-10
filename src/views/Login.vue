<template>
	<div class="container d-flex">
		<div class="w-50 border-box p-5">
			<img :src="require('@/assets/' + 'login_bg.png' )" class="w-100 rounded-lg">
		</div>
		<div class="w-50 p-5 d-flex flex-column justify-content-center">
			<div class="text-center text-xl text-bolder text-muted my-3">客户登录</div>
			<input type="text" class="outline-none border-gray rounded my-3 py-2 px-4" placeholder="请输入手机号码"
				v-model="customer.username">
			<input type="password" class="outline-none border-gray rounded my-3 py-2 px-4" placeholder="请输入账户密码"
				v-model="customer.password">
			<button class="border-0 bg-red text-white hand py-2 rounded"
				@click="login()">登录</button>
		</div>
	</div>
	
</template>

<script>
	import {mapState,mapActions} from 'vuex'
	
	export default{
		computed : {
			...mapState(['customer'])
		},
		methods : {
			...mapActions({
				'login':'customer/user_login'
			})
		}
	}
</script>


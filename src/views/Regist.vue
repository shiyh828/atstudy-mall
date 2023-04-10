<template>
 <div class="container d-flex">
 	<div class="w-50 border-box p-5">
 		<img :src="require('@/assets/' + 'login_bg.png' )" class="w-100 rounded-lg">
 	</div>
 	<div class="w-50 p-5 d-flex flex-column justify-content-between">
 		<div class="text-center text-xl text-bolder text-muted">注册新用户</div>
 		<input type="text" class="outline-none border-gray rounded py-2 px-4" placeholder="请输入手机号码"
 			v-model="customer.user_phone">
 		<input type="password" class="outline-none border-gray rounded py-2 px-4" placeholder="请输入账户密码"
 			v-model="customer.user_password">
 		<input type="password" class="outline-none border-gray rounded py-2 px-4" placeholder="请再次确认密码"
 			v-model="customer.check_user_password">
 		<input type="text" class="outline-none border-gray rounded py-2 px-4" placeholder="请输入用户昵称"
 			v-model="customer.user_name">
 
 		<button class="border-0 bg-red text-white hand py-2 rounded"
 			@click="regist()">立即注册</button>
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
				'regist' : 'customer/user_regist'
			})
		}
	}
</script>

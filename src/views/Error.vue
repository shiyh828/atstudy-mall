<template>
	<div class="container d-flex my-4 justify-content-center align-items-center">
		<div class="text-center text-bolder text-muted mr-4">失败：{{customer.errInfo}}</div>
		<router-link to="/login" class="text-decoration-none bg-red text-white py-2 px-4 border-0 rounded">登录</router-link>
	</div>

</template>

<script>
	import {mapState} from 'vuex'
	
	export default{
		computed : {
			...mapState(['customer'])
		}
	}
</script>

<style>
</style>

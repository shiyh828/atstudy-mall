<template>
	<div class="container py-5">
		<div class="d-flex flex-wrap">
			<!--一个收货信息 -->
			<template v-if="customer.addressList.length > 0">
				<Address
					v-for="addr of customer.addressList"
					:key="'addr'+addr.uaddr_id"
					:data="addr">
					
				</Address>
			</template>
			
			<!-- 添加框 -->
			<div v-if="!customer.isAddAddress" class="w-40 box-shadow rounded p-4 mb-4 ml-3 text-center">
				<div class="border-light" style="height:160px;font-size: 6rem;"
					@click="isAddAddress()">
					+
				</div>
			</div>
			<div v-if="customer.isAddAddress" class="w-40 box-shadow rounded p-4 mb-4 ml-3 text-center">
				<AddAdress></AddAdress>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapState,mapActions,mapMutations} from 'vuex'
	import AddAdress from '../components/AddAdress.vue'
	import Address from '../components/Address.vue'
	export default{
		
		computed : {
			...mapState(['customer'])
		},
		methods : {
			...mapMutations({
				'isAddAddress':'customer/is_add_address',//点击加号
				
			}),
			...mapActions({
				'login':'customer/user_login',
				'getUserAddress':'customer/get_user_address',
				'deleteUserAddress':'customer/delete_user_address',
				'updateUserAddress':'customer/update_user_address'
			}),
			
		},
		mounted(){
			this.getUserAddress();
		},
		components:{
			AddAdress,
			Address
		}
	}
</script>

<style>
</style>

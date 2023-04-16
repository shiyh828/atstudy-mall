<template>
	<div class="container py-5">
		<div class="d-flex flex-wrap" v-if="customer.addressList.length > 0">
			<!--一个收货信息 -->
			
			<div class="w-40 box-shadow rounded p-4 mb-4 ml-3"
				v-for="addr of customer.addressList"
				:key="'addr'+addr.uaddr_id"
				:class="{'box-shadow-red':addr.uaddr_isdefault == 0}">
				<!-- 为0是 默认地址 -->
				<div class="d-flex justify-content-between text-md text-bold ">
					<div class="text-secondary">
						{{addr.uaddr_name}}<span class="pl-2">{{addr.uaddr_province}}</span>
					</div>
					<!-- 删除按钮  -->
					<div class="text-muted hand" @click="deleteUserAddress(addr.uaddr_id)">
						×
					</div>
				</div>
				
				<div class="pt-4 d-flex text-sm">
					<div class="w-15 text-muted" align="right">
						收货人：
					</div>
					<div>
						{{addr.uaddr_name}}
					</div>
				</div>
				<div class="pt-3 d-flex text-sm">
					<div class="w-15 text-muted" align="right">
						所在地区：
					</div>
					<div>
						{{addr.uaddr_province}}{{addr.uaddr_city}}{{addr.uaddr_district}}
					</div>
				</div>
				<div class="pt-3 d-flex text-sm">
					<div class="w-15 text-muted" align="right">
						地址：
					</div>
					<div class="w-70">
						{{addr.uaddr_address}}
					</div>
					<div class="w-15 text-muted hand" align="right"
						@click="updateUserAddress(addr)">
						编辑
					</div>
				</div>
				<div class="pt-3 d-flex text-sm">
					<div class="w-15 text-muted" align="right">
						手机号：
					</div>
					<div  class="w-70">
						{{addr.uaddr_phone}}
					</div>
					<div class="w-15 text-muted hand" align="right">
						设为默认
					</div>
				</div>
			
			</div>
			<!-- 添加框 -->
			<div v-if="!customer.isAddAddress" class="w-40 box-shadow rounded p-4 mb-4 ml-3 text-center">
				<div class="border-light" style="height:160px;font-size: 6rem;"
					@click="addUserAddress()">
					+
				</div>
			</div>
			<div v-if="customer.isAddAddress" class="w-40 box-shadow rounded p-4 mb-4 ml-3 text-center">
				<AddAdress ></AddAdress>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapState,mapActions,mapMutations} from 'vuex'
	import AddAdress from '../components/AddAdress.vue'
	export default{
		data() {
			return {
				
			}
		},
		computed : {
			...mapState(['customer'])
		},
		methods : {
			...mapMutations({
				'addUserAddress':'customer/add_user_address'
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
		}
	}
</script>

<style>
</style>

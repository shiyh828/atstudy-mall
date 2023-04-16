<template>
	<div class="" style="height:150px;">
		<input class="w-99 border-gray py-1 mb-1 outline-none" v-model="customer.uaddr_name" type="text" placeholder="请输入收货人姓名"/>
		<input class="w-99 border-gray py-1 mb-2 outline-none" v-model="customer.uaddr_phone" type="text" placeholder="请输入收货人手机号码"/>
		<div class="d-flex mb-2">
			<select class="w-33 py-1 mr-1" v-model="customer.province">
				<option v-for="province of customer.chinaList" 
					:key="'province'+province.id" 
					:value="province">{{province.name}}</option>
			</select>
			<template v-if="customer.province != undefined">
			<select class="w-33 py-1 mr-1" v-model="customer.city">
				<option v-for="city of customer.province.children" 
					:key="'city'+city.id" 
					:value="city">{{city.name}}</option>
			</select>
			</template>
			<template v-if="customer.city != undefined">
				<select class="w-33 py-1" v-model="customer.district" align="right">
					<option v-for="district of customer.city.children"
						:key="'district' + district.id"
						:value="district">{{district.name}}</option>
				</select>
			</template>
		</div>
		<input class="w-99 border-gray py-1 mb-2 outline-none" v-model="customer.uaddr_address" type="text" placeholder="请输入收货人详细地址"/>
		<div align="right">
			<button class="py-1 px-4 mr-3 bg-green border-0 text-white rounded" @click="addAdress()" type="button">保存</button>
			<button class="py-1 px-4 bg-red border-0 text-white rounded" @click="addUserAddress()" type="button">取消</button>
		</div>
	
	</div>
	
</template>

<script>
	import {mapState,mapActions,mapMutations} from 'vuex'
	export default {
		computed:{
			...mapState(['customer'])
		},
		methods:{
			...mapMutations({
				'addUserAddress':'customer/add_user_address'
			}),
			...mapActions({
				'addAdress':'customer/add_address',
				'getChina':'customer/get_China'
			})
		},
		mounted() {
			this.getChina();
		}
	}
	
</script>

<style>
</style>

<template>
	<div class="w-40 box-shadow rounded p-4 mb-4 ml-3">
		<!-- 列表展示 -->
		<div v-if="data !== customer.edit_address">
			<!-- 为0是 默认地址 -->
			<div class="d-flex justify-content-between text-md text-bold ">
				<div class="text-secondary">
					{{data.uaddr_name}}<span class="pl-2">{{data.uaddr_province}}</span>
				</div>
				<!-- 删除按钮  -->
				<div class="text-muted hand" @click="deleteUserAddress(data.uaddr_id)">
					×
				</div>
			</div>
			
			<div class="pt-4 d-flex text-sm">
				<div class="w-15 text-muted" align="right">
					收货人：
				</div>
				<div>
					{{data.uaddr_name}}
				</div>
			</div>
			<div class="pt-3 d-flex text-sm">
				<div class="w-15 text-muted" align="right">
					所在地区：
				</div>
				<div>
					{{data.uaddr_province}}{{data.uaddr_city}}{{data.uaddr_district}}
				</div>
			</div>
			<div class="pt-3 d-flex text-sm">
				<div class="w-15 text-muted" align="right">
					地址：
				</div>
				<div class="w-70">
					{{data.uaddr_address}}
				</div>
				<div class="w-15 text-muted hand" align="right"
					@click="isUpdateAddr(data)">
					编辑
				</div>
			</div>
			<div class="pt-3 d-flex text-sm">
				<div class="w-15 text-muted" align="right">
					手机号：
				</div>
				<div  class="w-70">
					{{data.uaddr_phone}}
				</div>
				<div class="w-15 text-muted hand" align="right" @click="setDefaultAddress(data)">
					设为默认
				</div>
			</div>
						
		</div>
		<!-- 修改托盘 -->
		<div v-if="data === customer.edit_address">
			<input class="w-99 border-gray py-1 mb-1 outline-none" v-model="customer.edit_address.uaddr_name" type="text"/>
			<input class="w-99 border-gray py-1 mb-2 outline-none" v-model="customer.edit_address.uaddr_phone" type="text"/>
			<div class="d-flex mb-2">
				<select class="w-33 py-1 mr-1"
					v-model="customer.province">
					<option v-for="province of customer.chinaList" 
						:key="'province'+province.id" 
						:value="province">{{province.name}}</option>
				</select>
				<template v-if="customer.province != undefined">
					<select class="w-33 py-1 mr-1" 
						v-model="customer.city">
						<option v-for="city of customer.province.children" 
							:key="'city'+city.id" 
							:value="city">{{city.name}}</option>
					</select>
				</template>
				<template v-if="customer.city != undefined">
					<select class="w-33 py-1" align="right"
						v-model="customer.district">
						<option v-for="district of customer.city.children"
							:key="'district' + district.id"
							:value="district">{{district.name}}</option>
					</select>
				</template>	
			</div>
			
			<input class="w-99 border-gray py-1 mb-2 outline-none" v-model="customer.edit_address.uaddr_address" type="text"/>
			<div align="right">
				<button class="py-1 px-4 mr-3 bg-green border-0 text-white rounded" @click="okUpdateUserAddress()" type="button">保存修改</button>
				<button class="py-1 px-4 bg-red border-0 text-white rounded" @click="cancelUpdateAddress()" type="button">取消修改</button>
			</div>
		</div>
	</div>
	
</template>

<script>
	
	import {mapState,mapActions,mapMutations} from 'vuex'
	export default{
		props:['data'],
		computed : {
			...mapState(['customer'])
		},
		methods : {
			...mapMutations({
				'isUpdateAddr':'customer/is_update_address',//点击编辑
				'cancelUpdateAddress':'customer/cancel_update_address'//取消编辑
			}),
			...mapActions({
				'deleteUserAddress':'customer/delete_user_address',//删除 ×号按钮
				'okUpdateUserAddress':'customer/update_user_address',//保存修改
				'getChina':'customer/get_China',//获得行政区域
				'setDefaultAddress':'customer/set_default_address',//设置默认
			}),
			
			
		},
		mounted() {
			this.getChina();
		}
	}
</script>

<style>
</style>

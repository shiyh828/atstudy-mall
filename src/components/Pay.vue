<template>
	<div class="container" >
		<div class="text-bolder text-muted">填写并核对订单信息</div>
		<div class="my-3 p-3 rounded box-shadow">
			<div class="text-secondary text-bolder">收货人信息</div>
			<div class="d-flex mt-3 text-sm text-muted text-bolder" v-if="customer.default_address != undefined">
				<div class=' py-2 px-3 border-red rounded ml-3'>{{customer.default_address.uaddr_name}}</div>
				<div class=' py-2 px-3 rounded'>{{customer.default_address.uaddr_name}}</div>
				<div class=' py-2 px-3 rounded'>{{customer.default_address.uaddr_province}}</div>
				<div class=' py-2 px-3 rounded'>{{customer.default_address.uaddr_city}}</div>
				<div class=' py-2 px-3 rounded'>{{customer.default_address.uaddr_district}}</div>
				<div class=' py-2 px-3 rounded'>{{customer.default_address.uaddr_address}}</div>
				<div class=' py-2 px-3 rounded mr-auto'>{{customer.default_address.uaddr_phone}}</div>
				<div class=' py-2 px-3 rounded hand' @click="flag = !flag">修改收货信息</div>
			</div>
		</div>
		
		<div class=" d-flex flex-wrap" v-show="flag == true">
			<Address v-for="addr of customer.addressList"
				:key=" 'addr' + addr.uaddr_id " :data="addr"></Address>
			<div class="w-40 box-shadow rounded p-4 mb-4 ml-3 text-center">
				<AddAdress></AddAdress>
			</div>
			
		</div>
		
		
		
		<div class="my-3 p-3 rounded box-shadow"> 
			<div class="text-bolder text-secondary">配送清单</div>
			<div class="bg-gray py-2 mt-3 d-flex text-muted rounded text-center">
				<div class="w-60">商品</div>
				<div class="w-10">单价</div>
				<div class="w-10">数量</div>
				<div class="w-10">小计</div>
			</div>
			<!-- 一个商品 -->
			<template v-for="cart of order.cart_list"
				:key=" 'cart' + cart.car_id ">
				<div class="d-flex align-items-center my-2 text-center"	v-if="cart.cart_checked == 0">
					<div class="w-60 d-flex mt-4">
						<img :src=" 'http://localhost:8001/img/' + cart.cart_thumburl" class="w-15">
						<div class="d-flex flex-column text-sm justify-content-around">
							<div class="text-secondary">{{cart.cart_name}}</div>
							<div class="te-xs text-muted d-flex" v-if="cart.cart_sku != ''">
								<div class="mx-2" v-for="attr of JSON.parse(cart.cart_sku)" :key="attr.value_id">
									{{attr.value_name}}</div>
							</div>
						</div>
					</div>
					<div class="w-10 text-sm text-muted">￥{{cart.cart_price}}</div>
					<div class="w-10 text-sm text-muted">{{cart.cart_count}}</div>
					<div class="w-10 text-sm text-muted">￥{{cart.cart_price * cart.cart_count}}</div>
				</div>
			</template>
			
		</div>
		
		<div class="px-4 mb-4" v-if="order.cart_list.length !== 0">
			<div class="d-flex mt-5 text-xs text-muted text-right">
				<div class=" w-90">商品总金额:</div>
				<div class="w-10">￥{{getTotal()}}</div>
			</div>
			<div class="d-flex mt-2 text-xs text-muted text-right">
				<div class=" w-90">配送费:</div>
				<div class="w-10">￥0</div>
			</div>
			<div class="d-flex mt-2 text-xs text-muted text-right">
				<div class=" w-90">订单总金额:</div>
				<div class="w-10">￥{{getTotal()}}</div>
			</div>
			<div class="d-flex mt-2 text-xs text-muted text-right">
				<div class=" w-90">优惠金额:</div>
				<div class="w-10">￥0</div>
			</div>
			<div class="d-flex mt-4 text-xs text-muted text-right">
				<div class=" w-90 text-secondary text-bolder text-xl">应付总金额:</div>
				<div class="w-10 text-red text-bolder text-xl">￥{{getTotal()}}</div>
			</div>
			<div class="d-flex justify-content-end mt-4 text-xs text-muted text-right">
				<div class='mx-1'>配送至:</div>
				<div class='mx-1'>{{customer.default_address.uaddr_province}}</div>
				<div class='mx-1'>{{customer.default_address.uaddr_city}}</div>
				<div class='mx-1'>{{customer.default_address.uaddr_district}}</div>
				<div class='mx-1'>{{customer.default_address.uaddr_address}}</div>
				<div class="ml-4 mx-2">收货人:</div>
				<div class='mx-1'>{{customer.default_address.uaddr_name}}</div>
				<div class='mx-1'>{{customer.default_address.uaddr_phone}}</div>
			</div>
			<div align='right' class="mt-4">
				<button class="bg-red border-0 py-2 px-3 text-white rounded" @click="pay(),add_order()">提交订单</button>
			</div>
		</div>
	</div>
</template>

<script>
	
	import {mapState,mapActions} from 'vuex'
	import AddAdress from '../components/AddAdress.vue'
	import Address from '../components/Address.vue'

	
	export default{
		data(){
			return {
				flag : false
			}
		},
		
		computed:{
			...mapState(['customer','order'])
		},
		
		async mounted() {
			this.get_user_address()
			this.get_China()
			this.get_cart()
		},
		methods : {
			...mapActions({
				'get_China':'customer/get_China',
				'get_user_address':'customer/get_user_address',
				'get_cart' : 'order/get_cart',
				'add_order':"order/add_order"
			}),
			
			// 计算总价的方法
			getTotal() {
				
				console.log(`计算订单总价`)
				let count = 0 // 用于累加总价的变量
				// 遍历购物车中所有的数据
				for (let i = 0; i <= this.order.cart_list.length - 1; i++) {
			
					// 判断当前循环到的商品是否选中
					if (this.order.cart_list[i].cart_checked == 0) {
						count += (this.order.cart_list[i].cart_price * this.order.cart_list[i].cart_count)
					}
				}
				console.log( `订单总价：${count}` )
				return count
				
			},
			
			pay(){
				let total = this.getTotal()
				this.order.order_spuamount = total
				this.order.order_totalamount = total
				this.order.order_payamount = total			
			}
		},
		components : {
			Address,
			AddAdress
		}
	}
</script>

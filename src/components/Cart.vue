<template>
	<div class="container">


		<div class="text-bolder my-2 text-muted text-center text-xl" v-if="order.cart_list.length == 0 ">
			购物车里没有任何物品，请先添加购物车{{order.cart_list.length}}
		</div>


		<template v-if="order.cart_list.length > 0">
			<div class="bg-gray border-gray d-flex py-1 justify-content-between px-4 text-sm text-dark text-center">
				 <!-- :checked="isCheckedAll()" -->
				<input type="checkbox" class="w-5 hand" :checked="isCheckedAll()" >
				<div class="w-40">商品</div>
				<div class="w-10">单价</div>
				<div class='w-15'>数量</div>
				<div class='w-15'>小计</div>
				<div class='w-15'>操作</div>
			</div>
			<!-- 一个商品 -->
			<div class=" d-flex py-3 justify-content-between px-4 text-sm text-dark text-center align-items-center"
				v-for="order of order.cart_list" :key=" 'order' + order.car_id ">
				<div class="w-5 p-1">
					<input type="checkbox" class=" hand" :checked='order.cart_checked == 0' @change="update_cart(order)">
				</div>
				<div class="w-40 d-flex">
					<img :src='"http://localhost:8001/img/" + order.cart_thumburl ' class="w-15 mr-4">
					<div class="d-flex flex-column justify-content-between">
						<div>{{order.cart_name}}</div>
						<div class="te-xs text-muted d-flex" v-if="order.cart_sku != ''">
							<div class="mx-2" v-for="attr of JSON.parse(order.cart_sku)" :key="attr.value_id">
								{{attr.value_name}}</div>
						</div>
					</div>
				</div>
				<div class="w-10">￥{{order.cart_price}}</div>
				<div class="w-15">
					<input type="text" class="w-72 outline-none"  :value="order.cart_count" @change="count_change($event.srcElement.value,order)">
				</div>
				<div class='w-15'>￥{{order.cart_price * order.cart_count}}</div>
				<div class='w-15 hand' @click="delete_cart(order)">删除</div>
			</div>


			<!-- 购物车最下方面板 -->
			<div class="d-flex py-1 px-4 my-3 align-items-center">
				<input type="checkbox" class="mr-4" :checked="isCheckedAll()">
				<div class="hand text-muted text-sm mr-auto" @click="clear_cart()">清空购物车</div>
				<div class="text-muted text-sm">总价：</div>
				
				<div class="text-red text-bolder mr-4">￥{{getTotal()}}</div>
				
				<router-link to="/pay" class="py-2 text-decoration-none px-5 bg-red text-white border-0 rounded"
					>结算</router-link>
			</div>
		</template>
	</div>
</template>



<script>
import {mapState,mapActions} from 'vuex'
	
	export default {
		data() {
			return{
				
			}
		},
		computed: {
			...mapState(['order','customer'])
		},
		methods: {
			
			...mapActions({
				'getCart':'order/get_cart',//获取购物车订单
				'update_cart':'order/update_cart',
				'update_cart_count':'order/update_cart_count',
				'delete_cart':'order/delete_cart',
				'clear_cart':'order/clear_cart',
				'get_user_address_list':'customer/get_user_address'
			}),
			count_change(value,cart){
				let json = {}
				json.value = value
				json.cart = cart
				// 调用仓库中的改变商品数量的方法，将改变之后的值和要改变的商品的数据传过去
				this.update_cart_count(json)
				
			},
			
			// 是否要全部选·
			isCheckedAll() {
				let flag = true
				// 遍历购物车中所有的数据
				for (let i = 0; i <= this.order.cart_list.length - 1; i++) {
					// 判断当前循环到的商品是否选中
					if (this.order.cart_list[i].cart_checked == 1) {
						// 只要有一个商品不选中，就将标记变量改变
						flag = false
						break
					}
				}
				return flag
			},
			
			// 计算总价的方法
			getTotal() {
				let count = 0 // 用于累加总价的变量
				// 遍历购物车中所有的数据
				for (let i = 0; i <= this.order.cart_list.length - 1; i++) {
			
					// 判断当前循环到的商品是否选中
					if (this.order.cart_list[i].cart_checked == 0) {
						count += this.order.cart_list[i].cart_price * this.order.cart_list[i].cart_count
					}
				}
				return count
			}
			
		},
		async mounted() {
			this.getCart();
		}
	}
</script>
<style>
</style>
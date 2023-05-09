// 导入axios模块
import axios from 'axios'
import qs from 'qs'

import { getCart,updateCart,deleteCart,emptyCart} from "../../data/order.js"

export default {
	// 开启命名空间
	namespaced : true,
	state: {
		cart_list:[], //购物车列表
		cart_count : 0,
	},
	// 同步方法
	// 'update_cart':'order/update_cart',
	// 'update_cart_count':'order/update_cart_count',
	// 'delete_cart':'order/delete_cart',
	// 'clear_cart':'order/clear_cart',
	// 'get_user_address_list':'customer/get_user_address_list'
	mutations: {
		// 不耗时的方法都放到这里面
	},
	// 异步方法
	actions: {
		// 例如耗时的ajax请求都放在这里面
		//加入购物车
		add_cart_click(context){
			
			let json = {}
			json.cart_spuid = context.rootState.product.spuDetail.spu_id,
			json.cart_name = context.rootState.product.spuDetail.skuList[context.rootState.product.sku_index].sku_name,
			json.cart_skuid = context.rootState.product.spuDetail.skuList[context.rootState.product.sku_index].sku_id,
			json.cart_sku = context.rootState.product.spuDetail.skuList[context.rootState.product.sku_index].sku_spuattr,
			json.cart_thumburl = context.rootState.product.selected_img,
			json.cart_price = context.rootState.product.spuDetail.skuList[context.rootState.product.sku_index].sku_price,
			json.cart_count = context.rootState.product.order_count,
			json.cart_checked = 0
			
			console.log(qs.stringify(json))
			axios.create()({
				url: "/api/customer/cart",
				method: "POST",
				headers: {
					Authorization: localStorage.getItem("token")
				},
				data: qs.stringify(json)
			}).then(res => {
				if(res.data.httpcode == 200){
					alert(`订单添加成功`)
				}
			}, err => {
				alert(`请求失败！`)
				console.log(err)
			})
			
		},
		
		//获取购物车信息
		get_cart(context){
			getCart().then(res=>{
				if(res.data.httpcode == 200){
					context.state.cart_list = res.data.data
				}
			})
			
		},
		
		// 修改商品的选中状态			payload:当前点击的商品的信息
		update_cart(context,payload){
			updateCart({
				cart_count : payload.cart_count,
				cart_checked : 1 - payload.cart_checked,
				car_id : payload.car_id,
			}).then(response =>{
				// 如果数据库修改成功，还要修改仓库中的选中状态
				if(response.data.httpcode == 200){
					// 在当前仓库中的购物车数据中找到和传入进来的商品一致的数据，改变选中状态
					for(let i = 0; i <= context.state.cart_list.length - 1; i++){
						if(context.state.cart_list[i] == payload){
							context.state.cart_list[i].cart_checked = 1 - payload.cart_checked
						}
					}
				}
			})
		},
		
		// 修改商品的购买数量
		update_cart_count(context,payload){
			// 遍历仓库中的购物车中的商品数据，修改传过来的需要修改的商品的数量
			for(let i = 0; i <= context.state.cart_list.length - 1; i++){
				
				// 遍历到的商品的传过来的要修改的商品数据一样，说明这个商品就是我们要修改的商品
				if(context.state.cart_list[i] == payload.cart){
					context.state.cart_list[i].cart_count = parseInt(payload.value)
					// 修改数据库中当前商品的购买数量
					
				}
			}
		},
		
		// 删除购物车数据
		delete_cart(context,payload){
			let flag = window.confirm('确认删除该商品吗？')
			if(flag){
				deleteCart(payload.car_id).then(response =>{
					// 判断删除是否成功
					if(response.data.httpcode == 200){
						// 将仓库中的这个数据也删除掉
						for(let i = 0; i <= context.state.cart_list.length - 1; i++){
							// 如果遍历到的商品的数据和传过来的要删除的商品数据一致，那么在仓库中也要将其删除
							if(context.state.cart_list[i] == payload){
								context.state.cart_list.splice(i,1)
							}
						}
					}
				})
			}
			
		},
		
		// 清空购物车
		clear_cart(context){
			let flag = window.confirm(`确认清空?`)
			
			if(flag){
				emptyCart().then(response =>{
					// 如果请求成功，那么将仓库中的数据也全部删除
					if(response.data.httpcode == 200){
						context.state.cart_list = []
					}
				})
			}
		
		},
		
		
	},
}
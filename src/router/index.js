import {createRouter,createWebHistory} from 'vue-router'
//头部导航路由
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Regist from '../views/Regist.vue'
import Order from '../views/Order.vue'
import Vip from '../views/Vip.vue'
import Address from '../views/Address.vue'
import Customer from '../views/Customer.vue'
import Website from '../views/Website.vue'
import Atstudy from '../views/Atstudy.vue'
import Error from '../views/Error.vue'


// 跳转路由
import SpuList from '../views/SpuList.vue'
import SpuDet from  '../views/SpuDet.vue'

import Cart from '../components/Cart.vue'
import Pay from '../components/Pay.vue'

const routes = [{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/home',
		redirect: '/',//重定向到 home，点击图片跳到首页home===/home
		
	},
	{
		path: '/login',
		name: 'Login',
		component: Login
	},
	{
		path: '/regist',
		name: 'Regist',
		component: Regist
	},
	{
		path: '/order',
		name: 'Order',
		component: Order
	},
	{
		path: '/vip',
		name: 'Vip',
		component: Vip
	},
	{
		path: '/address',
		name: 'Address',
		component: Address
	},
	{
		path: '/customer',
		name: 'Customer',
		component: Customer
	},
	{
		path: '/website',
		name: 'Website',
		component: Website
	},
	{
		path: '/atstudy',
		name: 'Atstudy',
		component: Atstudy
	},
	{
		path: '/spulist',
		name: 'SpuList',
		component: SpuList
	},
	{
		path: '/spudet',
		name: 'SpuDet',
		component: SpuDet
	},
	{
		path: '/error',
		name: 'Error',
		component: Error
	},
	{
		path: '/cart',
		name: 'Cart',
		component: Cart
	},
	{
		path: '/pay',
		name: 'Pay',
		component: Pay
	},
	
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router

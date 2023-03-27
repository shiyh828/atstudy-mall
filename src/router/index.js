import {createRouter,createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Regist from '../views/Regist.vue'
import Order from '../views/Order.vue'
import Vip from '../views/Vip.vue'
import Address from '../views/Address.vue'
import Customer from '../views/Customer.vue'
import Website from '../views/Website.vue'
import Atstudy from '../views/Atstudy.vue'

const routes = [{
		path: '/',
		name: 'Home',
		component: Home
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
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router

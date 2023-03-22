// 订单服务 业务模块

import {
	get,post,put,patch,delete
} from '@/utils/request.js'


// 资源路径

const RESOURCE_CART = 'customer/cart'
const RESOURCE_ORDER = 'customer/order'

export const addCart = data => post(RESOURCE_CART,data)

export const updateCart = data => put(RESOURCE_CART,data)

export const deleteCart = id => del(RESOURCE_CART,id)

export const clearCart = () => del(RESOURCE_CART)

export const getCart = () => get(RESOURCE_CART)

export const addOrder = data => post(RESOURCE_ORDER,data)

export const updateOrder = data => patch(RESOURCE_ORDER,data)

export const getOrder = id => get(RESOURCE_CART,id)

export const getOrderList = data => get(RESOURCE_CART,data)
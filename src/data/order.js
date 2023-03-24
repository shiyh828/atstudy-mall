/*  订单服务 业务 模块  */

// 从 utils/request.js 中 导入 get\post\put\patch\del 方法
import {get,post,put,del,patch} from '@/utils/request.js'

// 资源路径
// 购物车 的 资源路径
const RESOURCE_CART = "customer/cart"
// 订单 的 资源路径
const RESOURCE_ORDER = "customer/order"

// 导出 模块中的 每一个 api 接口方法
// 添加购物车
export const addCart = data => post( RESOURCE_CART , data )
// 修改购物车
export const updateCart = data => put( RESOURCE_CART , data )
// 删除购物车
export const deleteCart = id => del( RESOURCE_CART + "/" + id )
// 清空购物车
export const emptyCart = () => del( RESOURCE_CART )
// 查询购物车
export const getCart = () => get( RESOURCE_CART )
// 添加订单
export const addOrder = data => post( RESOURCE_ORDER , data )
// 修改订单
export const updateOrder = data => patch( RESOURCE_ORDER , data )
// 查询单个订单信息
export const getOrder = id => get( RESOURCE_ORDER + "/" + id )
// 查询订单列表
export const getOrderList = () => get( RESOURCE_ORDER )
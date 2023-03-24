/*  客户服务 业务 模块  */

// 从 utils/request.js 中 导入 get\post\put\patch\del 方法
import {get,post,put,del} from '@/utils/request.js'

// 资源路径
// 客户收货信息 的 资源路径
const RESOURCE_USER_ADDRESS = "customer/useraddress"
// 中国行政地区 的 资源路径
const RESOURCE_CHINA = "china"
// 客户注册 的 资源路径
const RESOURCE_REGIST = "regist"
// 客户的登录 的 资源路径
const RESOURCE_LOGIN = "login"
// 客户的信息 的 资源路径
const RESOURCE_USER = "customer/user"

// 导出 模块中的 每一个 api 接口方法

// 添加客户收货信息的方法
export const addUserAddress = data => post( RESOURCE_USER_ADDRESS , data )

// 修改客户收货信息的方法
export const updateUserAddress = data => put( RESOURCE_USER_ADDRESS , data )

// 删除客户收货信息的方法
export const deleteUserAddress = id => del( RESOURCE_USER_ADDRESS + "/" + id )

// 查询客户收货信息的方法
export const getUserAddress = () => get( RESOURCE_USER_ADDRESS )

// 查询行政地区列表
export const getChina = data => get( RESOURCE_CHINA , data )

// 客户注册
export const regist = data => post( RESOURCE_REGIST , data )

// 客户登录
export const login = data => post( RESOURCE_LOGIN , data )

// 获取客户信息
export const getUserInfo = () => get( RESOURCE_USER )
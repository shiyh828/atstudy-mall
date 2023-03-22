// 产品服务 业务模块

// 从utils/request.js  导入封装好的get请求
import {
	get
} from '@/utils/request.js'


// 资源路径
// 产品品牌的资源路径
const RESOURCE_BRAND = 'brand'
// 产品分类的资源路径
const RESOURCE_CATEGORY = 'category'
// 产品参数的资源路径
const RESOURCE_ATTR = 'attr'
// 产品的Spu的资源路径
const RESOURCE_SPU = 'spu'



// 导出产品模块中的 每一个api接口方法
// 查询品牌的方法
// export const getBrand = data => get(RESOURCE_BRAND, data)

export const getBrand = function(data){
	return get(RESOURCE_BRAND,data)
}

// 查询分类的方法
export const getCategoryList = data => get(RESOURCE_CATEGORY, data)
// 查询单个分类的方法
export const getCategory = id => get(RESOURCE_CATEGORY, id)
// 查询商品属性的方法
export const getAttrList = data => get(RESOURCE_ATTR, data)
// 查询单个商品Spu
export const getSpu = id => get(RESOURCE_SPU, id)
// 查询商品列表
export const getSpuList = data => get(RESOURCE_SPU, data)

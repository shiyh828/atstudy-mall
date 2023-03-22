// axios 发送ajax请求的封装


// 导入axios模块
import axios from 'axios'

// 导入qs组件
import qs from 'qs'

// 导入路由
import router from '@/router'


// 配置axios
const request = axios.create({
	// 设置基础的url路径
	baseURL : "/api/",
	
	// 对请求参数 做统一的预先处理   适用 POST\PUT\PATCH\DELETE
	transformRequest(data){
		// 使用qs 组件 进行参数格式化
		return qs.stringify(data)
	}
})


// 配置请求拦截器
request.interceptors.request.use( config =>{
	// 发送请求的时候，再请求头中添加上token
	config.headers.Authorization = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNCIsImV4cCI6MTY3NzY1NzM3MiwiaWF0IjoxNjc3NjU1OTMyfQ.kvrw4U30_pdF2ou4wJyf3lUELudXRXbrlvWhgMq9bbs'
	// 返回配置对象
	return config
} )

// 配置响应拦截器
request.interceptors.response.use( reponse =>{
	// 根据响应回来的状态码 进行统一的业务操作
	switch(reponse.data.httpcode){
		// 401 用户未登录
		case 401 : router.push( {path : "/error",query: { message: "用户未登录" }} );break;
		// 402 登录身份失效
		case 402 : router.push( {path : "/error",query : { message : "登录身份失效了，请重新登录!" }} );break;
		// 403 没有访问权限
		case 403 : router.push( {path : "/error",query : { message : "没有访问权限!" }} );break;
	}
	return reponse
	
} )

// 分别到处get post patch put delete 5种请求方式

// get方法
/**
 * @param {String} resource_url 要访问的资源路径  
 * @param {JSON} data 请求携带的参数
 */
export const get = ( resource_url , data = {} )=>{
    return request({
        url : resource_url,
        method : "GET",
        params : data
    })
}

// post方法
export const post = ( resource_url , data = {} )=>{
    return request({
        url : resource_url,
        method : "POST",
        params : data
    })
}

export const put = ( resource_url , data = {} )=>{
    return request({
        url : resource_url,
        method : "PUT",
        params : data
    })
}

export const patch = ( resource_url , data = {} )=>{
    return request({
        url : resource_url,
        method : "PATCH",
        params : data
    })
}

export const del = ( resource_url , data = {} )=>{
    return request({
        url : resource_url,
        method : "DELETE",
        params : data
    })
}
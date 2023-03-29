import {
	getCategoryList,
	getCategory,
	getAttrList,
	getSpuList,
} from '../../data/product.js'

export default {
	// 开启命名空间
	namespaced: true,
	state: {
		category_list: [],
		selected_category_big:undefined,//划过一级菜单时所选择的category
		selected_category_small:undefined,//点击三级分类 
		selected_attr_list:undefined,//选中三级分类后跳转页面的三级分类属性列表
	},
	// 同步方法
	mutations: {
		// 不耗时的方法都放到这里面
		// 划过一级菜单时所显示的二级三级菜单面板
		big_cate_hover(context,payload){
			context.selected_category_big = payload;	
		},
		// 三级分类点击
		
		small_category_click(context,payload){
			context.selected_category_small = payload
			console.log("selected_category_small",context.selected_category_small)
			
			
		},
		
	},
	// 异步方法
	actions: {
		// 例如耗时的ajax请求都放在这里面
		// 轮播左边一级二级三级菜单展示
		get_category_list(context) {
			getCategoryList({pid:""})
			.then(response => {
				console.log('category_list_response', response.data.data);
				context.state.category_list = response.data.data;
			})		
		},
		// get_Attr_List
		get_Attr_List(context){
			if(context.state.selected_category_small != undefined){
				getAttrList({cate_id:context.state.selected_category_small.cate_id})
				.then(response => {
					console.log('get_Attr_List', response.data.data);
					context.state.selected_attr_list = response.data.data
				})
			}
		},
		// get_Attr_List
		get_Spu_List(){
			getSpuList()
			.then(response => {
				console.log('get_Spu_List', response.data.data);
				
			})	
		},
		
		// getCategory：查询单个分类的方法
		get_category(context,payload){
			console.log("context",context)
			console.log("payload",payload)
			
			getCategory({id:payload})
			.then(response => {
				console.log('get_category_response', response.data.data);
				// context.state.category_list = response.data.data;
			})		
		}
	},
}

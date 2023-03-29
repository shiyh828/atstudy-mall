import {
	getCategoryList,
} from '../../data/product.js'

export default {
	// 开启命名空间
	namespaced: true,
	state: {
		category_list: [],
		selected_category_big:undefined,//划过一级菜单时所选择的category
	},
	// 同步方法
	mutations: {
		// 不耗时的方法都放到这里面
		// 划过一级菜单时所显示的二级三级菜单面板
		big_cate_hover(context,payload){
			context.selected_category_big = payload;	
		}
		
	},
	// 异步方法
	actions: {
		// 例如耗时的ajax请求都放在这里面
		// 轮播左边一级二级三级菜单展示
		get_category_list(context) {
			getCategoryList({pid:""})
			.then(response => {
				console.log('response', response.data.data);
				context.state.category_list = response.data.data;
			})		
		},
		
		// 
	},
}

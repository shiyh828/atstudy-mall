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
		// index
		category_list: [],
		selected_category_big:undefined,//划过一级菜单时所选择的category
		//spuList
		selected_category_small:undefined,//点击三级分类 
		selected_category_list:[],//商品分类信息列表存储
		
		attr_list:[],//选中三级分类后跳转页面的三级分类的属性列表
		selected_attr_list:[],//选择的筛选属性
		selected_attr_str:'',//选中此三级属性的商品属性串
		
		
		// spu展示列表
		spu_list:[],//商品列表
		start:0,//商品列表起始
		length:15,//获取的商品列表数目
		
	},
	// 同步方法
	mutations: {
		// 不耗时的方法都放到这里面
		//Index 划过一级菜单时所显示的二级三级菜单面板
		big_cate_hover(context,payload){
			context.selected_category_big = payload;	
		},
		//Index 三级分类点击
		small_category_click(context,payload){
			context.selected_category_small = payload;
			// 重新调用获取商品的方法
			this.dispatch('product/get_Spu_List');
		},
		//SpuList  点击属性列表筛选 
		attr_click(context,payload){
			context.spu_list = [];//先清空下面的商品列表
			context.selected_attr_str = '';// 每次点击先将之前筛选属性值置空
			
			// 将点击的筛选的属性放到所选中的筛选属性数组对应的索引位置
			context.selected_attr_list[payload.index] = payload.attr
			for (let attr of context.selected_attr_list) {
				if (attr != undefined) {
					context.selected_attr_str += attr.id + ','
				}
			}
			context.selected_attr_str = context.selected_attr_str.substring(0, context.selected_attr_str.length - 1)
			console.log(context.selected_attr_str)
			// 重新调用获取商品的方法   
			this.dispatch('product/get_Spu_List')	
			
		}	
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
			
			getAttrList({
				'cate_id':context.state.selected_category_small == undefined ?  null : context.state.selected_category_small.cate_id,
				'key_issku': 0,
				'key_ishigh': 0
			}).then(response => {
				context.state.attr_list = [];//每次点击进入后先清空商品属性列表
				context.state.selected_attr_list = [];//先清空筛选属性
				
				context.state.attr_list = response.data.data;
				
				for (let i = 0; i <= context.state.attr_list.length-1; i++) {
					context.state.selected_attr_list.push(undefined)
				}
				
				console.log('get_Attr_List',context.state.attr_list)
			})	
		},
		
		// get_Spu_List
		get_Spu_List(context){
			
			getSpuList({
				spu_name: context.state.keyWord == '' ? '' : context.state.keyWord, //商品名称
				spu_title: '', //商品标题
				spu_status: 1, //商品状态（1：上架，0：下架）
				cate_id: context.state.selected_category_small == undefined ?  null : context.state.selected_category_small.cate_id, //所属分类编号(三级)
				valueList: context.state.selected_attr_str, //商品属性值列表
				start: context.state.start, //查询起始记录索引（分页）0
				length: context.state.length //查询记录数量（分页）10
										
			}).then(response => {
				context.state.spu_list = [];  //先清空商品列表
				
				console.log('get_Spu_List',response.data)
				//商品列表展示
				context.state.spu_list =response.data.data;
				//商品分类信息
				if(context.state.selected_category_list.length == 0){
					context.state.selected_category_list = response.data.categoryList;
				}
				
			})	
		},
		
		// getCategory：查询单个分类的方法
		get_category(context,payload){
			console.log("context",context)
			console.log("payload",payload)
			
			getCategory({id:payload}).then(response => {
				console.log('get_category_response', response.data.data);
				context.state.category_list = response.data.data;
			})		
		}
	},
}

<template>
	<!-- 商品列表页 -->
	<!-- <h2 v-if="product.selected_category_small != undefined">
		商品分类 ：{{product.selected_category_small.cate_name}}
	</h2> -->
	<div>
		<div class="container box-shadow rounded text-muted text-sm py-4"  
			v-if="product.selected_category_small != undefined">
				<div class="w-100 d-flex py-1">
					<div class="w-15" align="right">
						商品分类：
					</div>
					<div class="w-85">
						<span class="pl-3">全部</span>
						<span class="pl-3 text-red">{{product.selected_category_small.cate_name}}</span>
					</div>
				</div>
				<div class="w-100 d-flex py-1"
					v-for="attr of product.selected_attr_list"
					:key="'attr'+attr.key_id">
					<div class="w-15" align="right">
						{{attr.key_name}}：
					</div>
					<div class="w-85">
						<span class="pl-3 text-red">全部</span>
						<span class="pl-3"
							v-for="spuAttr of attr.spuAttrValueList"
							:key="'spuAttr'+spuAttr.id">{{spuAttr.value_name}}</span>
					</div>
				</div>
			
		</div>
		
	</div>
</template>

<script>
	import {mapState, mapActions} from 'vuex'
	
	export default {
		data() {
			return{
				// selected_cate:undefined,//当不稳定时可存在localStorage里面
			}
		},
		computed:{
			...mapState(['product'])
		},
		methods:{
			...mapActions({
				'getAttrList':'product/get_Attr_List',
				'getSpuList':'product/get_Spu_List',
			})
		},
		mounted(){
			this.getAttrList()
			if(this.product.selected_category_small != undefined){
				this.getSpuList()
			}
			
		
		}
	}
</script>

<style>
</style>

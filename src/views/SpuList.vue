<template>
	<!-- 商品列表页 -->
	<div>
		<div class="container box-shadow rounded text-muted text-sm py-4">
			<div class="w-100 d-flex py-1">
				<div class="w-15" align="right">
					商品分类：
				</div>
				<div class="w-85">
					<span class="pl-3 hand" 
						@click="cateClicked(undefined)"
						:class="{'text-red':product.selected_category_small == undefined}" 
						>全部</span>
					<span class="pl-3 hand"
						v-for="cate of product.selected_category_list"
						:key="'cate' + cate.cate_id"
						:class="{'text-red':product.selected_category_small != undefined && product.selected_category_small.cate_id == cate.cate_id}"
						@click="cateClicked(cate)">{{cate.cate_name}}</span>	
						
				</div>
			</div>
			<div class="w-100 d-flex py-1" 
				v-for="(attr,index) of product.attr_list"
				:key="'attr'+attr.key_id">
				<div class="w-15" align="right">
					{{attr.key_name}}：
				</div>
				<div class="w-85">
					<span class="pl-3 hand" 
						@click="attrClicked({'index' : index,'attr' : undefined})"
						:class="{'text-red':product.selected_attr_list[index] == undefined}">
						全部</span>
					<span class="pl-3 hand" 
						v-for="spuAttr of attr.spuAttrValueList"
						:key="'spuAttr'+spuAttr.id"
						:class="{'text-red':product.selected_attr_list[index] == spuAttr}"
						@click="attrClicked({'index' : index,'attr' : spuAttr})">{{spuAttr.value_name}}</span>
				</div>
			</div>

		</div>
		<SpuList :data="product.spu_list"></SpuList>	
	</div>
</template>

<script>
	import {
		mapState,
		mapActions,
		mapMutations
	} from 'vuex'
	import SpuList from '../components/SpuList.vue'
	
	export default {
		data() {
			return {
				// selected_cate:undefined,//当不稳定时可存在localStorage里面
			}
		},
		computed: {
			...mapState(['product'])
		},
		methods: {
			...mapActions({
				'getAttrList': 'product/get_Attr_List',
				'getSpuList': 'product/get_Spu_List',	
			}),
			...mapMutations({
				'cateClicked':'product/small_category_click',
				'attrClicked':'product/attr_click',
			})
			
		},
		mounted() { 
			this.getAttrList()	//获取属性列表
			// this.product.selected_category_list = []
			if (this.product.selected_category_small != undefined) {
				this.getSpuList()	
			}else{
				this.$router.push("/")//没有点击获取数据跳回首页
			}
		},
		components: {
			SpuList
		},
	
	}
</script>

<style>
</style>

<template>
	<!-- 筛选块 -->
	<div class="container pt-5 d-flex">
		<div class="w-17">
			<router-link  to="/home" @click="clicked_img(0)">
				<img src="../assets/atstudy-logo.png" width="140">
			</router-link>
		</div>
		<div class="px-4 d-flex flex-column w-66">
			<div class="text-sm d-flex justify-content-center">
				<input class="px-3 py-2 border-red rounded-left outline-none" style="width:420px;" type="text"
					placeholder="商品名称、品牌、分类、规格属性" v-model="product.keyWord"/>
				<button class="px-3 bg-red border-red rounded-right text-white hand" type="button"
					@click="searchSpuBtn()">搜索</button>
				<button class="ml-5 px-5 bg-white border-gray rounded text-red hand" type="button">我的购物车</button>
			</div>
			<div class="text-xs p-2 d-flex">
				<div class="text-red pr-3">
					春日环游记
				</div>
				<div class="text-muted pr-3">
					iphone12
				</div>
				<div class="text-muted pr-3">
					小米
				</div>
				<div class="text-muted pr-3">
					榴莲尝鲜
				</div>
				<div class="text-muted pr-3">
					生鲜五折
				</div>
				<div class="text-muted pr-3">
					品质家电
				</div>
				<div class="text-muted pr-3">
					新品激光
				</div>
				<div class="text-muted pr-3">
					春茶
				</div>
				<div class="text-muted pr-3">
					正品农贸
				</div>
				<div class="text-muted pr-3">
					嗨9购了
				</div>
				<div class="text-muted pr-3">
					鱼人节好物
				</div>
			</div>
			<div class="py-3 d-flex">
				<div class="text-red pr-3">
					秒杀
				</div>
				<div class="text-muted pr-3">
					优惠券
				</div>
				<div class="text-muted pr-3">
					学掌门会员
				</div>
				<div class="text-muted pr-3">
					品牌闪购
				</div>
				<div class="text-muted pr-3">
					拍卖
				</div>
				<div class="text-muted pr-3">
					数码家电
				</div>
				<div class="text-muted pr-3">
					超市日用
				</div>
				<div class="text-muted pr-3">
					蔬果生鲜
				</div>
				<div class="text-muted pr-3">
					国际好货
				</div>
				<div class="text-muted pr-3">
					潮流服饰
				</div>
	
			</div>
		</div>
	</div>
	
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	
	export default {
		computed: {
			...mapState(['common','product'])
		},
		methods:{
			// 点击图片切换 路由 但是头部nav_index必须同步变化
			clicked_img(index){
				this.common.nav_index = index;
			},
			...mapMutations({
				'searchSpuBtn':'product/search_spu_list',
				
			})
		}
	}
</script>

<style>
</style>

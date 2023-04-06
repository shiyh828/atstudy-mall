<template>
	<div>

		<!-- 数据块  -->
		<div class="container mt-2 d-flex justify-content-between position-relative">
			<!-- 左边 -->
			<div class="w-17 p-4 rounded box-shadow border-box overflow-hidden" style="height: 460px;">
				<template v-if="product.category_list.length != 0">
					<div v-for="cate of product.category_list"
						:key="'cate'+cate.cate_id">
						<!-- 左边 -->
						<div class="text-xs text-muted pb-2 text-hover-red hand"  @mouseover="bigCateHover(cate)">
							{{cate.cate_name}}
						</div>
						<!-- 右边 -->
						<div class="position-absolute bg-white box-shadow" 
							style="left: 17%;top:0px;width: 780px;height: 462px;z-index: 5;"
							v-show="cate == product.selected_category_big">
							
							<div class="p-3"  v-if="product.selected_category_big != undefined">
								<div class="text-muted d-flex text-sm"
									v-for="mid of cate.children"
									:key="'mid'  + mid.cate_id">
									 <div class="w-10">
									 	{{mid.cate_name}}>
									 </div>
									<div class="d-flex flex-wrap w-90">
										<router-link to="/spulist"
											class="pl-2 pb-2 text-decoration-none text-muted text-hover-red hand"
											:class="{'text-red': product.selected_category_small == small}"
											v-for="small of mid.children"
											:key="'small'+small.cate_id"
											@click="smallCategoryClicked(small)">
											{{small.cate_name}}
										</router-link>
										
									</div>
									
								</div>
							</div>
													
							
						</div>
					</div>
				</template>
				
			</div>
			<div>
				
			</div>
			<!-- 轮播 -->
			<div class="w-63 mx-auto border-blue">
				<el-carousel trigger="click" height="460px" v-if="carouselList.length != 0">
					<el-carousel-item v-for="sr of carouselList" :key="'sr' + sr">
						<img :src="require('@/assets/carousel0'+ sr +'.jpg')" width="760"/>
					</el-carousel-item>

				</el-carousel>
			</div>
			<!-- 右边 -->
			<div class="w-17 d-flex flex-column justify-content-between">
				
				<img :src="require('@/assets/carousel-right01.jpg')" height="140">
				<img :src="require('@/assets/carousel-right02.jpg')" height="140">
				<img :src="require('@/assets/carousel-right03.jpg')" height="140">
			</div>


		</div>
		<!--商品数展示 -->
		<div class="container">
			<SpuList 
				v-for="(special_spu,index) of product.special_spu_list"
				:key="'special_spu'+index"
				:data="special_spu.data">{{special_spu.categoryList[0].cate_name}} 专场</SpuList>
		</div>
	</div>
</template>

<script>
	import {mapState,mapActions,mapMutations} from 'vuex'
	// import axios from 'axios'
	import SpuList from "../components/SpuList.vue"
	
	export default {
		data() {
			return {
				carouselList: [1, 2, 3, 4, 5],
			}
		},
		computed: {
			...mapState(['product'])
		},
		methods:{
			...mapActions({
				'getCategoryList': 'product/get_category_list',
				'getSpecialSpuList':'product/get_special_spulist'
			}),
			...mapMutations({
				'bigCateHover': 'product/big_cate_hover',
				'smallCategoryClicked':'product/small_category_click',
			}),
			
		},
		mounted() {
			this.getCategoryList();
			this.getSpecialSpuList();
			
			// axios.get('/api/brand?cate_id=1916')
			// .then(response=>{
			// 	console.log(response);
			// })
		},
		components:{
			SpuList,
		},	
		


	}
</script>

<style>
	.el-carousel__indicators--horizontal {
	    position: absolute;
		text-align: right;
	    right:-240px;
	    bottom: 10px;
	}
	.el-carousel__indicator--horizontal button {
	    width: 14px;
	    height: 14px;
	    background: gray;
	    border-radius: 50%;
	    opacity: 0.5;
	}
		 
	.el-carousel__indicator--horizontal.is-active button {
	    width: 14px;
	    height: 14px;
	    background: white;
	    opacity: 0.5;
	    border-radius: 50%;
	}	
	
	
</style>

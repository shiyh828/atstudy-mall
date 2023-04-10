<template>

	<div v-if="product.spuDetail.attrKeyList.length > 0" class="container d-flex justify-content-around">
		<div class="w-40">
			<img width="460" :src="'http://localhost:8001/img/'+ product.selected_img">
			<div class="d-flex justify-content-around align-items-center">
				<div class="text-xxl" @click="leftClick()">
					&lt;
				</div>
				<div class="overflow-hidden" style="width: 400px;">
					<div class="d-flex" :style="{ marginLeft : -100 * index +'px' }">
						<img width="84" class=" m-1 p-1"
							v-for="(img,imgInex) of  product.spuDetail.attrKeyList[0].attrValueList[product.color_index].value_images"
							:key="'img' + imgInex" :class="{'border-reded' : img == product.selected_img}"
							@click="imgClick(img)" :src="'http://localhost:8001/img/'+ img" />
					</div>

				</div>
				<div class="text-xxl" @click="rightClick()">
					&gt;
				</div>
			</div>
		</div>
		<div class="w-60">
			<div class="mt-4 pb-3 text-bolder text-secondary text-xl">{{product.spuDetail.skuList[product.sku_index].sku_name}}</div>
			<div class="d-flex align-items-center pb-3 text-bold">
				<span class=" text-red text-lg pr-2">现价:</span>
				<span class="text-red text-xxl pr-4">￥{{product.spuDetail.skuList[product.sku_index].sku_price}}</span>
				<span class="text-muted pr-2">原价:</span>
				<span class="text-muted text-lg pr-2" style="text-decoration: line-through;">￥{{product.spuDetail.skuList[product.sku_index].sku_originalprice}}</span>
			</div>
			<div class="pb-5 text-bold text-lg text-muted">
				<span class="pr-2">库存:</span>
				<span> {{product.spuDetail.skuList[product.sku_index].sku_quantity}}</span>
			</div>
			<!-- <div class="">
				{{product.spuDetail.attrKeyList[0]}}
			</div> -->
			<div class="pb-5 text-bold text-muted d-flex">
				<div class="pr-5 text-lg mr-5">颜色</div>
				<div class="d-flex" v-if="product.spuDetail.attrKeyList[0].attrValueList.length > 0">
					<div class="d-flex align-items-center mr-2 px-1 border-gray rounded"
						v-for="(color,col_index) of product.spuDetail.attrKeyList[0].attrValueList" :key="'color'+ color.value_id"
						:class="{'border-red' : col_index == product.color_index}"
						@click="colorClicked({'index':0,'value_index':col_index,'value_id':color.value_id})">
						
						<img height="40" :src="'http://localhost:8001/img/'+ color.value_images[0]" />
						<span class="px-1 text-sm">{{color.value_name}}</span>
					</div>
				</div>
			</div>
			
			<div class="pb-5 text-bold text-muted d-flex">
				<div class="pr-5 text-lg mr-5" style="width:50px">版本</div>
				<div class="d-flex">
					<div class="mr-2 p-2 border-gray text-sm rounded"
						v-for="(version,ver_index) of product.spuDetail.attrKeyList[1].attrValueList" :key="'version'+ version.value_id"
						:class="{'border-red' : ver_index == product.version_index}"
						@click="versionClicked({'index':1,'value_index':ver_index,'value_id':version.value_id})">
						{{version.value_name}}
					</div>
				</div>
			</div>
			
			<!--购买方式 :无-->
			<!-- <div class="pb-3 text-bold text-muted d-flex">
				<div class="text-lg mr-5">购买方式</div>
				<div class="d-flex flex-wrap">
					<div class="mr-2 p-2 border-gray text-sm rounded"
						v-for="att of product.spuDetail.attrKeyList[1].attrValueList"
						:key="'att'+ att.key_id">
						{{att.value_name}}
					</div>
				</div>
			</div>
		 -->
			<!-- 购物车 -->
			<div class="d-flex pt-5">
				<input type="text" style="width: 60px;" class="outline-none border-red py-2 px-3"
					v-model="product.order_count">
				<button class='bg-red text-white border-0 py-1 px-3 mx-3' @click="addCartClick()">加入购物车</button>
				<button class='bg-red text-white border-0 py-1 px-3 mx-3'>立即购买</button>
			</div>
		</div>

	</div>
</template>

<script>
	import {
		mapState,
		mapActions,
		mapMutations
	} from 'vuex'
	export default {
		data() {
			return {
				index: 0
			}
		},
		computed: {
			...mapState(['product','order']),
		},
		methods: {
			...mapMutations({
				'imgClick': 'product/img_click',
				'colorClicked': 'product/color_version_click',
				'versionClicked': 'product/color_version_click'
			}),
			...mapActions({
				'addCartClick':'order/add_cart_click'
			}),
			leftClick() {
				console.log(this.index)
				if (this.index > 0) {
					this.index--
				}
			},
			rightClick() {
				console.log(this.index)
				if (this.index < this.product.spuDetail.attrKeyList[0].attrValueList[0].value_images.length - 4) {
					this.index++
				}
			},

		},
		beforeMount() {
			this.product.spuDetail = JSON.parse(localStorage.getItem('spu'))
			this.product.selected_sku = JSON.parse(localStorage.getItem('sku'))
		},
		mounted() {
			if (this.product.spuDetail == undefined) {
				this.$router.push('/') //详情页数据不存在时返回到首页
			} else {
				if (this.product.selected_img == undefined) {
					this.product.selected_img = this.product.spuDetail.attrKeyList[0].attrValueList[0].value_images[0]
				}
			}
		},
		
	}
</script>

<style>
</style>

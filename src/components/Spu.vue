<template>
	
	<router-link to="/spudet" 
		class="box-shadow-hover-red rounded text-decoration-none border-box p-3 mr-5 mt-2 hand"
		v-if="selected_img != undefined"
		@click="spuClicked(data)">
		<div>
			<div>
				<img width="180"
				:src="'http://localhost:8001/img/' + selected_img" >
			</div>
			<div class="d-flex pt-4 overflow-hidden" style="width: 180px;">
				<img width="30" class="mr-1 border-gray"
					v-for="attrValue of data.attrKeyList[0].attrValueList"
					:key="'attrValue'+attrValue.value_id"
					:src="'http://localhost:8001/img/' + attrValue.value_images[0]"
					@click="selImgClick(attrValue)"
					:class="{'border-reded':attrValue.value_images[0] == selected_img}"
					>
			</div>
			<div class="py-2 text-xl text-red text-bold">
				￥{{data.skuList[0].sku_originalprice}}
			</div>
			<div class="pt-1 text-muted text-xs">
				{{data.spu_name}}
			</div>
			<!-- {{data.attrKeyList[0].attrValueList[0].value_images[0]}}
			 -->
		</div>
		
	</router-link>
</template>

<script>
	import {mapState,mapMutations} from 'vuex'
	
	export default {
		props:['data'],
		data() {
			return{
				selected_img:this.data.attrKeyList[0].attrValueList[0].value_images[0],//点击下面的图片改变放大的图片，默认加载拿第一张
			}
		},
		computed: {
			...mapState(['product'])
		},
		methods: {
			...mapMutations({
				'spuClicked':'product/spu_clicked',
			}),
			// 点击下面小图片切换大图展示
			selImgClick(attrValue){
				this.selected_img = attrValue.value_images[0];
			}
		}
	}
</script>

<style>
</style>

<template>
	<div>
		<!-- 筛选块 -->
		<div class="container pt-5 d-flex">
			<div class="w-17">
				<img src="../assets/atstudy-logo.png" width="140">
			</div>
			<div class="px-4 d-flex flex-column w-66">
				<div class="text-sm d-flex justify-content-center">
					<input class="px-3 py-2 border-red rounded-left outline-none" style="width:420px;" type="text"
						placeholder="商品名称、品牌、分类、规格属性" />
					<button class="px-3 bg-red border-red rounded-right text-white" type="button">搜索</button>
					<button class="ml-5 px-5 bg-white border-gray rounded text-red" type="button">我的购物车</button>
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
		<!-- 数据块  -->
		<div class="container mt-2 d-flex justify-content-between">
			<!-- 左边 -->
			<div class="w-17 rounded box-shadow">
				ddddddd
			</div>
			<!-- 轮播 -->
			<div class="w-63 mx-auto border-blue">
				<el-carousel trigger="click"  height="440px">
					<el-carousel-item>
						<img src="../assets/carousel01.jpg" width="760">
					</el-carousel-item>
					<el-carousel-item>
						<img src="../assets/carousel02.jpg" width="760">
					</el-carousel-item>
					<el-carousel-item>
						<img src="../assets/carousel03.jpg" width="760">
					</el-carousel-item>
					<el-carousel-item>
						<img src="../assets/carousel04.jpg" width="760">
					</el-carousel-item>
					<el-carousel-item>
						<img src="../assets/carousel05.jpg" width="760">
					</el-carousel-item>
				</el-carousel>
			</div>
			<!-- 右边 -->
			<div class="w-17 d-flex flex-column justify-content-between">
				<img src="../assets/carousel-right01.jpg" height="140">
				<img src="../assets/carousel-right02.jpg" height="140">
				<img src="../assets/carousel-right03.jpg" height="140">
			</div>
			
			
		</div>
		<!--商品数展示 -->

	</div>
</template>

<script>
</script>

<style>
</style>

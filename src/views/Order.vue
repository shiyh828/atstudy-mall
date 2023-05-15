<template>
	<Pay v-if="order.cart_list.length>0"></Pay>
	<div style="text-align:center" v-if="order.cart_list.length===0">暂无数据</div>
</template>

<script>
	import {mapState,mapActions,mapMutations} from 'vuex'
	import Pay from '../components/Pay.vue'
	export default{
		computed: {
			...mapState(['order'])
		},
		methods:{
			...mapActions({
				
			}),
			...mapMutations({
				
			}),
			
		},
		components : {
			Pay
		},
	}
</script>

<style>
</style>

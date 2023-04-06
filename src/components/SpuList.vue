<template>
	
	<slot class="mt-5 py-2 px-4 rounded-right-xl border-light border-right-dark" style="width: 120px;"></slot>
	
	
	<div class="container d-flex flex-wrap">
		<spu class="w-17"
			v-for="spu of  data"
			:key="'spu' +  spu.spu_id"
			:data="spu"></spu>
	</div>
	
</template>

<script>
	import Spu from './Spu.vue'
	
	export default {
		props:['data'],
		components: {
			Spu
		}
	}
	
</script>

<style>
</style>

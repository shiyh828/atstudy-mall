<template>
	<div id="nav">
		<Navbar></Navbar>
		<Search></Search>
		<router-view></router-view>
		<Footer></Footer>
	</div>

</template>

<script>
	import Navbar from './components/Navbar.vue'
	import Search from './components/Search.vue'
	import Footer from './components/Footer.vue'
	
	
	export default {

		components: {
			Navbar,
			Footer,
			Search,

		}
	}
</script>

<style>
	/*  根实例中的css样式，是全局的css样式，相当于以前的global.css  */
	body {
		margin: 0rem;
	}

	/*  用户分辨率兼容  */
	.container {
		width: 1200px;
		margin: 0rem auto;
	}

	/*  指针  */
	.hand {
		cursor: pointer;
	}

	.not-allow {
		cursor: not-allowed;
	}

	/*  弹性布局  */
	.d-flex {
		display: flex;
	}

	.flex-column {
		flex-direction: column;
	}

	.justify-content-center {
		justify-content: center;
	}

	.justify-content-between {
		justify-content: space-between;
	}

	.justify-content-around {
		justify-content: space-around;
	}

	.justify-content-end {
		justify-content: flex-end;
	}

	.align-items-center {
		align-items: center;
	}

	.align-items-start {
		align-items: flex-start;
	}

	.align-items-end {
		align-items: flex-end;
	}

	.flex-wrap {
		flex-wrap: wrap;
	}

	.flex-grow-0 {
		flex-grow: 0;
	}

	.flex-grow-1 {
		flex-grow: 1;
	}

	/*  盒子模型  */
	.m-0 {
		margin: 0rem;
	}

	.m-1 {
		margin: 0.25rem;
	}

	.m-2 {
		margin: 0.5rem;
	}

	.m-3 {
		margin: 1rem;
	}

	.m-4 {
		margin: 1.5rem;
	}

	.m-5 {
		margin: 2rem;
	}

	.mx-0 {
		margin-left: 0rem;
		margin-right: 0rem;
	}

	.mx-1 {
		margin-left: 0.25rem;
		margin-right: 0.25rem;
	}

	.mx-2 {
		margin-left: 0.5rem;
		margin-right: 0.5rem;
	}

	.mx-3 {
		margin-left: 1rem;
		margin-right: 1rem;
	}

	.mx-4 {
		margin-left: 1.5rem;
		margin-right: 1.5rem;
	}

	.mx-5 {
		margin-left: 2rem;
		margin-right: 2rem;
	}

	.mx-auto {
		margin-left: auto;
		margin-right: auto;
	}

	.my-0 {
		margin-top: 0rem;
		margin-bottom: 0rem;
	}

	.my-1 {
		margin-top: 0.25rem;
		margin-bottom: 0.25rem;
	}

	.my-2 {
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
	}

	.my-3 {
		margin-top: 1rem;
		margin-bottom: 1rem;
	}

	.my-4 {
		margin-top: 1.5rem;
		margin-bottom: 1.5rem;
	}

	.my-5 {
		margin-top: 2rem;
		margin-bottom: 2rem;
	}

	.my-auto {
		margin-top: auto;
		margin-bottom: auto;
	}

	.mt-0 {
		margin-top: 0rem;
	}

	.mt-1 {
		margin-top: 0.25rem;
	}

	.mt-2 {
		margin-top: 0.5rem;
	}

	.mt-3 {
		margin-top: 1rem;
	}

	.mt-4 {
		margin-top: 1.5rem;
	}

	.mt-5 {
		margin-top: 2rem;
	}

	.mt-6 {
		margin-top: 2.5rem;
	}

	.mt-7 {
		margin-top: 3rem;
	}

	.mt-8 {
		margin-top: 3.5rem;
	}

	.mt-9 {
		margin-top: 4rem;
	}

	.mt-auto {
		margin-top: auto;
	}

	.mr-0 {
		margin-right: 0rem;
	}

	.mr-1 {
		margin-right: 0.25rem;
	}

	.mr-2 {
		margin-right: 0.5rem;
	}

	.mr-3 {
		margin-right: 1rem;
	}

	.mr-4 {
		margin-right: 1.5rem;
	}

	.mr-5 {
		margin-right: 2rem;
	}

	.mr-auto {
		margin-right: auto;
	}

	.mb-0 {
		margin-bottom: 0rem;
	}

	.mb-1 {
		margin-bottom: 0.25rem;
	}

	.mb-2 {
		margin-bottom: 0.5rem;
	}

	.mb-3 {
		margin-bottom: 1rem;
	}

	.mb-4 {
		margin-bottom: 1.5rem;
	}

	.mb-5 {
		margin-bottom: 2rem;
	}

	.mb-auto {
		margin-bottom: auto;
	}

	.ml-0 {
		margin-left: 0rem;
	}

	.ml-1 {
		margin-left: 0.25rem;
	}

	.ml-2 {
		margin-left: 0.5rem;
	}

	.ml-3 {
		margin-left: 1rem;
	}

	.ml-4 {
		margin-left: 1.5rem;
	}

	.ml-5 {
		margin-left: 2rem;
	}

	.ml-auto {
		margin-left: auto;
	}

	.p-0 {
		padding: 0rem;
	}

	.p-1 {
		padding: 0.25rem;
	}

	.p-2 {
		padding: 0.5rem;
	}

	.p-3 {
		padding: 1rem;
	}

	.p-4 {
		padding: 1.5rem;
	}

	.p-5 {
		padding: 2rem;
	}

	.px-0 {
		padding-left: 0rem;
		padding-right: 0rem;
	}

	.px-1 {
		padding-left: 0.25rem;
		padding-right: 0.25rem;
	}

	.px-2 {
		padding-left: 0.5rem;
		padding-right: 0.5rem;
	}

	.px-3 {
		padding-left: 1rem;
		padding-right: 1rem;
	}

	.px-4 {
		padding-left: 1.5rem;
		padding-right: 1.5rem;
	}

	.px-5 {
		padding-left: 2rem;
		padding-right: 2rem;
	}

	.py-0 {
		padding-top: 0rem;
		padding-bottom: 0rem;
	}

	.py-1 {
		padding-top: 0.25rem;
		padding-bottom: 0.25rem;
	}

	.py-2 {
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
	}

	.py-3 {
		padding-top: 1rem;
		padding-bottom: 1rem;
	}

	.py-4 {
		padding-top: 1.5rem;
		padding-bottom: 1.5rem;
	}

	.py-5 {
		padding-top: 2rem;
		padding-bottom: 2rem;
	}

	.pt-0 {
		padding-top: 0rem;
	}

	.pt-1 {
		padding-top: 0.25rem;
	}

	.pt-2 {
		padding-top: 0.5rem;
	}

	.pt-3 {
		padding-top: 1rem;
	}

	.pt-4 {
		padding-top: 1.5rem;
	}

	.pt-5 {
		padding-top: 2rem;
	}

	.pr-0 {
		padding-right: 0rem;
	}

	.pr-1 {
		padding-right: 0.25rem;
	}

	.pr-2 {
		padding-right: 0.5rem;
	}

	.pr-3 {
		padding-right: 1rem;
	}

	.pr-4 {
		padding-right: 1.5rem;
	}

	.pr-5 {
		padding-right: 2rem;
	}

	.pb-0 {
		padding-bottom: 0rem;
	}

	.pb-1 {
		padding-bottom: 0.25rem;
	}

	.pb-2 {
		padding-bottom: 0.5rem;
	}

	.pb-3 {
		padding-bottom: 1rem;
	}

	.pb-4 {
		padding-bottom: 1.5rem;
	}

	.pb-5 {
		padding-bottom: 2rem;
	}

	.pl-0 {
		padding-left: 0rem;
	}

	.pl-1 {
		padding-left: 0.25rem;
	}

	.pl-2 {
		padding-left: 0.5rem;
	}

	.pl-3 {
		padding-left: 1rem;
	}

	.pl-4 {
		padding-left: 1.5rem;
	}

	.pl-5 {
		padding-left: 2rem;
	}


	.outline-none {
		outline: none;
	}

	.border-0 {
		border: 0rem;
	}

	.border-light {
		border: 1px solid #eee;
	}

	.border-gray {
		border: 1px solid #ccc;
	}

	.border-red {
		border: 1px solid #e33;
	}

	.border-blue {
		border: 1px solid #99c;
	}

	.border-bottom {
		border-bottom: 1px solid #eee;
	}

	.border-right-dark {
		border-right: 1px solid #ccc;
	}

	.border-right-none {
		border-right: 0px;
	}

	.border-left-none {
		border-left: 0px;
	}

	.box-shadow {
		box-shadow: 0rem 0rem 0.5rem #ccc;
	}

	.box-shadow-red {
		box-shadow: 0rem 0rem 0.5rem #F56C6C;
	}

	.box-shadow-hover-red:hover {
		box-shadow: 0rem 0rem 0.5rem #e33;
	}

	.box-shadow-hover-blue:hover {
		box-shadow: 0rem 0rem 0.5rem #99c;
	}

	.rounded {
		border-radius: 0.25rem;
	}

	.rounded-lg {
		border-radius: 0.5rem;
	}

	.rounded-left {
		border-radius: 0.25rem 0rem 0rem 0.25rem;
	}

	.rounded-left-lg {
		border-radius: 0.5rem 0rem 0rem 0.5rem;
	}

	.rounded-right {
		border-radius: 0rem 0.25rem 0.25rem 0rem;
	}

	.rounded-right-lg {
		border-radius: 0rem 0.5rem 0.5rem 0rem;
	}

	.rounded-right-xl {
		border-radius: 0rem 1rem 1rem 0rem;
	}

	.circle {
		border-radius: 50%;
	}



	.w-0 {
		width: 0%;
	}

	.w-3 {
		width: 3%;
	}

	.w-5 {
		width: 5%;
	}

	.w-6 {
		width: 6%;
	}

	.w-7 {
		width: 7%;
	}

	.w-10 {
		width: 10%;
	}

	.w-13 {
		width: 13%;
	}

	.w-15 {
		width: 15%;
	}

	.w-17 {
		width: 17%;
	}

	.w-20 {
		width: 20%;
	}

	.w-23 {
		width: 23%;
	}

	.w-25 {
		width: 25%;
	}

	.w-26 {
		width: 26%;
	}

	.w-30 {
		width: 30%;
	}

	.w-33 {
		width: 33%;
	}

	.w-37 {
		width: 37%;
	}

	.w-40 {
		width: 40%;
	}

	.w-45 {
		width: 45%;
	}

	.w-47 {
		width: 47%;
	}

	.w-50 {
		width: 50%;
	}

	.w-53 {
		width: 53%;
	}

	.w-60 {
		width: 60%;
	}

	.w-63 {
		width: 63%;
	}

	.w-66 {
		width: 66%;
	}

	.w-72 {
		width: 72%;
	}

	.w-75 {
		width: 75%;
	}

	.w-80 {
		width: 80%;
	}

	.w-85 {
		width: 85%;
	}

	.w-90 {
		width: 90%;
	}

	.w-94 {
		width: 94%;
	}

	.w-95 {
		width: 95%;
	}

	.w-100 {
		width: 100%;
	}

	.w-min-792 {
		min-width: 792px;
	}

	.box-sizing-border {
		box-sizing: border-box;
	}

	/*  定位  */
	.position-relative {
		position: relative;
	}

	.position-absolute {
		position: absolute;
	}

	.left-0 {
		left: 0rem;
	}

	.left-1 {
		left: 0.25rem;
	}

	.left-2 {
		left: 0.5rem;
	}

	.left-3 {
		left: 1rem;
	}

	.left-4 {
		left: 1.5rem;
	}

	.left-5 {
		left: 2rem;
	}

	.top-0 {
		top: 0rem;
	}

	.top-1 {
		top: 0.25rem;
	}

	.top-2 {
		top: 0.5rem;
	}

	.top-3 {
		top: 1rem;
	}

	.top-4 {
		top: 1.5rem;
	}

	.top-5 {
		top: 2rem;
	}

	.top-6 {
		top: 2.5rem;
	}

	.top-7 {
		top: 3rem;
	}

	.top-8 {
		top: 3.5rem;
	}

	.top-9 {
		top: 4rem;
	}

	/*  背景  */
	.bg-red {
		background-color: #e33;
	}

	.bg-white {
		background-color: #fff;
	}

	.bg-white-opacity {
		background-color: rgba(255, 255, 255, 0.4);
	}

	.bg-red-opacity {
		background-color: rgba(225, 51, 51, 0.4);
	}

	.bg-gray {
		background-color: #e7e7e7;
	}

	.bg-dark {
		background-color: #444;
	}

	.bg-green {
		background-color: #67C23A;
	}

	/*  字体颜色  */
	.text-dark {
		color: #333;
	}

	.text-secondary {
		color: #666;
	}

	.text-muted {
		color: #999;
	}

	.text-light {
		color: #ccc;
	}

	.text-white {
		color: #fff;
	}

	.text-red {
		color: #df4f45;
	}

	.text-blue {
		color: #99c;
	}

	.text-hover-red:hover {
		color: #e33;
	}

	/*  字体尺寸  */
	.text-sm {
		font-size: 0.875rem;
	}

	.text-xs {
		font-size: 0.75rem;
	}

	.text-lg {
		font-size: 1.125rem;
	}

	.text-xl {
		font-size: 1.25rem;
	}

	.text-xxl {
		font-size: 1.75rem;
	}

	.text-max {
		font-size: 3rem;
	}

	/*  字体水平对齐方式  */
	.text-center {
		text-align: center;
	}

	.text-right {
		text-align: right;
	}

	.text-left {
		text-align: left;
	}

	/*  字体加粗  */
	.text-bold {
		font-weight: 600;
	}

	.text-bolder {
		font-weight: 900;
	}

	.text-lighter {
		font-weight: lighter;
	}

	/*  字体线型  */
	.text-decoration-none {
		text-decoration: none;
	}

	.text-decoration-line-through {
		text-decoration: line-through;
	}

	/*  内容溢出  */
	.overflow-hidden {
		overflow: hidden;
	}

	/* 行高 */
	.line-height-12 {
		line-height: 0.75rem;
	}

	/* 盒子模型 */
	.border-box {
		box-sizing: border-box;
	}
</style>

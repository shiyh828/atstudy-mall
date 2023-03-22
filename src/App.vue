<template>
  <div id="nav">
    <Navbar></Navbar>
  </div>
  <router-view></router-view>
</template>

<style>

</style>
<script>
import Navbar from './components/Navbar.vue'
export default{
	components: {
		Navbar,
	}
}
</script>
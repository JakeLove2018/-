<template>
  <div id="app">
  	<div class="nav-box">
  		<div class="logo">渡一教育</div>
  	</div>
  	<div class="nav-list">
    <router-link to="/">首页</router-link>
    <router-link to="/learn" >课程学习</router-link>
    <router-link to="/student">学生列表</router-link>
    <router-link to="/about">关于</router-link>
    <router-link to="/acivity">社区</router-link>
	<router-view></router-view>
	</div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  
  }}
</script>

<style>

</style>

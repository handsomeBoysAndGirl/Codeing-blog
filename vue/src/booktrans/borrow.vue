<template>
	<div>
		 <el-tabs v-model="activeName" @tab-click="handleClick">
    		<el-tab-pane label="图书借还" name="first"></el-tab-pane>
    		<el-tab-pane label="借书管理" name="second"></el-tab-pane>
  		</el-tabs>
  		<!-- 借书部分开始 -->
	</div>
</template>
<script>
	export default{
		name:"borrow",
		data(){
			return{

			}
		}
	}
</script>
<style scoped>
	
</style>
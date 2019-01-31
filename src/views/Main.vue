<template>
  <div class="main">
    <el-container>
      <!-- 左侧的菜单栏 -->
      <el-aside width="200px">左侧边栏</el-aside>
      <el-container>
        <!-- 顶部的信息栏 -->
        <el-header height="60px">顶部</el-header>
        <!-- 主体部分 -->
        <el-main></el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
  export default{
    beforeCreate() {
      //组件创建之前先要检查是否已经登录为管理员
      if(!this.$store.state.daminName){
        this.$router.push('/login')//未登录则跳转
      }
    },
  }
</script>
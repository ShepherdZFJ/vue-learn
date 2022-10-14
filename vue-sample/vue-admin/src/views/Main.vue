<template>
  <div>
    <el-container>
    <el-aside width="auto">
      <NavMenu></NavMenu>
    </el-aside>
    <el-container>
        <el-header>
          <Header></Header>
        </el-header>
        <el-main>
          <!-- 路由出口 -->
          <!-- 路由匹配到的组件将渲染在这里 -->
          <router-view></router-view>
        </el-main>
    </el-container>
    </el-container>
  </div>
</template>

<script>
import NavMenu from '../components/NavMenu.vue'
import Header from '../components/Header.vue'
export default {
    name:"Main",
    components:{
      NavMenu,
      Header
    }

}
</script>

<style>
  /* .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: left;
    line-height: 200px;
    height: 100vh;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  } */

</style>
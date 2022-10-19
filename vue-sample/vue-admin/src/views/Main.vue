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
        <Tags></Tags>
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
import Tags from '../components/Tags.vue'
export default {
    name:"Main",
    components:{
      NavMenu,
      Header,
      Tags
    }

}
</script>

<style scoped>
.el-header {
    padding: 0
}
</style>
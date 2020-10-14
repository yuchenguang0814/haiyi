<template>
  <div id="app">
    <el-container class="container">
    <router-view></router-view>
    <!-- <main-tab-bar></main-tab-bar> -->
    </el-container>
  </div>
</template>
<script>
  //import MainTabBar from 'components/content/mainTabbar/MainTabBar'
export default {
  components: {
   // MainTabBar
  }
}
</script>
<style>
  @import "assets/css/base.css";
  .container {
    display: inline;
  }
</style>

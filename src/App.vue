<template>
  <div id="app">
    <el-container class="container">
      <nav-menu>
      </nav-menu>
      <router-view></router-view>
    <!-- <main-tab-bar></main-tab-bar> -->
    <el-footer></el-footer>
    </el-container>
  </div>
</template>
<script>
  import NavMenu from 'components/common/navmenu/NavMenu'
export default {
  components: {
    NavMenu
  }
}
</script>
<style>
  @import "assets/css/base.css";
  .container {
    width:100%
  }
</style>

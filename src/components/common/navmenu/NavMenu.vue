<template>
  <el-header>
    <div class="left">
      <img src="~assets/image/logo.png" alt="海翊机械">
    </div> 
      <div class="center" >
        <el-menu class="el-menu-demo hidden-xs-only" :default-active="activeIndex" mode="horizontal" text-color="#555" @select="handleSelect" active-text-color="#175bc0">
          <el-menu-item index="1">海翊机械</el-menu-item>
          <el-submenu index="2">
            <template slot="title" class="product">产品中心</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-submenu index="2-3">
              <template slot="title">选项3</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
              <el-menu-item index="2-4-4">选项1</el-menu-item>
              <el-menu-item index="2-4-5">选项2</el-menu-item>
              <el-menu-item index="2-4-6">选项3</el-menu-item>
              <el-menu-item index="2-4-7">选项1</el-menu-item>
              <el-menu-item index="2-4-8">选项2</el-menu-item>
              <el-menu-item index="2-4-9">选项3</el-menu-item>
              <el-menu-item index="2-4-10">选项1</el-menu-item>
              <el-menu-item index="2-4-11">选项2</el-menu-item>
              <el-menu-item index="2-4-12">选项3</el-menu-item>
            </el-submenu>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-5-1">选项1</el-menu-item>
              <el-menu-item index="2-5-2">选项2</el-menu-item>
              <el-menu-item index="2-5-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3">应用案例</el-menu-item>
          <el-menu-item index="5">海翊新闻</el-menu-item>
          <el-menu-item index="6">关于海翊</el-menu-item>
          <el-menu-item index="7">联系海翊</el-menu-item>
        </el-menu>
      </div>
    <div class="right hidden-xs-only">
      <p>
        <!-- <a href="#" target="_self" title="中文网站"><img src="~assets/image/en.png"  alt="中文网站"></a> -->
        <a href="#" target="_self" title="英文网站"><img src="~assets/image/us.png"  alt="英文网站"></a>
        </p>
    </div> 
    
  </el-header>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style>
 #app .el-header{
    display: flex;
    height:82px!important;
    box-shadow: 0px 3px 3px rgba(100, 100, 100, 0.3);
    margin-bottom: 3px;
  }
  
  .el-menu--horizontal>.el-menu-item.is-active {
    border-bottom:none!important;
  }
  .el-menu--horizontal>.el-menu-item{
    height: 82px;
    line-height: 82px;
  }
  .left img{
    width:100%;
    min-width: 330px;
    min-height: 80px;
  }
  .center {
    text-align: center;
  }
  .right{
    padding:20px 20px 20px 10px;
    margin-left: 20px;    
  }
  .right img {
    min-width: 50px;
    min-height: 33px;
  }

.el-menu--horizontal>.el-menu-item{ float:left;width: 95px;font-size: 16px;text-align: center;position:relative;}
.el-menu--horizontal>.el-menu-item:after {content:"";width:0%;height:3px;background:#175bc0;position:absolute;bottom:0;left:50%;z-index:5;transition:0.4s;-webkit-transition:0.4s;-moz-transition:0.4s;-ms-transition:0.4s;-o-transition:0.4s;}
.el-menu--horizontal>.el-menu-item.is-active:after ,.el-menu--horizontal>.el-menu-item:hover:after{width: 80%;left: 0;margin-left:15%;}
.el-menu--horizontal>.el-menu-item a { width: 110px; height:100px; display:block; line-height:100px;font-size: 16px;color:#555;}
.el-menu--horizontal>.el-menu-item a:hover{ color:#175bc0;}
.el-submenu__title {
  font-size: 16px;
  height: 82px!important;
  line-height: 82px!important;
}
</style>
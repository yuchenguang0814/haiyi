<template>
  <el-main>
    <el-carousel :interval="4000" :height="bannerHeight+'px'">
        <el-carousel-item v-for="item in banners" :key="item.id">
          <el-row>
            <el-col :span="24"><img ref="bannerHeight" :src="Url+item.imageUrl" class="banner_img"/></el-col>
          </el-row>
        </el-carousel-item>
      </el-carousel>
  </el-main>
</template>

<script>
  export default {
    data() {
      return {
        Url:"http://127.0.0.1:3000",
        screenWidth:0,
        bannerHeight:''
      }
    },
    name: "HomeCarousel",
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods:{
        setSize:function () {
          // 通过浏览器宽度(图片宽度)计算高度
          this.bannerHeight = 600 / 1920 * this.screenWidth;
        },
      },
    mounted() {
        // 首次加载时,需要调用一次
        this.screenWidth =  window.innerWidth;
        this.setSize();
        // 窗口大小发生改变时,调用一次
        window.onresize = () =>{
        this.screenWidth =  window.innerWidth;
        this.setSize();
      }
    }
  }
</script>

<style>
  img{
     /*设置图片宽度和浏览器宽度一致*/
      width:100%;
      display:block;
    }
  .el-main{
    padding: 0;
  }
</style>

<template>
  <div class="home">
    <nav-menu class="home-nav">
    </nav-menu>
    <home-Carousel :banners="banners">
    </home-Carousel>
  </div>
</template>

<script>
  import NavMenu from 'components/common/navmenu/NavMenu'
  import {GetHomeMultidata} from 'network/home'
  import HomeCarousel from './childrenComps/HomeCarousel'

  export default {
    name: "Home",
    components: {
      NavMenu,
      HomeCarousel
    },
    data() {
      return {
        banners: null
      }
    },
    created() {
      GetHomeMultidata().then(res => {
        this.banners = res.data.banner
        this.recommand = res.data.recommand
        console.log(res.data)
      })
    }
  }
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>

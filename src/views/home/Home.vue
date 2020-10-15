<template>
  <div class="home">
    <home-Carousel :banners="banners">
    </home-Carousel>
  </div>
</template>

<script>
  import {GetHomeMultidata} from 'network/home'
  import HomeCarousel from './childrenComps/HomeCarousel'

  export default {
    name: "Home",
    components: {
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
  .home {
    width: 100%;
  }
</style>

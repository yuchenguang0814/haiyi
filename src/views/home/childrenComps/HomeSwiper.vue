<template>
  <swiper>
    <swiper-item v-for="item in banners">
      <a :href="Url+item.link">
        <img :src="Url+item.imageUrl">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'

  export default {
    data() {
      return {
        Url:"http://127.0.0.1:3000"
      }
    },
    name: "HomeSwiper",
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>

</style>

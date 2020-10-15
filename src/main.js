import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Container,Main,Header,Footer,Submenu,Carousel,CarouselItem,Row,Col,MenuItem,Menu} from 'element-ui';

Vue.use(Container)
Vue.use(Main)
Vue.use(Header)
Vue.use(Footer)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(MenuItem)
Vue.use(Menu)
Vue.use(Submenu)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

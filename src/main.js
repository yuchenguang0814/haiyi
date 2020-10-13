import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Button, Select } from 'element-ui';

Vue.use(Button)
Vue.use(Select)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; //引入element组件库

import '@/assets/css/common.css' //全局样式

Vue.config.productionTip = false
Vue.use(ElementUI)


Vue.prototype.axios = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



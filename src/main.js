import 'babel-polyfill'//es6转es5兼容ie
import 'url-search-params-polyfill';//让ie支持URLSearchParams
import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';
import config from './assets/js/conf/config.js';
import { request } from './assets/js/libs/request.js';
console.log("测试提交");
//全局变量
Vue.prototype.$config = config;
Vue.prototype.$request = request;
console.log("111")

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

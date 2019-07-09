import Vue from 'vue'
import App from './App'
import router from './router'
// 引入echarts
import echarts from 'echarts'

Vue.prototype.$echarts = echarts 

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

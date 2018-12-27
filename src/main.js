import Vue from 'vue'
import App from './App.vue'

//引入store实例
import store from "./store/index"

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})

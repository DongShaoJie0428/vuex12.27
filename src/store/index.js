import Vue from "vue";
import Vuex from "vuex";

//引入模块
import app from "./modules/app"

Vue.use(Vuex)

// 生成store实例
export default new Vuex.Store({
  modules: {
    app
  }
})
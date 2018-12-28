import Vue from "vue";
import Vuex from "vuex";

// 引入日志
import createLogger from "vuex/dist/logger"

import app from "./modules/app"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app
  },
  //相当于全局，访问时比较方便
  state: {
    a:100,
    b:200
  },
  // 会显示出你的操作事件还有方法什么的
  plugins: [createLogger()]
})
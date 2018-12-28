//模块中的数据
const state = {
  num: 0
}

// 派生的数据，会被缓存
const getters = {
  date(state) {
    let date = new Date();
    let year = date.getFullYear(),
        month = (date.getMonth()+1).toString().padStart(2, "0"),
        day = date.getDate().toString().padStart(2, "0"),
        hour = date.getHours().toString().padStart(2, "0"),
        min = date.getMinutes().toString().padStart(2, "0"),
        sections = date.getSeconds().toString().padStart(2, "0");
        if(day < 10) {
          return "0" + day
        }
    return `${year}--${month}--${day} ${hour}:${min}:${sections}`
  }
}

// 模块同步的改变
// 在这个方法中最好不要使用异步操作
const mutations = {
  changeNums(state,{payload}) {
    state.num = payload == 'add' ? state.num + 1 : state.num - 1
  }
}

// 模块中的异步改变
const actions = {
  // 要触发这个函数，前面调用的时候就需要用到dispatch,否则触发不了
  // 里面会获取到commit,dispatch,getters,state里面的东西
  // 如果想要改state里面的东西，就结构一个commit
  changeNumSync({commit},action) {
    // console.log(commit,action)
    // 在action中可以返回一个promise，当异步操作完成之后通知组件
    setTimeout(res => {
      commit("changeNum", action)
    },1000)
  }
}

export default {
  // 命名空间
  // 加上这个属性之后就能访问他自己方法下面的属性，如果不加上自己的方法名称，就会报错
  // 报错如下：[vuex] unknown mutation type: changeNums
  namespaced:true,
  state,
  getters,
  mutations,
  actions
}
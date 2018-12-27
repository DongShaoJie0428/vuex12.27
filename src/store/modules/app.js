// 模块中的数据
const state = {
  num:100
}

//模块中同步的改变
const mutations = {
  changes(state,{payload}) {
    console.log(state,{payload})
    state.num = payload == 'add' ? state.num + 1 : state.num - 1
  }
}

export default{
  state,
  mutations
}
<template>
  <div>
    <button @click="changNum({payload:'add'})">+</button>
    {{num}}
    {{date}}
    <button @click="changNum({payload:'del'})">-</button>
  </div>  
</template>

<script>
// 在vuex中把四个都结构出来
import { mapState, mapGetters, mapMutations, mapActions } from "vuex"
export default {
  computed: {
    ...mapState({
      num: state => state.app.num
    }),
    ...mapGetters({
      date: "app/date"
    })
  },
  mounted() {
    console.log(this.$store)
  },
  methods: {
    ...mapMutations({
      changNum: "app/changeNums"
    }),
    ...mapActions({
      changeNumSync: "app/changNum"
    })
    // changNum(type) {
    //   // this.$store.commit("changeNums",{payload:type})
    //   this.$store.commit({
    //     type:"app/changeNums",
    //     payload:type
    //   })
    //   this.$store.dispatch({
    //     type:"app/changeNumSync",
    //     payload:type
    //   })
    // }
  }
}
</script>

<style>

</style>

<template>
  <div>
    <button @click="changNum('add')">+</button>
    {{this.$store.state.app.num}}
    <button @click="changNum('del')">-</button>
  </div>  
</template>

<script>
export default {
  mounted() {
    console.log(this.$store)
  },
  methods: {
    changNum(type) {
      // this.$store.commit("changeNums",{payload:type})
      this.$store.commit({
        type:"app/changeNums",
        payload:type
      })
      this.$store.dispatch({
        type:"app/changeNumSync",
        payload:type
      })
    }
  }
}
</script>

<style>

</style>

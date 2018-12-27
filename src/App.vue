<template>
  <div>
    <button @click="changeNum('add')">+</button>  
    {{this.$store.state.app.num}}
    <button @click="changeNum('del')">-</button>
  </div>  
</template>

<script>
export default {
  mounted() {
    console.log(this.$store)
  },
  methods: {
    changeNum(type) {
      this.$store.commit("changes", {payload:type})
    }
  }
}
</script>

<style>

</style>

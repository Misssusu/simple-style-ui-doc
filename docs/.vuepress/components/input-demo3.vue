<template>
  <div>
    <s-input v-model="input" placeholder="Please enter content"></s-input>
  </div>
</template>

<script>
  import Vue from 'vue'
  import SUI from 'simple-style-ui'
  import 'simple-style-ui/dist/simple-style-ui.css'

  Vue.use(SUI)
  export default {
    name: 'input-demo3',
    data(){
      return {
        input: ''
      }
    }
  };
</script>

<style scoped>

</style>

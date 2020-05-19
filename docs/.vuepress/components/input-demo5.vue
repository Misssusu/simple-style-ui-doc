<template>
  <div>
    <s-input v-model="searchValue" search placeholder="Please enter content"></s-input>
    <s-input v-model="calendarValue" calendar placeholder="Please select a date"></s-input>
  </div>
</template>

<script>
  import Vue from 'vue'
  import SUI from 'simple-style-ui'
  import 'simple-style-ui/dist/simple-style-ui.css'

  Vue.use(SUI)
  export default {
    name: 'input-demo5',
    data(){
      return {
        searchValue: '',
        calendarValue: ''
      }
    }
  };
</script>

<style scoped>

</style>

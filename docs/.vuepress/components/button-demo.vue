<template>
  <div>
    <s-button type="default">Default</s-button>
    <s-button type="primary">primary</s-button>
    <s-button type="warning">Warning</s-button>
    <s-button type="danger">Danger</s-button>
    <s-button type="info">Info</s-button>
    <s-button type="success">Success</s-button>
  </div>
</template>

<script>
  import Vue from 'vue'
  import SUI from 'simple-style-ui'
  import 'simple-style-ui/dist/simple-style-ui.css'

  Vue.use(SUI)
  export default {
    name: 'button-demo'
  };
</script>

<style scoped>

</style>

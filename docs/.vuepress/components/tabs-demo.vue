<template>
  <div>
    <s-tabs selected="Home">
      <s-tabs-head>
        <s-tabs-item name="Home">Home</s-tabs-item>
        <s-tabs-item name="About">About</s-tabs-item>
        <s-tabs-item name="Career">Career</s-tabs-item>
      </s-tabs-head>
      <s-tabs-body>
        <s-tabs-pane name="Home">Home</s-tabs-pane>
        <s-tabs-pane name="About">About</s-tabs-pane>
        <s-tabs-pane name="Career">Career</s-tabs-pane>
      </s-tabs-body>
    </s-tabs>
  </div>
</template>

<script>
  import Vue from 'vue'
  import SUI from 'simple-style-ui'
  import 'simple-style-ui/dist/simple-style-ui.css'

  Vue.use(SUI)
  export default {
    name: 'tabs.vue'
  };
</script>

<style scoped>

</style>

<template>
  <div>
    <s-collapse selected="1">
      <s-collapse-item title="Title1" name="1">
        <div>Content1</div>
      </s-collapse-item>
      <s-collapse-item title="Title2" name="2">
        <div>Content2</div>
      </s-collapse-item>
      <s-collapse-item title="Title3" name="3">
        <div>Content3</div>
      </s-collapse-item>
    </s-collapse>
  </div>
</template>

<script>
  import Vue from 'vue'
  import SUI from 'simple-style-ui'
  import 'simple-style-ui/dist/simple-style-ui.css'

  Vue.use(SUI)
  export default {
    name: 'collapse-demo'
  };
</script>

<style scoped>

</style>

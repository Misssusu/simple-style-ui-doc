<template>
  <div>
    <s-popover position="top">
      <template slot="content">
        <div>Popover Content</div>
      </template>
      <s-button>Pop It !</s-button>
    </s-popover>
    <s-popover position="left">
      <template slot="content">
        <div>Popover Content</div>
      </template>
      <s-button>Pop It !</s-button>
    </s-popover>
    <s-popover position="right">
      <template slot="content">
        <div>Popover Content</div>
      </template>
      <s-button>Pop It !</s-button>
    </s-popover>
    <s-popover position="bottom">
      <template slot="content">
        <div>Popover Content</div>
      </template>
      <s-button>Pop It !</s-button>
    </s-popover>
  </div>
</template>

<script>
  import Vue from 'vue'
  import SUI from 'simple-style-ui'
  import 'simple-style-ui/dist/simple-style-ui.css'

  Vue.use(SUI)
  export default {
    name: 'popover-demo1'
  };
</script>

<style scoped>

</style>

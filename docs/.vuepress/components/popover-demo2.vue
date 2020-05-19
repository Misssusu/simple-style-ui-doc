<template>
  <div>
    <s-popover position="top" trigger="hover">
      <template slot="content">
        <div>Popover Content</div>
      </template>
      <s-button>Pop It !</s-button>
    </s-popover>

    <s-popover position="left" trigger="hover">
      <template slot="content">
        <div>Popover Content</div>
      </template>
      <s-button>Pop It !</s-button>
    </s-popover>

    <s-popover position="right" trigger="hover">
      <template slot="content">
        <div>Popover Content</div>
      </template>
      <s-button>Pop It !</s-button>
    </s-popover>

    <s-popover position="bottom" trigger="hover">
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
    name: 'popover-demo2'
  };
</script>

<style scoped>

</style>

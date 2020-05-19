<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div class="tabs item">
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
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

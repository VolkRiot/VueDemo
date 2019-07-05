<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <TestComponent msg="TESING ONE TIME BIND" rawHtml="<h1>This h1 is intrepreted HTML</h1>" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>

// import HelloWorld from './components/HelloWorld.vue'
import TestComponent from './components/TestComponent'

export default {
  name: 'app',
  components: {
    TestComponent
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

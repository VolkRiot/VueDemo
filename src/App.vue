<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <button v-on:click="toggleTest">Toggle</button>
    <p v-if="test">Value of test is true</p>
    <p v-else>Value of test is false</p>
    <TestComponent 
      id="passed-id"
      myClass="passed-class"
      msg="TESING ONE TIME BIND" 
      rawHtml="<h1>This h1 is intrepreted HTML</h1>" 
      count="0"
      />
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
  },
  data() {
    return {
      test: true
    }
  },
  methods: {
    toggleTest() {
      this.test = !this.test;
    },
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

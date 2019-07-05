<template>
  <div v-bind:id=id>
    <p v-bind:class=myClass >Testing this new component rendering</p>
    <p v-once>My one time bind message is {{ msg }}</p>
    <!-- Raw HTML directive for interpreting HTML -->
    <div v-html=rawHtml></div>
  </div>
</template>


<script>
export default {
  name: 'TestComponent',
  props: {
    myClass: String,
    id: String,
    msg: String,
    rawHtml: String,
  }
}
</script>

<style scoped>
  #passed-id {
    background-color: red;
  }

  .passed-class {
    font-style: italic;
    font-weight: bold;
  }
</style>


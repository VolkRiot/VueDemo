<template>
  <div id="test-root">
    <p>Testing this new component rendering</p>
    <p v-once>My one time bind message is {{ msg }}</p>
    <div v-html=rawHtml></div>
  </div>
</template>


<script>
export default {
  name: 'TestComponent',
  props: {
    msg: String,
    rawHtml: String,
  }
}
</script>

<style scoped>

</style>


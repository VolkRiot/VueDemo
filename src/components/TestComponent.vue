<template>
  <div v-once v-bind:id="id">
    <p v-once v-bind:class="myClass">Testing this new component rendering</p>
    <p v-once>My one time bind message is {{ msg }}</p>
    <!-- Raw HTML directive for interpreting HTML -->
    <div v-html="rawHtml"></div>
    <button v-bind:disabled="isDisabled">Test Button</button>
    <p>{{ reverseMessage.split('').reverse().join('') }}</p>
    <p v-if='ifDirectiveActive'>This text is shown because directive is set to {{ ifDirectiveActive }}</p>
    <a target="_blank" v-bind:href="urlBindingExample">This is an example of a link with a bound property</a>
  </div>
</template>


<script>
export default {
  name: "TestComponent",
  props: {
    myClass: String,
    id: String,
    msg: String,
    rawHtml: String
  },
  data: function() {
    return {
      isDisabled: true,
      ifDirectiveActive: true,
      urlBindingExample: 'http://www.google.com',
      reverseMessage: 'This message can be reversed using JS in mustache syntax',
    };
  }
};
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


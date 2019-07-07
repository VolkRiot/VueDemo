<template>
  <div v-bind:id="id">
    <p v-once v-bind:class="myClass">Testing this new component rendering</p>
    <p>My one time bind message is {{ msg }}</p>
    <!-- Raw HTML directive for interpreting HTML -->
    <div v-html="rawHtml"></div>
    <button v-on:click="toggleReversed">Test Button</button>
    <div v-if='makeReverse'>{{ reverseMessage.split('').reverse().join('') }}</div>
    <div v-else>{{ reverseMessage }}</div>
    <p v-if="ifDirectiveActive">This text is shown because directive is set to {{ ifDirectiveActive }}</p>
    <a target="_blank" :href="urlBindingExample">This is an example of a link with a bound property</a>
    <p>The following is an example of he v-on initiative</p>
    <button v-on:[onAttribute]="increment">Click to increment count!</button>
    <p>{{`Counter: ${count}`}}</p>
    <form v-on:submit.prevent="onSubmit">
      <input type="text" />
    </form>
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
      isDisabled: false,
      onAttribute: "click",
      ifDirectiveActive: true,
      urlBindingExample: "http://www.google.com",
      reverseMessage:
        "This message can be reversed using JS in mustache syntax",
      makeReverse: true,
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count += 1;
    },
    onSubmit() {
      // console.log("Submit called");
    },
    toggleReversed() {
      this.makeReverse = !this.makeReverse;
    }
  },

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


<template>
  <div class="hello">
    <h1> Oh my {{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import "./test.scss";

export default Vue.extend({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
});
</script>

<template>
  <div>
    <span>element ui input number</span>
    <div>val: {{value}}</div>
    <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Switch } from "element-ui";
export default Vue.extend({
  components: {
    [Switch.name]: Switch,
  },
  data() {
    return {
        value: true,
    };
  },
});
</script>

<template>
  <div>
    <span>element ui input number</span>
    <div class="num">Num: {{num}}</div>
    <div class="btn" @click="click">Increment</div>
    <el-input-number v-model="num" @change="handleChange" :min="1" :max="1000000" label="描述文字"></el-input-number>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { InputNumber } from "element-ui";
export default Vue.extend({
  components: {
    [InputNumber.name]: InputNumber
  },
  data() {
    return {
      num: 12345,
    };
  },
  methods: {
    handleChange(value: number) {
      console.log(value);
    },
    click() {
      this.num++;
    }
  }
});
</script>

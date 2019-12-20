<template>
  <div>
    <span>element ui select</span>
    <el-select v-model="value" placeholder="请选择">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Button, Select, Option } from "element-ui";
export default Vue.extend({
  components: {
    [Select.name]: Select,
    [Option.name]: Option,
  },
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        }
      ],
      value: ""
    };
  }
});
</script>

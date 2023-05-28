    <!-- <el-row>
      <el-col :span="8">
        <Input placeholder="Enter text..."
            v-model="text"
            :clearable="true" />
      </el-col>
    </el-row>
    <el-row>
        <el-col :span="8">
          You entered: {{ text }}
        </el-col>
      </el-row> -->

<template>
  <el-input v-model="localValue"
    v-bind="$attrs"
    v-on="$listeners">
    <i slot="suffix"
      class="el-input__icon el-icon-circle-close el-input__clear"
      @click="localValue = ''"
      v-if="clearable && localValue !== ''"></i>
  </el-input>
</template>

<script>
import { Input as ElInput } from 'element-ui';

export default {
  name: "input",
  components: {
    ElInput,
  },

  props: {
    value: { required: true },
    clearable: { type: Boolean, default: false },
  },

  computed: {
    localValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
};
</script>

<style scoped>
.el-input .el-input__clear {
  cursor: pointer;
}
.el-input .el-input__clear:hover {
  color: #878d99;
}
</style>

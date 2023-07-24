<template>
  <ElButton
    :type="type"
    :native-type="nativeType"
    :size="size"
    :icon="icon"
    :round="round"
    :circle="circle"
    :loading="loading"
    :disabled="disabled"
    @click="onClick"
  >
    {{ label }}
  </ElButton>
</template>

<script setup lang="ts">
import { ElButton } from "element-plus";

defineProps({
  label: {
    type: String,
    default: "Primary",
  },
  size: {
    type: String as PropType<InstanceType<typeof ElButton>["$props"]["size"]>,
    default: "default",
    validator: (value: string): boolean =>
      ["default", "small", "large"].includes(value),
  },
  type: {
    type: String as PropType<InstanceType<typeof ElButton>["$props"]["type"]>,
    default: "primary",
    validator: (value: string): boolean =>
      [
        "default",
        "text",
        "success",
        "warning",
        "info",
        "primary",
        "danger",
      ].includes(value),
  },
  nativeType: {
    type: String as PropType<
      InstanceType<typeof ElButton>["$props"]["nativeType"]
    >,
    default: "button",
    validator: (value: string): boolean =>
      ["button", "submit", "reset"].includes(value),
  },
  round: {
    type: Boolean,
    default: false,
  },
  circle: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: "",
  },
  onClick: {
    type: Function as PropType<(event?: MouseEvent) => void>,
    default: _noop,
  },
});
</script>

<style lang="scss" scoped>
.el-button {
  height: 40px;
  padding: 8px 20px;
  cursor: pointer;
}
</style>

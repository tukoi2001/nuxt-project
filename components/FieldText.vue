<template>
  <div class="input">
    <ElFormItem v-if="inForm" :prop="name" :rules="rules">
      <label v-if="label" :for="id" class="input__label">
        {{ label }}
        <span v-if="isShowAsterisk" class="input__label-asterisk">*</span>
      </label>
      <ElInput
        :id="id"
        v-model="modelValue"
        :name="name"
        :label="label"
        :type="type"
        :placeholder="placeholder"
        :maxlength="maxlength"
        :show-word-limit="showWordLimit"
        :autosize="{ minRows, maxRows }"
        :clearable="clearable"
        :show-password="showPassword"
        :disabled="disabled"
      >
        <template v-if="!!$slots.prepend" #prepend>
          <slot name="prepend"></slot>
        </template>
        <template v-if="!!$slots.append" #append>
          <slot name="append"></slot>
        </template>
      </ElInput>
    </ElFormItem>
    <template v-else>
      <label v-if="label" :for="id" class="input__label">
        {{ label }}
        <span v-if="isShowAsterisk" class="input__label-asterisk">*</span>
      </label>
      <ElInput
        :id="id"
        v-model="modelValue"
        :name="name"
        :label="label"
        :type="type"
        :placeholder="placeholder"
        :maxlength="maxlength"
        :show-word-limit="showWordLimit"
        :autosize="{ minRows, maxRows }"
        :clearable="clearable"
        :show-password="showPassword"
        :disabled="disabled"
      >
        <template v-if="!!$slots.prepend" #prepend>
          <slot name="prepend"></slot>
        </template>
        <template v-if="!!$slots.append" #append>
          <slot name="append"></slot>
        </template>
      </ElInput>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ElInput, ElFormItem, useId, FormItemRule } from "element-plus";
import { InputType } from "@/enums/app";

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    default: "name",
  },
  label: {
    type: String,
    default: "",
  },
  type: {
    type: String as PropType<InputType>,
    default: InputType.TEXT,
  },
  maxlength: {
    type: Number,
    default: 256,
  },
  placeholder: {
    type: String,
    default: "",
  },
  showWordLimit: {
    type: Boolean,
    default: false,
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  showPassword: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  isShowAsterisk: {
    type: Boolean,
    default: true,
  },
  inForm: {
    type: Boolean,
    default: true,
  },
  minRows: {
    type: Number,
    default: 2,
  },
  maxRows: {
    type: Number,
    default: 4,
  },
  rules: {
    type: Object as PropType<FormItemRule | FormItemRule[]>,
    default: null,
  },
});
const emit = defineEmits(["update:modelValue"]);

const modelValue = computed<string>({
  get: () => props.modelValue as string,
  set: (value: string) => emit("update:modelValue", value),
});

const id = computed<string>(() => useId().value);
</script>

<style lang="scss" scoped>
.input {
  width: 100%;
  position: relative;

  .el-form-item {
    width: 100%;
  }

  &__label {
    @include style-text-base($primary-color, 16px, 600, 24px);

    &-asterisk {
      @include style-text-base($error-color);
    }
  }

  .el-input {
    margin-top: 8px;
    height: 40px;
    width: 100%;
    position: relative;
  }
}

:deep(.el-input__wrapper) {
  height: 100%;
  width: 100%;

  input {
    height: 32px;
    width: 100%;
  }
}
</style>

<template>
  <ClientOnly>
    <ElDialog
      v-model="modelValue"
      class="dialog"
      :title="title"
      :width="width"
      :close-on-click-modal="closeOnClickModal"
      :show-close="showClose"
      align-center
    >
      <template v-if="!!$slots.header" #header>
        <slot name="header"></slot>
      </template>
      <template #default>
        <slot></slot>
      </template>
      <template #footer>
        <TheButton :label="t('cancel')" @click="onCloseModal" />
        <TheButton
          :label="t('confirm')"
          type="primary"
          :loading="isLoading"
          :disabled="isLoading"
          @click="onConfirmModal"
        />
      </template>
    </ElDialog>
  </ClientOnly>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  title: {
    type: String,
    default: "",
  },
  width: {
    type: String,
    default: "50%",
  },
  closeOnClickModal: {
    type: Boolean,
    default: true,
  },
  showClose: {
    type: Boolean,
    default: true,
  },
  onConfirm: {
    type: Function as PropType<() => Promise<void> | void>,
    default: _noop,
  },
});
const emit = defineEmits(["update:modelValue"]);

const { t } = useI18n();
const isLoading = ref<boolean>(false);

const modelValue = computed<boolean>({
  get: () => props.modelValue as boolean,
  set: (value: boolean) => emit("update:modelValue", value),
});

const onCloseModal = (): void => {
  emit("update:modelValue", false);
};

const onConfirmModal = async (): Promise<void> => {
  try {
    isLoading.value = true;
    await props.onConfirm();
    onCloseModal();
  } catch (error) {
    // Handle error
  } finally {
    isLoading.value = false;
  }
};
</script>

<style lang="scss" scoped></style>

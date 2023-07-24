<template>
  <div class="sign-up">
    <div class="sign-up__wrapper">
      <ElForm class="sign-up">
        <FieldText
          v-model="value"
          label="Email"
          :type="InputType.TEXT"
          placeholder="Email"
        >
          <template #prepend>ab</template>
        </FieldText>
      </ElForm>
    </div>
  </div>
</template>

<script setup lang="ts">
import { InputType } from "@/enums/app";

definePageMeta({
  layout: "auth",
});
useHead({
  title: "Sign Up | Nuxt Project",
});

const value = ref("");
</script>

<style lang="scss" scoped>
.sign-up {
  @include flex-box;
  height: 100%;
  width: 100%;

  &__wrapper {
    width: 100%;
    max-width: 400px;
    background-color: $background-white;
    border-radius: 8px;
    padding: 30px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  }
}
</style>

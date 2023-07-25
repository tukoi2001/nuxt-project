<template>
  <div class="forget-password">
    <div class="forget-password__wrapper">
      <h2 class="forget-password__title">{{ t("password_recovery") }}</h2>
      <ElForm
        ref="formRef"
        :model="formData"
        :rules="rules"
        class="forget-password"
        @submit.prevent="onResetPassword"
      >
        <FormUiFieldText
          v-model="formData.email"
          name="email"
          :label="t('email')"
          :type="InputType.TEXT"
          :placeholder="t('email')"
          clearable
        >
          <template #prepend>
            <ElIcon> <ElIconUser /></ElIcon>
          </template>
        </FormUiFieldText>
        <div class="forget-password__action">
          <ButtonTheButton
            :label="t('reset_password')"
            native-type="submit"
            :disabled="!isValid"
            :loading="isLoading"
          />
        </div>
      </ElForm>
      <NuxtLink to="/sign-in" class="forget-password__redirect">
        {{ t("already_an_account") }}
        <span>{{ t("sign_in") }}</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FormInstance, FormRules } from "element-plus";
import Schema from "async-validator";

import { Auth } from "@/types/auth";
import { InputType } from "@/enums/app";

definePageMeta({
  layout: "auth",
});
useHead({
  title: "Sign In | Nuxt Project",
});
const { t } = useI18n();
const formRef = ref<FormInstance>();
const isLoading = ref<boolean>(false);
const formData = reactive<Auth.ForgetPasswordForm>({
  email: "",
});
const rules = reactive<FormRules<Auth.ForgetPasswordForm>>({
  email: [
    {
      type: "email",
      message: t("email_form", { field: t("email") }),
      trigger: ["blur", "change"],
    },
    {
      required: true,
      message: t("required_form", { field: t("email") }),
      trigger: ["blur", "change"],
    },
  ],
});

const isValid = computed<boolean>(() => {
  let hasError = false;
  new Schema(rules).validate(formData, (errors) => {
    if (errors) {
      hasError = true;
    }
  });
  return !hasError;
});

// eslint-disable-next-line require-await
const onResetPassword = async (): Promise<void> => {
  try {
    isLoading.value = true;
    //
  } catch (error) {
    //
  } finally {
    isLoading.value = false;
  }
};
</script>

<style lang="scss" scoped>
.forget-password {
  height: 100%;
  width: 100%;

  &__title {
    @include style-text-base($primary-color, 22px, bold, 33px);
    margin-bottom: 12px;
  }

  &__wrapper {
    position: absolute;
    top: 50%;
    left: 15%;
    transform: translateY(-50%);
    width: 100%;
    max-width: 400px;
    background-color: $background-white;
    border-radius: 8px;
    padding: 30px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  }

  &__action {
    margin-top: 30px;
  }

  &__bottom {
    @include flex-box(space-between);
  }

  &__redirect {
    @include style-text-base;
    display: block;
    margin-top: 12px;
    text-decoration: none;

    & > span {
      font-size: 16px;
      color: $blue-3;
    }
  }
}
</style>

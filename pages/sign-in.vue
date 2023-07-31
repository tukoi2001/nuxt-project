<template>
  <div class="sign-in">
    <div class="sign-in__wrapper">
      <h2 class="sign-in__title">{{ t("sign_in") }}</h2>
      <ElForm
        ref="formRef"
        :model="formData"
        :rules="rules"
        class="sign-in"
        @submit.prevent="onSignIn"
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
        <FormUiFieldText
          v-model="formData.password"
          name="password"
          :label="t('password')"
          :type="InputType.PASSWORD"
          :placeholder="t('password')"
          show-password
          clearable
        >
          <template #prepend>
            <ElIcon> <ElIconLock /></ElIcon>
          </template>
        </FormUiFieldText>
        <div class="sign-in__action">
          <ButtonTheButton
            :label="t('sign_in')"
            :disabled="!isValid"
            :loading="isLoading"
            native-type="submit"
          />
        </div>
      </ElForm>
      <div class="sign-in__bottom">
        <NuxtLink to="/sign-up" class="sign-in__redirect">
          {{ t("not_a_member") }}
          <span>{{ t("sign_up") }}</span>
        </NuxtLink>
        <NuxtLink to="/forget-password" class="sign-in__redirect">
          {{ t("forgot_password") }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FormInstance, FormRules } from "element-plus";
import Schema from "async-validator";

import { Auth } from "@/types/auth";
import { InputType } from "@/enums/app";
import { showError } from "@/components/Toast";

definePageMeta({
  layout: "auth",
});
useHead({
  title: "Sign In | Nuxt Project",
});
const { t } = useI18n();
const client = useSupabaseAuthClient();
const user = useSupabaseUser();
const formRef = ref<FormInstance>();
const isLoading = ref<boolean>(false);
const formData = reactive<Auth.SignInForm>({
  email: "",
  password: "",
});
const rules = reactive<FormRules<Auth.SignInForm>>({
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
  password: [
    {
      required: true,
      message: t("required_form", { field: t("password") }),
      trigger: ["blur", "change"],
    },
    {
      min: 8,
      message: t("min_length_form", { field: t("password"), min: 8 }),
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

watchEffect(async () => {
  if (user.value) {
    await navigateTo("/");
  }
});

const onSignIn = async (): Promise<void> => {
  try {
    isLoading.value = true;
    const { error } = await client.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });
    if (error) {
      showError(error as unknown as string);
    }
    navigateTo("/");
  } catch (error: any) {
    showError(error.error_description);
  } finally {
    isLoading.value = false;
  }
};
</script>

<style lang="scss" scoped>
.sign-in {
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

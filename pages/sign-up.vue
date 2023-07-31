<template>
  <div class="sign-up">
    <div class="sign-up__wrapper">
      <h2 class="sign-up__title">{{ t("sign_up") }}</h2>
      <ElForm
        ref="formRef"
        :model="formData"
        :rules="rules"
        class="sign-up"
        @submit.prevent="onSignUp"
      >
        <div class="sign-up__item">
          <FormUiFieldText
            v-model="formData.firstName"
            name="firstName"
            :label="t('first_name')"
            :type="InputType.TEXT"
            :placeholder="t('first_name')"
            clearable
          >
            <template #prepend>
              <ElIcon> <ElIconUserFilled /></ElIcon>
            </template>
          </FormUiFieldText>
          <FormUiFieldText
            v-model="formData.lastName"
            name="lastName"
            :label="t('last_name')"
            :type="InputType.TEXT"
            :placeholder="t('last_name')"
            clearable
          >
            <template #prepend>
              <ElIcon> <ElIconUserFilled /></ElIcon>
            </template>
          </FormUiFieldText>
        </div>
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
        <FormUiFieldText
          v-model="formData.confirmPassword"
          name="confirmPassword"
          :label="t('confirm_password')"
          :type="InputType.PASSWORD"
          :placeholder="t('confirm_password')"
          show-password
          clearable
        >
          <template #prepend>
            <ElIcon> <ElIconLock /></ElIcon>
          </template>
        </FormUiFieldText>
        <div class="sign-up__action">
          <ButtonTheButton
            :label="t('sign_up')"
            :disabled="!isValid"
            :loading="isLoading"
            native-type="submit"
          />
        </div>
      </ElForm>
      <NuxtLink to="/sign-in" class="sign-up__redirect">
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
import { showError, showInfo } from "@/components/Toast";

definePageMeta({
  layout: "auth",
});
useHead({
  title: "Sign Up | Nuxt Project",
});
const { t } = useI18n();
const user = useSupabaseUser();
const client = useSupabaseAuthClient();
const formRef = ref<FormInstance>();
const isLoading = ref<boolean>(false);
const formData = reactive<Auth.SignUpForm>({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
});
const rules = reactive<FormRules<Auth.SignUpForm>>({
  firstName: [
    {
      required: true,
      message: t("required_form", { field: t("first_name") }),
      trigger: ["blur", "change"],
    },
    {
      max: 50,
      message: t("max_length_form", { field: t("first_name"), max: 50 }),
      trigger: ["blur", "change"],
    },
    {
      min: 2,
      message: t("min_length_form", { field: t("first_name"), min: 2 }),
      trigger: ["blur", "change"],
    },
  ],
  lastName: [
    {
      required: true,
      message: t("required_form", { field: t("last_name") }),
      trigger: ["blur", "change"],
    },
    {
      max: 50,
      message: t("max_length_form", { field: t("last_name"), max: 50 }),
      trigger: ["blur", "change"],
    },
    {
      min: 2,
      message: t("min_length_form", { field: t("last_name"), min: 2 }),
      trigger: ["blur", "change"],
    },
  ],
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
  confirmPassword: [
    {
      required: true,
      message: t("required_form", { field: t("confirm_password") }),
      trigger: ["blur", "change"],
    },
    {
      min: 8,
      message: t("min_length_form", { field: t("confirm_password"), min: 8 }),
      trigger: ["blur", "change"],
    },
    {
      message: t("password_does_not_match"),
      trigger: ["blur", "change"],
      validator: (_, value: string) => isEqual(formData.password, value),
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

const onSignUp = async (): Promise<void> => {
  try {
    isLoading.value = true;
    await client.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {
        data: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          address: "",
          phoneNumber: "",
          avatar: "",
        },
      },
    });
    showInfo("Please check your email to confirm your account");
    navigateTo("/sign-in");
  } catch (error: any) {
    showError(error);
  } finally {
    isLoading.value = false;
  }
};
</script>

<style lang="scss" scoped>
.sign-up {
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

  &__item {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }

  &__action {
    margin-top: 30px;
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

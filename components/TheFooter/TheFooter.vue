<template>
  <div class="footer">
    <div class="footer__wrapper">
      <div class="footer__top">
        <div class="footer__logo">
          <NuxtLink to="/"><img src="/images/bottom-logo.png" /></NuxtLink>
        </div>
        <div class="footer__menu">
          <div v-for="menu in menus" :key="menu.name">
            <h3 class="footer__title">{{ menu.name }}</h3>
            <div class="footer__menu-item">
              <NuxtLink
                v-for="item in menu.children"
                :key="item.name"
                class="footer__subtitle"
                :to="item.to"
              >
                {{ item.name }}
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="footer__letter">
          <h3 class="footer__title">{{ t("newsletter") }}</h3>
          <div class="footer__des">{{ t("newsletter_des_1") }}</div>
          <div class="footer__form">
            <ElForm
              ref="formRef"
              :model="formData"
              :rules="rules"
              class="forget-password"
              @submit.prevent="onSendNewLetter"
            >
              <FormUiFieldText
                v-model="formData.email"
                name="email"
                :placeholder="t('email')"
                clearable
              />
              <ButtonTheButton
                :label="t('submit')"
                native-type="submit"
                :disabled="!isValid"
                :loading="isLoading"
              />
            </ElForm>
          </div>
          <div class="footer__des">{{ t("newsletter_des_2") }}</div>
        </div>
      </div>
      <div class="footer__bottom">
        © 2022 Pollock LLC. All Rights Reserved. Terms & Conditions. Privacy
        Policy.
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, reactive } from "vue";
import { useI18n } from "vue-i18n";
import { FormInstance, FormRules } from "element-plus";
import Schema from "async-validator";

const { t } = useI18n();
const menus = [
  {
    name: t("services"),
    children: [
      {
        name: "Branding",
        to: "",
      },
      {
        name: "Websites",
        to: "",
      },
      {
        name: "Development",
        to: "",
      },
      {
        name: "Platforms",
        to: "",
      },
    ],
  },
  {
    name: t("contact"),
    children: [
      {
        name: "Help Desk",
        to: "",
      },
      {
        name: "Docs",
        to: "",
      },
      {
        name: "Chat",
        to: "",
      },
      {
        name: "Forum",
        to: "",
      },
    ],
  },
];
const formRef = ref<FormInstance>();
const isLoading = ref<boolean>(false);
const formData = reactive<{ email: string }>({
  email: "",
});
const rules = reactive<FormRules<{ email: string }>>({
  email: [
    {
      type: "email",
      message: t("email_form", { field: t("email") }),
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

const onSendNewLetter = () => {
  //
};
</script>

<style scoped lang="scss">
.footer {
  @include flex-box;
  gap: 20px;
  margin: 0 auto;
  padding: 100px 0 40px;
  background-color: $background-gray;

  &__wrapper {
    width: 100%;
    max-width: 1170px;
  }

  &__top {
    display: grid;
    grid-template-columns: 1fr 3fr 3fr;
    gap: 30px;
    padding-bottom: 100px;
  }

  &__logo {
    img {
      width: 176px;
      height: 44px;
    }
  }

  &__menu {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;

    &-item {
      @include flex-box(flex-start, flex-start);
      flex-direction: column;
      gap: 15px;
    }
  }

  &__title {
    @include style-text-base($text-white-1, 22px, 400, 32px);
    margin-bottom: 22px;
  }

  &__subtitle {
    @include style-text-base($text-white-1, 14px, 400, 24px);
    text-transform: uppercase;
  }

  &__des {
    @include style-text-base($text-white-1, 16px, 400, 26px);
  }

  &__form {
    margin: 25px 0 15px;

    .el-form {
      @include flex-box(center, flex-start);
      gap: 15px;

      .el-button {
        margin-top: 8px;
      }
    }
  }

  &__bottom {
    @include flex-box;
    @include style-text-base($text-white-1, 16px, 400, 26px);
    padding-top: 40px;
    border-top: 1px solid $background-white;
  }
}
</style>

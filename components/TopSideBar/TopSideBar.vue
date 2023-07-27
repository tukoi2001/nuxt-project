<template>
  <div class="nav-bar">
    <div class="nav-bar__wrapper">
      <div class="nav-bar__logo">
        <NuxtLink to="/"><img src="/images/logo.png" /></NuxtLink>
      </div>
      <div class="nav-bar__main">
        <NuxtLink
          v-for="nav in navBars"
          :key="nav.name"
          class="nav-bar__main-item"
          :to="nav.to"
        >
          {{ nav.name }}
        </NuxtLink>
      </div>
      <div class="nav-bar__action">
        <div class="nav-bar__action-item">
          <ElIcon size="24"><ElIconSearch /></ElIcon>
        </div>
        <div class="nav-bar__action-item">
          <ElIcon size="24"><ElIconGoods /></ElIcon>
        </div>
        <div class="nav-bar__action-item">
          <ButtonTheButton :label="t('sign_in')" :on-click="onGoToSignIn" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { navigateTo } from "nuxt/app";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const navBars = [
  {
    name: t("home"),
    to: "/",
  },
  {
    name: t("services"),
    to: "/services",
  },
  {
    name: t("about"),
    to: "/about",
  },
  {
    name: t("pages"),
    to: "/pages",
  },
  {
    name: t("blogs"),
    to: "/blogs",
  },
  {
    name: t("contact"),
    to: "/contact",
  },
];

const onGoToSignIn = (): void => {
  navigateTo("/sign-in");
};
</script>

<style scoped lang="scss">
.nav-bar {
  @include flex-box;
  gap: 20px;
  max-width: 1170px;
  height: 48px;
  margin: 0 auto;
  padding: 16px;

  &__wrapper {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    width: 100%;
  }

  &__logo {
    img {
      width: 176px;
      height: 44px;
    }
  }

  &__main {
    @include flex-box;
    gap: 30px;

    &-item {
      @include style-text-base($secondary-color, 15px, 500, 24px);
      position: relative;
      text-transform: uppercase;
      text-decoration: none;

      &.router-link-active {
        color: $primary-color;

        &::before {
          content: "";
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: $green-4;
        }
      }
    }
  }

  &__action {
    @include flex-box(flex-end);
    gap: 30px;

    &-item {
      cursor: pointer;
    }
  }
}
</style>

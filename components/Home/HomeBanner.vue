<template>
  <div class="banner">
    <div class="banner__wrapper">
      <div class="banner__wrapper-content">
        <h2 class="banner__wrapper-title">
          {{ t("home_title") }}
        </h2>
        <p class="banner__wrapper-description">
          {{ t("home_description") }}
        </p>
        <ButtonTheButton :label="t('get_started')" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<style lang="scss" scoped>
.banner {
  position: relative;
  width: 100%;
  height: 100%;
  max-height: 950px;
  padding: 288px 0;
  background-image: url("/images/home-bg.png");
  background-position: center center;
  background-size: cover;

  &__wrapper {
    max-width: 1170px;
    margin: 0 auto;

    &-content {
      @include flex-box(flex-start, flex-start);
      gap: 50px;
      flex-direction: column;
      max-width: 770px;
    }

    &-title {
      @include style-text-base($text-white, 72px, 500, 78px);
    }

    &-description {
      @include style-text-base($text-white, 22px, 400, 32px);
    }
  }
}
</style>

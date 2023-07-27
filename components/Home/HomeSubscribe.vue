<template>
  <div class="subscribe">
    <div class="subscribe__wrapper">
      <h2 class="subscribe__wrapper-title">
        {{ t("subscribe_title") }}
      </h2>
      <p class="subscribe__wrapper-description">
        {{ t("subscribe_description") }}
      </p>
      <ButtonTheButton :label="t('contact_now')" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<style lang="scss" scoped>
.subscribe {
  padding: 120px 0;
  background-color: $background-white-2;

  &__wrapper {
    @include flex-box();
    flex-direction: column;
    max-width: 1170px;
    margin: 0 auto;

    &-title {
      @include style-text-base($primary-color, 48px, 500, 56px);
      text-align: center;
    }

    &-description {
      @include style-text-base($secondary-color, 22px, 400, 32px);
      text-align: center;
      margin: 30px 0 70px;
    }
  }
}
</style>

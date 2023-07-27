<template>
  <div class="contact-us">
    <div class="contact-us__wrapper">
      <div class="contact-us__item">
        <h2 class="contact-us__wrapper-title">
          {{ t("home_contact_title") }}
        </h2>
        <p class="contact-us__wrapper-description">
          {{ t("home_contact_description") }}
        </p>
        <ButtonTheButton :label="t('explore_now')" />
      </div>
      <div class="contact-us__item">
        <img src="/images/home-contact.png" alt="contact-us" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<style lang="scss" scoped>
.contact-us {
  padding: 120px 0;
  background-color: $background-white-2;

  &__wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 60px;
    max-width: 1170px;
    margin: 0 auto;

    &-title {
      @include style-text-base($primary-color, 36px, 500, 46px);
    }

    &-description {
      @include style-text-base($secondary-color, 18px, 400, 28px);
      margin: 30px 0 70px;
    }
  }

  &__item {
    @include flex-box(center, flex-start);
    flex-direction: column;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>

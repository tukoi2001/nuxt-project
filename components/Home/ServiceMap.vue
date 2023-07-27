<template>
  <div class="service-map">
    <div class="service-map__wrapper">
      <h2 class="service-map__wrapper-title">
        {{ t("home_map_title") }}
      </h2>
      <p class="service-map__wrapper-description">
        {{ t("home_map_description") }}
      </p>
      <div class="service-map__map">
        <img src="/images/home-map.png" alt="service-map" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<style lang="scss" scoped>
.service-map {
  padding: 120px 0;
  background-color: $background-white;

  &__wrapper {
    @include flex-box();
    flex-direction: column;
    max-width: 1170px;
    margin: 0 auto;

    &-title {
      @include style-text-base($primary-color, 64px, 500, 72px);
      text-align: center;
    }

    &-description {
      @include style-text-base($secondary-color, 18px, 400, 28px);
      text-align: center;
      margin: 30px 0 70px;
    }
  }

  &__map {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>

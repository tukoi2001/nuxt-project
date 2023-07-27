<template>
  <div class="our-services">
    <div class="our-services__wrapper">
      <h2 class="our-services__wrapper-title">
        {{ t("our_services_title") }}
      </h2>
      <div class="our-services__content">
        <div class="our-services__content-list">
          <div
            v-for="service in services"
            :key="service.id"
            class="our-services__content-item"
          >
            <div class="service-item__id">{{ service.id }}</div>
            <h3 class="service-item__title">{{ service.title }}</h3>
            <p class="service-item__description">{{ service.description }}</p>
            <ButtonTheButton :label="t('learn_more')" type="default">
              <template #append>
                <ElIcon><ElIconRight /></ElIcon>
              </template>
            </ButtonTheButton>
          </div>
        </div>
        <ButtonTheButton :label="t('our_services')" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const services = [
  {
    id: "01",
    title: "Technical SEO",
    description:
      "The first step is to perform a crawl of your website to ensure your website is indexable and accessible to Google.",
  },
  {
    id: "02",
    title: "Link Building",
    description:
      "The first step is to perform a crawl of your website to ensure your website is indexable and accessible to Google.",
  },
  {
    id: "03",
    title: "Content Planning",
    description:
      "The first step is to perform a crawl of your website to ensure your website is indexable and accessible to Google.",
  },
];
</script>

<style lang="scss" scoped>
.our-services {
  padding: 100px 0 120px;
  background-color: $background-white;

  &__wrapper {
    @include flex-box();
    flex-direction: column;
    gap: 100px;
    max-width: 1170px;
    margin: 0 auto;

    &-title {
      @include style-text-base($primary-color, 64px, 500, 72px);
      max-width: 970px;
      text-align: center;
    }

    &-description {
      @include style-text-base($text-white, 22px, 400, 32px);
    }
  }

  &__content {
    @include flex-box();
    flex-direction: column;
    gap: 70px;

    &-list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
    }

    &-item {
      padding: 50px 35px;
      transition: all 0.3s ease-in-out;

      .service-item {
        &__id {
          @include style-text-base($primary-color, 42px, 500, 50px);
          position: relative;
          margin-bottom: 36px;

          &:after {
            content: "";
            position: absolute;
            top: -5px;
            left: -5px;
            width: 62px;
            height: 62px;
            border-radius: 50%;
            background-color: $purple-1;
            opacity: 0.2;
          }
        }

        &__title {
          @include style-text-base($primary-color, 36px, 500, 46px);
        }

        &__description {
          @include style-text-base($secondary-color, 16px, 400, 26px);
          margin: 30px 0;
        }
      }

      &:hover {
        border-radius: 20px;
        box-shadow: 0px 5px 20px 0px rgba(18, 2, 47, 0.15);
      }
    }
  }
}
</style>

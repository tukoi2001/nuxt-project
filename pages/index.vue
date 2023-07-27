<template>
  <div class="index-page">
    <div class="index-page__title">Home</div>
    <div>{{ t("welcome") }}</div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Home | Nuxt Project",
  // meta: []
});

const { t } = useI18n();
</script>

<style lang="scss" scoped>
.index-page {
}
</style>

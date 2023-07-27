<template>
  <div class="index-page">
    <HomeBanner />
    <HomeOurServices />
    <HomeContactUs />
    <HomeServiceMap />
    <HomeSubscribe />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Home | Nuxt Project",
  // meta: []
});
</script>

<style lang="scss" scoped>
.index-page {
  position: relative;
}
</style>

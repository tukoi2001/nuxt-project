<template>
  <div class="error">
    <h1>Custom error page</h1>
    <div>{{ error.statusMessage }}</div>
    <div>{{ error.statusCode }}</div>
    <ButtonTheButton label="Go to Home" :on-click="handleError" />
  </div>
</template>

<script setup lang="ts">
defineProps({
  error: {
    type: Object,
    default: () => {},
  },
});

const handleError = () => clearError({ redirect: "/" });
</script>

<style lang="scss" scoped>
.error {
  position: relative;
}
</style>

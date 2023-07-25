<template>
  <div class="auth-layout">
    <span class="auth-layout__back" @click="redirectToHome">{{
      t("back_to_home")
    }}</span>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
const redirectToHome = (): void => {
  navigateTo("/");
};
</script>

<style lang="scss" scoped>
.auth-layout {
  width: 100vw;
  height: 100vh;
  position: relative;
  background-image: url("/images/bg.png");
  background-position: center center;
  background-size: cover;
  overflow-y: auto;

  &__back {
    position: absolute;
    display: flex;
    align-items: center;
    gap: 4px;
    top: 30px;
    left: 30px;
    padding: 10px 20px;
    background-color: $background-white;
    border-radius: 20px;
    cursor: pointer;
  }
}
</style>

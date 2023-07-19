<template>
  <div>
    <NavBarExample />
    <div>About Page</div>
    <div>
      <div>{{ t("welcome") }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { t } = useI18n();
</script>

<style lang="scss" scoped></style>
